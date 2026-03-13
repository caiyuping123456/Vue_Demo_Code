<script setup lang="ts" name="father">
import PropsSon from "@/pages/Code01_props/PropsSon.vue";
import {ref} from "vue";

//父亲的财产
let car = ref('奔驰');
let house = ref('碧桂园');
let mony = ref(3000);

//儿子发送数据给父亲
const sendTony = (val:string)=>{
  console.log("儿子给父亲发送数据："+val);
}

</script>

<template>
<div id="father">
  <h5>我是父亲组件</h5>
  <h3>汽车：{{car}}</h3>
  <h3>房子：{{house}}</h3>
  <h3>财产：{{mony}}</h3>
<!--  <router-link to="/propsfather/propsson">点击我出儿子</router-link><br>-->
<!--  <router-view></router-view>-->
<!--  下面传递给儿子-->
  <PropsSon :car="car" :house="house" :mony="mony" :sendTony="sendTony"/>
</div>
</template>

<style scoped>
#father{
  background-color: wheat;
  height: 500px;
}
</style>