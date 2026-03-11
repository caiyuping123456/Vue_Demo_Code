<script setup lang="ts" name="App">

import {reactive, ref} from "vue";
import type {Persons} from "@/types";
import Person from "@/pages/Person.vue"

let personList : Persons = reactive([
  {id:1,name:"张三",age:20},
  {id:2,name:"李四",age:22},
  {id:3,name:"王五",age:23},
  {id:4,name:"赵六",age:90},
])

//父亲给儿子


</script>

<template>
  <div id="app">
    <Person a="哈哈哈" :list="personList"/>
  </div>
</template>

<style scoped>
#body{
  margin: 10px;
  margin-bottom: 40px;
  background-color: yellow;
}
</style>