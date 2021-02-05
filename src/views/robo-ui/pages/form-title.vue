<template>
    <div class="page-container">
        <el-card header="用于Form表单标题，可单独使用">
            <robo-form-title title="个人信息" />
            <code-example :code="code1" />
        </el-card>
        <el-card header="可以配合<el-form>使用">
            <robo-form-title title="个人信息" />
            <el-form label-position="top">
                <el-form-item label="Hello">
                    <el-input v-model="value" style="width: 280px;" />
                </el-form-item>
            </el-form>
            <code-example :code="code2" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Tag extends Vue {
    value = '';

    get code1() {
        return '<robo-form-title title="个人信息" />';
    }

    get code2() {
        return (
            '<el-form>\n' +
            '    <el-form-item style="width: 100%;">\n' +
            '        <robo-form-title title="个人信息" />\n' +
            '    </el-form-item>\n' +
            '    <el-form-item label="Hello">\n' +
            '        <el-input v-model="value" />\n' +
            '    </el-form-item>\n' +
            '</el-form>'
        );
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
