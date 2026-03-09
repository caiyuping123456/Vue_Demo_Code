<script setup lang="ts">
import {reactive, toRef, toRefs} from 'vue'

let person = reactive({
  name:'张三',
  age:18
})

// 解构数据
// 从响应式数据解构出的数据不是响应式数据
// 可以使用toRefs进行解构为响应式对象
let {name,age} = toRefs(person);
let nl = toRef(person,"age")
console.log(nl === age);

console.log(name+" "+age);

const updateName = ()=>{
  name.value += "=";
}

const updateAge = ()=>{
  person.age = 20;
}

</script>

<template>
  <div id="person" >
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <button @click="updateName()">点我修改名字</button>
    <button @click="updateAge()">点我修改年龄</button>
  </div>
</template>

<style scoped>
#person{
  height: 500px;
  width: 75%;
  background-color: turquoise;
}
</style>