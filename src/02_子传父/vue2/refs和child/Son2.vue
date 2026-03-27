<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Son1",
  data (){
    return {
      msg: '我是son2'
    }
  },
  methods : {
    son2() {
      console.log("我是son2")
    }
  }
})
</script>

<template>
  <div class="son">
    <h1>我是son2</h1>
    {{msg}}
  </div>
</template>

<style scoped>

</style>