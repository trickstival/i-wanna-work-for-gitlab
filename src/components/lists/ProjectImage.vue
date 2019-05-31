<template>
    <div class="project-image-wrapper">
        <img 
            :src="src" 
            :url="url"
            @click="window.open(props.url)"
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
</style>
