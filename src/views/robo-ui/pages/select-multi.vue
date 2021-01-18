<template>
    <div class="page-container">
        <el-card header="基础用法">
            <robo-select-multi title="吃货食谱" :options="options" :value.sync="value1" />
            <p class="select-content">我要吃：{{ food1 }}</p>
        </el-card>
        <el-card header="不含标题">
            <robo-select-multi :hide-title="true" :options="options" :value.sync="value2" />
            <p class="select-content">我要吃：{{ food2 }}</p>
        </el-card>
        <el-card header="空选项">
            <robo-select-multi :options="[]" :value.sync="value3" />
            <p class="select-content">吃个屁</p>
        </el-card>
        <el-card header="使用缓存（需要后台接口配合统一输出）">
            <robo-select-multi cache-key="recipe" :value.sync="value4" />
            <robo-select-multi cache-key="sport" :value.sync="value5" style="margin-left: 16px;" />
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
}
</script>

<style lang="scss">
.page-container {
    .select-content {
        margin-top: 16px;
    }
}
</style>
