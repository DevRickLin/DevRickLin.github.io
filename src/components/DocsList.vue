<template>
    <div style="width: 60%;display: flex;flex-direction: column;">
        <PageItem v-for="page in pages" :frontMatter="page.frontMatter" :regularPath="page.regularPath"/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useData } from "vitepress";
import { computed } from "@vue/reactivity";
import { IThemeConfig } from "../domain/IThemeConfig";
import { PageItem } from "./pieces";
export default defineComponent({
    components: {
        PageItem
    },
    setup(){
        const data = useData<IThemeConfig>();
        return {
            pages: computed(()=>data.site.value.themeConfig.docs.filter( docs => docs.frontMatter.page ))
        }
    }
})
</script>