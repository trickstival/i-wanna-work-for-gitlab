<template>
    <nav class="main-menu">
        <a
            v-for="network in $options.logos"
            :key="network.title"
            :title="network.title"
            :href="network.goesTo"
            target="_blank"
        >
            <img
                :src="network.img"
            >
        </a>
    </nav>
</template>

<script>
export default {
    logos: [
        {
            title: 'Gitlab',
            goesTo: 'https://gitlab.com/trickstival',
            img: require('@/assets/gitlab.png')
        },
        {
            title: 'Github',
            goesTo: 'https://github.com/trickstival',
            img: require('@/assets/github.png')
        },
        {
            title: 'Twitter',
            goesTo: 'https://twitter.com/stival_patrick',
            img: require('@/assets/twitter.svg')
        }
    ]
}
</script>

<style lang="scss" scoped>
.main-menu {
    margin-top: 5px;
    & > a > img {
        margin-left: 5px;
        width: 30px;
        height: 30px;
        border-radius: 4px;
    }
}
</style>
