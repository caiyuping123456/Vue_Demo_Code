<script setup lang="ts" name="Method6Father">
import Method6Son1 from '@/pages/Code06_$refs和$parent的组件通信/Method6Son1.vue'
import Method6Son2 from '@/pages/Code06_$refs和$parent的组件通信/Method6Son2.vue'
import {ref} from "vue";

let homse = ref('别墅')

let son1 = ref()
let son2 = ref()

const getSon1 = ()=>{
  console.log("获取到son1: "+son1.value.toy)
}

const getSon2 = ()=>{
  console.log("获取到son2："+son2.value.phone)
}

const setSon1 = ()=>{
  son1.value.toy = "芭比娃娃"
}

const setSon2 = ()=>{
  son2.value.phone = "OPPO"
}

//这里就可以修改儿子了（父亲修改儿子）
//不用value
const getAll = (refs:any)=>{
  console.log(refs)
  //下面对组件中的book都加10
  for(let key in refs){
    refs[key].book +=10;
  }
}

//暴露数据
defineExpose({homse})

</script>

<template>
  <div id="Method6Father">
    <h1>我是父亲</h1>
    <h1>父亲有：{{homse}}</h1>
    <button @click="getSon1">获取son1的数据</button>
    <button @click="getSon2">获取son2的数据</button>
<!--    下面通过$ref获取到儿子的值-->
    <button @click="setSon1">修改son1的数据</button>
    <button @click="setSon2">修改son2的数据</button>
    <button @click="getAll($refs)">获取到所有的数据</button>
    <Method6Son1 ref="son1"/>
    <Method6Son2 ref="son2"/>
  </div>
</template>

<style scoped>
#Method6Father{
  background-color: wheat;
  height: 500px;
}
</style>