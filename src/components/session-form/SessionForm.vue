<template>
  <el-form
    ref="sessionReference"
    :model="form"
    label-width="auto"
    label-position="right"
    :rules="rules"
  >
    <el-form-item label="Adres e-mail" required>
      <el-input v-model="form.mail"></el-input>
    </el-form-item>
    <el-form-item label="Imię i nazwisko" required>
      <el-input v-model="form.fullName"></el-input>
    </el-form-item>
    <el-form-item label="Nick do discorda" required>
      <el-input v-model="form.discord"></el-input>
    </el-form-item>
    <el-form-item label="Adres do roll20" required>
      <el-input v-model="form.roll20Mail"></el-input>
    </el-form-item>
    <el-form-item label="Numer telefonu" required>
      <el-input v-model="form.phone"></el-input>
    </el-form-item>
    <el-form-item label="Ksywka" required>
      <el-input v-model="form.displayName"></el-input>
    </el-form-item>
    <el-form-item label="Organizacja">
      <el-input v-model="form.organization"></el-input>
    </el-form-item>
    <el-form-item label="Tytuł sesji" required>
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="Opis twojej sesji" required>
      <el-input v-model="form.description" :rows="3" type="textarea"></el-input>
    </el-form-item>
    <el-form-item label="System/setting" required>
      <el-input v-model="form.game"></el-input>
    </el-form-item>
    <el-form-item label="Tagi">
      <el-input v-model="form.tags"></el-input>
    </el-form-item>
    <el-form-item label="Triggery" required>
      <el-input v-model="form.triggers"></el-input>
    </el-form-item>
    <el-form-item label="Narzędzia bezpieczeństwa" required>
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
    <el-form-item label="Data sesji" required>
      <el-select v-model="form.date">
        <el-option label="Piątek" value="2022-03-04"></el-option>
        <el-option label="Sobota" value="2022-03-05"></el-option>
        <el-option label="Niedziela" value="2022-03-06"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Godzina sesji" required>
      <el-time-select
        start="10:00"
        end="18:00"
        step="4:00"
        v-model="form.time"
      ></el-time-select>
    </el-form-item>
    <el-form-item label="Preferencje dotyczące narzędzi?">
      <el-input v-model="form.toolsPreference"></el-input>
    </el-form-item>
    <el-form-item label="Chcesz jeszcze coś dodać?">
      <el-input v-model="form.other" :rows="3" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit(sessionReference)">
        Zgłoś
      </el-button>
      <el-button>Wyczyść</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from "vue";
import { success, danger } from "../../consts/colors";
import { SessionForm } from "../../models/SessionForm";
import { sessionFormValidator } from "../../validators/session-form-validator";
import { useEvent } from "../../stores/event.store";
const eventState = useEvent();
const form = reactive(SessionForm);
const sessionReference = ref();
const rules = reactive(sessionFormValidator);
const onSubmit = (formRef) => {
  eventState.addNewSession(0, formRef.model);
  formRef.resetFields();
};
</script>

<style>
.el-form {
  width: 80%;
}
</style>
