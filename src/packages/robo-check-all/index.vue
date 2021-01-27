<template>
    <div class="robo-check-all">
        <el-checkbox v-model="checked">{{ label }}</el-checkbox>
        <div class="button-group">
            <el-button type="text" class="clear-btn" @click="clear">清空</el-button>
            <el-button v-if="showSaveBtn" type="text" class="save-btn" @click="save">保存</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Emit} from 'vue-property-decorator';

@Component
export default class RoboCheckAll extends Vue {
    @Prop({type: Boolean, required: true}) value!: boolean;
    @Prop({type: String, default: '全选'}) label!: string;
    @Prop({type: Boolean, default: true}) showSaveBtn!: string;

    get checked() {
        return this.value;
    }
    set checked(newVal: boolean) {
        this.updateValue(newVal);
        this.selectAll(newVal);
    }

    clear() {
        this.checked = false;
    }

    @Emit('update:value')
    updateValue(newVal: boolean) {
        return newVal;
    }

    @Emit()
    selectAll(newVal: boolean) {
        return newVal;
    }

    @Emit()
    save() {}
}
</script>

<style lang="scss">
.robo-check-all {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .clear-btn {
        padding: 0;

        &:not(.is-disabled) {
            color: #6e768e;

            &:hover {
                color: #4c85ff;
            }

            &:active,
            &:focus {
                color: #1c5ce6;
            }
        }
    }

    .save-btn {
        padding: 0;
        margin-left: 8px;
    }
}
</style>
