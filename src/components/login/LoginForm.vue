<template>
    <section class="login-form">
        <el-button v-on:click="redirectToGoogle" type="primary"
            >Zaloguj z Google</el-button
        >
    </section>
</template>

<script>

import getEnv from "@/utils/env";

export default {
    methods: {
        redirectToGoogle() {
            window.location.replace(
                getEnv("VUE_APP_BASE_PATH") + "/login/google"
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
