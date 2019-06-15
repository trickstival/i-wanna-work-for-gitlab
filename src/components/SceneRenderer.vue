<template>
    <scene
        :initial-entities="sceneEntities"
        :actions="actions">
    </scene>
</template>

<script>
import Scene from './scene-use/Scene'
import { characters, actions } from './lists'

export default {
    components: {
        Scene
    },
    data () {
        return {
            actions,
            currentAct: null
        }
    },
    computed: {
        sceneEntities () {
            return [
                ...characters
            ].map(char => char.getEntity())
        }
    },
    methods: {

    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe');
.me-vue {
    left: 35%;
    top: 20%;
}

.jingling {
    animation: 1s infinite alternate jingle;
    animation-timing-function: ease-in;
}

@keyframes jingle {
    0% {
        transform: rotate(5deg);
    }
    100% {
        transform: rotate(-5deg);
    }
}

.default-dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 20px;
}

@media screen and (max-width: 768px) {
    .me-vue {
        &:not(.side-char) {
            left: 50%;
            margin-left: -100px;
        }
        top: 35%;
    }
    .baloon {
        transform: scale(.8);
        right: -60px;
    }
}
</style>
