import {defineStore} from "pinia";


//参数表示：第一个表示id,第二个是配置项
//注意要进行暴露
export const useCountStore = defineStore('count',{
    //真正存储数据的地方
    state(){
        return {
            sum:6,
            name:'李四',
            age:20
        }
    },
    //actions里面放的是一个一个的方法，用于响应组件种的”动作“
    //可以做一些限制
    actions:{
        // 加法限制10
        increment(val:number){
            console.log("increment调用")
            //通过this获取到存储的数据，可以进行修改
            if(this.sum<10){
                this.sum+=val;
                this.name = Math.random().valueOf()+"哈哈哈哈";
            }else{
                alert("sum最大只能为10")
            }
        },
        //减法不限制
        mut(val:number){
            this.sum-=val;
        }
    }
})