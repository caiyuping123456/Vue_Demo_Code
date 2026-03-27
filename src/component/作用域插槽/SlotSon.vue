<script setup lang="ts" name="slotson">
import {reactive} from "vue";

defineProps(['title'])
let list = reactive([
  {id:1,name:"李白"},
  {id:2,name:"安其拉"},
  {id:3,name:"李欣"},
  {id:4,name:"老虎"},
])
</script>

<template>
<div id="slotson">
  <h1>{{title}}</h1>
<!--  这里会将数据交给插槽使用者-->
  <slot :list="list" x="哈哈" y="123"></slot>
  <slot name="qwe" :list="list" x="哈哈" y="123"></slot>
</div>
</template>

<style scoped>
#slotson{
  height: 400px;
  width: 400px;
  background-color: red;
}

</style>