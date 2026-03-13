<script setup lang="ts" name="mittfson1">
import emitter from "@/utils/emitter.ts";

//这个孩子有玩具
import {ref} from "vue";

let toy = ref('芭比娃娃');
//下面进行son1给玩具给son2


</script>

<template>
<div id="mittfson1">
  <h1>我是儿子1组件</h1>
  <h2>我有{{toy}}</h2>
  <button @click="emitter.emit('send-toy',toy)">玩具给弟弟</button>
</div>
</template>

<style scoped>
#mittfson1{
background-color: violet;
  height: 150px;
}
</style>