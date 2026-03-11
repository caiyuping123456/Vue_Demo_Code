<script setup lang="ts">
//获取到useRoute
import {useRoute} from "vue-router";
import {toRefs} from "vue";

let route = useRoute();

// 直接从响应式解构，会丢失响应式
// 可以使用toRefs进行修复
let {query} = toRefs(route);
</script>

<template>
  <div id="context">
    <ul>
      <li>编号：{{query.id}}</li>
      <li>标题：{{query.title}}</li>
      <li>内容：{{query.context}}</li>
    </ul>
  </div>
</template>

<style scoped>
#context{
  margin-left: 200px;
  display: flow;
  width: 400px;
  background-color: green;
}
</style>