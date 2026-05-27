<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Son",
  inject:{
    name:{default: "123"},
    age:{default:1232333},
    sayHello:{default:()=>{}}
  },
  methods:{
    getFather(){
      this.sayHello();
    }
  }
})
</script>

<template>
<div class="son">
  我是儿子
  <h2>这个是父亲的数据：{{this.name}}==={{this.age}}}</h2>
  <button @click="getFather">点击我执行父亲的方法</button>
</div>
</template>

<style scoped>

</style>