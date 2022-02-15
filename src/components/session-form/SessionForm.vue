<template>
  <el-form
    ref="formRef"
    :model="form"
    label-width="auto"
    label-position="right"
  >
    <el-form-item label="Adres e-mail">
      <el-input v-model="form.mail"></el-input>
    </el-form-item>
    <el-form-item label="Imię i nazwisko">
      <el-input v-model="form.organizerFullName"></el-input>
    </el-form-item>
    <el-form-item label="Nick do discorda">
      <el-input v-model="form.discord"></el-input>
    </el-form-item>
    <el-form-item label="Adres do roll2-">
      <el-input v-model="form.roll2"></el-input>
    </el-form-item>
    <el-form-item label="Numer telefonu">
      <el-input v-model="form.phone"></el-input>
    </el-form-item>
    <el-form-item label="Ksywka">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Organizacja">
      <el-input v-model="form.organization"></el-input>
    </el-form-item>
    <el-form-item label="Tytuł sesji">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="Opis twojej sesji">
      <el-input v-model="form.description" :rows="3" type="textarea"></el-input>
    </el-form-item>
    <el-form-item label="System/setting">
      <el-input v-model="form.game"></el-input>
    </el-form-item>
    <el-form-item label="Tagi">
      <el-input v-model="form.tags"></el-input>
    </el-form-item>
    <el-form-item label="Triggery">
      <el-input v-model="form.triggers"></el-input>
    </el-form-item>
    <el-form-item label="Narzędzia bezpieczeństwa">
      <el-input v-model="form.safetyTools"></el-input>
    </el-form-item>
    <el-form-item label="Minimalna liczba graczy">
      <el-input-number
        :min="3"
        :max="10"
        v-model="form.minimalCount"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="Maksymalna liczba graczy">
      <el-input-number
        :min="3"
        :max="10"
        v-model="form.maximalCount"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="Czy sesja jest przyjazna dla początkujących?">
      <el-switch
        v-model="form.isNewbieFriendly"
        class="ml-2"
        inline-prompt
        :active-color="success"
        :inactive-color="danger"
        active-text="T"
        inactive-text="N"
      />
    </el-form-item>
    <el-form-item label="Czy wymagasz znajomości świata/settingu">
      <el-switch
        v-model="form.isSettingFamiliarityRequired"
        class="ml-2"
        inline-prompt
        :active-color="success"
        :inactive-color="danger"
        active-text="T"
        inactive-text="N"
      />
    </el-form-item>
    <el-form-item label="Czy wymagasz włączonej kamery">
      <el-switch
        v-model="form.isCameraRequired"
        class="ml-2"
        inline-prompt
        :active-color="success"
        :inactive-color="danger"
        active-text="T"
        inactive-text="N"
      />
    </el-form-item>
    <el-form-item label="Data sesji">
      <el-select v-model="form.date">
        <el-option label="Piątek" value="fiday"></el-option>
        <el-option label="Sobota" value="saturday"></el-option>
        <el-option label="Niedziela" value="sunday"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Godzina sesji">
      <el-time-select start="10:00" end="18:00" step="4:00"></el-time-select>
    </el-form-item>
    <el-form-item label="Preferencje dotyczące narzędzi?">
      <el-input v-model="form.toolsPreference"></el-input>
    </el-form-item>
    <el-form-item label="Chcesz jeszcze coś dodać?">
      <el-input v-model="form.other" :rows="3" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">Zgłoś</el-button>
      <el-button>Wyczyść</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from "vue";
import { success, danger } from "../../consts/colors";
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
  minimalCount: 3,
  maximalCount: 3,
  isNewbieFriendly: false,
  isSettingFamiliarityRequired: false,
  isCameraRequired: false,
  userPreparation: "",
  date: "",
  time: "",
  other: "",
  toolsPreference: "",
});
</script>

<style>
.el-form {
  width: 80%;
}
</style>
