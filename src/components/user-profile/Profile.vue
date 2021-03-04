<template>
    <div class="profile">
        <update-form :profile="profile" :nickname="nickname"></update-form>
        <h2>Sesje, w których uczestniczysz</h2>
        <attended-data :nickname="nickname"></attended-data>
        <!-- <h2>Sesje, które prowadzisz</h2>
        <organized-data></organized-data> -->
    </div>
</template>

<script>
import UpdateForm from "./UpdateForm.vue";
import AttendedData from "./AttendedData";
import request from "../../utils/request";
// import OrganizedData from "./OrganizedData";

export default {
    components: { UpdateForm, AttendedData },
    data() {
        return {
            profile: {},
            nickname: "",
        };
    },
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
</style>