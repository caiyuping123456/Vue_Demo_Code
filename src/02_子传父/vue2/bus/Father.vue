<script lang="ts">
import {defineComponent} from 'vue'
import Brother1 from "@/02_子传父/vue2/bus/brother1.vue";
import Brother2 from "@/02_子传父/vue2/bus/brother2.vue";

export default defineComponent({
  name: "Father",
  components: {Brother2, Brother1}
})
</script>

<template>
<div class="father">
  <h1>我是父亲</h1>
  <Brother1/>
  <Brother2/>
</div>
</template>

<style scoped>

</style>