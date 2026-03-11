<script setup lang="ts" name="App">
import Count from "@/component/Count.vue";
import LoveTalk from "@/component/LoveTike.vue";

/**
 * 下面开始搭建pinia环境
 * 下面是pinia的环境配置步骤：
 *    1. 在ts中引入pinia===>createPinia
 *    2. 创建pinia实例（在ts中）
 *    3. 安装pinia（也是在ts中进行安装）
 *
 *   下面进行pinia的数据存储：
 *      1. 新建一个store文件夹（目录）====>这里存储pinia要存储的东西
 *      2. 里面新建一个ts，用于具体存储的文件
 *      3. 定义pinia，里面写：
 *          export const useCountStore = defineStore('count',{
 *              //真正存储数据的地方
 *              state(){
 *                  return {
 *                          sum:6
 *                  }
 *              }
 *          })
 *    下面开始使用pinia获取数据:
 *        1. 第一步就是组件中引入store
 *        2. import {useCountStore} from '@/store/count'
 *        3. 就可以使用state中的数据了：const countStore = useCountStore();
 *
 *     下面开始存储pinia数据：
 *        1.
 *
 *
 *      注意： 如果是在外面自己定义的ref，需要使用value，如果是在reactive里面定义的ref，会自己进行拆包
 */
</script>

<template>
  <div id="app">
   <h2>我是APP组件</h2>
    <Count/>
    <LoveTalk/>
  </div>
</template>

<style scoped>

</style>