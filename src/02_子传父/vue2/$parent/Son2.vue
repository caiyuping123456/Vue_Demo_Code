<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Son2",
  methods:{
    getFunction(){
      this.$parent.sayHello();
    }
  }
})
</script>

<template>
<div class="son">
  <h1>我是Son2</h1>
  <button @click="getFunction">点击我获取父亲的方法</button>
</div>
</template>

<style scoped>

</style>