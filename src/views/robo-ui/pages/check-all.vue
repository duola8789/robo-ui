<template>
    <div class="page-container">
        <el-card class="page-title">带有清空和保存功能的全选组件</el-card>
        <el-card header="传入 value 作为初始值（布尔值），全选时触发 select-all 事件，保存时触发 save 组件">
            <div class="check-all-container">
                <robo-check-all :value.sync="checked" @select-all="onSelectAll" @save="onSave" />
            </div>
            <p style="margin-top: 10px;">checked：{{ checked }}</p>
            <code-example :code="code" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class CheckAll extends Vue {
    checked = false;

    onSelectAll(val: boolean) {
        this.$message.success('Check all: ' + val);
    }

    onSave() {
        this.$message.success('save');
    }

    get code() {
        return '<robo-check-all :value.sync="checked" @select-all="onSelectAll" @save="onSave" @clear="onClear" />';
    }
}
</script>

<style scoped lang="scss">
.check-all-container {
    width: 280px;
    padding: 16px;
    border: 1px solid #d1dbe5;
}
</style>
