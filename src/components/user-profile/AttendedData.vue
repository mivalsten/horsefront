.<template>
    <el-table :data="tableData" empty-text="Nie uczestniczysz w żadnej sesji">
        <el-table-column prop="date" label="Data"></el-table-column>
        <el-table-column prop="start" label="Godzina"></el-table-column>
        <el-table-column prop="name" label="Tytuł"></el-table-column>
        <el-table-column label="Zrezygnuj">
            <template #default="scope">
                <el-button
                    size="mini"
                    type="danger"
                    @click.prevent="handleDelete(scope.index_, tableData)"
                    >Zrezygnuj</el-button
                >
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import request from "../../utils/request";
import { parseDateAndTime } from "../../utils/date";

export default {
    data() {
        return {
            tableData: [],
        };
    },
    methods: {
        handleDelete(index, rows) {
            const row = rows[index];
            request
                .unattendee(new URL(row.url).pathname)
                .then(() => {
                    rows.splice(index, 1);
                })
                .catch();
        },
    },
    mounted() {
        request.getAttendedEvents().then((res) => {
            console.log(res);
            const data = res.data;
            data.forEach((element) => {
                element = parseDateAndTime(element);
                this.tableData.push({
                    date: element.date,
                    start: element.start,
                    name: element.name,
                    url: element.url,
                });
            });
        });
    },
};
</script>

<style>
</style>