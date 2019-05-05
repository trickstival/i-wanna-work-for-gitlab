<template>
    <section class="story-player">
        <component :is="currentSceneComponent" />
        <div class="scene-selectors">
            <span
                v-for="(scene, idx) in scenes"
                :key="idx"
                :class="{ selected: value === idx }"
                @click="$emit('input', idx)"
                class="scene-selector">
            </span>
        </div>
    </section>
</template>

<script>
import scenes from './player-scenes/'
export default {
    props: {
        value: {
            default: 0,
            type: Number
        }
    },
    data () {
        return {
            scenes
        }
    },
    computed: {
        currentSceneComponent () {
            return this.scenes[this.value]
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
.scene-selectors {
    height: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
}
.scene-selector {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" version="1.1"><circle fill="white" cx="60" cy="60" r="50"/></svg>');
    display: inline-block;
    $circleSize: 10px;
    width: $circleSize;
    height: $circleSize;
    cursor: pointer;

    &:hover, &.selected {
        filter: brightness(60%);
    }
}
</style>
