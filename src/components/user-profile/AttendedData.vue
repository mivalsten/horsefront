<template>
  <el-table :data="tableData" empty-text="Nie uczestniczysz w żadnej sesji">
    <el-table-column prop="date" label="Data"></el-table-column>
    <el-table-column prop="start" label="Godzina"></el-table-column>
    <el-table-column prop="name" label="Tytuł"></el-table-column>
    <el-table-column prop="info" label="Lista"></el-table-column>
    <el-table-column label="Zrezygnuj">
      <template>
        <el-button size="mini" type="danger">Zrezygnuj</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      nickname: "",
    };
  },
};
</script>

<style></style>
