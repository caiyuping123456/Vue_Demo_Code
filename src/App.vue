<script setup lang="ts" name="App">
import SlotFather from "@/component/作用域插槽/SlotFather.vue";
</script>

<template>
  <div id="app">
   <h2>插槽语法</h2>
    <SlotFather/>
  </div>
</template>

<style scoped>
.main-layout{
  display: flex;
  gap: 10px;
}
#app h2{
  height: 30px;
}

#body{
  background-color: green;
  width: 200px;
  height: 600px;
}

#content{
  background-color: skyblue;
  flex-grow: 1;
}
</style>