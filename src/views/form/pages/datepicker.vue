<template>
    <div class="page-container">
        <el-card header="日期选择">
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        </el-card>
        <el-card header="日期范围选择">
            <el-date-picker
                v-model="value2"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            ></el-date-picker>
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Datepicker extends Vue {
    value1 = '';
    value2 = [];
}
</script>
