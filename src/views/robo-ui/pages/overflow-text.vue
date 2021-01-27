<template>
    <div class="page-container">
        <el-card class="page-title">用于文字超长时对文字进行剪切并使用 tooltip 提示</el-card>
        <el-card
            header="默认使用：外围容器需要指定宽度和white-space: nowrap，通过 content 将内容传入，文字未超长时不会显示 tooltip"
        >
            <div class="text-overflow-wrapper">
                <robo-overflow-text content="这是一段超长文字这是一段超长文字这是一段超长文字" />
            </div>
            <div class="text-overflow-wrapper">
                <robo-overflow-text content="这是一段正常文字" />
            </div>
            <code-example :code="code1" />
        </el-card>
        <el-card header="可以设置 tooltip 的触发方式，与 el-tooltip 设置相同">
            <div class="text-overflow-wrapper">
                <robo-overflow-text content="这是一段超长文字这是一段超长文字这是一段超长文字" trigger="click" />
            </div>
            <code-example :code="code2" />
        </el-card>
        <el-card header="可以设置 tooltip 的弹出位置，与 el-tooltip 设置相同">
            <div class="text-overflow-wrapper">
                <robo-overflow-text content="这是一段超长文字这是一段超长文字这是一段超长文字" placement="right" />
            </div>
            <code-example :code="code3" />
        </el-card>
        <el-card header="可以设置 tooltip 的自定义类型，传入 popperClass 属性">
            <div class="text-overflow-wrapper">
                <robo-overflow-text content="这是一段超长文字这是一段超长文字这是一段超长文字" popperClass="hello" />
            </div>
            <code-example :code="code4" />
        </el-card>
        <el-card
            header="在某些渲染后并不立刻显示的组件中使用时，如果文字未剪切，可以根据展示与否动态传入并改变 visible 属性"
        >
            <el-button type="primary" @click="visible = true">Show Dialog</el-button>
            <el-dialog :visible.sync="visible">
                <div class="text-overflow-wrapper">
                    <robo-overflow-text content="这是一段超长文字这是一段超长文字这是一段超长文字" :visible="visible" />
                </div>
            </el-dialog>
            <code-example :code="code5" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class OverflowText extends Vue {
    visible = false;

    get code1() {
        return [
            '<div class="text-overflow-wrapper">\n' +
                '    <robo-overflow-text content="这是一段超长文字这是一段超长文字这是一段超长文字" />\n' +
                '</div>\n',
            '<div class="text-overflow-wrapper">\n' +
                '    <robo-overflow-text content="这是一段正常文字" />\n' +
                '</div>\n',
            '.text-overflow-wrapper {\n' +
                '    width: 300px;\n' +
                '    white-space: nowrap;\n' +
                '    border: 1px solid #d1dbe5;\n' +
                '    margin: 8px 0;\n' +
                '    padding: 8px;\n' +
                '}'
        ];
    }

    get code2() {
        return '<robo-overflow-text content="这是一段超长文字这是一段超长文字这是一段超长文字" trigger="click" />';
    }

    get code3() {
        return '<robo-overflow-text content="这是一段超长文字这是一段超长文字这是一段超长文字" placement="right" />';
    }

    get code4() {
        return '<robo-overflow-text content="这是一段超长文字这是一段超长文字这是一段超长文字" popperClass="hello" />';
    }

    get code5() {
        return [
            '<el-button type="primary" @click="visible = true">Show Dialog</el-button>\n',
            '<el-dialog :visible.sync="visible">\n' +
                '    <div class="text-overflow-wrapper">\n' +
                '        <robo-overflow-text content="这是一段超长文字这是一段超长文字这是一段超长文字" :visible="visible" />\n' +
                '    </div>\n' +
                '</el-dialog>\n'
        ];
    }
}
</script>

<style lang="scss">
.text-overflow-wrapper {
    width: 300px;
    white-space: nowrap;
    border: 1px solid #d1dbe5;
    margin: 8px 0;
    padding: 8px;
}

.hello {
    color: #1f66ff !important;
}
</style>
