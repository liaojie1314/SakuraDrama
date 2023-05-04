import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css"; // 引入css
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

const app = createApp(App);

const pinia = createPinia();

// 将所有 store 数据持久化到本地存储中
window.addEventListener("beforeunload", () => {
  localStorage.setItem("pinia-state", JSON.stringify(pinia.state.value));
});

// 从本地存储中读取数据并设置为初始状态
const stateFromStorage = JSON.parse(localStorage.getItem("pinia-state"));
if (stateFromStorage) {
  pinia.state.value = stateFromStorage;
}

app.use(ElementPlus);
app.use(pinia);
app.use(vue3videoPlay);
app.use(router);

app.mount("#app");
