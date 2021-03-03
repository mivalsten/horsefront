<template>
    <div>
        <el-table
            cell-class-name="text-cell"
            style="width: 90%; margin: auto"
            :data="tableData"
        >
            <el-table-column
                width="200"
                prop="header"
                cell-class-name="text-cell"
            >
            </el-table-column>
            <el-table-column
                width="480"
                prop="value"
                cell-class-name="text-cell"
            >
            </el-table-column>
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
            request
                .getEvent(this.$route.params.id)
                .then((res) => {
                    const data = res.data;
                    this.parseDateAndTime(data);
                    Object.keys(event).forEach((el) => {
                        this.tableData.push({
                            header: event[el],
                            value: data[el],
                        });
                    });
                })
                .catch((err) => {
                    console.log("WYSTAPIL BLAD:" + err);
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
                .attendee(this.$route.params.id)
                .then((res) => {
                    switch (res.response.status) {
                        case 200:
                            this.$emit(
                                "sign-up",
                                "Jesteś na liście rezerwowej"
                            );
                            break;
                        case 201:
                            this.$emit(
                                "sign-up",
                                "Zapisałeś się na sesję. Miłej gry"
                            );
                    }
                })
                .catch((err) => {
                    switch (err.response.status) {
                        case 420:
                            this.$emit(
                                "sign-up",
                                "Nie możesz zapisać się na sesję, którą organizujesz"
                            );
                            break;
                        case 404:
                            this.$emit(
                                "sign-up",
                                "Nie znaleziono sesji, na którą chcesz się zapisać"
                            );
                            break;
                        case 500:
                            this.$emit(
                                "sign-up",
                                "Nie możemy cię zapisać na tę sesję, nie wiemy dlaczego"
                            );
                            break;
                        default:
                            this.$emit(
                                "sign-up",
                                "Wystąpił nieznany błąd:" + err.response.status
                            );
                    }
                });
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
div.cell {
    word-break: keep-all !important;
}
</style>