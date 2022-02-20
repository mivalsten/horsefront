<template>
  <footer class="card-footer">
    <el-button type="info" @click="showDetails">Szczegóły</el-button>
    <el-button type="primary" :disabled="!isComplete" v-if="isLoggedIn">
      Zapisz się
    </el-button>
    <el-button type="warning" v-if="isAdmin && isLoggedIn">Edytuj</el-button>
  </footer>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useProfile } from "../../stores/profile.store";
const profileState = useProfile();
const { isComplete, isAdmin, isLoggedIn } = storeToRefs(profileState);
const router = useRouter();
const props = defineProps({
  id: Number,
});

const showDetails = () => {
  router.push({ name: "details", params: { id: props.id } });
};
// import request from "../../utils/request";
// export default {
//   props: ["id"],
//   data() {
//     return {
//       authenticated: false,
//     };
//   },
//   methods: {
//     showDetails() {
//       this.$router.push({ name: "details", params: { id: this.id } });
//     },
//     auth(value) {
//       this.authenticated = value;
//     },
//     register() {
//       const path = new URL(this.url).pathname;
//       request
//         .attendee(path)
//         .then((res) => {
//           switch (res.response.status) {
//             case 200:
//               this.$emit("sign-up", "Jesteś na liście rezerwowej");
//               break;
//             case 201:
//               this.$emit("sign-up", "Zapisałeś się na sesję. Miłej gry");
//           }
//         })
//         .catch((err) => {
//           switch (err.response.status) {
//             case 420:
//               this.$emit(
//                 "sign-up",
//                 "Nie możesz zapisać się na sesję, którą organizujesz"
//               );
//               break;
//             case 404:
//               this.$emit(
//                 "sign-up",
//                 "Nie znaleziono sesji, na którą chcesz się zapisać"
//               );
//               break;
//             case 500:
//               this.$emit(
//                 "sign-up",
//                 "Nie możemy cię zapisać na tę sesję, nie wiemy dlaczego"
//               );
//               break;
//             default:
//               this.$emit(
//                 "sign-up",
//                 "Wystąpił nieznany błąd:" + err.response.status
//               );
//           }
//         });
//     },
//   },
// };
</script>

<style>
.card-footer {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>
