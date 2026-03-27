<template>
  <div class="son">
    <h1>我是Son</h1>
    <button @click="setNum">点我花老爸的钱</button>
    <p>调试：当前收到的num = {{ num }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Son",
  props: ['num'],
  methods: {
    setNum() {
      console.log('1. 按钮被点击')
      console.log('2. 当前num值:', this.num)
      console.log('3. 将要emit的值:', this.num - 1)
      this.$emit('update:num', this.num - 1)
      console.log('4. emit已完成')
    }
  }
})
</script>