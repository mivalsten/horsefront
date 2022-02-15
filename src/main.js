import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import GAuth from "vue3-google-oauth2";

const app = createApp(App);
app.use(router);

const gAuthOptions = {
    clientId:
        "513565002477-bmg6sjdr2gbtcf1eon15udvr0bjkgp9n.apps.googleusercontent.com",
    scope: "email",
    prompt: "consent",
};
app.use(GAuth, gAuthOptions);

app.mount("#app");
