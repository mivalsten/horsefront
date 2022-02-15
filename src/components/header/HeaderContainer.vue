<template>
  <header class="app-toolbar">
    <header-logo></header-logo>
    <header-nav></header-nav>
  </header>
</template>

<script>
import HeaderLogo from "./HeaderLogo.vue";
import HeaderNav from "./HeaderNav.vue";

export default {
  components: {
    HeaderLogo,
    HeaderNav,
  },
};
</script>

<style lang="scss">
.app-toolbar {
  background: $color-primary;
  box-sizing: border-box;
  width: inherit;
  display: flex;
  align-items: center;
  margin-bottom: 2em;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
