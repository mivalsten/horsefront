import { createWebHistory, createRouter } from "vue-router";
import EventList from "@/components/event/EventList.vue";
import LoginForm from "@/components/login/LoginForm.vue";
import Profile from "@/components/user-profile/Profile.vue";
import DetailView from "@/components/details/DetailView.vue";

const routes = [
    {
        path: "/",
        name: "Eventy",
        component: EventList,
    },
    {
        path: "/login",
        name: "Zaloguj się",
        component: LoginForm,
    },
    {
        path: "/profile",
        name: "Twój Profil",
        component: Profile,
    },
    {
        path: "/details/:id",
        name: "details",
        component: DetailView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    mode: "hash",
    routes,
});

export default router;
