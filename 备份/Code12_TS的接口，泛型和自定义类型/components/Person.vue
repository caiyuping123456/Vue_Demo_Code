<script setup lang="ts">
import {type PersonInter, type Persons} from "@/types";

let person : PersonInter = {
  id:"123",
  name:"李四",
  age:80
}

let personList :Persons = [
  {id:"123", name:"李四", age:80},
  {id:"123", name:"李四", age:80},
  {id:"123", name:"李四", age:80},
  {id:"123", name:"李四", age:80},
  {id:"123", name:"李四", age:80},
]
</script>

<template>
  <div id="person" >

  </div>
</template>

<style scoped>
#person{
  height: 500px;
  width: 75%;
  background-color: turquoise;
}
</style>