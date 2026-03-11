import {reactive} from "vue";
import type {PersonList} from "@/hooks/person.ts";


export function useStudent(){
    let studentList:PersonList[] = reactive([
        {id:123,name:"小明",age:15},
        {id:234,name:"小红",age:8},
        {id:345,name:"小黄",age:40},
        {id:456,name:"小白",age:80},
    ])
    return {studentList}
}