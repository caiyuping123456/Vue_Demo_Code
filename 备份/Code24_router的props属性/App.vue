<script setup lang="ts" name="App">

/**
 * 路由的props配置
 *    直接在配置文件中修改
 *    表示将一个个的参数转为props参数
 *    可以直接在子中进行使用defineProps参数接受
 *
 *    写法:
 *    // 第一种写法
*        // props:true
*     // 第二种写法;;参数表示；route
*       // props(route){
*       //     return route.query;
*       // }
*     // 第三种写法
*       // props:{
*       //     a:100,
*       //     b:200,
*       //     c:300
*       // }
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