.<template>
    <el-table :data="tableData" empty-text="Nie uczestniczysz w żadnej sesji">
        <el-column prop="start" label="Data"></el-column>
        <el-column prop="name" label="Tytuł"></el-column>
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
    mounted() {
        request.getOrganizedEvents().then((data) => {
            data.forEach((element) => {
                element = parseDateAndTime(element);
                this.tableData.push({
                    start: element.start,
                    name: element.name,
                });
            });
        });
    },
};
</script>

<style>
</style>