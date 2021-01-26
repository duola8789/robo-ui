<template>
    <div class="page-container">
        <el-card
            header="带有清空和保存功能的全选组件，传入 value 作为初始值（布尔值），全选时触发 select-all 事件，保存时触发 save 组件，清空时触发 onClear 事件"
        >
            <div class="check-all-container">
                <robo-check-all :value.sync="checked" @select-all="onSelectAll" @save="onSave" @clear="onClear" />
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
        console.log('Check all ', val);
    }

    onSave() {
        console.log('Save');
    }

    onClear() {
        console.log('Clear');
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
