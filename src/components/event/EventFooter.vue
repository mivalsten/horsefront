<template>
    <footer class="card-footer">
        <el-button type="info" v-on:click="showDetails">Szczegóły</el-button>
        <el-button type="primary" v-on:click="register">Zapisz się</el-button>
    </footer>
</template>

<script>
import request from "../../utils/request";
export default {
    data() {},
    methods: {
        showDetails() {
            this.$router.push("details");
        },
        register() {
            request
                .attendee()
                .then(() => {})
                .catch(() => {});
        },
    },
};
</script>

<style>
.card-footer {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}
</style>