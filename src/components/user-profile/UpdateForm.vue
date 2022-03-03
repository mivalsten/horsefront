<template>
  <div class="form-container" lang="pl" title="">
    <el-alert
      :title="profileStore.message.title"
      :type="profileStore.message.type"
      show-icon
      close-text="Dzięki!"
      effect="dark"
      v-if="submitRef"
    >
    </el-alert>
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
      <el-form-item label="Imię i nazwisko" prop="name" required>
        <el-input
          v-model="form.name"
          placeholder="np. Joanna Końska"
        ></el-input>
      </el-form-item>
      <el-form-item label="Adres e-mail" prop="email" required>
        <el-input
          v-model="form.email"
          placeholder="np. konline2022@example.com"
          type="email"
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
import { storeToRefs } from "pinia";
import { reactive, ref } from "vue";
import type { ElForm } from "element-plus";
import { useProfile } from "../../stores/profile.store";
import { profileFormValidator } from "../../validators/profile-form-validator";

type FormInstance = InstanceType<typeof ElForm>;

const profileStore = useProfile();
profileStore.fillProfile();
const { profileData } = storeToRefs(profileStore);
const form = reactive(profileData.value);
const formRef = ref<FormInstance>();
const submitRef = ref(false);
const rules = reactive(profileFormValidator);

const onSubmit = (formEl) => {
  if (formEl) {
    formEl.validate((valid) => {
      if (valid) {
        profileStore.editUserProfile(formEl.model);
        submitRef.value = true;
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
