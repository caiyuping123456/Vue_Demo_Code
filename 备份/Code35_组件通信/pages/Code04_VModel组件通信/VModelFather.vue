<script setup lang="ts" name="vmodelfather">
import {ref} from "vue";

import CHUYU from "@/pages/Code04_VModel组件通信/CHUYU.vue";

//数据
let username = ref('张三');

</script>

<template>
  <div id="vmodelfather">
    <h1>父亲组件</h1>
<!--    :value="username"这里是数据绑定的一条线-->
<!--    @input="username = $event.target.value"是数据绑定的另一条线-->
<!--    解决爆红-->
<!--    方式一：使用as断言；($event.target as HTMLInputElement).value"-->
<!--    方式二：使用:(<HTMLInputElement>$event.target).value"-->
<!--    <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value">-->
<!--    这个和上面这个是等价的-->
<!--    <input type="text" v-model="username">-->

<!--    一般来说，v-model不使用在html标签上，而是使用在组件标签上-->
<!--    <CHUYU v-model="username"></CHUYU>-->
<!--    本质写法-->
<!--    第一部分：:modelValue="username"-->
<!--    第二部分： @update:modelValue="username = $event"-->
<!--    <CHUYU :modelValue="username" @update:modelValue="username = $event"></CHUYU>-->

<!--    修改v-model-->
<!--    使用这个方式的时候，子组件也要是qwe-->
<!--    这个表明，可以存在多个qwe-->
    <CHUYU v-model:qwe="username"></CHUYU>
  </div>

</template>

<style scoped>
#vmodelfather{
  background-color: wheat;
  height: 500px;
}
</style>