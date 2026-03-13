// 创建Vue实例
import {createApp} from "vue";
// Vue组件挂载
import App from "./App.vue";
import {router} from "@/router";
// import emitter from "@/pages/utils/emitter.ts";

//创建整个应用
const app = createApp(App)

app.use(router)

app.mount('#app')