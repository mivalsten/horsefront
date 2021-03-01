<template>
    <section class="login-form">
        <el-button v-on:click="redirectToGoogle" type="primary"
            >Zaloguj z Google</el-button
        >
    </section>
</template>

<script>
export default {
    methods: {
        redirectToGoogle() {
            window.open(
                "https://api.konwent.online/login/google",
                "DescriptiveWindowName",
                "height=650,width=500"
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