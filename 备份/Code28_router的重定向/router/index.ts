// 创建一个路由器

// 1. 引入createRouter
import {createRouter,createWebHashHistory} from "vue-router";

// 3. 引入一个个的路由组件
import Person from "@/pages/Person.vue";
import Student from "@/pages/Student.vue";
import Teacher from "@/pages/Teacher.vue"
import News from "@/pages/News.vue"
import Context from "@/pages/Context.vue";
import RouterUUUU from "@/pages/RouterUUUU.vue";


// 2. 创建路由器
const router = createRouter({
    //4. 路由器的工作模式
    history:createWebHashHistory(),
    // 管理多个路由（路由规则）
    routes:[
        {
            // 路由的命名
            name:'ren',
            path:'/person',
            component:Person
        },
        {
            name:'xuesheng',
            path:'/student',
            component:Student
        },
        {
            name:'laoshi',
            path:'/teacher',
            component:Teacher
        },
        {
            name:'xinwen',
            path:'/news',
            component:News,
            children:[
                {
                    name:'xiangqing',
                    // 这个表示一定要进行传值
                    // 可以使用？标识进行标识可以不传
                    path:'context/:id/:title/:content?',
                    component:Context,
                    // 表示将一个个的参数转为props参数
                    // 第一种写法
                    // props:true
                    // 第二种写法;;参数表示；route
                    props(route){
                        return route.params;
                    }
                    // 第三种写法
                    // props:{
                    //     a:100,
                    //     b:200,
                    //     c:300
                    // }


                }
            ]
        }
        ,{
            name:'routeU',
            path:'/routeU',
            component:RouterUUUU
        }
        ,{
            path:'/',
            redirect:'/person'
        }
    ]
})

// 5. 暴露路由
export default router;