<template>
  <section class="login-form">
    <el-button v-on:click="redirectToGoogle" type="primary"
      >Zaloguj z Google</el-button
    >
    <el-button v-on:click="fbLogin" type="primary"
      >Zaloguj z Facebookiem</el-button
    >
  </section>
</template>
<script>
//import getEnv from "@/utils/env";

export default {
  methods: {
    redirectToGoogle() {
      window.location.replace(process.env.VUE_APP_API_PATH + "/login/google");
    },
    fbLogin() {
      window.FB.login(
        function (response) {
          if (response.authResponse) {
            fetch(process.env.VUE_APP_API_PATH + "/login/facebook", {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(response.authResponse),
            })
              .then((response) => response.json())
              .then((response) => (window.location.href = response.detail));
          }
        },
        { scope: "email" }
      );
    },
  },
};
</script>

<style>
.login-form {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
