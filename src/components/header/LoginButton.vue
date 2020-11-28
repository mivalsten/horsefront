<template>
    <el-menu-item v-on:click="login" v-if="!authenticated" index="3">
        Zaloguj
    </el-menu-item>
    <el-menu-item v-if="authenticated" v-on:click="showProfile" index="4">
        Mój profil
    </el-menu-item>
</template>

<script>
export default {
    data() {
        return {
            authenticated: false,
        };
    },
    methods: {
        login() {
            this.$router.push("login");
            this.authenticated = true;
        },
        showProfile() {
            this.$router.push("profile");
        },
    },
};
</script>

<style>
.el-menu-item {
    display: flex;
    align-self: center;
}
</style>