<template>
    <div class="page-container">
        <el-card header="基础用法：与el-select相比多了前置标题和全选功能">
            <robo-select-multi title="吃货食谱" :options="options" :value.sync="value1" />
            <p class="select-content">我要吃：{{ food1 }}</p>
            <code-example :code="code1" />
        </el-card>
        <el-card header="改变宽度：传入 width 属性，这样可保证下拉框与输入框宽度一致">
            <robo-select-multi title="吃货食谱" :options="options" :value.sync="value1" :width="400" />
            <p class="select-content">我要吃：{{ food1 }}</p>
            <code-example :code="code5" />
        </el-card>
        <el-card header="不含标题：需要显式的传入 hide-title 为 true，配合<form-item>使用时需要传入此属性">
            <robo-select-multi :hide-title="true" :options="options" :value.sync="value2" />
            <p class="select-content">我要吃：{{ food2 }}</p>
            <code-example :code="code2" />
        </el-card>
        <el-card header="空选项">
            <robo-select-multi :options="[]" :value.sync="value3" />
            <p class="select-content">吃个屁</p>
            <code-example :code="code3" />
        </el-card>
        <el-card
            header="使用缓存，需要配合 robo-option-cache 插件使用，传入的 cache-key 应该提前在插件中配置好，配置方法见插件"
        >
            <robo-select-multi cache-key="recipe" :value.sync="value4" />
            <robo-select-multi cache-key="sport" :value.sync="value5" style="margin-left: 16px;" />
            <code-example :code="code4" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class SelectMulti extends Vue {
    @Prop({type: Number, default: 280}) width!: string;
    @Prop({type: String, default: '标题名称'}) title!: string;

    value1 = [];
    value2 = ['选项1', '选项2', '选项3', '选项4', '选项5'];
    value3 = [];
    value4 = ['选项1'];
    value5 = [];

    options = [
        {value: '选项1', label: '黄金糕'},
        {value: '选项2', label: '双皮奶'},
        {value: '选项3', label: '蚵仔煎'},
        {value: '选项4', label: '龙须面'},
        {value: '选项5', label: '北京烤鸭'}
    ];

    get food1() {
        return this.value1.map((v) => this.options.find((option) => option.value === v)!.label).join(', ');
    }

    get food2() {
        return this.value2.map((v) => this.options.find((option) => option.value === v)!.label).join(', ');
    }

    get code1() {
        return [
            '<robo-select-multi title="吃货食谱" :options="options" :value.sync="value1" />',
            'value1 = [];',
            `options = [
    {value: '选项1', label: '黄金糕'},
    {value: '选项2', label: '双皮奶'},
    {value: '选项3', label: '蚵仔煎'},
    {value: '选项4', label: '龙须面'},
    {value: '选项5', label: '北京烤鸭'}
];`
        ];
    }

    get code2() {
        return '<robo-select-multi :hide-title="true" :options="options" :value.sync="value2" />';
    }

    get code3() {
        return '<robo-select-multi :options="[]" :value.sync="value3" />';
    }

    get code4() {
        return [
            '<robo-select-multi cache-key="recipe" :value.sync="value4" />',
            '<robo-select-multi cache-key="sport" :value.sync="value5" style="margin-left: 16px;" />'
        ];
    }

    get code5() {
        return ['<robo-select-multi title="吃货食谱" :options="options" :value.sync="value1" :width="400" />'];
    }
}
</script>

<style lang="scss">
.page-container {
    .select-content {
        margin-top: 16px;
    }
}
</style>
