// 创建Vue实例
import {createApp} from "vue";
// Vue组件挂载
import App from "./App.vue";
//引入pinia
import { createPinia } from 'pinia'

//创建整个应用
const app = createApp(App)

//创建pinia
const pinia = createPinia()
//安装pinia
app.use(pinia)

app.mount('#app')