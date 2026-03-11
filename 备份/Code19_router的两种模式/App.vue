<script setup lang="ts" name="App">

/**
 * router的工作模式
 *  history模式：
 *    Vue2：mode:'history'
 *    Vue3：history：createWebHistory()
 *    优点：Url更加美观，不带#,跟加接近传统的网站Url
 *    缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会有404错误
 *  hash模式：
 *    优点：兼容性好，因为不需要服务端处理路径
 *    缺点：Url带有#，不美观，且在SEO优化方面比较差
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
      <router-link to="/person" active-class="router">Person</router-link>
      <router-link to="/student" active-class="router">Student</router-link>
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