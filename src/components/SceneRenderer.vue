<template>
    <scene
        :initial-entities="sceneEntities"
        :actions="actions">
    </scene>
</template>

<script>
import Scene from './scene-use/Scene'
import Character from './scene-use/Character'
import { characters, actions } from './lists'
import Baloon from './scene-use/Baloon'

export default {
    components: {
        Scene,
        Baloon,
        Character
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

.bla {
    font-family: 'ZCOOL KuaiLe', cursive;
    position: absolute;
    font-size: 25px;
}
.first-bla {
    left: 30px;
    top: 20px;
}

.second-bla {
    top: 40%;
    left: 40%;
}

.third-bla {
    left: 70%;
    top: 60%;
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
        left: 1%;
        top: 25%;
    }
    .baloon {
        transform: scale(.8);
        right: -60px;
    }
}
</style>
