<script setup lang="ts" name="AttrsChild">
import AttrsChildSon from "@/pages/Code05_attrs实现组件通信/AttrsChildSon.vue";

defineProps(['a'])
</script>

<template>
  <div id="AttrsChild">
    <h1>我是爸爸</h1>
    <h4>从爷爷这里获取的数据：a={{a}}</h4>
    <h4>从爷爷这里获取的数据：b={{b}}</h4>
    <h4>从爷爷这里获取所有数据：{{$attrs}}</h4>
<!--    直接传给儿子-->
<!--    本质就是attrs在老爸这里由attrs转为了props-->
    <AttrsChildSon v-bind="$attrs"/>
  </div>
</template>

<style scoped>
#AttrsChild{
  background-color: blanchedalmond;
  height: 300px;
}
</style>