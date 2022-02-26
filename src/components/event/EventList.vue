<template>
  <div class="event-list">
    <event-container
      v-for="event in sessionList"
      :key="event.id"
      :eventData="event"
    ></event-container>
  </div>
  <div class="event-list event-list-placeholder" v-if="false">
    Brak sesji do wyświetlenia 😭😭😭
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useEvent } from "../../stores/event.store";
const eventState = useEvent();
eventState.fetchSessions();
const { sessionList } = storeToRefs(eventState);

// import EventContainer from "./EventContainer.vue";
// import request from "../../utils/request";
// import { parseDateAndTime } from "../../utils/date";
// export default {
//   components: { EventContainer },
//   data() {
//     return {
//       events: [],
//       message: {
//         type: "info",
//         visible: true,
//         body: "To jest standard message",
//       },
//       placeholder: false,
//     };
//   },
//   created() {
//     this.showEvents();
//   },
//   methods: {
//     onAssign(msg) {
//       this.showEvents();
//       this.message.body = msg;
//       this.message.visible = true;
//     },
//     showEvents() {
//       request
//         .getEvents()
//         .then((events) => {
//           events = events.data;
//           this.events = Object.entries(events)
//             .sort((a, b) => {
//               return new Date(a[1].start) - new Date(b[1].start);
//             })
//             .map((event) => {
//               event[1].id = event[0];

//               return parseDateAndTime(event[1]);
//             });
//           this.placeholder = !this.events.length;
//         })
//         .catch(() => {
//           this.placeholder = this.events.length;
//         });
//     },
//   },
// };
</script>

<style>
.event-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  box-sizing: border-box;
}
.event-list-placeholder {
  justify-content: center;
  font-size: xx-large;
}
</style>
