import { createWebHashHistory, createRouter } from "vue-router";
import EventList from "@/components/event/EventList.vue";
import LoginForm from "@/components/login/LoginForm.vue";
import Profile from "@/components/user-profile/Profile.vue";
import DetailView from "@/components/details/DetailView.vue";
import AddSessionScreen from "@/components/session-form/AddSessionScreen.vue";
import EditSessionScreen from "@/components/session-form/EditSessionScreen.vue";
import AdminPanel from "@/components/admin-panel/AdminPanel.vue";

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
    props: true,
  },
  {
    path: "/add-session",
    name: "Dodaj sesję",
    component: AddSessionScreen,
  },
  {
    path: "/edit-session/:id",
    name: "Edytuj sesję",
    component: EditSessionScreen,
    props: true,
  },
  {
    path: "/admin-panel",
    name: "Panel Admina",
    component: AdminPanel,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
