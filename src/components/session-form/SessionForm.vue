<template>
  <el-form
    ref="sessionReference"
    :model="addSessionData"
    label-width="auto"
    label-position="right"
    :rules="rules"
  >
    <el-form-item label="Adres e-mail" required prop="emailAddress">
      <el-input v-model="addSessionData.emailAddress"></el-input>
    </el-form-item>
    <el-form-item label="Imię i nazwisko" required prop="fullName">
      <el-input v-model="addSessionData.fullName"></el-input>
    </el-form-item>
    <el-form-item label="Nick do discorda" required prop="discord">
      <el-input v-model="addSessionData.discord"></el-input>
    </el-form-item>
    <el-form-item label="Adres do roll20" required prop="roll20Mail">
      <el-input v-model="addSessionData.roll20Mail"></el-input>
    </el-form-item>
    <el-form-item label="Numer telefonu" required prop="phone">
      <el-input v-model="addSessionData.phone"></el-input>
    </el-form-item>
    <el-form-item label="Ksywka" required prop="displayName">
      <el-input v-model="addSessionData.displayName"></el-input>
    </el-form-item>
    <el-form-item label="Organizacja" prop="organization">
      <el-input v-model="addSessionData.organization"></el-input>
    </el-form-item>
    <el-form-item label="Tytuł sesji" required prop="title">
      <el-input v-model="addSessionData.title"></el-input>
    </el-form-item>
    <el-form-item label="Opis twojej sesji" required prop="description">
      <el-input
        v-model="addSessionData.description"
        :rows="3"
        type="textarea"
      ></el-input>
    </el-form-item>
    <el-form-item label="System/setting" required prop="game">
      <el-input v-model="addSessionData.game"></el-input>
    </el-form-item>
    <el-form-item label="Tagi" prop="tags">
      <el-input v-model="addSessionData.tags"></el-input>
    </el-form-item>
    <el-form-item label="Triggery" prop="triggers">
      <el-input v-model="addSessionData.triggers"></el-input>
    </el-form-item>
    <el-form-item label="Narzędzia bezpieczeństwa" required prop="safetyTools">
      <el-input v-model="addSessionData.safetyTools"></el-input>
    </el-form-item>
    <el-form-item label="Minimalna liczba graczy" prop="minimalCount">
      <el-input-number
        :min="3"
        :max="10"
        v-model="addSessionData.minimalCount"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="Maksymalna liczba graczy" prop="maximalCount">
      <el-input-number
        :min="3"
        :max="10"
        v-model="addSessionData.maximalCount"
      ></el-input-number>
    </el-form-item>
    <el-form-item
      label="Czy sesja jest przyjazna dla początkujących?"
      prop="isNewbieFriendly"
    >
      <el-switch
        v-model="addSessionData.isNewbieFriendly"
        class="ml-2"
        inline-prompt
        :active-color="success"
        :inactive-color="danger"
        active-text="T"
        inactive-text="N"
      />
    </el-form-item>
    <el-form-item
      label="Czy wymagasz znajomości świata/settingu"
      prop="isSettingFamiliarityRequired"
    >
      <el-switch
        v-model="addSessionData.isSettingFamiliarityRequired"
        class="ml-2"
        inline-prompt
        :active-color="success"
        :inactive-color="danger"
        active-text="T"
        inactive-text="N"
      />
    </el-form-item>
    <el-form-item label="Czy wymagasz włączonej kamery" prop="isCameraRequired">
      <el-switch
        v-model="addSessionData.isCameraRequired"
        class="ml-2"
        inline-prompt
        :active-color="success"
        :inactive-color="danger"
        active-text="T"
        inactive-text="N"
      />
    </el-form-item>
    <el-form-item label="Data sesji" required prop="date">
      <el-select v-model="addSessionData.date">
        <el-option label="Piątek" value="2022-03-04"></el-option>
        <el-option label="Sobota" value="2022-03-05"></el-option>
        <el-option label="Niedziela" value="2022-03-06"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Godzina sesji" required prop="time">
      <el-time-select
        start="10:00"
        end="18:00"
        step="4:00"
        v-model="addSessionData.time"
      ></el-time-select>
    </el-form-item>
    <el-form-item
      label="Preferencje dotyczące narzędzi?"
      prop="toolsPreference"
    >
      <el-input v-model="addSessionData.toolsPreference"></el-input>
    </el-form-item>
    <el-form-item label="Chcesz jeszcze coś dodać?" prop="other">
      <el-input
        v-model="addSessionData.other"
        :rows="3"
        type="textarea"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit(sessionReference)">
        Zgłoś
      </el-button>
      <el-button @click="sessionReference.resetFields()">Wyczyść</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from "vue";
import { success, danger } from "../../consts/colors";
import { sessionFormValidator } from "../../validators/session-form-validator";
import { useEvent } from "../../stores/event.store";
import { storeToRefs } from "pinia";
const eventState = useEvent();
const { addSessionData } = storeToRefs(eventState);
const sessionReference = ref();
const rules = reactive(sessionFormValidator);
const onSubmit = (reference) => {
  reference.validate((isValid) => {
    if (isValid) {
      eventState.addNewSession(reference.model);
      reference.resetFields();
    }
  });
};
</script>

<style>
.el-form {
  width: 80%;
}
</style>
