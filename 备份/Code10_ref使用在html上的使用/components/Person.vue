<script setup lang="ts">
import {ref} from 'vue'

//创建一个title2，创出ref标记的内容
let title2 = ref()

const printDom = ()=>{
  //使用原生的js取id
  // console.log(document.getElementById('title2'))
  console.log(title2.value)
}

// 总结，这个ref就是局部样式，就是只在本vue文件中可以使用
// ref使用在组件上，拿到的是组件的DOM元素
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