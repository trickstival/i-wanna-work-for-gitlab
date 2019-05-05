<template>
    <div :style="{ backgroundColor: bgColor, color }" class="baloon">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        bgColor: {
            default: '#fff',
            type: String
        },
        color: {
            default: '#000',
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
.baloon {
    border-radius: 20px;
    &::before {
        content: '';
        position: absolute;
        bottom: -24%;
        left: 40px;
        border: 51px solid transparent;
        border-top-color: white;
        border-bottom: 0;
        border-left: 0;
    }
}
</style>
