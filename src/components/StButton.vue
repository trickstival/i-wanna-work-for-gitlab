<template>
    <button
        v-on="$listeners"
        :style="{ backgroundColor: bgColor, color }" 
        class="btn"
    >
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: '#fff'
        },
        bgColor: {
            type: String,
            default: '#e65328'
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    border: none;
    padding: 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    &:hover {
        filter: brightness(90%);
    }
    & > a {
        text-decoration: none;
        color: inherit;
    }
}
</style>
