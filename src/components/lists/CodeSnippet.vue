<template>
    <div class="code-snippet-root">
        <prism language="javascript">{{ code }}</prism>
    </div>
</template>

<script>
import Prism from 'vue-prism-component' 
export const CodeSnippetImplementer = {
    getComponent () {
        return CodeSnippet
    }
}
const CodeSnippet = {
    components: {
        Prism
    },
    props: {
        code: {
            type: String,
            default: `const test = heyeeeeee()`
        }
    }
}
export default CodeSnippet
</script>

<style lang="scss" scoped>
.code-snippet-root {
}
</style>
