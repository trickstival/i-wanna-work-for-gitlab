<template>
    <div class="character">
        <img :src="image">
        <baloon v-bind="attrs.baloon" :speech="internalSpeech">
        </baloon>
    </div>
</template>

<script>
import Baloon from './Baloon'
import SceneEntity from './SceneEntity'

// A character is also a scene entity
export const BuildCharacter = ({ id, ...binding }) => {
    let sceneEntity = null

    return {
        goTo (directions) {
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
            internalSpeech: 'Hover Me!'
        }
    },
    computed: {
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
@media screen and (max-width: 768px) {
    .character {
        transform: scale(.7);
    }
}
</style>
