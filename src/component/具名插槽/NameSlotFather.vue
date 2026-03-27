<script setup lang="ts" name="nameslotfather">
import DeSlotSon from '@/component/默认插槽/DeSlotSon.vue'
import {reactive} from "vue";
import NameSlotSon from "@/component/具名插槽/NameSlotSon.vue";

let list = reactive([
  {id:1,name:"李白"},
  {id:2,name:"安其拉"},
  {id:3,name:"李欣"},
  {id:4,name:"老虎"},
])


</script>

<template>
<div id="nameslotfather">
  <h1>这个是具名插槽</h1>
  <h1>注意，默认插槽的名字是default</h1>
  <div id="body">
    <NameSlotSon title="吃鸡">
        <template v-slot:s3>
          <h1>M4天下无双</h1>
        </template>
<!--      也可以这样写-->
        <template #s2>
          <h1>sc天下无双</h1>
        </template>
        <template v-slot:s1>
          <h1>akm天下无双</h1>
        </template>
    </NameSlotSon>
<!--    <NameSlotSon title="王者">-->
<!--      <ul>-->
<!--        <li v-for="item in list" :key="item.id">-->
<!--          编号：{{item.id}}  名字：{{item.name}}}-->
<!--        </li>-->
<!--      </ul>-->
<!--    </NameSlotSon>-->
<!--    <NameSlotSon title="流量">-->
<!--      <img src="D:\uniW\Vueclasss\Vue_Demo_Code\public\favicon.ico"/>-->
<!--    </NameSlotSon>-->
  </div>

</div>
</template>

<style scoped>
#body ,#content{
  display: flex;
}
#body > *{
  margin-right: 10px;
}
</style>