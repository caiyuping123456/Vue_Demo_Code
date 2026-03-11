<script setup lang="ts">
import {useNews} from "@/hooks/useNews.ts";
import { useRouter } from "vue-router";
let {newsList} = useNews();
/**
 * 重定向:
 *    一开始时,不会进行跳转
 *    可以在配置文件中加redirect
 *     ,{
 *             path:'/',
 *             redirect:'/person'
 *         }
 */
let router = useRouter()
const showNews = (item:any)=>{
  // router.push({
  //   name:'xiangqing',
  //   // 注意,这里要同index中props的一致
  //   params:{
  //     id:item.id,
  //     title:item.title,
  //     context:item.context
  //   }
  // })
  //也可以使用replace
  router.replace({
    name:'xiangqing',
    // 注意,这里要同index中props的一致
    params:{
      id:item.id,
      title:item.title,
      context:item.context
    }
  })
}
</script>

<template>
  <div id="news">
    <h1>New新闻来了</h1>
    <ul>
      <li v-for="item in newsList" :key="item.id">
<!--        第一中写法-->
<!--        <RouterLink :to="`/news/context/${item.id}/${item.title}/${item.context}`">{{item.title}}</RouterLink>-->
<!--        第二种写法-->
        <RouterLink :to="{
          // 注意这种方式必须要使用name进行跳转
          // 同时params不能传数组和对象
          name:'xiangqing',
          // 注意,这里要同index中props的一致
          params:{
            id:item.id,
            title:item.title,
            context:item.context
          }
        }">{{item.title}}</RouterLink>
        <button @click="showNews(item)">查看新闻</button>
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