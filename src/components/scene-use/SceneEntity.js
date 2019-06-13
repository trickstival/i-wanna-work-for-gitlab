// TODO: move id to implementer
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
            if (!this.componentInstance) {
                throw new Error('Fool, you have to add the entity to the scene before moving it')
            }
            const { binding } = this
            if (!binding.style) {
                binding.style = Object.create(null)
            }
            const { style } = binding
            style.left = undefined
            style.right = undefined
            style.top = undefined
            style.bottom = undefined

            for (const direction in directions) {
                style[direction] = directions[direction]
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
