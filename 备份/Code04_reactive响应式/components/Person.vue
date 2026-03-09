<script setup lang="ts">
import { ref } from "vue";
import {reactive} from "vue";


// reactive一般用于复杂类型的响应式
// 总之，reactive只能用于深层次的响应式
let car = reactive({
  brand:"奔驰",
  price:100
})

let games = reactive([
    {id:1,name:"王者"},
    {id:2,name:"吃鸡"},
    {id:3,name:"原神"},
    {id:4,name:"哈哈"},
  ]
)

const addPrice = ()=>{
  console.log(11)
  car.price = car.price+100;
}


const updateGameName = ()=>{
  // @ts-ignore
  games[0].name = "xixi";
}
</script>

<template>
  <div id="person" >
    <h2>一辆：{{car.brand}},价格为：{{car.price}}</h2>
    <ul>
      <li v-for="item in games" :key="item.id">
        编号：{{item.id}}，名字：{{item.name}}
      </li>
    </ul>
    <button @click="addPrice()">修改汽车的价格</button>

    <button @click="updateGameName()">修改第一个游戏的名字</button>
  </div>
</template>

<style scoped>
#person{
  height: 500px;
  width: 75%;
  background-color: turquoise;

}
</style>