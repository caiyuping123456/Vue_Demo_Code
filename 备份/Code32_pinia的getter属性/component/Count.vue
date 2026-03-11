<script setup lang="ts" name="Count">
import {ref, toRefs} from "vue";
//使用pinia
import {useCountStore} from '@/store/count'
import {storeToRefs} from "pinia";

const countStore = useCountStore();
let {sum,name,age} = storeToRefs(countStore)

let n = ref(1)
const add = ()=>{
  countStore.increment(n.value)
}

const mut = ()=>{
  countStore.mut(n.value);
}

 </script>

<template>
  <div id="count">
    <h2>当前求和数为{{ sum }}</h2>
<!--    为了避免字符串相加，这里直接使用.number-->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="mut">减</button>
    <h1>name：{{name}}</h1>
    <h1>age：{{age}}</h1>
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