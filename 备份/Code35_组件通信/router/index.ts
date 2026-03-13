import {createRouter, createWebHistory} from "vue-router";

import PropsFather from "@/pages/Code01_props/PropsFather .vue";
import MyselfFather from "@/pages/Code02_自定义事件/MyselfFather .vue";
import Index from '@/pages/index.vue'
import MittFather from "@/pages/Code03_mitt组件通信/MittFather .vue";
import VModelFather from "@/pages/Code04_VModel组件通信/VModelFather.vue";
import AttrsFather from "@/pages/Code05_attrs实现组件通信/AttrsFather.vue"
import Method6Father from "@/pages/Code06_$refs和$parent的组件通信/Method6Father.vue"
import ProviderInjectFather from "@/pages/Code07_provider_inject实现组件通信/ProviderInjectFather.vue";

export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'index',
            path:'/',
            component:Index
        },
        {
            name:'PropsFather',
            path:'/propsfather',
            component:PropsFather,
            // children:[
            //     {
            //         name:'PropsSonr',
            //         path:'propsson',
            //         component:PropsSon
            //     }
            // ]
        },
        {
            name:'MyselfFather',
            path:'/myselffather',
            component:MyselfFather
        },
        {
            name:'MittFather',
            path:'/mittfather',
            component:MittFather
        },
        {
            name:'VmodelFather',
            path:'/vmodelfather',
            component:VModelFather
        },
        {
            name:'AttrsFather',
            path:'/attrsFather',
            component:AttrsFather
        },
        {
            name:'Method6Father',
            path:'/method6Father',
            component:Method6Father
        },
        {
            name:'ProviderInjectFather',
            path:'/providerInjectFather',
            component:ProviderInjectFather
        },
    ]
})