<script setup lang="ts">
import {useRoute} from "vue-router";
import {toRefs} from "vue";

//获取到父亲传来的
const route = useRoute()
// let {params} = toRefs(route)

defineProps(['id','title','context']);

</script>

<template>
  <div id="context">
    <ul>
      <li>编号：{{id}}</li>
      <li>标题：{{title}}</li>
      <li>内容：{{context}}</li>
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