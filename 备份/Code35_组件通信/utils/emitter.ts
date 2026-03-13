
//导入
import mitt from 'mitt'

//使用
//emitter可以绑定事件，或者触发事件
const emitter  = mitt();

//绑定事件
// 这里使用on进行绑定
emitter.on('test1',()=>{
    console.log("test1调用了")
})

emitter.on('test2',()=>{
    console.log('test2调用')
})

//解绑单个
emitter.off('test1')

//解绑多个
//清空全部
emitter.all.clear()

//触发事件
// emitter.emit('text1')
// emitter.emit('text2')
// //延时
// setTimeout(()=>{
//     emitter.emit('text1');
//     emitter.emit('text2');
// },2000)

//定时
setInterval(()=>{
    emitter.emit('text1');
    emitter.emit('text2');
},1000)

//同时暴露
export default emitter;