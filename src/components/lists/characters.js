import { BuildCharacter } from '../scene-use/Character'

// exports some character entities
export default [
    BuildCharacter({
        image: require('@/assets/characters/me_vuejs.png'),
        id: 'patrick',
        class: 'me-vue'
    })
]
