<template>
    <scene>
        <img class="me-vue" src="@/assets/me_vuejs.png">
        <play-button-overlay class="play-button" />
        <div class="baloon">
            <span class="bla first-bla">PLS,</span>
            <span class="bla second-bla">HOVER,</span>
            <span class="bla third-bla">ME.</span>
        </div>
    </scene>
</template>

<script>
import Scene from '@/components/Scene'
export default {
    components: {
        Scene
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
    border-radius: 20px;
    background-color: #fff;
    position: absolute;
    right: 22%;
    top: 5%;
    color: #000;
    transform: rotate(5deg);
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

.scene::before {
    content: '';
    position: absolute;
    margin: auto;
    display: block;
    background-color: red;
    width: 20px;
    height: 20px;
}
</style>
