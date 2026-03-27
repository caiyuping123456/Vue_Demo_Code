<script setup lang="ts">
defineProps<{
  student:{
    name:string,
    age:number
  },
  setStudentName:() => void
}>()
</script>

<template>
<div class="son">
  <h2>我是儿子1</h2>
  <p>接收到的学生: {{ student.name }} - {{ student.age }}岁</p>
  <button @click="setStudentName">修改名字</button>
</div>
</template>

<style scoped>

</style>