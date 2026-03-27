<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Son1",
  data() {
    return {
      text: "点我发送消息到Father",
      msg: "你好，我是son1的消息"
    }
  },
  methods:{
    sendMsg(){
      this.$emit('send-message',this.msg)
    }
  }
})
</script>

<template>
<div class="son1">
  <h1>我是son1</h1>
  <button v-text="text" @click="sendMsg"></button>
</div>
</template>

<style scoped>

</style>