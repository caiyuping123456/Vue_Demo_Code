<script setup lang="ts" name="deslotson">
defineProps(['title'])
</script>

<template>
<div id="deslotson">
  <h1>{{title}}</h1>
<!--  这个就是默认插槽-->
  <slot></slot>
</div>
</template>

<style scoped>
#deslotson{
  height: 400px;
  width: 400px;
  background-color: red;
}

</style>