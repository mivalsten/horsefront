<template>
  <el-table>
    <el-table-column type="selection" width="55" />
    <el-table-column type="expand" width="55" />
    <el-table-column label="Data" width="95"></el-table-column>
    <el-table-column label="Godzina" width="80"></el-table-column>
    <el-table-column label="Tytuł Sesji" width="150"></el-table-column>
    <el-table-column label="MG" width="150"></el-table-column>
    <el-table-column label="Otwarte zapisy" width="120"></el-table-column>
    <el-table-column label="Wolne miejsca" width="120"></el-table-column>
    <el-table-column label="Uczestnicy" width="190"></el-table-column>
    <el-table-column label="Rezerwowi" width="190"></el-table-column>
    <el-table-column width="150">
      <template>
        <el-button size="small">Edytuj</el-button>
        <el-button size="small" type="danger">Usuń</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup></script>

<style></style>
