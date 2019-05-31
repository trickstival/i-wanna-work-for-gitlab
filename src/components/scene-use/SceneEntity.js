export default (id, implementer) => {
    const self = {
        id,
        binding: {},
        implementer,
        componentInstance: null,
        get component () {
            return implementer.getComponent()
        },
        bind (binding) {
            this.binding = binding
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
        setSize (width = 'initial', height = 'initial') {
            const domEl = this.componentInstance.$el
            domEl.style.width = width
            domEl.style.height = height

        },
        mount (componentInstance) {
            this.componentInstance = componentInstance
        }
    }
    return self 
}
