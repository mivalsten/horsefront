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
    path: "/details",
    name: "Szczególy sesji",
    component: DetailView,
  },
];

const base = '/hiperkon/hiperkon-frontend/'

const router = createRouter({
  history: createWebHistory(),
  routes,
  base
});

export default router;