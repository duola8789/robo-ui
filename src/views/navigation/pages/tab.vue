<template>
    <div class="page-container">
        <el-card header="选项卡样式 card" class="tab-container-card">
            <el-tabs v-model="activeName1" type="card">
                <el-tab-pane v-for="item in options" :key="item.value" :label="item.label" :name="item.value" lazy>
                    {{ item.content }}
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ButtonPage extends Vue {
    activeName1 = '选项1';

    options = [
        {value: '选项1', label: '黄金糕', content: '我要吃'},
        {value: '选项2', label: '双皮奶', content: '我爱吃'},
        {value: '选项3', label: '蚵仔煎', content: '我想吃'}
    ];
}
</script>

<style lang="scss">
.tab-container-card {
    .el-card__body {
        padding: 20px 0;
    }
}
</style>
