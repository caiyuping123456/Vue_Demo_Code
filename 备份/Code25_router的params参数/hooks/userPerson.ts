import {reactive} from "vue";
import type {PersonList} from "@/hooks/person.ts";


export function usePerson(){
    let personList : Array<PersonList> = reactive([
        {id:1,name:"张三",age:20},
        {id:2,name:"李四",age:22},
        {id:3,name:"王五",age:24},
        {id:4,name:"赵六",age:27}
    ])

    return {personList}
}