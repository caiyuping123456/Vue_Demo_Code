<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
  name: "brother1",
  data(){
    return {
      name:"我是brother",
      age:14
    }
  },
  methods:{
    sayBrother(){
      console.log("我是brother1")
    },
    sendBus(){
      EventBus .$emit()
    }
  }
})
</script>

<template>

</template>

<style scoped>

</style>