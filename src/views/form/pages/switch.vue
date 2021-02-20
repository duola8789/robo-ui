<template>
    <div class="page-container">
        <el-card header="基础用法">
            <el-switch v-model="value1"></el-switch>
            <code-example :code="code1" />
        </el-card>
        <el-card header="禁用状态">
            <el-switch v-model="value2" disabled></el-switch>
            <code-example :code="code2" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ButtonPage extends Vue {
    value1 = true;
    value2 = true;

    get code1() {
        return '<el-switch v-model="value1"></el-switch>';
    }

    get code2() {
        return '<el-switch v-model="value2" disabled></el-switch>';
    }
}
</script>
