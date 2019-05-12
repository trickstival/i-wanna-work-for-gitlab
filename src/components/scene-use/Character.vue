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

export const BuildCharacter = () => {
    let speechCount = 0
    return {
        currentDialog: '',
        boundAct: null,
        speak (dialog) {
            const speakAction = () => {
                this.currentDialog = dialog
                speechCount++
            }
            if (this.boundAct && speechCount) {
                this.boundAct.appendAction(speakAction)
                return
            }
            speakAction()
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
