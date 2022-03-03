<template>
  <el-table :data="generateTable" empty-text="Nie uczestniczysz w żadnej sesji">
    <el-table-column prop="date" label="Data"></el-table-column>
    <el-table-column prop="start" label="Godzina"></el-table-column>
    <el-table-column prop="name" label="Tytuł"></el-table-column>
    <el-table-column label="Zrezygnuj">
      <template>
        <el-button
          #default="scope"
          size="mini"
          type="danger"
          @click="profileState.unattendEvent(scope.id)"
        >
          Zrezygnuj
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { useProfile } from "../../stores/profile.store";
const profileState = useProfile();
const generateTable = profileState.getAttendingData;
</script>

<style></style>
