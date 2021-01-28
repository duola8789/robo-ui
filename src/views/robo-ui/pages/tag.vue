<template>
    <div class="page-container">
        <el-card header="默认颜色，无须传入任何属性，通过默认 slot 传入内容">
            <robo-tag>黄金糕</robo-tag>
            <code-example :code="code1" />
        </el-card>
        <el-card header="预定义的主题：type: error/warning/info/task/fail/success">
            <robo-tag type="error">error - 失败 / 拒绝 / 警告</robo-tag>
            <robo-tag type="warning">warning - 提醒</robo-tag>
            <robo-tag type="info">info - 已完成</robo-tag>
            <robo-tag type="task">task - 任务类</robo-tag>
            <robo-tag type="fail">fail - 失效 / 失败 / 无效</robo-tag>
            <robo-tag type="success">success - 成功 / 通过</robo-tag>
            <code-example :code="code2" />
        </el-card>
        <el-card header="自定义颜色：边框颜色与文字颜色一致，只需要为 text-color 传入一个色值，例如 #53A9FF">
            <robo-tag text-color="#53A9FF">黄金糕</robo-tag>
            <code-example :code="code3" />
        </el-card>
        <el-card header="自定义颜色：边框颜色与文字颜色不一致，传入 text-color 之外，再传入 border-color">
            <robo-tag text-color="#53A9FF" border-color="#00CFE6">黄金糕</robo-tag>
            <code-example :code="code4" />
        </el-card>
        <el-card header="自定义颜色：默认不填充背景色，填充背景色时需要传入 background-color">
            <robo-tag text-color="#fff" border-color="#FF6868" background-color="#000">黄金糕</robo-tag>
            <code-example :code="code5" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Tag extends Vue {
    get code1() {
        return '<robo-tag>黄金糕</robo-tag>';
    }

    get code2() {
        return [
            '<robo-tag type="error">error - 失败 / 拒绝 / 警告</robo-tag>',
            '<robo-tag type="warning">warning - 提醒</robo-tag>',
            '<robo-tag type="info">info - 已完成</robo-tag>',
            '<robo-tag type="task">task - 任务类</robo-tag>',
            '<robo-tag type="fail">fail - 失效 / 失败 / 无效</robo-tag>',
            '<robo-tag type="success">success - 成功 / 通过</robo-tag>'
        ];
    }

    get code3() {
        return '<robo-tag text-color="#53A9FF">黄金糕</robo-tag>';
    }

    get code4() {
        return '<robo-tag text-color="#53A9FF" border-color="#00CFE6">黄金糕</robo-tag>';
    }

    get code5() {
        return ' <robo-tag text-color="#fff" border-color="#FF6868" background-color="#000">黄金糕</robo-tag>';
    }
}
</script>

<style scoped lang="scss">
.page-container {
    ::v-deep .robo-tag {
        margin-right: 16px;
    }
}
</style>
