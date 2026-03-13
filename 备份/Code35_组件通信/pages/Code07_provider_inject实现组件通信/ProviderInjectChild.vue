<script setup lang="ts" name="ProviderInjectChild">
import ProviderInjectChildSon from "@/pages/Code07_provider_inject实现组件通信/ProviderInjectChildSon.vue";

</script>

<template>
  <div id="ProviderInjectChild">
    <h1>我是爸爸</h1>
    <ProviderInjectChildSon/>
  </div>
</template>

<style scoped>
#ProviderInjectChild{
  background-color: blanchedalmond;
  height: 300px;
}
</style>