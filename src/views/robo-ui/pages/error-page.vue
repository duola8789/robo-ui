<template>
    <div class="page-container">
        <el-card header="默认使用：不传入 type 参数时，会根据当前 Url 自动确定渲染 404 还是 403 页面，默认 404 页面">
            <robo-error-page />
            <code-example :code="code1" />
        </el-card>
        <el-card header="404页面：传入 type 为 404">
            <robo-error-page type="404" />
            <code-example :code="code2" />
        </el-card>
        <el-card header="403页面：传入 type 为 403">
            <robo-error-page type="403" />
            <code-example :code="code3" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class CheckAll extends Vue {
    checked = false;

    get code1() {
        return '<robo-error-page />';
    }

    get code2() {
        return '<robo-error-page type="404" />';
    }

    get code3() {
        return '<robo-error-page type="403" />';
    }
}
</script>
