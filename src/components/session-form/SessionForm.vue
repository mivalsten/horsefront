<template>
  <el-form :model="form">
    <el-form-item label="Adres e-mail"></el-form-item>
  </el-form>
</template>

<script>
import { reactive } from "vue";
const form = reactive({
  mail: "",
  organizerFullName: "",
  discord: "",
  roll20Mail: "",
  phone: "",
  organizerDisplayName: "",
  organization: "",
  title: "",
  description: "",
  game: "",
  tags: [""],
  triggers: [""],
  safetyTools: [""],
  minimalCount: 0,
  maximalCount: 0,
  isNewbieFriendly: false,
  isSettingFamiliarityRequired: false,
  isCameraRequired: false,
  userPreparation: "",
  date: "",
  time: "",
  other: "",
  toolsPreference: "",
});
export default {};
</script>

<style></style>
