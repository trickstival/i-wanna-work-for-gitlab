export default (scene, execution) => {
    const initialState = {
        boundCharacters: [],
        appendedActions: [],
        done: false,
    }
    return {
        ...initialState,
        addCharacter (character) {
            character.boundAct = this
            this.boundCharacters.push(character)
        },
        appendAction (action) {
            this.appendedActions.push(action)
        },
        resume () {
            if (!this.appendedActions.length) {
                this.done = true
                return
            }
            const currentAction = this.appendedActions.shift()
            currentAction(this)
        },
        async start () {
            await execution(this)
            if (!this.appendedActions.length) {
                this.done = true
                this.$finish()
            }
        },
        $finish () {
            Object.assign(this, initialState)
        }
    }
}