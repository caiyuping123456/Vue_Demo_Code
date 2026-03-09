<script setup lang="ts">
import { ref } from "vue";

// ref一般用基本数据类型

const count = ref(0)
const add = ():void =>{
  count.value++;
}
</script>

<template>
  <div id="person" >
    你好，我是Person
    <p>
      {{ count }}
    </p><br><br>

    <button @click="add()">
      点我加一
    </button>

  </div>
</template>

<style scoped>
#person{
  height: 100px;
  width: 75%;
  background-color: turquoise;

}
</style>