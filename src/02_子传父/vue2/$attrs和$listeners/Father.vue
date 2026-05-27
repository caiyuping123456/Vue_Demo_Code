<script lang="ts">
import {defineComponent} from 'vue'
import Son from "@/02_子传父/vue2/$attrs和$listeners/Son.vue";

export default defineComponent({
  name: "Father",
  components: {Son},
  inheritAttrs: false
})
</script>

<template>
<div class="father">
  <h1>我是爸爸</h1>
  <Son v-bind="$attrs" v-on="$listeners"/>
</div>
</template>

<style scoped>

</style>