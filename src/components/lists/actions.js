import SceneEntity from '@/components/scene-use/SceneEntity'
import thePirateImage from '@/assets/the-pirate-example.jpg'
import jsCaptureTheFrameworksImage from '@/assets/js-capture.gif'

prefetchImages([
    thePirateImage,
    jsCaptureTheFrameworksImage
])

const image = (id, src, url) => {
    return SceneEntity(id, {
        getComponent () {
            return {
                name: 'imageEntity',
                data () {
                    return {
                        src,
                        url
                    }
                },
                render (h) {
                    return h('img', {
                        attrs: { src: this.src },
                        style: {
                            cursor: 'pointer'
                        },
                        on: {
                            click: () => window.open(this.url)
                        }
                    })
                }
            }
        }
    })
}

// Open-source project image sources

// if a function is yielded, it should wait for the user to click on "Go Next"
export default async function* (scene) {
    // Intro
    const patrick = scene.get('patrick')
    yield patrick.speak('Hey guys!')
    yield patrick.speak(`I'm Patrick, a Web Developer who really wanna work for you.`)
    yield patrick.speak('Let me show you some of my open-source projects')

    // -- Show Projects --
    patrick.goTo({ left: 0 })

    // the-pirate
    const entityImage = image('the-pirate', thePirateImage, 'https://github.com/trickstival/Javascript-Capture-The-Frameworks')
    await scene.addEntity(entityImage)
    entityImage.moveTo({ top: '25%', right: '15px' })
    yield patrick.speak('This is how you use my lib called "the-pirate"')

    // JS Capture the frameworks
    entityImage.componentInstance.src = jsCaptureTheFrameworksImage
    entityImage.componentInstance.url = 'https://github.com/trickstival/Javascript-Capture-The-Frameworks'
    yield patrick.speak('JS Capture the Frameworks is a game I made based on pacman with divs!')

    yield patrick.speak('This other "project" is just shrek spinning.. HEHE')
}

function prefetchImages (images) {
    for (const image of images) {
        const link = document.createElement('link')
        link.setAttribute('rel', 'prefetch')
        link.setAttribute('as', 'image')
        link.setAttribute('href', image)
        document.head.appendChild(link)
    }
}
