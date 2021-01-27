<template>
    <div class="page-container">
        <el-card class="page-title">用户头像：对 el-avatar 进行了一点封装</el-card>
        <el-card header="默认使用：传入图片链接地址给 avatar 属性">
            <robo-user-avatar avatar="http://image.oldzhou.cn/FvbG4f1poPPqZn_ndzEtSux--qvi" />
            <code-example :code="code1" />
        </el-card>
        <el-card header="传入 size 属性改变大小">
            <robo-user-avatar avatar="http://image.oldzhou.cn/FvbG4f1poPPqZn_ndzEtSux--qvi" :size="16" />
            <robo-user-avatar avatar="http://image.oldzhou.cn/FvbG4f1poPPqZn_ndzEtSux--qvi" :size="32" />
            <robo-user-avatar avatar="http://image.oldzhou.cn/FvbG4f1poPPqZn_ndzEtSux--qvi" :size="64" />
            <code-example :code="code2" />
        </el-card>
        <el-card header="如果头像地址错误，会展示指定的默认头像">
            <robo-user-avatar avatar="http://image.oldzhou.cn/FvbG4f1poPPqZn_ndzEtSux--qvi123" />
            <code-example :code="code3" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Avatar extends Vue {
    get code1() {
        return '<robo-user-avatar avatar="http://image.oldzhou.cn/FvbG4f1poPPqZn_ndzEtSux--qvi" />';
    }

    get code2() {
        return [
            '<robo-user-avatar avatar="http://image.oldzhou.cn/FvbG4f1poPPqZn_ndzEtSux--qvi" :size="16" />',
            '<robo-user-avatar avatar="http://image.oldzhou.cn/FvbG4f1poPPqZn_ndzEtSux--qvi" :size="32" />',
            '<robo-user-avatar avatar="http://image.oldzhou.cn/FvbG4f1poPPqZn_ndzEtSux--qvi" :size="64" />'
        ];
    }

    get code3() {
        return '<robo-user-avatar avatar="http://image.oldzhou.cn/FvbG4f1poPPqZn_ndzEtSux--qvi123" />';
    }
}
</script>

<style lang="scss">
.robo-user-avatar {
    &:nth-child(n + 2) {
        margin-left: 16px;
    }
}
</style>
