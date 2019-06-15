<template>
    <div :style="currentStyle" class="baloon">
        <span class="speech-text">
            {{ speech }}
        </span>
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
        speech: {
            type: String
        }
    },
    data () {
        return {
            windowWidthWeight: 1
        }
    },
    methods: {
        adjustWeight () {
            const { clientWidth } = document.documentElement
            if (clientWidth > 768) {
                this.windowWidthWeight = 1
                return
            }
            this.windowWidthWeight = .80
        }
    },
    computed: {
        recommendedFontsize () {
            const length = this.speech.length
            if (length < 10) {
                return 20
            }
            if (length < 90) {
                return 19
            }
            return 17
        },
        currentStyle () {
            return {
                fontSize: this.recommendedFontsize * this.windowWidthWeight + 'px',
                backgroundColor: this.bgColor,
                color: this.color
            }
        }
    },
    created () {
        this.adjustWeight()
    }
}
</script>

<style lang="scss" scoped>
.baloon {
    padding: 2px;
    position: absolute;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    height: 120px;
    width: 200px;
    text-overflow: ellipsis;
    &::before {
        mix-blend-mode: color-burn;
        content: '';
        position: absolute;
        bottom: -24%;
        left: 20%;
        border: 51px solid transparent;
        border-top-color: white;
        border-bottom: 0;
        border-left: 0;
    }

    @media screen and (max-width: 768px) {
        width: 150px;
        height: 100px;
        // margin-right: -100px;
    }
}
</style>
