<template>
    <div class="scene scene-video">
        <play-button-overlay v-if="!started" @click="start" />
        <transition-group name="fade">
            <component
                v-for="(entity, idx) in entities"
                v-bind="entity.binding"
                :key="entity.id + idx"
                :is="entity.component"
                :ref="entity.id"
                class="entity"
            />
        </transition-group>
        <slot />
        <div
            v-if="nextFrame" 
            @click="nextFrame && nextFrame()" 
            class="scene-selector">
            <span class="text"> 
                <template v-if="nextFrame">Go Next</template>
                <template v-else>Restart</template>
            </span>
        </div>
    </div>
</template>

<script>
import PlayButtonOverlay from './PlayButtonOverlay'

export default {
    components: {
        PlayButtonOverlay
    },
    props: {
        actions: {
            default: () => [],
            type: Function
        },
        initialEntities: {
            default: () => [],
            type: Array
        }
    },
    data () {
        return {
            started: false,
            waitingFrame: null,
            nextFrame: null,
            entities: []
        }
    },
    computed: {

    },
    methods: {
        start () {
            this.play()
            this.$emit('update:started', true)
            this.$emit('start')
        },
        mountEntity (entity) {
            const [ref] = this.$refs[entity.id]
            entity.mount(ref)
        },
        async play () {
            this.started = true
            const { actions } = this
            
            const sceneApi = {
                addEntity: entity => {
                    this.entities.push(entity)
                    return this.$nextTick()
                        .then(() => this.mountEntity(entity))
                },
                removeEntity: entity => {
                    this.entities.splice(this.entities.indexOf(entity), 1)
                    return this.$nextTick()
                },
                getEntity: (id) => {
                    // it should be immutable :(
                    return this.entities.find(entity => entity.id === id)
                },
                get (id) {
                    return this.getEntity(id).implementer
                },
                pause: () => {
                    this.waitingFrame = new Promise((resolve) => {
                        this.nextFrame = resolve
                    })
                }
            }
            const actionIterator = actions(sceneApi)
            let isDone = false
            do {
                const act = await actionIterator.next()
                if (act.value) {
                    act.value(sceneApi)
                    // if the scene was pause in the current action, wait for the user click
                    if (this.waitingFrame) {
                        await this.waitingFrame
                    }
                }
                isDone = act.done
            } while (!isDone)
            this.nextFrame = null
            this.started = false
        },
    },
    created () {
        this.entities = this.initialEntities
    },
    mounted () {
        this.entities.forEach(entity => this.mountEntity(entity))
    },
}
</script>

<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.play-overlay {
    display: flex;
    opacity: 0;
    z-index: 5;
}
.entity {
    position: absolute;
}
.scene {
    position: relative;
    height: 100%;
    overflow: hidden;
}
.scene-video:hover > .play-overlay {
    opacity: 1;
}

$blendMode: saturation;

.scene-selector {
    cursor: pointer;
    text-align: center;
    position: absolute;
    bottom: 0;
    padding: 10px;
    height: 45px;
    width: 100%;
    color: white;
    background-color: rgb(230, 83, 40);
    border-top-left-radius: 4px;
    width: 120px;
    right: 0;
    font-size: 20px;
    transition: font-size .1s;
    &:hover {
        font-size: 21px;
    }
}
</style>
