<script setup lang="ts" name="Count">
import { ref } from "vue";
//使用pinia
import {useCountStore} from '@/store/count'

//获取store
const countStore = useCountStore();
//拿到sum
//方式一：countStore.sum
//方式二：countStore.$state.sum

let n = ref(1)
const add = ()=>{

}

const mut = ()=>{

}

 </script>

<template>
  <div id="count">
    <h2>当前求和数为{{ countStore.sum }}</h2>
<!--    为了避免字符串相加，这里直接使用.number-->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="mut">减</button>
  </div>
</template>

<style scoped>
#count{
  background-color: deepskyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>