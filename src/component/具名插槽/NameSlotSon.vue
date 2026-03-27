<script setup lang="ts" name="nameslotson">
defineProps(['title'])
</script>

<template>
<div id="nameslotson">
  <h1>{{title}}</h1>
<!--  这个就是具名插槽-->
  <h1>1</h1>
  <slot name="s1"></slot>
  <h1>2</h1>
  <slot name="s2"></slot>
  <h1>3</h1>
  <slot name="s3"></slot>
</div>
</template>

<style scoped>
#nameslotson{
  height: 400px;
  width: 400px;
  background-color: red;
}

</style>