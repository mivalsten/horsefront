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
    <!-- <el-menu-item index="attended">Moje Sesje</el-menu-item> -->
    <el-menu-item index="add-session">Zgłoś Sesję</el-menu-item>
    <el-menu-item index="login">Login</el-menu-item>
    <el-menu-item index="profile">Profile</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods: {},
};
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
