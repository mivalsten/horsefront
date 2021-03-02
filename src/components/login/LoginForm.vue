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
            this.$gAuth
                .signIn()
                .then((GoogleUser) => {
                    // on success do something
                    console.log("GoogleUser", GoogleUser);
                    console.log("getId", GoogleUser.getId());
                    console.log(
                        "getBasicProfile",
                        GoogleUser.getBasicProfile()
                    );
                    console.log(
                        "getAuthResponse",
                        GoogleUser.getAuthResponse()
                    );
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