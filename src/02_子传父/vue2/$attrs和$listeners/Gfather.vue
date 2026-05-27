<script lang="ts">
import {defineComponent} from 'vue'
import Father from "@/02_子传父/vue2/$attrs和$listeners/Father.vue";

export default defineComponent({
  name: "Gfather",
  components: {Father},
  data(){
    return {
      GFmsg:"我是爷爷，哈哈哈哈",
      SunMsg:''
    }
  },
  methods:{
    sayHello(){
      console.log("我是爷爷")
    },
  }
})
</script>

<template>
<div class="Gfather">
  <h1>我是爷爷</h1>
  <h2>我自己的数据：{{GFmsg}}</h2>
  <h3>孙子的数据：{{SunMsg}}</h3>
  <Father :GFmsg="GFmsg" @sayHello="sayHello"/>
</div>
</template>

<style scoped>

</style>