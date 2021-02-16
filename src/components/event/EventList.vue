<template>
    <div class="event-list" v-if="events.lenght">
        <event-container
            v-for="(event, name, index) in events"
            :key="index"
        ></event-container>
    </div>
    <div class="event-list event-list-placeholder" v-else>
        Brak sesji do wyświetlenia 😭😭😭
    </div>
</template>

<script>
import EventContainer from "./EventContainer.vue";
import request from "../../utils/request";
import { parseDateAndTime } from "../../utils/date";
export default {
    components: { EventContainer },
    data() {
        return {
            events: [],
        };
    },
    mounted() {
        request
            .getEvents()
            .then((events) => {
                this.events = parseDateAndTime(events);
            })
            .catch(() => {});
    },
};
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