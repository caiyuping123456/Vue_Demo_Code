<script setup lang="ts" name="App">
import Person from "@/components/Person.vue";
import {ref} from 'vue'
let title2 = ref()

let ren = ref()

const printTitle = ()=>{
  console.log(ren.value)
}
</script>

<template>
  <div id="app">
    <div id="body">
<!--      <h2 ref="title2">你好</h2>-->
      <h2 ref="title2">你好</h2>
      <button @click="printTitle">测试</button>
      <Person ref="ren"/>
    </div>
  </div>
</template>

<style scoped>
#body{
  margin: 10px;
  margin-bottom: 40px;
  background-color: yellow;
}
</style>