<script lang="ts">
import {defineComponent} from 'vue'
import Son1 from "@/02_子传父/vue2/$parent/Son1.vue";
import Son2 from "@/02_子传父/vue2/$parent/Son2.vue";

export default defineComponent({
  name: "Father",
  components: {Son2, Son1},
  data(){
    return {
      name:"小米",
      age:14
    }
  },
  methods :{
    sayHello(){
      console.log("哈哈哈哈，我是父亲")
    }
  }
})
</script>

<template>
<div class="father">
  <h1>我是father</h1>
  我的数据是：{{name}}===>{{age}}
  <Son1/>
  <Son2/>
</div>
</template>

<style scoped>

</style>