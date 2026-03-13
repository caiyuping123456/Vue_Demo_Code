<script setup lang="ts" name="ProviderInjectChildSon">

//这里获取到爷爷的数据
import {inject} from "vue";
//后面这个是默认值
let x = inject('qian',999)
let y = inject('che',{
  name:'小米',
  mony:999
})


//下面孙子可以修改爷爷的
//获取到爷爷的数据和方法
//@ts-ignore
let {mony,updateMony} = inject('context')
//修改
</script>

<template>
  <div id="ProviderInjectChildSon">
    <h1>我是孙子</h1>
    <h4>获取到爷爷的：{{x}}</h4>
    <h4>获取到爷爷的车：{{y.name+" "+y.mony}}</h4>

    <button @click="updateMony(9999999)">修改爷爷的mony</button>
  </div>
</template>

<style scoped>
#ProviderInjectChildSon{
  background-color: skyblue;
  height: 150px;
}
</style>