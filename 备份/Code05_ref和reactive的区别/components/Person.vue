<script setup lang="ts">
import { ref } from "vue";
import {reactive} from "vue";


// reactive一般用于复杂类型的响应式
// 总之，reactive一般用于深层次的响应式
// 重新分配后就不是响应式
// ref不单单可以定义基本数据类型，还可以定义对象数据类型
// ref底层求的是reactive
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

const updateCar = ()=>{
  // 使用reactive不能使用直接更改变量，不然会导致页面不刷新
  // 可以使用Object的assgin方法
  // car = {brand: "雅迪",price: 20}
  let temp = {brand: "雅迪",price: 20}
  // 类似深克隆
  Object.assign(car,temp);

  // 使用ref可以直接进行修改
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

    <button @click="updateCar()">修改Car</button>
  </div>
</template>

<style scoped>
#person{
  height: 500px;
  width: 75%;
  background-color: turquoise;

}
</style>