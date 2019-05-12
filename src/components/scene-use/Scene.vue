<template>
    <div class="scene scene-video">
        <play-button-overlay v-if="!started" @click="start" />
        <component v-for="entity in entities" :is="entity.component" />
        <slot />
        <div @click="$emit('next')" class="scene-selector">
            Go Next
            <span
                @click="$emit('input', idx)"
                class="scene-selector-arrow">
            </span>
        </div>
    </div>
</template>

<script>
import PlayButtonOverlay from './PlayButtonOverlay'

export default {
    components: {
        PlayButtonOverlay
    },
    props: {
        started: {
            default: false
        },
        entities: {
            default: [],
            type: Array
        }
    },
    methods: {
        start () {
            this.$emit('update:started', true)
            this.$emit('start')
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

.scene-selector {
    cursor: pointer;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    bottom: 0;
    padding: 10px;
    height: 45px;
    width: 100%;
    &:hover {
        filter: brightness(60%);
    }
}

.scene-selector-arrow {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><g><path fill="%23FFF" d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5   c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>');
    display: inline-block;
    $nextSize: 20px;
    width: $nextSize;
    height: $nextSize;
}
</style>
