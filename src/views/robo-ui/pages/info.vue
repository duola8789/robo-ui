<template>
    <div class="page-container">
        <el-card class="page-title">用于各种固定的提示信息</el-card>
        <el-card header="通过传入 type 来进行定制，可传入的 type 值有 info（默认）/warning/error/success">
            <robo-info>这是一条普通信息</robo-info>
            <robo-info type="warning">这是一条警告信息</robo-info>
            <robo-info type="success">这是一条成功信息</robo-info>
            <robo-info type="error">这是一条错误信息</robo-info>
            <code-example :code="code1" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class CheckAll extends Vue {
    get code1() {
        return [
            '<robo-info>这是一条普通信息</robo-info>',
            '<robo-info type="warning">这是一条警告信息</robo-info>',
            '<robo-info type="success">这是一条成功信息</robo-info>',
            '<robo-info type="error">这是一条错误信息</robo-info>'
        ];
    }
}
</script>

<style scoped lang="scss">
.robo-info {
    margin-bottom: 8px;

    &:last-child {
        margin-bottom: 0;
    }
}
</style>
