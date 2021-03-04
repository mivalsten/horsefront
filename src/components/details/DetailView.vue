<template>
    <el-alert
        :title="alert.title"
        :type="alert.type"
        effect="dark"
        v-if="alert.show"
    >
    </el-alert>
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
        request.getUserProfile().then((res) => {
            if (res.status == 200) {
                this.discord = res.data.discord;
            }
        });
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
            if (this.discord !== "") {
                request
                    .attendee(this.$route.params.id)
                    .then((res) => {
                        console.log(res);
                        switch (res.status) {
                            case 200:
                                this.alert.type = "success";
                                this.alert.title =
                                    "Jesteś na liście rezerwowej";
                                this.alert.show = true;
                                break;
                            case 201:
                                this.alert.type = "success";
                                this.alert.title =
                                    "Zapisałeś się na sesję. Miłej gry";
                                this.alert.show = true;
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        switch (err.status) {
                            case 401:
                                this.alert.type = "error";
                                this.alert.title =
                                    "Musisz być zalogowany, żeby sie zapisać";
                                this.alert.show = true;
                                break;
                            case 420:
                                this.alert.type = "error";
                                this.alert.title =
                                    "Nie możesz zapisać się na sesję, którą organizujesz";
                                this.alert.show = true;
                                break;
                            case 404:
                                this.alert.type = "error";
                                this.alert.title =
                                    "Nie znaleziono sesji, na którą chcesz się zapisać";
                                this.alert.show = true;
                                break;
                            case 500:
                                this.alert.type = "error";
                                this.alert.title =
                                    "Nie możemy cię zapisać na tę sesję. Błąd systemu";
                                this.alert.show = true;
                                break;
                            default:
                                this.alert.show = true;
                                this.alert.type = "error";
                                this.alert.title =
                                    "Wystąpił nieznany błąd:" + err;
                        }
                    });
            } else {
                this.alert.title =
                    "Musisz najpierw podać swój discord name w profilu";
                this.alert.type = "error";
                this.alert.show = true;
            }
        },
    },
    data() {
        return {
            tableData: [],
            alert: {
                type: "info",
                title: "",
                show: false,
            },
            discord: "",
        };
    },
};
</script>

<style>
div.cell {
    word-break: keep-all !important;
}
</style>