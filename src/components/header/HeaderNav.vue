<template>
    <el-menu
        mode="horizontal"
        background-color="#9c27b0"
        text-color="#fff"
        active-text-color="#fefefe"
    >
        <el-menu-item v-on:click="goToEvents" index="home"
            >Lista Sesji</el-menu-item
        >
        <el-menu-item v-if="false" index="attended">Moje Sesje</el-menu-item>
        <login-button></login-button>
    </el-menu>
</template>

<script>
import LoginButton from "./LoginButton.vue";

export default {
    components: { LoginButton },
    methods: {
        goToEvents() {
            this.$router.push("/");
        },
    },
};
</script>
<style>
.el-menu {
    border-bottom: none !important;
}
.el-menu-item > * {
    text-decoration: none;
}
</style>