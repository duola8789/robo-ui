<template>
    <div class="page-container">
        <el-card header="默认样式：注意需要传入 type=card" class="tab-container-card">
            <el-tabs v-model="activeName1" type="card">
                <el-tab-pane v-for="item in options" :key="item.value" :label="item.label" :name="item.value" lazy>
                    {{ item.content }}
                </el-tab-pane>
            </el-tabs>
        </el-card>
        <code-example :code="code1" />
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

    get code1() {
        return (
            '<el-tabs v-model="activeName1" type="card">\n' +
            '    <el-tab-pane v-for="item in options" :key="item.value" :label="item.label" :name="item.value" lazy>\n' +
            '        {{ item.content }}\n' +
            '    </el-tab-pane>\n' +
            '</el-tabs>'
        );
    }
}
</script>

<style lang="scss">
.tab-container-card {
    > .el-card__body {
        padding: 20px 0;
    }
}
</style>
