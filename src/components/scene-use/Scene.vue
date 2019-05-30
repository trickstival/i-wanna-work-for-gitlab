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
        <div @click="nextFrame && nextFrame()" class="scene-selector">
            Go Next
            <span
                @click="$emit('input', idx)"
                class="scene-selector-arrow">
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
            default: [],
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
    height: 100%;
}
.scene-video:hover > .play-overlay {
    opacity: 1;
}

.scene-selector {
    cursor: pointer;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    bottom: 0;
    padding: 10px;
    height: 45px;
    width: 100%;
    &:hover {
        filter: brightness(60%);
    }
}

.scene-selector-arrow {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><g><path fill="%23FFF" d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5   c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>');
    display: inline-block;
    $nextSize: 20px;
    width: $nextSize;
    height: $nextSize;
}
</style>
