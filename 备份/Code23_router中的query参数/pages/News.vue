<script setup lang="ts">
import {useNews} from "@/hooks/useNews.ts";
let {newsList} = useNews();
</script>

<template>
  <div id="news">
    <h1>New新闻来了</h1>
    <ul>
      <li v-for="item in newsList" :key="item.id">
<!--        这里使用模板字符串-->
<!--        这是第一种写法-->
<!--        <RouterLink :to="`/news/context?id=${item.id}&title=${item.title}&context=${item.context}`">{{item.title}}</RouterLink>-->

<!--        这是第二种写法-->
        <RouterLink :to="{
          path:'/news/context',
          query:{
            id:item.id,
            title:item.title,
            context:item.context
          }
        }">{{item.title}}</RouterLink>
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