<template>
    <div :class="{ 'scene-video': video }" class="scene">
        <play-button-overlay @click="start" />
        <slot />
    </div>
</template>

<script>
import PlayButtonOverlay from '@/components/scene-use/PlayButtonOverlay'
export default {
    props: {
        video: {
            default: '',
            type: String
        }
    },
    components: {
        PlayButtonOverlay
    },
    methods: {
        start () {
            alert('started')
        }
    }
}
</script>

<style lang="scss" scoped>
.play-overlay {
    display: flex;
    opacity: 0;
    z-index: 1;
}
.scene {
    height: 100%;
}
.scene-video:hover > .play-overlay {
    opacity: 1;
}
</style>
