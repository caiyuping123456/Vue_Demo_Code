<script lang="ts">
import {defineComponent} from 'vue'
import Son1 from "@/02_子传父/vue2/refs和child/Son1.vue";
import Son2 from "@/02_子传父/vue2/refs和child/Son2.vue";

export default defineComponent({
  name: "Father",
  components: {Son2, Son1},
  data(){
    return {

    }
  },
  methods :{
    set1(){
      this.$refs.son1.msg = "我是son1====>修改";
    },
    set2(){
      this.$refs.son1.son1();
    },
    set3(){
      this.$refs.son2.msg = "我是son2====>修改";
    },
    set4(){
      this.$refs.son2.son2();
    },
  }
})
</script>

<template>
<div class="father">
  <h1>我是父亲</h1>
  <button @click="set1">点我修改儿子1的数据</button>
  <button @click="set2">点我调用儿子1的方法</button>
  <button @click="set3">点我修改儿子2的数据</button>
  <button @click="set4">点我调用儿子2的方法</button>
  <Son1 ref="son1"/>
  <Son2 ref="son2"/>
</div>
</template>

<style scoped>

</style>