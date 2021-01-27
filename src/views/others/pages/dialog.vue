<template>
    <div class="page-container">
        <el-card header="Dialog 基本样式，注意不需要使用 center 属性">
            <el-button @click="visible = true">Show The Dialog</el-button>
            <el-dialog title="提示" :visible.sync="visible" width="30%">
                <span>这是一段信息</span>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="visible = false">取 消</el-button>
                    <el-button type="primary" @click="visible = false">确 定</el-button>
                </div>
            </el-dialog>
            <code-example :code="code1" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Dialog extends Vue {
    visible = false;

    get code1() {
        return (
            '<el-dialog title="提示" :visible.sync="visible" width="30%">\n' +
            '    <span>这是一段信息</span>\n' +
            '    <div slot="footer" class="dialog-footer">\n' +
            '        <el-button @click="visible = false">取 消</el-button>\n' +
            '        <el-button type="primary" @click="visible = false">确 定</el-button>\n' +
            '    </div>\n' +
            '</el-dialog>'
        );
    }
}
</script>
