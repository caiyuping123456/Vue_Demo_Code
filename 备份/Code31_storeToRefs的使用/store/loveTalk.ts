import {defineStore} from "pinia";
import {reactive} from "vue";

interface talk{
    id:number,
    title:string
}

export const useLoveTalkStore = defineStore('lovetalk',{
    actions:{

    },
    //数据
    state(){
        return {
            List : reactive<talk[]>([
                {id:8,title:"我是小华"},
            ])
        }
    }
})