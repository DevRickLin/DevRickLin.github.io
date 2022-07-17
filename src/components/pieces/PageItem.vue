<template>
    <a
        :href="path"
    >
        <div style="
            display: flex;
            justify-content: space-between;
        ">
            <p>{{ frontMatter?.title }}</p>
        </div>
    </a>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IDocs } from "../../domain/IDocs";
export default defineComponent({
    props: {
        frontMatter: Object as () => IDocs["frontMatter"],
        regularPath: String
    },
    setup({ frontMatter, regularPath }) {
        return {
            frontMatter,
            path: regularPath?.replace("/docs/","")
        }
    }
})
</script>