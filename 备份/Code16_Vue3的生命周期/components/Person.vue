<script setup lang="ts">

/**
 *  vue3的生命周期（4阶段，7钩子）
 *    1. 创建 ===> (setup)
 *    2. 挂载 ===> (挂载前：onBeforeMount，挂载后：onMounted)
 *    3. 更新 ===> (更新前：beforeUpdate，更新后：onUpdated)
 *    4. 销毁 ===> (卸载前：onBeforeUnMount，卸载后：onUnMounted)
 *
 *    父亲和儿子，儿子先挂载，父亲后挂载
 */

import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated} from "vue";

//挂载前
onBeforeMount(()=>{
  console.log("挂载前")
})

//挂载完毕
onMounted(()=>{
  console.log("挂载完毕")
})

//更新前
onBeforeUpdate(()=>{
  console.log("更新前")
})

//更新完毕
onUpdated(()=>{
  console.log("更新完毕")
})

//卸载前
onBeforeUnmount(()=>{
  console.log("卸载前")
})

//卸载完毕
onUnmounted(()=>{
  console.log("卸载完毕")
})
</script>

<template>
  <div id="person" >

  </div>
</template>

<style scoped>
#person{
  height: 500px;
  width: 75%;
  background-color: turquoise;
}
</style>