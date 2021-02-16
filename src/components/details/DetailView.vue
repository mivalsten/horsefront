<template>
    <div>
        <el-table style="width: 90%; margin: auto" :data="tableData">
            <el-table-column width="180" prop="header"> </el-table-column>
            <el-table-column width="480" prop="value"> </el-table-column>
        </el-table>
        <el-button type="primary" v-on:click="register">Zapisz się</el-button>
    </div>
</template>

<script>
import labels from "../../utils/labels";
import request from "../../utils/request";
const event = labels.event;

export default {
    mounted() {
        this.serializeData();
    },
    methods: {
        serializeData() {
            const out = {
                name: "string",
                url: "string",
                event_type: "string",
                start: "2021-02-15T15:40:44.583Z",
                end: "2021-02-15T15:40:44.583Z",
                age_restrictions: "string",
                attending: 0,
                wait_list: 0,
                capacity: 0,
            };
            this.parseDateAndTime(out);
            Object.keys(event).forEach((el) => {
                this.tableData.push({ header: event[el], value: out[el] });
            });
        },
        parseDateAndTime(data) {
            const dateOptions = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            };
            data.date = new Date(data.start).toLocaleDateString(
                "pl-PL",
                dateOptions
            );
            data.start = new Date(data.start).toLocaleTimeString("pl-PL");
            data.end = new Date(data.end).toLocaleTimeString("pl-PL");
            return data;
        },
        register() {
            request
                .attendee()
                .then(() => {})
                .catch(() => {});
        },
    },
    data() {
        return {
            tableData: [],
        };
    },
};
</script>

<style>
</style>