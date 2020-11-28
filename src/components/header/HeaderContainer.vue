<template>
    <header class="app-toolbar">
        <el-row :gutter="20" type="flex">
            <el-col :span="5">
                <header-logo></header-logo>
            </el-col>
            <el-col :span="14">
                <header-nav></header-nav>
            </el-col>
        </el-row>
    </header>
</template>

<script>
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

export default {
    components: {
        HeaderLogo,
        HeaderNav,
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