import type {PersonList} from "@/hooks/person.ts";
import {reactive} from "vue";


export function useTeacher(){
    let teachList:PersonList[] = reactive([
        {id:22,name:'aa',age:44},
        {id:33,name:'bb',age:55},
        {id:44,name:'cc',age:66},
        {id:55,name:'dd',age:77},
    ])

    return {teachList}
}