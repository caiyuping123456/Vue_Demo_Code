<script setup lang="ts" name="CHUYU">

//实现第一条线
defineProps(['qwe'])

//实现第二条线
const emit =defineEmits(['update:qwe'])

</script>

<template>
  //第一条线进行绑定
  <input type="text"
         :value="qwe"
         @input="emit('update:qwe',(<HTMLInputElement>$event.target).value)">
</template>

<style scoped>
  input{
    border: 2px solid black;
    background-image: linear-gradient(45deg,red,yellow,green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>