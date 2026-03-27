<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Son2",
  data() {
    return {
      text: "点我发送函数到Father",
    }
  },
  methods: {
    sendFunction(){
      const myFunction = ()=>console.log("hahahaha")
      this.$emit('sendFunction',myFunction)
    }
  }
})
</script>

<template>
  <div class="son2">
    <h1>我是son2</h1>
    <button v-text="text" @click="sendFunction"></button>
  </div>
</template>

<style scoped>

</style>