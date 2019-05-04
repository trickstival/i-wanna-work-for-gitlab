<template>
    <nav class="main-menu">
        <a href="#">Product</a>
        <a href="#">Pricing</a>
        <a href="What I can do"></a>
        <a href="#">Contact me!</a>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main-menu {
    text-align: right;
    & > a {
        margin-left: 5px;
    }
}
</style>
