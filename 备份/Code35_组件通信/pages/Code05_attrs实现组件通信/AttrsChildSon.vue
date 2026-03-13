<script setup lang="ts" name="AttrsChildSon">

//孙子使用
defineProps(['a','b','x','y'])
</script>

<template>
  <div id="AttrsChildSon">
    <h1>我是孙子</h1>
    <h4>a:{{a}}</h4>
    <h4>b:{{b}}</h4>
    <h4>x:{{x}}</h4>
    <h4>y:{{y}}</h4>
  </div>
</template>

<style scoped>
#AttrsChildSon{
  background-color: skyblue;
  height: 150px;
}
</style>