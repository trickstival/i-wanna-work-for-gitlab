<template>
    <section class="main-title">
        <img src="@/assets/hero-bg-left.svg" class="hero-bg hero-bg-left">
        <div class="hero-content">
            <h1 class="i-want-that">
                I want to work for Gitlab
            </h1>
            <dfn class="description">
                Patrick is a single developer for the entire front-end development lifecycle.
                From project planning and source code management to CI/CD, refactoring, and writing tests.
            </dfn>
            <p class="team-work">
                <i>
                    *Love to work with other people.
                </i>
            </p>
            <div class="btn-toolbar">
                <a :href="resume" download>
                    <st-button>
                        Download Resume
                    </st-button>
                </a>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/trickstival/"
                >
                    <st-button color="#e65328" bg-color="#fff">
                        Contact Me
                    </st-button>
                </a>
            </div>
            <story-player />
            <the-nav />
        </div>
        <img src="@/assets/hero-bg-right.svg" class="hero-bg hero-bg-right">
    </section>
</template>

<script>
import StButton from '@/components/StButton'
import StoryPlayer from '@/components/StoryPlayer'
import TheNav from '@/components/TheNav'
export default {
    components: {
        StButton,
        StoryPlayer,
        TheNav
    },
    data () {
        return {
            resume: require('@/assets/Curriculum.pdf')
        }
    }
}
</script>

<style lang="scss" scoped>
.i-want-that {
    font-size: 82px;
}
.description {
    font-style: normal;
    font-size: 24px;
}
.hero-content {
    max-width: 1000px;
    padding: 10px;
}
.hero-bg {
    width: 25%;
    position: absolute;
}

.hero-bg-left {
    left: 0;
}

.hero-bg-right {
    right: 20px;
}

.team-work {
    margin: 35px 0;
}

.main-title {
    display: flex;
    justify-content: center;
    text-align: center;
    min-height: 100vh;
}

.btn-toolbar {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    & > a {
        margin-right: 15px;
    }
}
</style>
