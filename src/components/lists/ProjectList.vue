<template>
    <section class="project-list">
        <ul>
            <li v-for="project in projects">
                <a 
                    :href="project.url"
                    target="_blank"
                >
                    {{ project.title }}
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
// TODO: remove this getComponet rule. It's annoying
export const ProjectListImplementer = {
    getComponent () {
        return ProjectList
    }
}
const ProjectList = {
    props: {
        projects: {
            type: Array,
            required: true
        }
    }
}
export default ProjectList
</script>

<style lang="scss" scoped>
// Internal SCSS
.project-list {
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    width: 100%;

    & > ul {
        list-style: none;
        & > li {
            & > a {
                color: white;
            }
            font-size: 30px;
            // text-align: left;
            padding: 0;
        }
    }
}
</style>
