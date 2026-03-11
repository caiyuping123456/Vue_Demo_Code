<script setup lang="ts" name="LoveTalk">

import {reactive} from "vue";
import {useLoveTalkStore} from "@/store/loveTalk.ts";
interface talk{
  id:number,
  title:string
}
const TalkList : Array<talk> = [
  {id:1,title:"我是小红"},
  {id:2,title:"我是小绿"},
  {id:3,title:"我是小名"},
  {id:4,title:"我是小化"},
  {id:5,title:"我是小哈哈"},
  {id:6,title:"我是小喜喜"},
  {id:7,title:"我是小xiao"},
  {id:8,title:"我是小华"},
]

const loveStore = useLoveTalkStore();

const add = ()=>{
  if (TalkList.length === 0) return;
  let index = Math.floor(Math.random()*8);
}
</script>

<template>
  <div id="talk">
    <button @click="add">获取一句土味情话</button>
    <ul>
      <li v-for="item in loveStore.List" :key="item.id">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
#talk{
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>