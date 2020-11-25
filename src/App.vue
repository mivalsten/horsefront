<template>
  <header-container></header-container>
  <update-form></update-form>
</template>

<script>
import HeaderContainer from "./components/header/HeaderContainer";
import UpdateForm from "./components/user-profile/UpdateForm.vue";

export default {
  name: "App",
  components: {
    HeaderContainer,
    UpdateForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
