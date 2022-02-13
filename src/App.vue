<template>
    <header-container></header-container>
    <content-container> </content-container>
</template>

<script>
import HeaderContainer from "./components/header/HeaderContainer.vue";
import ContentContainer from "./components/ContentContainer.vue";

export default {
    name: "App",
    components: {
        HeaderContainer,
        ContentContainer,
    },
    mounted() {},
};
</script>

<style>
#app {
    font-family: "OpenSans", sans-serif;
}
</style>
