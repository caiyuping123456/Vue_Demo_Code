import {defineStore} from "pinia";
import {computed, ref} from "vue";


//参数表示：第一个表示id,第二个是配置项
//注意要进行暴露
// export const useCountStore = defineStore('count',{
//     //真正存储数据的地方
//     state(){
//         return {
//             sum:6,
//             name:'李四',
//             age:20
//         }
//     },
//     //actions里面放的是一个一个的方法，用于响应组件种的”动作“
//     //可以做一些限制
//     actions:{
//         // 加法限制10
//         increment(val:number){
//             console.log("increment调用")
//             //通过this获取到存储的数据，可以进行修改
//             if(this.sum<10){
//                 this.sum+=val;
//                 this.name = Math.random().valueOf()+"哈哈哈哈";
//             }else{
//                 alert("sum最大只能为10")
//             }
//         },
//         //减法不限制
//         mut(val:number){
//             this.sum-=val;
//         }
//     },
//     //类似计算属性
//     //可以对数据进行加工
//     // 组件中也可以进行拿到这个数据
//     getters:{
//         //第一种方式：使用参数state
//         bigSum(state){
//             return state.sum *10;
//         },
//         upperName(state){
//             return state.name.toUpperCase()
//         },
//         //第二种方式：使用this（但是要保留state参数）
//         bigAge(state){
//             return this.age-10;
//         },
//         //也可以直接写箭头函数(不用return)
//         mutAge:state => state.age-100,
//     }
// })

/**
 * 组合式写法
 */
export const useCountStore = defineStore('count',()=>{
    //组合式的state写法
    const sum = ref(6);
    const name = ref('李四');
    const age = ref(20);


    //组合式的actives写法
    const increment = (val:number)=>{
        console.log("increment调用")
        //通过this获取到存储的数据，可以进行修改
        if(sum.value<10){
            sum.value+=val;
            name.value = Math.random().valueOf()+"哈哈哈哈";
        }else{
            alert("sum最大只能为10")
        }
    };

    const mut = (val:number)=>{
        sum.value-=val;
    }

    //类似计算属性
    // getters（用 computed）
    const bigSum = computed(() => sum.value * 10)
    const upperName = computed(() => name.value.toUpperCase())
    const bigAge = computed(() => age.value - 10)
    const mutAge = computed(() => age.value - 100)


    return {
        // state
        sum,
        name,
        age,

        // getters
        bigSum,
        upperName,
        bigAge,
        mutAge,

        // actions
        increment,
        mut
    }
})
