<template>
    <div class="form-container">
        <el-form label-width="120px">
            <div class="p-field">
                <el-form-item label="Nick do discorda">
                    <el-input
                        type="text"
                        v-model="nickname"
                        id="discord"
                        v-on:blur="onBlur"
                        placeholder="np. RandomKoń#2021"
                    ></el-input>
                </el-form-item>

                <small id="username2-help" class="p-invalid" v-if="!valid"
                    >To nie jest prawidłowy nick do Discorda</small
                >
            </div>
        </el-form>
    </div>
    <el-button type="primary" v-on:click="onSubmit"> Zapisz zmiany </el-button>
</template>

<script>
import request from "../../utils/request";

export default {
    data() {
        return {
            nickname: "",
            valid: true,
            profile: {},
        };
    },
    methods: {
        onBlur() {
            //Pattern for discord nickname
            const pattern = /.{3,32}#[0-9]{4}$/;
            this.valid = this.nickname.match(pattern);
        },

        onSubmit() {
            this.profile.discord = this.nickname;
            request
                .updateUserProfile(JSON.stringify(this.profile))
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    components: {},
    mounted() {
        request
            .getUserProfile()
            .then((res) => {
                this.profile = res.data;
                this.nickname = this.profile.discord;
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>

<style>
.form-container {
    width: 90%;
    margin: auto;
}
</style>