import { createApp } from 'vue'
import router from "./router";
import App from './App.vue'
import store from "./store";
import "./style.css";

// import * as filters from './filters'
// createApp(App).mount('#app')


const app = createApp(App);
app.use(router).use(store).mount("#app");
