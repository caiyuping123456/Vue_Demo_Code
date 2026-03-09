// 创建Vue实例
import {createApp} from "vue";
// Vue组件挂载
import App from "./App.vue";
import router from "@/router";
//创建整个应用
const app = createApp(App)
//应用router(挂载路由)
app.use(router)
app.mount('#app')