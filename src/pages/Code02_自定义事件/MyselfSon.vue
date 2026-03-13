<script setup lang="ts" name="myselfson">
import {ref} from "vue";

let tony = ref('芭比娃娃');

//声明事件
const emits = defineEmits(['abc'])


</script>

<template>
<div id="myselfson">
  <h1>我是儿子组件</h1>
  <button @click="emits('abc',tony)">测试</button>
</div>
</template>

<style scoped>
#myselfson{
background-color: violet;
  height: 300px;
}
</style>