<template>
    <div class="page-container">
        <el-card header="基础用法：注意使用了 type=info 的信息按钮实现幽灵按钮样式">
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="info">信息按钮（替代幽灵按钮）</el-button>
            <el-button type="text">文字按钮</el-button>
            <code-example :code="code1" />
        </el-card>
        <el-card header="禁用状态">
            <el-button disabled>默认按钮</el-button>
            <el-button type="primary" disabled>主要按钮</el-button>
            <el-button type="danger" disabled>危险按钮</el-button>
            <el-button type="success" disabled>成功按钮</el-button>
            <el-button type="warning" disabled>警告按钮</el-button>
            <el-button type="info" disabled>信息按钮（替代幽灵按钮）</el-button>
            <el-button type="text" disabled>文字按钮</el-button>
            <code-example :code="code2" />
        </el-card>
        <el-card header="图标按钮">
            <el-button>
                <i class="el-icon-search"></i>
                <span>搜索</span>
            </el-button>
            <el-button>
                <robo-font-icon href="icon-workbench" />
                <span>个人工作台</span>
            </el-button>
            <el-button type="primary">
                <robo-font-icon href="icon-workbench" />
                <span>个人工作台</span>
            </el-button>
            <code-example :code="code3" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ButtonPage extends Vue {
    get code1() {
        return [
            '<el-button>默认按钮</el-button>',
            '<el-button type="primary">主要按钮</el-button>',
            '<el-button type="danger">危险按钮</el-button>',
            '<el-button type="success">成功按钮</el-button>',
            '<el-button type="warning">警告按钮</el-button>',
            '<el-button type="info">信息按钮（替代幽灵按钮）</el-button>'
        ];
    }

    get code2() {
        return [
            '<el-button>默认按钮</el-button>',
            '<el-button type="primary" disabled>主要按钮</el-button>',
            '<el-button type="danger" disabled>危险按钮</el-button>',
            '<el-button type="success" disabled>成功按钮</el-button>',
            '<el-button type="warning" disabled>警告按钮</el-button>',
            '<el-button type="info" disabled>信息按钮（替代幽灵按钮）</el-button>'
        ];
    }

    get code3() {
        return [
            '<el-button>\n' + '    <i class="el-icon-search"></i>\n' + '    <span>搜索</span>\n' + ' </el-button>',
            '<el-button>\n' +
                '    <robo-font-icon href="workbench" />\n' +
                '    <span>个人工作台</span>\n' +
                '</el-button>\n',
            '<el-button type="primary">\n' +
                '    <robo-font-icon href="workbench" />\n' +
                '    <span>个人工作台</span>\n' +
                '</el-button>'
        ];
    }
}
</script>
