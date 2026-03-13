<script setup lang="ts" name="Method6Son1">

import {ref} from "vue";

let toy = ref('奥特曼')
let book = ref(10)
defineExpose({toy,book})

//注意不要value
const setHome = (val:any)=>{
  val.homse="小平层"
}
</script>

<template>
  <div id="Method6Son1">
    <h1>我是儿子1</h1>
    <h1>儿子1有：{{toy}}</h1>
    <h1>儿子1有书：{{book}} 本</h1>
    <button @click="setHome($parent)">修改父亲的房子</button>
  </div>
</template>

<style scoped>
#Method6Son1{
  background-color: greenyellow;
  height: 200px;
}
</style>