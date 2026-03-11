<script setup lang="ts" name="App">
import Person from "@/pages/Person.vue";
import Student from "@/pages/Student.vue";
/**
 * 1. 安装router,使用：npm i vue-router
 * 2. 创建router文件夹
 * 3. 在router中新建一个index.ts
 * 4. 创建一个路由器，同时暴露出去
 * 5. 在mian.ts中引入路由
 * 6. 在父亲组件上引入RouterView组件
 */

/**
 * 几个注意点：
 *  1. 路由组件一般放到pages或者views文件夹，一般组件一般放到components文件夹
 *      a. 路由组件：靠路由的规则渲染出来的（routers中的组件）
 *      b. 一般组件：亲手写的标签<Demo/>
 *  2. 通过点击导航，视觉上消失的组件默认是被销毁了，需要时需要重新挂载
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