<template>
    <div class="scene">
        <slot />
    </div>
</template>

<script>
import PlayButtonOverlay from '@/components/PlayButtonOverlay'
export default {
    components: {
        PlayButtonOverlay
    }
}
</script>

<style lang="scss" scoped>
.scene {
    height: 100%;
}
</style>
