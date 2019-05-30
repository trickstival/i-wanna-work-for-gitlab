export default (id, implementer) => {
    const sceneContainer = document.querySelector('.scene-video')

    const self = {
        id,
        binding: {},
        implementer,
        componentInstance: null,
        get component () {
            return implementer.getComponent()
        },
        moveTo (directions) {
            const domEl = this.componentInstance.$el
            domEl.style.left = undefined
            domEl.style.right = undefined
            domEl.style.top = undefined
            domEl.style.bottom = undefined

            for (const direction in directions) {
                domEl.style[direction] = directions[direction]
            }
        },
        mount (componentInstance) {
            this.componentInstance = componentInstance
        },
        boundAct: null
    }
    return self 
}
