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

export const BuildCharacter = ({ dialogs }) => {
    return {
        currentDialog: '',
        speak (dialog = dialogs[dialogs.indexOf(this.currentDialog) + 1]) {
            console.log('speaking', dialog)
            this.currentDialog = dialog
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
