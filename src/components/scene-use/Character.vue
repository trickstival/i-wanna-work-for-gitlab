<template>
    <div class="character">
        <img :src="image">
        <baloon v-bind="attrs.baloon">
            <slot />
        </baloon>
    </div>
</template>

<script>
import Baloon from './Baloon'
import SceneEntity from './SceneEntity'

export const BuildCharacter = () => {
    let speechCount = 0
    let boundAct = null
    let sceneEntity = null

    return {
        currentDialog: '',
        set boundAct (act) {
            sceneEntity.boundAct = boundAct = act
        },
        speak (dialog) {
            const speakAction = () => {
                this.currentDialog = dialog
                speechCount++
            }
            if (boundAct && speechCount) {
                boundAct.appendAction(speakAction)
                return
            }
            speakAction()
        },
        getComponent () {
            return comp
        },
        getEntity () {
            if (!sceneEntity) {
                sceneEntity = SceneEntity(this)
            }
            sceneEntity.binding = {
                image: require('@/assets/characters/me_vuejs.png')
            }
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

<style>

</style>
