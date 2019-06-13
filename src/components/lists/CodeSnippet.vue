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
@media screen and (max-width: 768px) {
    .code-snippet-root {
        right: 0!important;
        width: 100%;
        height: 100px;
    }
}

</style>
