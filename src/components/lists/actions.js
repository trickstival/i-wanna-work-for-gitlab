import SceneEntity from '@/components/scene-use/SceneEntity'
import thePirateImage from '@/assets/the-pirate-example.jpg'
import jsCaptureTheFrameworksImage from '@/assets/js-capture.gif'
import cff from '@/assets/CFF.gif'

import ProjectImage from './ProjectImage'

prefetchImages([
    thePirateImage,
    jsCaptureTheFrameworksImage,
    cff
])

const image = (id, src, url) => {
    const entity = SceneEntity(id, {
        getComponent () {
            return ProjectImage
            // return {
            //     name: 'imageEntity',
            //     data () {
            //         return {
            //             src,
            //             url
            //         }
            //     },
            //     render (h) {
            //         return h('img', {
            //             attrs: { src: this.src },
            //             style: {
            //                 cursor: 'pointer'
            //             },
            //             on: {
            //                 click: () => window.open(this.url)
            //             }
            //         })
            //     }
        }
    })
    entity.bind({ src, url })
    return entity
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

    const entityImage = image('the-pirate', thePirateImage, 'https://github.com/trickstival/Javascript-Capture-The-Frameworks')
    const { binding } = entityImage

    // the-pirate
    await scene.addEntity(entityImage)
    yield patrick.speak('This is how you use my lib called "the-pirate"')

    // JS Capture the frameworks
    binding.src = jsCaptureTheFrameworksImage
    binding.url = 'https://github.com/trickstival/Javascript-Capture-The-Frameworks'
    yield patrick.speak('JS Capture the Frameworks is a game I made based on pacman with divs!')

    // Code For Facebook
    binding.src = cff
    yield patrick.speak('Code for Facebook is a chrome extension that provides markdown highlighting for facebook posts!')

    // yield patrick.speak('This other "project" is just shrek spinning.. HEHE')
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
