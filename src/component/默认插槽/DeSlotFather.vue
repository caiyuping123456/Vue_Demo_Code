<script setup lang="ts" name="deslotfather">
import DeSlotSon from '@/component/默认插槽/DeSlotSon.vue'
import {reactive} from "vue";

let list = reactive([
  {id:1,name:"李白"},
  {id:2,name:"安其拉"},
  {id:3,name:"李欣"},
  {id:4,name:"老虎"},
])


</script>

<template>
<div id="deslotfather">
  <h1>这个是默认插槽</h1>
  <div id="body">
    <DeSlotSon title="吃鸡">
      <h1>M4天下无双</h1>
    </DeSlotSon>
    <DeSlotSon title="王者">
      <ul>
        <li v-for="item in list" :key="item.id">
          编号：{{item.id}}  名字：{{item.name}}}
        </li>
      </ul>
    </DeSlotSon>
    <DeSlotSon title="流量">
      <img src="D:\uniW\Vueclasss\Vue_Demo_Code\public\favicon.ico"/>
    </DeSlotSon>
  </div>

</div>
</template>

<style scoped>
#body{
  display: flex;
}
#body > *{
  margin-right: 10px;
}
</style>