<script setup lang="ts">
import {ref} from 'vue'

//创建一个title2，创出ref标记的内容
let title2 = ref()

const printDom = ()=>{
  //使用原生的js取id
  // console.log(document.getElementById('title2'))
  console.log(title2.value)
}

let a = ref(1)
let b = ref(2)
let c = ref(3)
// 下面开始拿组件的实例，需要进行组件导出
// 可以看出，使用ref在组件上，获取的是组件的实例，
// 同时如果需要拿到组件的数据，需要在子组件上使用defineExpose进行数据导出
defineExpose({a,b,c})
</script>

<template>
  <div id="person" >
    <h1>中国</h1>
    <h2 ref="title2">江西</h2>
    <h3>赣州</h3>
    <button @click="printDom">点我输出h2这个dom元素</button>
  </div>
</template>

<style scoped>
#person{
  height: 500px;
  width: 75%;
  background-color: turquoise;
}
</style>