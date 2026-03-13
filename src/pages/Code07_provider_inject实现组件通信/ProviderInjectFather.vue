<script setup lang="ts" name="ProviderInjectFather">
import ProviderInjectChild from "@/pages/Code07_provider_inject实现组件通信/ProviderInjectChild.vue"
import {provide, reactive, ref} from "vue";

let mony = ref(100)
let car = reactive({
  name:'奔驰',
  mony:1000
})


const updateMony = (val:number)=>{
  mony.value-=val;
}

//向后代提供数据
//如果我直接使用传递value，就不是响应式对象
provide('qian',mony)
provide('che',car)

provide('context',{mony,updateMony})


</script>

<template>
  <div id="ProviderInjectFather">
    <h1>我是爷爷</h1>
    <h4>财产：{{mony}}</h4>
    <h4>车：{{car}}</h4>
    <ProviderInjectChild/>
  </div>
</template>

<style scoped>
#ProviderInjectFather{
  background-color: wheat;
  height: 500px;
}
</style>