<template>
    <div class="page-container">
        <el-card header="横向使用">
            <div class="checkbox-container-horizontal">
                <robo-select-multi-checkbox :options="options" :value.sync="value1" />
                <p class="select-content">我要吃：{{ food1 }}</p>
            </div>
        </el-card>
        <el-card header="竖向使用">
            <div class="checkbox-container-vertical">
                <robo-select-multi-checkbox :options="options" :value.sync="value2" direction="vertical" />
            </div>
            <p class="select-content">我要吃：{{ food2 }}</p>
        </el-card>
        <el-card header="使用缓存（需要后台接口配合统一输出）">
            <div class="checkbox-container-horizontal">
                <robo-select-multi-checkbox cache-key="recipe" :value.sync="value3" />
                <p class="select-content">我要吃：{{ food3 }}</p>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

import {getFoodToEat} from '@/utils';

@Component
export default class SelectMultiCheckbox extends Vue {
    value1 = [];
    value2 = ['选项1', '选项2', '选项3', '选项4'];
    value3 = [];

    options = [
        {value: '选项1', label: '黄金糕'},
        {value: '选项2', label: '双皮奶'},
        {value: '选项3', label: '蚵仔煎'},
        {value: '选项4', label: '龙须面'},
        {value: '选项5', label: '北京烤鸭'}
    ];

    get food1() {
        return getFoodToEat(this.value1, this.options);
    }

    get food2() {
        return getFoodToEat(this.value2, this.options);
    }

    get food3() {
        return getFoodToEat(this.value3, this.options);
    }
}
</script>

<style lang="scss">
.page-container {
    .select-content {
        margin-top: 16px;
    }

    .checkbox-container-vertical {
        width: 280px;
        box-shadow: 0 2px 8px 0 #dcdee0;
        border-radius: 4px;
    }

    .checkbox-container-horizontal {
        width: 560px;
        box-shadow: 0 2px 8px 0 #dcdee0;
        border-radius: 4px;
        padding: 16px;
    }
}
</style>
