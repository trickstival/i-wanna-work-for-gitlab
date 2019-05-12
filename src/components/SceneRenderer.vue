<template>
    <scene
        :started.sync="isFirstSceneRunning"
        @next="next">
        <character
            :class="{ jingling: !currentAct }"
            :image="require('@/assets/characters/me_vuejs.png')" 
            class="me-vue">
            <div v-if="isFirstSceneRunning" class="default-dialog">
                {{ characters.ME.currentDialog }}
            </div>
            <template v-else>
                <span class="bla first-bla">PLS,</span>
                <span class="bla second-bla">HOVER,</span>
                <span class="bla third-bla">ME.</span>
            </template>
        </character>
    </scene>
</template>

<script>
import Scene, { Act } from './scene-use/Scene'
import Character, { BuildCharacter } from './scene-use/Character'
import Baloon from './scene-use/Baloon'

export default {
    components: {
        Scene,
        Baloon,
        Character
    },
    data () {
        return {
            characters: {
                ME: BuildCharacter()
            },
            currentAct: null
        }
    },
    computed: {
        isFirstSceneRunning: {
            set (val) {
                if (val) {
                    this.start()
                    return
                }
                this.currentAct = null
            },
            get () {
                return this.currentAct
            }
        },
        firstScene () {
            const { ME } = this.characters
            return [
                (act) => {
                    act.addCharacter(ME)
                    ME.speak(`Hello, I'm Patrick`)
                    ME.speak(`I'm here to show some of the stuff I can do with JS`)
                    ME.speak(`First, let me tell ya about my first project`)
                    ME.speak(`It all started in 2017, with this project called ScoutUp!`)

                },
                (act) => ME.speak(`I'm here to show some of the stuff I can do with JS`)
            ].map(exec => Act(this.firstScene, exec))
        }
    },
    methods: {
        start () {
            this.next()
        },
        next () {
            if (this.currentAct && !this.currentAct.done) {
                this.currentAct.resume()
                return
            }
            const { firstScene } = this
            this.currentAct = firstScene[firstScene.indexOf(this.currentAct) + 1]

            if (!this.currentAct) {
                return
            }
            return this.currentAct.start()
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe');
.me-vue {
    position: absolute;
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
