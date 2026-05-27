<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Son1",
  data(){
    return {
      name:'',
      age:1,
    }
  },
  methods:{
    getData(){
      this.name = this.$parent.name;
      this.age = this.$parent.age;
    }
  }
})
</script>

<template>
<div class="son">
  <h1>我是Son1</h1>
  {{name}}====>{{age}}
  <button @click="getData">点击我获取父亲的属性</button>
</div>
</template>

<style scoped>

</style>