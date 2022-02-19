<template>
  <el-card class="box-card">
    <event-header :value="eventData.title"></event-header>
    <event-body
      :date="eventData.date"
      :time="eventData.time"
      :places="eventData.attending_count"
      :system="eventData.game"
      :organizer="eventData.displayName"
    ></event-body>
    <event-footer :id="eventData.id"></event-footer>
  </el-card>
</template>

<script>
import EventBody from "./EventBody.vue";
import EventFooter from "./EventFooter.vue";
import EventHeader from "./EventHeader.vue";

export default {
  components: { EventBody, EventHeader, EventFooter },
  props: ["eventData"],
  data() {
    return {};
  },
};
</script>

<style>
@media screen {
  .box-card {
    width: 90vw;
    margin: 1em 0;
  }
}
@media screen and (min-width: 660px) {
  .box-card {
    width: 45vw;
    margin: 1em 0;
  }
}

@media screen and (min-width: 900px) {
  .box-card {
    width: 28vw;
    margin: 1em 0;
  }
}

@media screen and (min-width: 1600px) {
  .box-card {
    width: 24.5em;
  }
}
</style>
