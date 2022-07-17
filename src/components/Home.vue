<template>
    <div style="display:flex;justify-content:center">
        <DocsList/>
    </div>
</template>
<script>
import { defineComponent } from "vue";
import DocsList from "./DocsList.vue";
export default defineComponent({
    components: {
        DocsList
    }
})
</script>