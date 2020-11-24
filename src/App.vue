<template>
  <header-container></header-container>
</template>

<script>
import HeaderContainer from './components/header/HeaderContainer'

export default {
  name: 'App',
  components: {
    HeaderContainer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
