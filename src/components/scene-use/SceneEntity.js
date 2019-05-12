export default (implementer) => {
    const self = {
        binding: null,
        coordinates: {
            set top (val) {
                self.boundAct
            },
            set bottom (val) {
                
            },
            set left (val) {
    
            },
            set right (val) {
    
            }
        },
        get component () {
            return implementer.getComponent()
        },
        boundAct: null
    }
    return self 
}
