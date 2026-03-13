<script setup lang="ts" name="son">

//儿子接受父亲的财产
import {ref} from "vue";

let tony = ref('芭比娃娃');
//使用泛型接受
let props = defineProps<{
  car:string;
  house:string;
  mony:number,
  sendTony:(val:string)=>void;
}>();

//指定默认值;
// interface Props {
//   car: string
//   house?: string        // 可选属性
//   money?: string        // 建议拼写为 money // 可选值
//   sendTony?: (toy: string) => void
// }
//
// const props = withDefaults(defineProps<Props>(), {
//   house: '小别墅',
//   money: '100万',
//   sendTony: () => {}    // 提供空函数避免调用时报错
// })

</script>

<template>
<div id="son">
  <h1>我是儿子组件</h1>
  <h3>儿子继承汽车：{{props.car}}</h3>
  <h3>儿子继承房子：{{props.house}}</h3>
  <h3>儿子继承财产：{{props.mony}}</h3>
  <button @click="props.sendTony(tony)">儿子发送数据给父亲</button>
</div>
</template>

<style scoped>
#son{
background-color: violet;
  height: 300px;
}
</style>