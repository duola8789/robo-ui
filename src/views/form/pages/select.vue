<template>
    <div class="page-container">
        <el-card header="基础用法">
            <el-select v-model="value1" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            <el-select v-model="value1" placeholder="请选择" size="small">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            <el-select v-model="value1" placeholder="请选择" size="mini">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
        </el-card>
        <el-card header="空选项">
            <el-select v-model="value2" placeholder="请选择">
                <el-option v-for="item in []" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-select v-model="value2" placeholder="请选择" size="small">
                <el-option v-for="item in []" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-select v-model="value2" placeholder="请选择" size="mini">
                <el-option v-for="item in []" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </el-card>
        <el-card header="多选 - Tag形式（特殊形式使用 <robo-select-multi> 组件）">
            <el-select v-model="value3" multiple placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            <el-select v-model="value3" multiple placeholder="请选择" size="small">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            <el-select v-model="value3" multiple placeholder="请选择" size="mini">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
        </el-card>
        <el-card header="前置图标，使用 prefiex 配合 robo-font-icon 实现">
            <el-select v-model="value4" placeholder="请选择">
                <robo-font-icon slot="prefix" href="icon-search"></robo-font-icon>
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            <code-example :code="code1" />
        </el-card>
        <el-card header="有禁用选项">
            <el-select v-model="value5" placeholder="请选择">
                <el-option
                    v-for="item in optionsWithDisable"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                ></el-option>
            </el-select>
            <el-select v-model="value5" placeholder="请选择" size="small">
                <el-option
                    v-for="item in optionsWithDisable"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                ></el-option>
            </el-select>
            <el-select v-model="value5" placeholder="请选择" size="mini">
                <el-option
                    v-for="item in optionsWithDisable"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                ></el-option>
            </el-select>
        </el-card>
        <el-card header="禁用状态">
            <el-select v-model="value6" disabled placeholder="请选择">
                <el-option
                    v-for="item in optionsWithDisable"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            <el-select v-model="value6" disabled placeholder="请选择" size="small">
                <el-option
                    v-for="item in optionsWithDisable"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            <el-select v-model="value6" disabled placeholder="请选择" size="mini">
                <el-option
                    v-for="item in optionsWithDisable"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
        </el-card>
        <el-card header="可清空">
            <el-select v-model="value7" clearable placeholder="请选择">
                <el-option
                    v-for="item in optionsWithDisable"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            <el-select v-model="value7" clearable placeholder="请选择" size="small">
                <el-option
                    v-for="item in optionsWithDisable"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            <el-select v-model="value7" clearable placeholder="请选择" size="mini">
                <el-option
                    v-for="item in optionsWithDisable"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ButtonPage extends Vue {
    options = [
        {value: '选项1', label: '黄金糕'},
        {value: '选项2', label: '双皮奶'},
        {value: '选项3', label: '蚵仔煎'},
        {value: '选项4', label: '龙须面'},
        {value: '选项5', label: '北京烤鸭'},
        {value: '选项6', label: '北京烤鸭'},
        {value: '选项7', label: '北京烤鸭'},
        {value: '选项8', label: '北京烤鸭'},
        {value: '选项9', label: '北京烤鸭'}
    ];

    optionsWithDisable = [
        {value: '选项1', label: '黄金糕'},
        {value: '选项2', label: '双皮奶'},
        {value: '选项3', label: '蚵仔煎', disabled: true},
        {value: '选项4', label: '龙须面'}
    ];

    value1 = '';
    value2 = '';
    value3 = [];
    value4 = '';
    value5 = '';
    value6 = '';
    value7 = '';

    get code1() {
        return (
            '<el-select v-model="value4" placeholder="请选择">\n' +
            '    <robo-font-icon slot="prefix" href="icon-search"></robo-font-icon>\n' +
            '    <el-option\n' +
            '        v-for="item in options"\n' +
            '        :key="item.value"\n' +
            '        :label="item.label"\n' +
            '        :value="item.value"\n' +
            '    ></el-option>\n' +
            '</el-select>'
        );
    }
}
</script>
<style lang="scss">
.page-container {
    .el-select {
        margin-right: 16px;

        &:last-child {
            margin-right: 0;
        }
    }
}
</style>
