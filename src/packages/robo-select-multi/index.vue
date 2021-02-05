<template>
    <el-popover
        placement="bottom"
        :width="width"
        trigger="click"
        transition="el-zoom-in-top"
        popper-class="robo-select-multi-popper"
        @show="isInputActive = true"
        @hide="isInputActive = false"
    >
        <div
            slot="reference"
            class="robo-select-multi-reference"
            :class="[isInputActive ? 'is-active' : '', hideTitle ? 'no-title' : ' ']"
            :style="{width: width + 'px'}"
        >
            <span v-if="!hideTitle && cacheTitle" class="robo-select-multi-title">{{ cacheTitle }}</span>
            <div class="robo-select-multi-input">
                <div v-if="inputValue" class="input-value-container">
                    <p v-if="isSelectAll && !max" class="input-value-all">{{ inputValue }}</p>
                    <p v-else class="input-value">
                        <span>已选择</span>
                        <span class="input-value-count">{{ inputValue }}</span>
                        <span>项</span>
                    </p>
                    <i class="el-icon-circle-close" @click.stop="onReset"></i>
                </div>
                <span v-else class="placeholder">{{ placeholder }}</span>
            </div>
            <i class="robo-select-multi-select-icon el-icon-arrow-up"></i>
        </div>
        <div class="robo-select-multi-content">
            <template>
                <div class="option-header" :class="noOptions ? 'hide-border' : ''">
                    <robo-check-all
                        v-if="!noOptions"
                        :value.sync="isSelectAll"
                        :show-save-btn="false"
                        @clear="onClear"
                    />
                    <p v-else class="empty">暂无数据</p>
                </div>
                <robo-checkbox-multi
                    :options="options"
                    :cache-key="cacheKey"
                    :value.sync="selectedList"
                    :show-check-all="false"
                    :max="max"
                    direction="vertical"
                />
            </template>
        </div>
    </el-popover>
</template>

<script lang="ts">
import {Component, Vue, Prop, Emit} from 'vue-property-decorator';

import RoboCheckAll from '../robo-check-all/index.vue';
import RoboSelectMultiCheckbox from '../robo-checkbox-multi/index.vue';

@Component({
    components: {RoboCheckAll, RoboSelectMultiCheckbox}
})
export default class RoboSelectMulti extends Vue {
    @Prop({type: [Array]}) options!: TypeRoboOptionItem[];
    @Prop({type: [Object, String]}) cacheKey!: any;

    @Prop({type: Array, required: true}) value!: Array<string | number>;
    @Prop({type: String}) title!: string;
    @Prop({type: Number}) max!: number | undefined;
    @Prop({type: Boolean, default: false}) hideTitle!: boolean;
    @Prop({type: Number, default: 280}) width!: string;
    @Prop({type: String, default: '请选择'}) placeholder!: string;

    isInputActive = false;

    get selectedList() {
        return [...this.value];
    }
    set selectedList(newVal: Array<string | number>) {
        this.emitUpdate(newVal);
        this.emitChange(newVal);
    }

    get cacheOptions(): TypeRoboOptionItem[] {
        if (Array.isArray(this.options)) {
            return this.options;
        }
        if (!this.cacheKey) {
            throw new Error('options 和 cacheKey 至少传一个作为 Prop！');
        }
        if (!(this.$roboOptions as any).cache[this.cacheKey]) {
            throw new Error(`配置中不存在 ${this.cacheKey}，需要提前配置！`);
        }
        (this.$roboOptions as any).getOptions(this.cacheKey);
        return (this.$roboOptions as any).cache[this.cacheKey].options;
    }

    get cacheTitle() {
        if (this.title) {
            return this.title;
        }
        if (this.hideTitle || !this.cacheKey) {
            return '';
        }
        if (!(this.$roboOptions as any).cache[this.cacheKey]) {
            throw new Error(`配置中不存在 ${this.cacheKey}，需要提前配置！`);
        }
        return (this.$roboOptions as any).cache[this.cacheKey].title;
    }

    get noOptions() {
        return !Array.isArray(this.cacheOptions) || this.cacheOptions.length === 0;
    }

    get inputValue() {
        if (this.noOptions) {
            return '';
        }
        if (this.isSelectAll && !this.max) {
            return '已全选';
        }
        return this.selectedList.length;
    }

    get isSelectAll() {
        const {cacheOptions} = this;
        if (!Array.isArray(cacheOptions) || cacheOptions.length === 0) {
            return false;
        }
        const validOptions = cacheOptions.filter((v) => !v.disabled);
        return this.selectedList.length >= (this.max ? Math.min(this.max, validOptions.length) : validOptions.length);
    }
    set isSelectAll(isSelectAll: boolean) {
        if (isSelectAll) {
            const {cacheOptions} = this;
            if (!this.max || this.max <= 0) {
                this.selectedList = cacheOptions.filter((v) => !v.disabled).map((v) => v.value);
            } else {
                const remainSize = this.max - this.selectedList.length;
                if (remainSize > 0) {
                    const toSelect = cacheOptions
                        .filter((option) => !option.disabled && !this.selectedList.some((v) => v === option.value))
                        .slice(0, remainSize)
                        .map((v) => v.value);
                    this.selectedList = [...this.selectedList, ...toSelect];
                }
            }
        } else {
            this.selectedList = [];
        }
    }

    onClear() {
        this.selectedList = [];
    }

    @Emit('update:value')
    emitUpdate(newVal: Array<string | number>) {
        return newVal;
    }

    @Emit('change')
    emitChange(newVal: Array<string | number>) {
        return newVal;
    }

    onReset() {
        this.isSelectAll = false;
    }
}
</script>

<style lang="scss">
.robo-select-multi {
    &-reference {
        display: inline-flex;
        align-items: center;
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
        background: #fff;
        border: 1px solid #edf1f6;
        border-radius: 4px;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        cursor: pointer;

        &:hover {
            border-color: #9fafc3;
        }

        &.is-active {
            border-color: #1f66ff;

            .robo-select-multi-select-icon {
                transform: rotateZ(0);
            }
        }
    }

    &-input {
        flex: 1;
        position: relative;

        .input-value-container {
            display: flex;
            align-items: center;
            color: #344156;
        }

        .input-value-all {
            color: #1f66ff;
            margin-right: 8px;
        }

        .input-value {
            display: flex;
            align-items: center;
            margin-right: 8px;

            .input-value-count {
                color: #1f66ff;
                margin: 0 5px;
            }

            span {
                vertical-align: middle;
            }
        }

        .placeholder {
            display: flex;
            align-items: center;
            color: #9fafc3;
        }

        .el-icon-circle-close {
            position: relative;
            z-index: 2;
            width: 16px;
            height: 16px;
            margin-left: 6px;
            margin-top: 2px;
            color: #9fafc3;
        }
    }

    &-title {
        flex: 0 0 auto;
        margin-right: 8px;
        color: #6e768e;
    }

    &-select-icon {
        color: #344156;
        font-size: 14px;
        transition: transform 0.3s;
        transform: rotateZ(180deg);
        cursor: pointer;
    }

    &-content {
        font-size: 14px;
        color: #6e768e;

        .option-header {
            height: 40px;
            line-height: 40px;
            padding: 0 16px;
            border-bottom: 1px solid #edf1f6;

            &.hide-border {
                border-bottom: none;
            }
        }

        .empty {
            text-align: center;
            color: #9fafc3;
        }
    }

    &-popper {
        &.el-popper.el-popover {
            padding: 4px 0;
            max-height: 256px;
            overflow-y: auto;
            background: #fff;
            box-shadow: 0 2px 8px 0 #dcdee0;
            border-radius: 4px;

            &[x-placement^='top'] {
                margin-bottom: 1px;
            }

            &[x-placement^='bottom'] {
                margin-top: 1px;
            }

            &[x-placement^='left'] {
                margin-right: 1px;
            }

            &[x-placement^='right'] {
                margin-left: 1px;
            }

            .popper__arrow {
                display: none;
            }

            // 滚动条样式
            &::-webkit-scrollbar {
                width: 6px;
                height: 6px;
                cursor: pointer;
            }

            &::-webkit-scrollbar-track {
                width: 6px;
                height: 6px;
                background: transparent;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 5px;
                background-color: transparent;
            }

            &:hover {
                &::-webkit-scrollbar-thumb {
                    background-color: rgba(144, 147, 153, 0.5);
                }
            }
        }
    }
}
</style>
