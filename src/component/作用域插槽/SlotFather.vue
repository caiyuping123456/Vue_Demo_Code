<script setup lang="ts" name="slotfather">

import SlotSon from "@/component/作用域插槽/SlotSon.vue";
</script>

<template>
<div id="slotfather">
  <SlotSon>
<!--    这个是默认插槽-->
    <template v-slot="params">
      {{params}}
      <ul>
        <li v-for="item in params.list" :key="item.id">
          编号：{{item.id}}  名字：{{item.name}}}
        </li>
      </ul>
    </template>

<!--    这个是具名插槽-->
    <template v-slot:qwe="params">
      {{params}}
    </template>
  </SlotSon>
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