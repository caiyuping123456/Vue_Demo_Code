<script setup lang="ts">
import {useTeacher} from "@/hooks/useTeacher.ts";
const {teachList} = useTeacher();
</script>

<template>
  <div id="teacher">
    <h1>我是teacher组件</h1>
    <ul>
      <li v-for="item in teachList" :key="item.id">
        序号：{{item.id}}==名字：{{item.name}}==年龄：{{item.age}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
#teacher{
  height: 200px;
  width: 75%;
  background-color: turquoise;
  margin-top: 100px;
}

</style>