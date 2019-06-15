<template>
    <div :style="{ pointerEvents: isHidden ? 'none' : '' }" class="character">
        <div :style="{ 
                opacity: isHidden ? 0 : 1
            }"
            class="char-content"
        >
            <img :src="image" class="char-image">
            <baloon v-bind="attrs.baloon" :speech="internalSpeech">
            </baloon>
        </div>
        <button
            @click="isHidden = !isHidden"
            class="hide-button">
            <svg v-if="!isHidden" class="icon" fill="#fff" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
                <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3     214.2,178.5   "/>
            </svg>
            <svg v-else viewBox="0 0 488.85 488.85" class="icon" fill="#fff" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" style="enable-background:new 0 0 357 357;" xml:space="preserve">
                <path fill="white"  d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2
                    s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025
                    c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3
                    C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7
                    c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z"/>
            </svg>
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
        scheduleTyping (value, framerate = 2) {
            framerate--
            this.isHidden = false
            this.speechFrameFragment = ''
            let idx = 0
            let frameCount = 0
            const cb = this.lastTypingCb = () => {
                const wasCancelled = cb !== this.lastTypingCb
                if (this.speechFrameFragment.length >= value.length || wasCancelled) {
                    return
                }

                if (frameCount === framerate) {
                    this.speechFrameFragment += value[idx]
                    idx++
                    frameCount = 0
                } else {
                    frameCount++
                }
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

<style lang="scss" scoped>
.character {
    transition: bottom 1s ease, left 1s ease, right 1s ease, top 1s ease;
    z-index: 2;
}
.char-content {
    transition: opacity ease 1s;
}
.hide-button {
    position: absolute;
    bottom: 20px;
    left: 20px;
    border-radius: 100%;
    border: none;
    width: 30px;
    height: 30px;
    pointer-events: auto;
    outline: none;
    background-color: #f43735;
    color: white;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 25px;
    height: 25px;
    & > .icon {
        width: 13px;
        height: 13px;
    }
}
@media screen and (max-width: 768px) {
    .character {
        height: 150px;
        width: 150px;
    }
    .char-image {
        width: 100%;
        height: 100%;
    }
    .character.side-char {
        top: initial;
        bottom: 0px;
    }
    .hide-button {
        bottom: 0;
        left: 0;
    }
}
</style>
