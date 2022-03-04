<template>
  <el-table
    :data="profileState.getAttendingTable"
    empty-text="Nie uczestniczysz w żadnej sesji"
  >
    <el-table-column prop="date" label="Data"></el-table-column>
    <el-table-column prop="time" label="Godzina"></el-table-column>
    <el-table-column prop="name" label="Tytuł"></el-table-column>
    <el-table-column label="Zrezygnuj">
      <template #default="scope">
        <el-button size="small" type="danger" @click="handleClick(scope)">
          Zrezygnuj
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { useProfile } from "../../stores/profile.store";
const profileState = useProfile();
profileState.getAttendingData();
const handleClick = (e) => {
  profileState.unattendEvent(e.row.id);
};
</script>

<style></style>
