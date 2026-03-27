<template>
  <div class="father">
    <h1>我是老爸</h1>
    <h2>我有：{{ num }} 元</h2>
    <Son :num.sync="num" @update:num="onUpdate" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Son from "./Son.vue"

export default defineComponent({
  name: "Father",
  components: { Son },
  data() {
    return {
      num: 100
    }
  },
  methods: {
    onUpdate(newVal: number) {
      console.log('父组件收到update事件:', newVal)
      this.num = newVal
    }
  },
  watch: {
    num(newVal, oldVal) {
      console.log('num发生变化:', oldVal, '->', newVal)
    }
  }
})
</script>