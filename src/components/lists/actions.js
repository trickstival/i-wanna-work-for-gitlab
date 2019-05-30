import SceneEntity from '@/components/scene-use/SceneEntity'

const image = (id, url) => {
    return SceneEntity(id, {
        getComponent () {
            return {
                name: 'imageEntity',
                render: h => h('img', {
                    attrs: { src: url }
                })
            }
        }
    })
}

// if a function is yielded, it should wait for the user to click on "Go Next"
export default async function* (scene) {
    const patrick = scene.get('patrick')
    yield patrick.speak('Hey guys!')
    yield patrick.speak(`I'm Patrick, a Web Developer who really wanna work for you.`)
    yield patrick.speak('Let me show you some of my open-source projects')
    patrick.goTo({ left: 0 })
    const thePirateImage = image('the-pirate', require('@/assets/the-pirate-example.jpg'))
    await scene.addEntity(thePirateImage)
    thePirateImage.moveTo({ top: '50%', right: '5px' })
    yield patrick.speak('This is how you use my lib called "the-pirate"')

}
