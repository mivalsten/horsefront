<template>
  <el-menu
    mode="horizontal"
    background-color="primary"
    text-color="#fff"
    active-text-color="#fff"
    :ellipsis="false"
    :router="true"
  >
    <el-menu-item index="/">Lista Sesji</el-menu-item>
    <el-menu-item index="add-session" v-if="isAdmin">Zgłoś Sesję</el-menu-item>
    <el-menu-item index="admin-panel">Panel Admina</el-menu-item>
    <el-menu-item index="login" v-if="true">Login</el-menu-item>
    <el-menu-item index="profile" v-if="isLoggedIn">Profil</el-menu-item>
  </el-menu>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProfile } from "../../stores/profile.store";
const profileState = useProfile();
const { isAdmin, isLoggedIn } = storeToRefs(profileState);
</script>
<style lang="scss">
.el-menu {
  border-bottom: none !important;
  .el-menu-item {
    * {
      text-decoration: none;
    }
  }
  .el-menu-item:hover, .el-menu-item.is-active {
    background-color: lighten($color-primary, 10%) !important;
    border-bottom: none !important;
    text-decoration: none;
  }
}
</style>
