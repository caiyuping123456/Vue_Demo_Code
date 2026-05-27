<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Son",
  props: ['GFmsg'],
  data(){
    return {
      msg:''
    }
  },
  methods:{
    getYEYE(){
      this.$emit('sayHello')
    }
  }
})
</script>

<template>
<div class="son">
  <h1>我是儿子</h1>
  <h2>这个是爷爷的数据：{{GFmsg}}</h2>
  <button @click="getYEYE">这个是调用爷爷的方法</button>
</div>
</template>

<style scoped>

</style>