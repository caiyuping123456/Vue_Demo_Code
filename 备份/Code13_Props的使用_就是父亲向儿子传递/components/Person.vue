<script setup lang="ts">
import {defineProps} from 'vue'
import Person from "../../备份/Code12_TS的接口，泛型和自定义类型/components/Person.vue";
import type {Persons} from "@/types";

//接受a
//这个表示不进行限制，父亲传什么，我就接受什么
// defineProps(['a'])

//这个表示进行内容限制
// 也就是说
defineProps<{list:Persons}>()

//接受list+内容限制+限制是否必要性
defineProps<{list?:Persons}>()

//接受list+内容限制+限制是否必要性+指定默认

withDefaults(defineProps<{list?:Persons}>(),{
  //必须是一个函数,不然会爆红
  list:()=>[{id:1,name:"张三",age:20}]
})

//define一般是一个宏函数，不用进行引入
//接受a，同时保存a
// defineProps(['a','list'])
</script>

<template>
  <div id="person" >
    <h1>{{a}}</h1>
    <h1>{{list}}</h1>
    <ul>
      <li v-for="item in list" :key="item.id">
        编号：{{item.id}}-名字：{{item.name}}-年龄：{{item.age}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
#person{
  height: 500px;
  width: 75%;
  background-color: turquoise;
}
</style>