<script setup lang="ts">
import {ref, watch, watchEffect} from "vue";

let temp =ref(0)
let height = ref(0)

const addTemp = ()=>{
  temp.value += 10;
}

const addHeight = ()=>{
  height.value += 10;
}

//进行temp和height监听
// watch([()=> temp.value,()=> height.value],(newValue)=>{
//   console.log("哈哈哈");
//   if(temp.value >= 60 || height.value >= 100){
//     window.alert("不好啦");
//   }
// })
// 这里可以看出，watch是精确监视
// 如果由好多需要监视的，可以使用watchEffect
// watchEffect可以进行精确监控，不需要人工进行全部写全
watchEffect(()=>{
  console.log("哈哈哈");
  if(temp.value >= 60 || height.value >= 100){
    window.alert("不好啦");
  }
})

</script>

<template>
  <div id="person" >
   <h1>测试watchEffect</h1>
    <h1>温度：{{temp}}</h1>
    <h1>水位：{{height}}</h1>
    <button @click="addTemp">点我temp加10</button>
    <button @click="addHeight">点我height加10</button>
  </div>
</template>

<style scoped>
#person{
  height: 500px;
  width: 75%;
  background-color: turquoise;
}
</style>