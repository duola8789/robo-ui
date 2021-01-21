<template>
    <div class="page-container">
        <el-card header="基础用法">
            <el-input v-model="value1" class="input" placeholder="请输入关键词" />
        </el-card>
        <el-card header="前置图标">
            <el-input v-model="value2" class="input" placeholder="请输入关键词">
                <i slot="prefix" class="el-input__icon"><robo-font-icon class="input-icon" href="icon-date-range" /></i>
            </el-input>
        </el-card>
        <el-card header="后置图标">
            <el-input v-model="value3" class="input" placeholder="请输入关键词">
                <i slot="suffix" class="el-input__icon"><robo-font-icon class="input-icon" href="icon-search" /></i>
            </el-input>
        </el-card>
        <el-card header="可清空">
            <el-input v-model="value4" class="input" clearable placeholder="请输入关键词">
                <i slot="suffix" class="el-input__icon"><robo-font-icon class="input-icon" href="icon-search" /></i>
            </el-input>
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ButtonPage extends Vue {
    value1 = '';
    value2 = '';
    value3 = '';
    value4 = '';
}
</script>

<style lang="scss">
.page-container {
    .input {
        width: 280px;
    }

    .input-icon {
        font-size: 16px;
    }
}
</style>
