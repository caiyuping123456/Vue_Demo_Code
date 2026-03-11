<script setup lang="ts">
import {useNews} from "@/hooks/useNews.ts";
let {newsList} = useNews();
/**
 * 下面的是params参数
 *    直接在url后面加/参数/....
 *    必须在index.ts中进行占位
 *
 *    第一种写法：将路由收到的所有params参数作为props传递给组件========>props:true
 *
 *    第二种写法：可以自己决定将什么作为propos给路由组件
 */
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