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
  // 方式1. 直接通过countStore进行修改
  // countStore.sum += n.value;
  //
  // 第二种数据多的时候，进行分批次进行修改（碎片修改）===>一次进行修改
  // countStore.$patch({
  //   sum:888,
  //   name:'张三'
  // })
  //
  // 第三种，借助actions====>这里需要先进行配置actions
  // countStore.increment(n.value)
}

const mut = ()=>{
  countStore.sum -= n.value;
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
    <h1>name：{{countStore.name}}</h1>
    <h1>age：{{countStore.age}}</h1>
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