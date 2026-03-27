<script lang="ts">
import {defineComponent, handleError} from 'vue'
import Son1 from "@/02_子传父/vue2/emit/Son1.vue";
import Son2 from "@/02_子传父/vue2/emit/Son2.vue";

export default defineComponent({
  name: "Father",
  methods: {
    handleMessage(msg: any){
      this.message = msg
    },
    handleFunction(fn: Function){
      this.sonFunction = fn;
    },
    callSonFunction() {
      if (this.sonFunction) {
        this.sonFunction()  // ✅ 调用子组件的函数
      } else {
        console.log('还没有接收到子组件的函数')
      }
    }
  },
  components: {Son2, Son1},
  data() {
    return {
    message: ''
    }
  },
})
</script>

<template>
  <div class="father">
    <h1>我是father</h1>
    <h2>我是son1发送的消息：{{message}}</h2>
    <button @click="callSonFunction">这个调用子类的方法</button>
    <Son1 @send-message="handleMessage"/>
    <Son2 @sendFunction="handleFunction"/>
  </div>
</template>

<style scoped>

</style>