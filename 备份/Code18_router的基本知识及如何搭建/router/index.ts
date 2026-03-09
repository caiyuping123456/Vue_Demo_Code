// 创建一个路由器

// 1. 引入createRouter
import {createRouter,createWebHistory} from "vue-router";

// 3. 引入一个个的路由组件
import Person from "@/components/Person.vue";
import Student from "@/components/Student.vue";

// 2. 创建路由器
const router = createRouter({
    //4. 路由器的工作模式
    history:createWebHistory(),
    // 管理多个路由（路由规则）
    routes:[
        {
            path:'/person',
            component:Person
        },
        {
            path:'/student',
            component:Student
        },
    ]
})

// 5. 暴露路由
export default router;