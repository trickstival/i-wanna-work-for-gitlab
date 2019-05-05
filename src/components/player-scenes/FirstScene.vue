<template>
    <scene video="@/assets/vuejs_summit.mp4">
        <div class="me-vue">
            <img src="@/assets/me_vuejs.png">
            <baloon>
                <span class="bla first-bla">PLS,</span>
                <span class="bla second-bla">HOVER,</span>
                <span class="bla third-bla">ME.</span>
            </baloon>
        </div>
    </scene>
</template>

<script>
import Scene from '@/components/Scene'
import Baloon from '@/components/scene-use/Baloon'

export default {
    components: {
        Scene,
        Baloon
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe');
.me-vue {
    position: absolute;
    left: 35%;
    top: 15%;
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

.baloon {
    width: 200px;
    height: 120px;
    position: absolute;
    top: -50px;
    right: -100px;
    transform: rotate(5deg);
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
