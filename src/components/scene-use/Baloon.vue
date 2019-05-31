<template>
    <div :style="currentStyle" class="baloon">
        {{ speech }}
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
        },
        width: {
            type: String,
            default: '200px'
        },
        height: {
            type: String,
            default: '120px'
        },
        speech: {
            type: String
        }
    },
    computed: {
        recommendedFontsize () {
            const length = this.speech.length
            if (length < 10) {
                return '20px'
            }
            if (length < 90) {
                return '19px'
            }
            return '17px'
        },
        currentStyle () {
            return {
                fontSize: this.recommendedFontsize,
                backgroundColor: this.bgColor,
                color: this.color,
                width: this.width,
                height: this.height
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.baloon {
    padding: 10px;
    position: absolute;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    &::before {
        mix-blend-mode: color-burn;
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
