<template>
    <div class="event-list" v-if="events.length" @sign-up="onAssign">
        <event-container
            $sign-up="$forceUpdate"
            v-for="(event, name, index) in events"
            :key="index"
            :eventData="event"
        ></event-container>
        <el-alert
            :title="message.body"
            :type="message.type"
            show-icon
            close-text="Gotcha"
        >
        </el-alert>
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
            message: {
                type: "info",
                visible: true,
                body: "To jest standard message",
            },
        };
    },
    mounted() {
        this.showEvents();
    },
    methods: {
        onAssign(msg) {
            this.showEvents();
            this.message.body = msg;
            this.message.visible = true;
        },
        showEvents() {
            request
                .getEvents()
                .then((events) => {
                    this.events = events.map((event) => {
                        return parseDateAndTime(event);
                    });
                })
                .catch(() => {});
        },
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