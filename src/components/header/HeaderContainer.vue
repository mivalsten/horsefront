<template>
    <header class="app-toolbar">
        <el-row :gutter="20" type="flex">
            <el-col :span="5">
                <header-logo></header-logo>
            </el-col>
            <el-col :span="14">
                <header-nav></header-nav>
            </el-col>
            <el-col id="login-col" :span="4">
                <login-button></login-button>
            </el-col>
        </el-row>
    </header>
</template>

<script>
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import LoginButton from "./LoginButton";

export default {
    components: {
        HeaderLogo,
        HeaderNav,
        LoginButton,
    },
};
</script>

<style>
.app-toolbar {
    background: #9c27b0;
    box-sizing: border-box;
}
#login-col {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    height: 64px;
}
</style>