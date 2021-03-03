<template>
    <section class="login-form">
        <el-button v-on:click="redirectToGoogle" type="primary"
            >Zaloguj z Google</el-button
        >
    </section>
</template>

<script>
import request from "../../utils/request";
export default {
    methods: {
        redirectToGoogle() {
            this.$gAuth
                .getAuthCode()
                .then((code) => {
                    const PATH = "token";
                    const req = JSON.stringify({
                        code,
                        redirect_uri: "/",
                    });
                    return request.sentAuthCode(PATH, req);
                })
                .then((res) => {
                    if (res) console.log(res);
                })
                .catch((error) => {
                    console.log("error", error);
                });
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
