<script setup lang="ts">

import {useSum} from "@/hooks/useSum.ts";
import {useDogs} from "@/hooks/useDog.ts";

/**
 *  hooks就是数据和函数放到一起
 *  注意，hooks中可以写钩子
 */
const {sum,addSum,BigSum} = useSum()
const {dogList,getDog} = useDogs()
</script>

<template>
  <div id="person" >
    <h1>当前求和为：{{sum}},加10后的值{{BigSum}}</h1>
    <button @click="addSum">点我求和加一</button>
    <hr>
    <button @click="getDog">获取狗图片</button>
    <img v-for="(dog,index) in dogList" :key="index" :src="dog" alt="1213">
  </div>
</template>

<style scoped>
#person{
  height: 500px;
  width: 75%;
  background-color: turquoise;
}
img{
  height: 100px;
}
</style>