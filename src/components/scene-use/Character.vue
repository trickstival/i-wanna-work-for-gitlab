<template>
    <div :style="{ pointerEvents: isHidden ? 'none' : '' }" class="character">
        <div :style="{ 
                visibility: isHidden ? 'hidden' : 'initial', 
            }">
            <img :src="image">
            <baloon v-bind="attrs.baloon" :speech="internalSpeech">
            </baloon>
        </div>
        <button
            @click="isHidden = !isHidden"
            class="hide-button">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" height="512" viewBox="0 0 1024 1024" version="1.1"><path fill="white" d="M512.003072 64C264.570234 64 64 264.570234 64 511.991814 64 759.426701 264.570234 960 512.003072 960 759.423629 960 960 759.426701 960 511.991814 960 264.570234 759.423629 64 512.003072 64L512.003072 64 512.003072 64ZM512.003072 900.266189C297.907891 900.266189 123.733811 726.097222 123.733811 511.99079 123.733811 297.905843 297.913005 123.729722 512.003072 123.729722 726.092109 123.729722 900.265165 297.905843 900.265165 511.99079 900.265165 726.097222 726.092109 900.266189 512.003072 900.266189L512.003072 900.266189 512.003072 900.266189ZM556.848186 511.044454 695.21799 374.180602C707.790464 361.767731 707.888678 341.507936 695.471712 328.936493 683.053728 316.356858 662.765286 316.259667 650.222483 328.676634L511.663411 465.703149 375.219014 328.837254C362.70384 316.328211 342.478829 316.259667 329.968768 328.774848 317.455635 341.253197 317.424941 361.507872 329.906355 374.023053L466.161485 510.692518 328.78201 646.594688C316.209536 659.047462 316.111322 679.267354 328.528288 691.846989 334.798662 698.180794 343.02617 701.346163 351.281293 701.346163 359.406496 701.346163 367.536806 698.245248 373.776493 692.096614L511.345235 556.038944 650.031174 695.174003C656.271878 701.444378 664.465626 704.577011 672.688013 704.577011 680.88073 704.577011 689.039693 701.443354 695.280403 695.237434 707.790464 682.757037 707.824224 662.531002 695.343834 649.988205L556.848186 511.044454 556.848186 511.044454Z"/></svg>
        </button>
    </div>
</template>

<script>
import Baloon from './Baloon'
import SceneEntity from './SceneEntity'

// A character is also a scene entity
export const BuildCharacter = ({ id, ...binding }) => {
    let sceneEntity = null

    return {
        goTo (directions = {}) {
            sceneEntity.moveTo(directions)
        },
        speak (dialog) {
            return (scene) => {
                sceneEntity.componentInstance.internalSpeech = dialog
                scene.pause()
            }
        },
        getComponent () {
            return comp
        },
        getEntity () {
            if (!sceneEntity) {
                sceneEntity = SceneEntity(id, this)
            }
            sceneEntity.bind(binding)
            return sceneEntity
        }
    }
}

const comp = {
    components: {
        Baloon
    },
    props: {
        image: {
            type: String
        }
    },
    data () {
        return {
            speechFrameFragment: 'Hover Me!',
            isHidden: false,
            lastTypingCb: null
        }
    },
    methods: {
        scheduleTyping (value) {
            this.speechFrameFragment = ''
                let idx = 0
                const cb = this.lastTypingCb = () => {
                    const wasCancelled = cb !== this.lastTypingCb
                    if (this.speechFrameFragment === value || wasCancelled) {
                        return
                    }

                    this.speechFrameFragment += value[idx]
                    idx++
                    requestAnimationFrame(cb)
                }

                cb()
        }
    },
    computed: {
        internalSpeech: {
            get () {
                return this.speechFrameFragment
            },
            set (value) {
                this.scheduleTyping(value)
            }
        },
        attrs () {
            const baloon = Object.assign(
                { 
                    style: {
                        top: '-50px',
                        right: '-100px',
                        transform: 'rotate(5deg)'
                    } 
                }, 
                this.$attrs.baloon
            )
            return {
                ...this.$attrs,
                baloon
            }
        }
    }
}

export default comp
</script>

<style lang="scss">
.character {
    transition: all ease 1s;
    z-index: 2;
}
.hide-button {
    position: absolute;
    bottom: 10px;
    left: 0;
    border-radius: 100%;
    border: none;
    width: 40px;
    height: 40px;
    pointer-events: auto;
    outline: none;
    background-color: red;
    color: white;
    padding: 0;
    & > .icon {
        width: 40px;
        height: 40px;
    }
}
@media screen and (max-width: 768px) {
    .character {
        transform: scale(.7);
    }
    .character.side-char {
        bottom: -50px;
        left: -10%!important;
    }
}
</style>
