import { createWebHistory, createRouter } from "vue-router";
import EventList from "@/components/event/EventList.vue";
import LoginForm from "@/components/login/LoginForm.vue";
import Profile from "@/components/user-profile/Profile.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;