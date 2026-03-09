<script setup lang="ts">

import {computed, ref} from "vue";

let firstName = ref("")
let lastName = ref("")
// 单向绑定
// v-bind

// 使用计算属性
// 这个是只读
// 计算属性有缓存
let fullName = computed(()=>{
  return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+"-"+lastName.value;
})

let fullName2 = computed({
  get(){
    return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+"-"+lastName.value;
  },
  set(val){
    const [str1 = "",str2 = ""] = val.split("-")
    firstName.value = str1
    lastName.value = str2
  }
})

const updateFullName = ()=>{
  //这里只是引起了set调用
  fullName2.value = "li-si"
}
</script>

<template>
  <div id="person" >
   姓：<input type="text" v-model="firstName"> <br>
   名：<input type="text" v-model="lastName"> <br>
   全名：<span>{{fullName2}}</span> <br>
    <button @click="updateFullName()">将全名改为：li-si</button>
  </div>
</template>

<style scoped>
#person{
  height: 500px;
  width: 75%;
  background-color: turquoise;
}
</style>