<template>
    <section class="story-player">
        <scene-renderer />
    </section>
</template>

<script>
import SceneRenderer from './SceneRenderer'
export default {
    props: {
        value: {
            default: 0,
            type: Number
        }
    },
    components: {
        SceneRenderer
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.story-player {
    border: 1px solid #ffffff20;
    height: 400px;
    position: relative;
}
</style>
