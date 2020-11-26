<template>
    <el-button v-if="!authenticated" type="primary">Zaloguj</el-button>
    <el-button v-if="authenticated" type="primary">Mój profil</el-button>
</template>

<script>
export default {
    data() {
        return {
            authenticated: false,
        };
    },
};
</script>

<style>
.el-button {
    display: flex;
    align-self: center;
}
</style>