<template>
    <div class="page-container">
        <el-card header="基础表格">
            <el-table :data="tableData" style="width: 100%;">
                <el-table-column
                    v-for="column in columns"
                    :key="column.prop"
                    :prop="column.prop"
                    :label="column.label"
                    :width="column.width"
                ></el-table-column>
            </el-table>
        </el-card>
        <el-card header="多选">
            <el-table :data="tableData" style="width: 100%;">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column
                    v-for="column in columns"
                    :key="column.prop"
                    :prop="column.prop"
                    :label="column.label"
                    :width="column.width"
                ></el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class TablePage extends Vue {
    columns = [
        {label: '日期', width: 180, prop: 'date'},
        {label: '姓名', width: 180, prop: 'name'},
        {label: '地址', prop: 'address'}
    ];

    tableData = [
        {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        },
        {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
        },
        {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        },
        {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
        }
    ];
}
</script>

<style scoped lang="scss">
.page-container {
    .table-container {
        width: 500px;
    }
}
</style>
