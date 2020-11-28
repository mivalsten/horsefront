import { createApp } from "vue";
import router from './router';
import App from './App.vue';
import installElementPlus from './plugins/element.js';

const app = createApp(App);
installElementPlus(app);
app.use(router);

app.mount("#app");

