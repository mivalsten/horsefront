<template>
    <el-card class="box-card">
        <event-header v-bind:value="name"></event-header>
        <event-body
            :max="capacity"
            :date="date"
            :time="start"
            :places="attending"
        ></event-body>
        <event-footer></event-footer>
    </el-card>
</template>

<script>
import EventBody from "./EventBody.vue";
import EventFooter from "./EventFooter.vue";
import EventHeader from "./EventHeader.vue";

export default {
    components: { EventBody, EventHeader, EventFooter },
    data() {
        return {
            name: "Sesja XYZ",
            system: "XD",
            author: "dino333",
            max: 4,
            date: "2020-10-10",
            time: "20:00",
            places: "2",
        };
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