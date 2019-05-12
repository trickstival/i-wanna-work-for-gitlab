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

const CharacterComponent = {
    functional: true,
    render (h, { props }) {

        const baloonDescriptor = {
            style: {
                top: '-50px',
                right: '-100px',
                transform: 'rotate(5deg)'
            }
        }

        return h('div', {
            class: 'character'
        }, [
            h('img', { attrs: { src: props.image } }),
            h(Baloon, baloonDescriptor, [this.$slots.default || props.speech])
        ])
    },
    components: {
        Baloon
    },
    props: {
        image: {
            type: String
        },
        speech: {
            type: String
        }
    }
}

export const BuildCharacter = () => {
    let speechCount = 0
    let boundAct = null
    return {
        currentDialog: '',
        sceneEntity: SceneEntity(),
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
            return CharacterComponent
        },
        getEntity () {
            return this.sceneEntity
        }
    }
}

export default {
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
</script>

<style>

</style>
