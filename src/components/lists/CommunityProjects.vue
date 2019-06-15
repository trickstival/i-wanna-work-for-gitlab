<template>
<div class="centered">
    <section class="community-projects">
        <a
            v-for="project in $options.communityProjects"
            :title="project.title"
            :key="project.title"
            :href="project.goesTo"
            target="_blank"
        >
            <img
                :src="project.logo"
            >
        </a>
    </section>
</div>
</template>

<script>
// Everytime I write this I remember that I have to
// remove this implementer thing
export const CommunityProjectsImplementer = {
    getComponent () {
        return CommunityProjects
    }
}
const CommunityProjects = {
    communityProjects: [
        {
            logo: require('@/assets/JSSP.png'),
            title: 'JSSP',
            goesTo: 'https://www.youtube.com/watch?v=S_Dm-3F6KaE'
        },
        {
            logo: require('@/assets/vuejs-summit.png'),
            title: 'Vue.js Summit',
            goesTo: 'https://www.infoq.com/br/presentations/ja-pensou-em-usar-um-baas-firebase-firestore-vuejs/?itm_source=presentations_about_vuejs-summit&itm_medium=link&itm_campaign=vuejs-summit'
        },
        {
            logo: require('@/assets/curitibajs.jpeg'),
            title: 'Curitiba.js',
            goesTo: 'https://www.meetup.com/pt-BR/curitibajs/'
        }
    ]
}
export default CommunityProjects
</script>

<style lang="scss" scoped>
.centered {
    width: 50%;
    height: 100%;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
        width: 100%;
        left: 0;
        padding-top: 30px;
        align-items: flex-start;
    }
}
.community-projects {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr 1fr;
    & > a > img {
        background-color: #fff;
        width: 130px;
        height: 130px;
        transition: transform ease .3s;
        border-radius: 4px;
        &:hover {
            transform: scale(1.06);
        }
        @media screen and (max-width: 768px) {
            width: 100px;
            height: 100px;
            &:hover {
                transform: none;
            }
        }
    }
}
</style>
