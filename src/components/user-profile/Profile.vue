<template>
  <div class="profile">
    <update-form :profile="profile" :nickname="nickname"></update-form>
    <h2>Sesje, w których uczestniczysz</h2>
    <attended-data :nickname="nickname"></attended-data>
    <!-- <h2>Sesje, które prowadzisz</h2>
        <organized-data></organized-data> -->
  </div>
</template>

<script setup>
import UpdateForm from "./UpdateForm.vue";
import AttendedData from "./AttendedData.vue";
// import OrganizedData from "./OrganizedData";
</script>

<style></style>
