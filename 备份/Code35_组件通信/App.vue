<script setup lang="ts" name="App">
/**
 * 组件的通信：
 *    方式一：使用props
 *        父亲传递给儿子：
 *            1. 在父亲中通过：<PropsSon :car="car" :house="house" :mony="mony"/>进行传递给儿子
 *            2. 在儿子中通过：defineProps(['car','house','mony'])接受父亲传递的数据
 *        儿子传递给父亲：
 *            1. 在父亲中定义一个回调函数：
 *                  const sendTony = (val:string)=>{
 *                      console.log("儿子给父亲发送数据："+val);
 *                  }
 *            2. 父亲传输函数给儿子： <PropsSon :car="car" :house="house" :mony="mony" :sendTony="sendTony"/>
 *            3. 儿子调用：<button @click="props.sendTony(tony)">儿子发送数据给父亲</button>
 *    方式二：使用自定义事件
 *         父亲传递数据给儿子：
 *         儿子传递数据给父亲：
 *            1. 父亲写函数：
 *                const test = (val:string)=>{
 *                    console.log("abcabc哈哈哈哈哈"+val);
 *                    tony.value = val;
 *                }
 *            2. 父亲传输自定义事件：<MyselfSon @abc="test"/>
 *            3. 儿子进行事件的接受：const emits = defineEmits(['abc'])
 *            4. 儿子进行事件的回调：<button @click="emits('abc',tony)">测试</button>
 *            5. 父亲进行数据的回显：<h2>获取到儿子的数据：{{tony}}</h2>
 *    方式三：使用mitt
 *            1. 使用前要先进行安装：npm i mitt
 *                这里放到tools目录或者utils目录下
 *            2. 新建一个emitter.ts：里面进行新建就可以
 *            3. 在main下引用
 *            4. 在emitter中进行绑定事件等操作
 *            本质就是只要可以摸到emitter，就可以进行组件通信，所以最后进行删除啥的emitter.all.clear()
 *            原理就是总线
 *
 *    方式四：使用v-model===>UI组件库大量使用了v-model
 *            1. v-model使用在html标签上
 *            2. v-model使用再组件上
 *              注意：
 *    方式五：使用$sttrs进行组件通信：===>用于爷爷传递给孙子
 *            1.其实父亲传了，不过是存在了attrs中，必须使用defineProps才能放到props中
 *            这里就实现了爷爷向孙子进行通信
 *    方式六：使用@refs和$parent进行组件通信
 *          $refs：用于父亲===>儿子
 *          $parent：用于儿子====>父亲
 *            注意：如果一个响应式对象在响应式里面，里面的响应式步自动解包
 *    方式七：provider_inject=====>用于爷爷和孙子之间，不会利用中间进行传递
 *          这个是个隔代通信
 */
</script>

<template>
  <div id="app">
   <h2>组件间的通信</h2><br>
    <div class="main-layout">
      <div id="body">
        <router-link to="/propsfather">1.props组件通信</router-link><br>
        <router-link to="/myselffather">2.自定义组件通信</router-link><br>
        <router-link to="/mittfather">3.mitt组件通信</router-link><br>
        <router-link to="/vmodelfather">4.v-model组件通信</router-link><br>
        <router-link to="/attrsFather">5.attrs组件通信</router-link><br>
        <router-link to="/method6Father">6.$ref和$parent组件通信</router-link><br>
        <router-link to="/providerInjectFather">7.providerInject组件通信</router-link><br>
      </div>
      <div id="content">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<style scoped>
.main-layout{
  display: flex;
  gap: 10px;
}
#app h2{
  height: 30px;
}

#body{
  background-color: green;
  width: 200px;
  height: 600px;
}

#content{
  background-color: skyblue;
  flex-grow: 1;
}
</style>