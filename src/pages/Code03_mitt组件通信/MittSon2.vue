<script setup lang="ts" name="mittfson2">

//这个孩纸有手机

import {ref} from "vue";
import emitter from "@/utils/emitter.ts";

let phone = ref('苹果手机');

//弟弟要数据
//给emitter绑定数据
//这里就是将son1的数据发送到了son2
emitter.on('send-toy',(val)=>{
  console.log("send-toy :"+val);
})

</script>

<template>
  <div id="mittfson2">
    <h1>我是儿子2组件</h1>
    <h2>我有{{phone }}</h2>
  </div>
</template>

<style scoped>
#mittfson2{
  background-color: violet;
  height: 150px;
}
</style>