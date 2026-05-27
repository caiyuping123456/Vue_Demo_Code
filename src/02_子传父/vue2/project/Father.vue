<script lang="ts">
import {defineComponent} from 'vue'
import Son from "@/02_子传父/vue2/project/Son.vue";

export default defineComponent({
  name: "Father",
  components: {Son},
  data(){
    return {
      name:'爸爸',
      age:134
    }
  },
  methods:{
    sayHello(){
      console.log("我是爸爸")
    }
  },
  provide(){
    return {
      name:this.name,
      age:this.age,
      sayHello:this.sayHello
    }
  }
})
</script>

<template>
<div class="father">
  <h1>我是爸爸</h1>
  这个是我的数据：{{name}}+=====>{{age}}
  <Son/>
</div>
</template>

<style scoped>

</style>