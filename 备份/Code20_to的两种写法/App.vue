<script setup lang="ts" name="App">

/**
 * to的两种写法：
 *    1.
 */
import {RouterView, useRouter} from "vue-router";

const router = useRouter()

const usePerson = ()=>{
  router.push('/person')
}
const useStudent = ()=>{
  router.push('/student')
}
</script>

<template>
  <div id="app">
    <div id="body">
      <h2>Vue的路由测试</h2>
<!--      使用简单跳转-->
<!--      <button @click="usePerson">切换Person组件</button>-->
<!--      <button @click="useStudent">切换Person组件</button>-->
<!--      声明式导航-->
<!--      第一种to的写法：to的字符串写法-->
      <router-link to="/person" active-class="router">Person</router-link>
<!--      第二种to的写法：to的对象写法-->
      <router-link :to="{path:'/student'}" active-class="router">Student</router-link>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
#body{
  margin: 10px 10px 40px;
  height: 400px;
  background-color: yellow;
}
.router{
  background-color: red;
}
</style>