<script setup lang="ts" name="App">

/**
 * 重定向:
 *    一开始时,不会进行跳转
 *    可以在配置文件中加redirect
 *     ,{
 *             path:'/',
 *             redirect:'/person'
 *         }
 *     也就是说访问/时,/告诉你,要去/person,你就去了/person
 */
import {RouterView, useRouter} from "vue-router";
import {onMounted} from "vue";

//这个是路由器
const router = useRouter()

onMounted(()=>{
  console.log("开始跳转")
  setTimeout(()=>{
    router.push('/routeU')
  },3000)
})

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
      <router-link replace to="/person" active-class="router">Person</router-link>
<!--      to-path跳转-->
      <router-link replace :to="{path:'/student'}" active-class="router">Student</router-link>
<!--      to-name跳转-->
      <router-link replace :to="{name:'laoshi'}" active-class="router">Teacher</router-link>
      <router-link replace to="/news" active-class="router">News</router-link>
      <router-link replace to="/routeU" active-class="router">RouterUUUU</router-link>
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