
//这是一个规范
export interface PersonInter {
    id:number,
    name:string,
    age:number
}

//可以直接进行自定义类型
export type Persons = Array<PersonInter>