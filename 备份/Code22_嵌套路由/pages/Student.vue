<script setup lang="ts">
/**
 * router====>多个route
 *    路径会改变
 */
import {useStudent} from '@/hooks/useStudent.ts'
const {studentList} = useStudent();
</script>

<template>
  <div id="student">
    <h1>我是Student组件</h1>
    <ul>
      <li v-for="item in studentList" :key="item.id">
        序号：{{item.id}}==名字：{{item.name}}==年龄：{{item.age}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
#student{
  height: 200px;
  width: 75%;
  background-color: turquoise;
  margin-top: 100px;
}

</style>