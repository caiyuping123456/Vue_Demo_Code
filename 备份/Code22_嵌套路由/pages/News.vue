<script setup lang="ts">
import {useNews} from "@/hooks/useNews.ts";
let {newsList} = useNews();
</script>

<template>
  <div id="news">
    <h1>New新闻来了</h1>
    <ul>
      <li v-for="item in newsList" :key="item.id">
        <RouterLink to="/news/context">{{item.title}}</RouterLink>
      </li>
    </ul>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
#news{
  display: flex;
  height: 200px;
  background-color: turquoise;
  margin-top: 100px;
}
ul{
  width: 100px;
}

</style>