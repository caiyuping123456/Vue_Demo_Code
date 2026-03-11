import {defineStore} from "pinia";


//参数表示：第一个表示id,第二个是配置项
//注意要进行暴露
export const useCountStore = defineStore('count',{
    //真正存储数据的地方
    state(){
        return {
            sum:6
        }
    }
})