<script setup lang="ts">
/**
 * router====>多个route
 *    路径会改变
 */
import {usePerson} from '@/hooks/userPerson.ts'
const {personList} = usePerson();
</script>

<template>
  <div id="person">
    <h1>我是Person组件</h1>
    <ul>
      <li v-for="item in personList" :key="item.id">
        序号：{{item.id}}==名字：{{item.name}}==年龄：{{item.age}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
#person{
  height: 200px;
  width: 75%;
  background-color: turquoise;
  margin-top: 100px;
}
img{
  height: 100px;
}
</style>