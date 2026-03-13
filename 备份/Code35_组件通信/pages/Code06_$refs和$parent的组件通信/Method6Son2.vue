<script setup lang="ts" name="Method6Son2">

import {ref} from "vue";

let phone = ref('苹果')
let book = ref(20)
defineExpose({phone,book})

</script>

<template>
  <div id="Method6Son2">
    <h1>我是儿子2</h1>
    <h1>儿子2有：{{phone}}</h1>
    <h1>儿子2有书：{{book}} 本</h1>
  </div>
</template>

<style scoped>
#Method6Son2{
  background-color: skyblue;
  height: 200px;
}
</style>