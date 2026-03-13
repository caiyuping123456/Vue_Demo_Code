<script setup lang="ts" name="AttrsFather">
import AttrsChild from "@/pages/Code05_attrs实现组件通信/AttrsChild.vue";
import {ref} from "vue";

let a = ref(1)
let b = ref(2)
let c = ref(3)
let d = ref(4)
let e = ref(5)


</script>

<template>
  <div id="AttrsFather">
    <h1>我是爷爷</h1>
    <h4>{{a}}</h4>
    <h4>{{b}}</h4>
    <h4>{{c}}</h4>
    <h4>{{d}}</h4>
    <h4>{{e}}</h4>
<!--    传给儿子-->
    <AttrsChild :a="a" :b="b" v-bind:="{x:100,y:200}"/>
  </div>
</template>

<style scoped>
#AttrsFather{
  background-color: wheat;
  height: 500px;
}
</style>