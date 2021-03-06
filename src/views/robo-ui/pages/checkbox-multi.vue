<template>
    <div class="page-container">
        <el-card class="page-title">带有缓存功能的Checkbox多选组件</el-card>
        <el-card
            header="横向使用（默认），传入数组 value 和筛选项 options 以及标题 title，所选值改变时，value 的初始值会被更新，并且会触发 change 事件"
        >
            <div class="checkbox-container-horizontal">
                <robo-checkbox-multi :options="options" :value.sync="value1" title="吃货食谱" @change="onChange" />
                <p class="select-content">我要吃：{{ food1 }}</p>
            </div>
            <code-example :code="code1" />
        </el-card>
        <el-card header="横向使用 - 不带标题，此时不传入 title 即可">
            <div class="checkbox-container-horizontal">
                <robo-checkbox-multi :options="options" :value.sync="value2" />
                <p class="select-content">我要吃：{{ food2 }}</p>
            </div>
            <code-example :code="code2" />
        </el-card>
        <el-card header="竖向使用（竖向使用无法添加标题），将 direction 设为 vertical">
            <div class="checkbox-container-vertical">
                <robo-checkbox-multi :options="options" :value.sync="value3" direction="vertical" />
                <p class="select-content">我要吃：{{ food3 }}</p>
            </div>
            <code-example :code="code3" />
        </el-card>
        <el-card header="不显示全选按钮, 将 show-check-all 设为 false 即可">
            <div class="no-check-all-container">
                <div class="checkbox-container-vertical">
                    <robo-checkbox-multi
                        :options="options"
                        :value.sync="value4"
                        direction="vertical"
                        :show-check-all="false"
                    />
                    <p class="select-content">我要吃：{{ food4 }}</p>
                </div>
                <div class="checkbox-container-horizontal">
                    <robo-checkbox-multi :options="options" :value.sync="value5" :show-check-all="false" />
                    <p class="select-content">我要吃：{{ food5 }}</p>
                </div>
            </div>
            <code-example :code="code4" />
        </el-card>
        <el-card header="设置不可点击选项，为该 option 添加 disabled: true 即可">
            <div class="checkbox-container-horizontal">
                <robo-checkbox-multi :options="options2" :value.sync="value7" title="吃货食谱" @change="onChange" />
                <p class="select-content">我要吃：{{ food7 }}</p>
            </div>
            <code-example :code="code6" />
        </el-card>
        <el-card header="设置最大可选择数目，为 max 属性传入一个大于0的正整数即可">
            <div class="checkbox-container-horizontal">
                <robo-checkbox-multi
                    :options="options"
                    :value.sync="value8"
                    title="吃货食谱"
                    :max="2"
                    @change="onChange"
                />
                <p class="select-content">我要吃：{{ food8 }}</p>
            </div>
            <code-example :code="code7" />
        </el-card>
        <el-card
            header="使用缓存，需要配合 robo-option-cache 插件使用，传入的 cache-key 应该提前在插件中配置好，配置方法见插件"
        >
            <div class="checkbox-container-horizontal">
                <robo-checkbox-multi cache-key="recipe" :value.sync="value6" title="吃货食谱" />
                <p class="select-content">我要吃：{{ food6 }}</p>
            </div>
            <code-example :code="code5" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

import {getFoodToEat} from '@/utils';

@Component
export default class SelectMultiCheckbox extends Vue {
    value1 = [];
    value2 = ['选项1', '选项2', '选项3', '选项4', '选项5'];
    value3 = ['选项1', '选项2', '选项3', '选项4'];
    value4 = [];
    value5 = [];
    value6 = [];
    value7 = [];
    value8 = [];

    options = [
        {value: '选项1', label: '黄金糕'},
        {value: '选项2', label: '双皮奶'},
        {value: '选项3', label: '蚵仔煎'},
        {value: '选项4', label: '龙须面'},
        {value: '选项5', label: '北京烤鸭'}
    ];

    options2 = [
        {value: '选项1', label: '黄金糕', disabled: true},
        {value: '选项2', label: '双皮奶'},
        {value: '选项3', label: '蚵仔煎'},
        {value: '选项4', label: '龙须面'},
        {value: '选项5', label: '北京烤鸭'}
    ];

    onChange(checkedList: string[]) {
        this.$message.success(checkedList.length > 0 ? checkedList.join(', ') : '清空了');
    }

    get food1() {
        return getFoodToEat(this.value1, this.options);
    }

    get food2() {
        return getFoodToEat(this.value2, this.options);
    }

    get food3() {
        return getFoodToEat(this.value3, this.options);
    }

    get food4() {
        return getFoodToEat(this.value4, this.options);
    }

    get food5() {
        return getFoodToEat(this.value5, this.options);
    }

    get food6() {
        return getFoodToEat(this.value6, this.options);
    }

    get food7() {
        return getFoodToEat(this.value7, this.options2);
    }

    get food8() {
        return getFoodToEat(this.value8, this.options);
    }

    get code1() {
        return [
            '<robo-checkbox-multi :options="options" :value.sync="value1" title="吃货食谱" />',
            `value1 = [];`,
            `options = [
    {value: '选项1', label: '黄金糕'},
    {value: '选项2', label: '双皮奶'},
    {value: '选项3', label: '蚵仔煎'},
    {value: '选项4', label: '龙须面'},
    {value: '选项5', label: '北京烤鸭'}
]`
        ];
    }

    get code2() {
        return [
            '<robo-checkbox-multi :options="options" :value.sync="value2" />',
            "value2 = ['选项1', '选项2', '选项3', '选项4', '选项5'];"
        ];
    }

    get code3() {
        return '<robo-checkbox-multi :options="options" :value.sync="value3" direction="vertical" />';
    }

    get code4() {
        return [
            '<robo-checkbox-multi :options="options" :value.sync="value4" direction="vertical" :show-check-all="false" />',
            '<robo-checkbox-multi :options="options" :value.sync="value5" :show-check-all="false" />'
        ];
    }

    get code5() {
        return '<robo-checkbox-multi cache-key="recipe" :value.sync="value6" title="吃货食谱" />';
    }

    get code6() {
        return [
            '<robo-checkbox-multi :options="options2" :value.sync="value7" title="吃货食谱" />',
            `value7 = [];`,
            `options2 = [
    {value: '选项1', label: '黄金糕, disabled: true},
    {value: '选项2', label: '双皮奶'},
    {value: '选项3', label: '蚵仔煎'},
    {value: '选项4', label: '龙须面'},
    {value: '选项5', label: '北京烤鸭'}
]`
        ];
    }

    get code7() {
        return [
            '<robo-checkbox-multi :options="options" :value.sync="value8" :max="2" title="吃货食谱" />',
            `value8 = [];`,
            `options = [
    {value: '选项1', label: '黄金糕'},
    {value: '选项2', label: '双皮奶'},
    {value: '选项3', label: '蚵仔煎'},
    {value: '选项4', label: '龙须面'},
    {value: '选项5', label: '北京烤鸭'}
]`
        ];
    }
}
</script>

<style lang="scss">
.page-container {
    .select-content {
        margin-top: 16px;
    }

    .checkbox-container-vertical {
        width: 350px;
        box-shadow: 0 2px 8px 0 #dcdee0;
        border-radius: 4px;

        .select-content {
            padding-left: 16px;
            padding-bottom: 16px;
        }
    }

    .checkbox-container-horizontal {
        width: 560px;
        box-shadow: 0 2px 8px 0 #dcdee0;
        border-radius: 4px;
        padding: 16px;
    }

    .no-check-all-container {
        display: flex;
        align-items: flex-start;

        .checkbox-container-vertical {
            margin-right: 16px;
        }
    }
}
</style>
