/**
 *  hooks就是数据和函数放到一起
 */
import {computed, reactive, ref} from "vue";

export function useSum(){
    let sum = ref(0)
    const addSum = ()=>{
        sum.value++;
    }
    let BigSum = computed({
        get(){
            return sum.value + 10;
        },set(val){
            sum.value = val;
        }
    })
    //向外部提供东西
    return {sum,addSum,BigSum}
}
