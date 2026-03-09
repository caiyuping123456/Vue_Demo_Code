<script setup lang="ts">
/*
*   watch在vue3中只能监视4种数据：
*      1.情况1：监视ref定义的基本数据类型===>不用写value
*      2.情况2：监视ref定义的引用数据类型
*      3.情况3：监视reactive定义的引用数据类型
*      4.情况4：监视ref或者reactive定义的对象类型，数据中的某个属性===>
*               a.如果这个属性值不是函数类型，需要写成函数类型
*               b.如果属性值依赖是对象类型，还是建议写成函数类型
*      5.情况5：监视以上多个数据
*
* */
import {reactive, ref, watch} from 'vue'
//数据
let sum = ref(0)
let person = ref({
  name:"lisi",
  age:19
})

const add = ()=>{
  sum.value++;
}
const updateName = ()=>{
  person.value.name = "李四";
}
const updateAge = ()=>{
  person.value.age = 24;
}
const updatePerson = () =>{
  person.value = {
    name:"张三",
    age:99
  }
}

//监视ref基本数据类型
//监视函数watch
// watch(sum,(newValue,oldValue)=>{
//   console.log("以前值："+oldValue+"  现在的值："+newValue);
// })
// 可以进行随时解除
const stopWatch = watch(sum,(newValue,oldValue)=>{
  console.log("以前值："+oldValue+"  现在的值："+newValue);
  if(newValue>10){
    stopWatch();//这个是解除
  }
})

//监视ref引用数据类型
//这个就是监视地址有没有边，和属性改变无关
//如果需要监视对象内部的变化，需要开启深度监视
// 如果修改里面的属性表示新旧还是同一个值
watch(person,(newValue,oldValue)=>{
  console.log("变了");
},{deep:true})//这个就是开始进行深度监视
/*
* deep表示深度监视
* immediate表示立刻开启监视：一上来就更新一下
* */


// 情况3：监视reactive定义的引用数据类型
let car = reactive({
  name:"奔驰",
  price:100
})
const updateCarName = ()=>{
  car.name = "帕拉梅拉"
}
const updateCarPrice = ()=>{
  car.price = 1000
}
const updateCar = ()=>{
  let temp = {
    name:"兰博基尼",
    price:99
  }
  Object.assign(car,temp)
}

//可以看出，使用reactive默认是开启深度监视，，不能关闭
watch(car,(newValue,oldValue)=>{
    console.log("哈哈哈")
})


//情况4：监视ref或者reactive
let student = reactive({
  id:"123",
  name:"张三",
  class:{
    teacher:"李四",
    score:90
  }
})

const updateStudentId = ()=>{
  student.id = "9090";
}
const updateStudentName = ()=>{
  student.name = "哈哈";
}
const updateStudentTeacherName = ()=>{
  student.class.teacher = "xixi";
}
const updateStudentScore = ()=>{
  student.class.score = 100
}
const updateStudent = ()=>{
  let temp = {
    d:"000",
    name:"caiyuping",
    class:{
      teacher:"wuwuwuwu",
      score:60
    }
  }
  Object.assign(student,temp)
}

//如何监视student中的name？
//需要加工为getter函数
//可以使用箭头函数
// watch(()=>{return student.name},(newValue,oldValue)=>{
//   console.log("hahahah1")
// })
//基本类型不能直接写，引用数据类型就可以直接写
//监视score
// watch(student.class,(newValue,oldValue)=>{
//   console.log("sdsds");
// },{deep:true})
//所以推荐使用箭头函数
// watch(()=>student.class,(newValue,oldValue)=>{
//   console.log("sdsds");
// },{deep:true})

//情况5：监视上述多种数据
watch([()=>student.name,()=>student.class.score],(newValue,oldValue)=>{
  console.log("hihihi")
})
</script>

<template>
  <div id="person" >
    <h1>{{sum}}</h1>
    <button @click="add()">点我加一</button><br>
    <h1>{{"名字："+person.name +" 年龄："+person.age}}</h1>
    <button @click="updateName()">修改名字</button>
    <button @click="updateAge()">修改名字</button>
    <button @click="updatePerson()">修改名字</button>
    <br><br><br><br><br><br>
    <h1>{{"品牌："+car.name +" 价格："+car.price}}</h1>
    <button @click="updateCarName()">修改汽车品牌名字</button>
    <button @click="updateCarPrice()">修改汽车价格</button>
    <button @click="updateCar()">修改名字</button>
    <br><br><br><br><br><br>
    <h1>学生Id：{{student.id}}</h1>
    <h1>学生Name：{{student.name}}</h1>
    <h1>学生老师：{{student.class.teacher}}</h1>
    <h1>学生成绩：{{student.class.score}}</h1>
    <button @click="updateStudentId()">修改学生ID</button>
    <button @click="updateStudentName()">修改学生名字</button>
    <button @click="updateStudentTeacherName()">修改学生老师名字</button>
    <button @click="updateStudentScore()">修改学生成绩</button>
    <button @click="updateStudent()">修改学生</button>
  </div>
</template>

<style scoped>
#person{
  height: 500px;
  width: 75%;
  background-color: turquoise;
}
</style>