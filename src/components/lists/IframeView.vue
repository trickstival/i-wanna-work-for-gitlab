<template>
    <iframe
        :src="src"
        class="iframe-view"
    >

    </iframe>
</template>

<script>
export const IframeViewImplementer = {
    getComponent () {
        return IframeView
    }
}
const IframeView = {
    props: {
        src: {
            type: String,
            required: true,
            default: ''
        }
    }
}
export default IframeView
</script>

<style lang="scss" scoped>
.iframe-view {
    border: none;
}
@media screen and (max-width: 768px) {
    .iframe-view {
        width: 100%!important;
    }
}
</style>
