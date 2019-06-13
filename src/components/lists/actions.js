// List components
import SceneEntity from '@/components/scene-use/SceneEntity'
import { CodeSnippetImplementer } from './CodeSnippet'
import { IframeViewImplementer } from './IframeView'
import { ProjectListImplementer } from './ProjectList'

// assets
import cff from '@/assets/CFF.gif'

import ProjectImage from './ProjectImage'

prefetchImages([
    cff
])

const image = (id, src, url) => {
    const entity = SceneEntity(id, {
        getComponent () {
            return ProjectImage
        }
    })
    entity.bind({ src, url })
    return entity
}

const thePirateExampleCode = `
// Check it out at https://github.com/the-pirate/the-pirate-utils
import * as pirate from 'the-pirate'

// General functions
pirate.truthyJoin(['Hey', undefined, 'You'], ', ') // 'Hey, You'
pirate.any(false, true, false) // true
pirate.any(false, false) // false

pirate.maybe({}, 'item.price') // undefined
pirate.maybe({ item: { price: '$10.00' } }, 'item.price') // '$10.00'
`

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
    const codeSnippet = SceneEntity('snippet', CodeSnippetImplementer)
    codeSnippet.bind({ code: thePirateExampleCode })

    await scene.addEntity(codeSnippet)
    codeSnippet.moveTo({ right: '5px' })
    yield patrick.speak('This is how you use my lib called "the-pirate"')

    scene.removeEntity(codeSnippet)

    // Code For Facebook
    const cffImageEntity = image('projects-img', cff, 'https://github.com/trickstival/code-for-facebook')
    scene.addEntity(cffImageEntity)
    yield patrick.speak('Code for Facebook is a chrome extension that provides markdown highlighting for facebook posts!')
    scene.removeEntity(cffImageEntity)

    // Shrek in the Mud
    const iframe = SceneEntity('shrek', IframeViewImplementer)
    const iframeStyle = {
        height: '100%',
        display: 'flex',
        width: '50%',
        right: 0
    }
    const iframeBinding = { src: 'https://trickstival.github.io/shrek-in-the-mud/dist/', style: iframeStyle }
    iframe.bind(iframeBinding)
    scene.addEntity(iframe)

    yield patrick.speak('This other "project" is just shrek spinning.. HEHE (realtime rendering!)')

    // JS Capture the frameworks
    iframeBinding.src = 'https://trickstival.github.io/Javascript-Capture-The-Frameworks/'
    yield patrick.speak('JS Capture the Frameworks is a game I made based on pacman with divs!')

    scene.removeEntity(iframe)

    // Other Projects
    const otherProjectsList = SceneEntity('other-projects', ProjectListImplementer)
    otherProjectsList.bind({
        projects: [
            { title: 'Vuefire', url: 'https://github.com/vuejs/vuefire' },
            { title: 'CSS Grid Generator', url: 'https://github.com/sdras/cssgridgenerator' },
            { title: 'Shapify', url: 'https://github.com/posva/shapify' },
            { title: 'I want to work for Gitlab', url: 'https://gitlab.com/trickstival/i-wanna-work-for-gitlab' },
            { title: 'Vue.js Brasil', url: 'https://www.facebook.com/vuejsbrasil' }
        ]
    })
    scene.addEntity(otherProjectsList)
    yield patrick.speak(`I've recently started to contribute to these other projects:`)
    scene.removeEntity(otherProjectsList)

    // Finished!
    patrick.goTo({ left: null })
    yield patrick.speak('I hope you guys like it 😊')
    patrick.speak('Hover me!')
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
