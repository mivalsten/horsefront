import { createApp } from "vue";
// import VueRouter from 'vue-router'
import App from './App.vue'
import installElementPlus from './plugins/element.js'

const app = createApp(App);
installElementPlus(app);
// app.use(VueRouter);

app.mount("#app")

