<script setup lang="ts" name="myselffather">
import MyselfSon from "@/pages/Code02_自定义事件/MyselfSon.vue"
import {ref, toValue} from "vue";

const test = (val:string)=>{
  console.log("abcabc哈哈哈哈哈"+val);
  tony.value = val;
}

const tony = ref('')

</script>

<template>
<div id="myselffather">
  <h5>我是父亲组件</h5>
  <br>
  <h2>获取到儿子的数据：{{tony}}</h2>
<!--  /这个abc就是自定义事件-->
<!--  给子组件绑定事件-->
  <MyselfSon @abc="test"/>
</div>
</template>

<style scoped>
#myselffather{
  background-color: wheat;
  height: 500px;
}
</style>