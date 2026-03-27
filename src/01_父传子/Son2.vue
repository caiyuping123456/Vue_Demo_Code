<script setup lang="ts">
defineProps<{
  setStudentAge : (age:number)=> void,
  getStudent : () => Object
}>()
</script>

<template>
<div class="son">
  <h2>我是儿子2</h2>
  <button @click="setStudentAge(18)">设置年龄为18</button>
  <button @click="console.log(getStudent())">打印学生信息</button>

  <p>{{ getStudent() }}</p>

</div>
</template>

<style scoped>

</style>