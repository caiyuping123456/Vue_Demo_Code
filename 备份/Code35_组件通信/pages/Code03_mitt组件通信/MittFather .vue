<script setup lang="ts" name="mittfather">
//@ts-ignore
import MittSon1 from "@/pages/Code03_mitt组件通信/MittSon1.vue";
import MittSon2 from "@/pages/Code03_mitt组件通信/MittSon2.vue";
</script>

<template>
<div id="mittfather">
  <h5>我是父亲组件</h5>
  <MittSon1/>
  <MittSon2/>
</div>
</template>

<style scoped>
#mittfather{
  background-color: wheat;
  height: 500px;
}
</style>