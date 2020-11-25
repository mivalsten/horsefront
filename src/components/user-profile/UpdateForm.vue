<template>
  <form class="">
    <div class="p-field">
      <label for="discord">Discord Nick</label>
      <InputText
        type="text"
        v-model="nickname"
        id="discord"
        v-on:blur="onBlur"
      ></InputText>
      <small id="username2-help" class="p-invalid" v-if="!valid"
        >To nie jest prawidłowy nick do Discorda</small
      >
    </div>
    <Button label="Aktualizuj"></Button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nickname: "Dora#2312",
      valid: true,
    };
  },
  methods: {
    onBlur() {
      //Pattern for discord nickname
      const pattern = /.{3,32}#[0-9]{4}$/;
      this.valid = this.nickname.match(pattern);
    },
  },
  components: {},
};
</script>

<style>
</style>