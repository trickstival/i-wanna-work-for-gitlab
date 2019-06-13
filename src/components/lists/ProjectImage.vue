<template>
    <div class="project-image-wrapper">
        <img 
            :src="src" 
            :url="url"
            @click="open"
            class="project-image"
        >
    </div>
    
</template>

<script>
export default {
    name: 'imageEntity',
    props: {
        src: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    methods: {
        open () {
            window.open(this.url)
        }
    }
}
</script>

<style lang="scss" scoped>
    .project-image-wrapper {
        right: 0;
        height: 100%;
        display: flex;
    }
    .project-image {
        cursor: pointer;
    }
    @media screen and (max-width: 768px) {
        .project-image-wrapper {
            width: 100%;
        }
    }
</style>
