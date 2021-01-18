<template>
    <div class="page-container">
        <el-card header="Robo Select All">
            <robo-select-all :value.sync="checked" @select-all="onSelectAll" @save="onSave" @clear="onClear" />
            <p style="margin-top: 10px;">checked：{{ checked }}</p>
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ButtonPage extends Vue {
    checked = false;

    onSelectAll(val: boolean) {
        console.log('select all ', val);
    }

    onSave() {
        console.log('save');
    }

    onClear() {
        console.log('clear');
    }
}
</script>

<style scoped lang="scss">
.select-all-container {
    width: 280px;
}
</style>
