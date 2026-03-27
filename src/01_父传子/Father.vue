<script setup lang="ts">
import Son1 from "@/01_父传子/Son1.vue";
import Son2 from "@/01_父传子/Son2.vue";
import {reactive} from "vue";
/**
 * 这里传student给son1
 * 这里传function1给son2
 */
const student = reactive({
  name:'小米',
  age:14
})


const setStudentName = ()=> {
  student.name = '小ming'
}

const setStudentAge = (age:number)=> {
  student.age = age
}

const getStudent = ()=> {
  return student
}
</script>

<template>
<div class="father">
  <h1>我是父亲</h1>
  <h3>{{student.name}} ====> {{ student.age}}</h3>
  <Son1 :student="student" :setStudentName="setStudentName"/>
  <Son2 :setStudentAge="setStudentAge" :getStudent="getStudent"/>
</div>
</template>

<style scoped>

</style>