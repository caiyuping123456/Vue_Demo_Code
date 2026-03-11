<script setup lang="ts" name="LoveTalk">

import {reactive} from "vue";
import {useLoveTalkStore} from "@/store/loveTalk.ts";
import {storeToRefs} from "pinia";
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
const {List} = storeToRefs(loveStore)
/**
 * 下面进行subscribe的使用。
 * 在 Pinia 中，store.$subscribe() 是一个用于监听 store 状态（state）变化的方法。它的回调函数接收两个参数：
 * 这个就是watchEffect
 * mutation：描述“这次变化是怎么发生的”
 * state：当前 store 的最新完整状态（只读）
 */
loveStore.$subscribe((mutate,state)=>{
  console.log("数据发生变化");
})


const add = ()=>{
  let index = Math.floor(Math.random()*8)
  loveStore.add(TalkList[index]!)
}
</script>

<template>
  <div id="talk">
    <button @click="add">获取一句土味情话</button>
    <ul>
      <li v-for="item in List" :key="item.id">
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