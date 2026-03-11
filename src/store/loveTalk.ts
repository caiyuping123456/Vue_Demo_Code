import {defineStore} from "pinia";
import {reactive} from "vue";

interface talk{
    id:number,
    title:string
}

export const useLoveTalkStore = defineStore('lovetalk',{
    actions:{
        add(val:talk){
            this.List.push(val);
        }
    },
    //数据
    state(){
        return {
            //完成刷新不丢失
            List : reactive<talk[]>([
                {id:8,title:"我是小华"},
            ])
        }
    }
})