<template>
  <main>
    <el-alert
      title="Uwaga"
      type="error"
      description="Nie mozesz zgłaszać sesji i w nich uczestniczyć, dopóki nie uzupełnisz profilu"
      effect="dark"
      show-icon
      :v-if="profile.isComplete"
    >
    </el-alert>
    <router-view />
  </main>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProfile } from "../stores/profile.store";

const profileState = useProfile();
const { profile } = storeToRefs(profileState);
</script>

<style>
@media screen {
  main {
    padding: 0.5em;
  }
}
@media screen and (min-width: 660px) {
  main {
    padding: 0.5em;
  }
}

@media screen and (min-width: 900px) {
  main {
    padding: 1.5em;
  }
}

@media screen and (min-width: 1600px) {
  main {
    padding: 1em 3em;
  }
}
</style>
