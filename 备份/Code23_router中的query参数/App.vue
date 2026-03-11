<script setup lang="ts" name="App">

/**
 * Query传参：
 *    直接使用url后面加？就表示开始传参了
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
<!--      字符串跳转-->
      <router-link to="/person" active-class="router">Person</router-link>
<!--      to-path跳转-->
      <router-link :to="{path:'/student'}" active-class="router">Student</router-link>
<!--      to-name跳转-->
      <router-link :to="{name:'laoshi'}" active-class="router">Teacher</router-link>
      <router-link to="/news" active-class="router">News</router-link>
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
router-link {
  margin:100px;
  border-radius: 4px;
}
</style>