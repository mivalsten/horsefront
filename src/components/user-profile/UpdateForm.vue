<template>
  <div class="form-container" lang="pl" title="">
    <el-form
      label-width="auto"
      label-position="right"
      :model="form"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="Nick do discorda" prop="discord" required>
        <el-input
          v-model="form.discord"
          placeholder="np. RandomKoń#2021"
        ></el-input>
      </el-form-item>
      <el-form-item label="Imię i nazwisko" prop="fullName" required>
        <el-input
          v-model="form.fullName"
          placeholder="np. Joanna Końska"
        ></el-input>
      </el-form-item>
      <el-form-item label="Twój pseudonim" prop="nickName" required>
        <el-input v-model="form.nickName" placeholder="np. Koń"></el-input>
      </el-form-item>
      <el-form-item label="Adres e-mail" prop="emailAddress" required>
        <el-input
          v-model="form.emailAddress"
          placeholder="np. konline2022@example.com"
        ></el-input>
      </el-form-item>
      <el-form-item label="Organizacja" prop="organisation">
        <el-input
          v-model="form.organisation"
          placeholder="np. Avangarda"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(formRef)">
          Zapisz zmiany
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { ElForm } from "element-plus";
import { UserProfileForm } from "../../models/UserProfile";
import { useProfile } from "../../stores/profile.store";

type FormInstance = InstanceType<typeof ElForm>;

const profileStore = useProfile();
const form = reactive(UserProfileForm);
const formRef = ref<FormInstance>();
const rules = reactive({
  discord: [
    {
      required: true,
      message: "Podaj nam swój nick do discorda",
      trigger: "blur",
    },
  ],
  fullName: [
    {
      required: true,
      message: "Podaj nam swoje imię i nazwisko",
      trigger: "blur",
    },
  ],
  displayName: [
    {
      required: true,
      message: "Podaj nam swój pseudonim. Będzie on wyświetlany w aplikacji",
      trigger: "blur",
    },
  ],
  emailAddress: [
    {
      required: true,
      message: "Podaj nam swój adres e-mail",
      trigger: "blur",
    },
  ],
  organisation: {},
});

const onSubmit = (formEl) => {
  if (formEl) {
    formEl.validate((valid) => {
      if (valid) {
        profileStore.editUserProfile(formEl.model);
      }
    });
  }
};
</script>

<style>
.form-container {
  width: 90%;
  margin: auto;
}
</style>
