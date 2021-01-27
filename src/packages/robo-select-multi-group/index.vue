<template>
    <el-popover
        placement="bottom-start"
        :width="width"
        trigger="click"
        transition="el-zoom-in-top"
        popper-class="robo-select-multi-group-popper"
        @show="isInputActive = true"
        @hide="isInputActive = false"
    >
        <div
            slot="reference"
            class="robo-select-multi-group-reference"
            :class="isInputActive ? 'is-active' : ''"
            :style="{width: width + 'px'}"
        >
            <span v-if="title" class="robo-select-multi-group-title">{{ title }}</span>
            <div class="robo-select-multi-group-input">
                <div v-if="inputValue" class="input-value-container">
                    <p v-if="isSelectAll" class="input-value-all">{{ inputValue }}</p>
                    <p v-else class="input-value">
                        <span>已选择</span>
                        <span class="input-value-count">{{ inputValue }}</span>
                        <span>项</span>
                    </p>
                    <i class="el-icon-circle-close" @click.stop="onClear"></i>
                </div>
                <span v-else class="placeholder">{{ placeholder }}</span>
            </div>
            <i class="robo-select-multi-group-select-icon el-icon-arrow-up"></i>
        </div>
        <div class="robo-select-multi-group-content">
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
                <div class="options-group-container">
                    <div class="options-group">
                        <template v-for="group in cacheOptionsGroups">
                            <div :key="group.cacheKey + 'title'" class="option-title">
                                <robo-overflow-text :content="group.groupTitle" :visible="isInputActive" />
                            </div>
                            <robo-checkbox-multi
                                :key="group.cacheKey + 'option'"
                                :options="group.options"
                                :cache-key="group.cacheKey"
                                :value="selectedValue[group.cacheKey]"
                                direction="horizontal"
                                @change="(newVal) => updateSelectedValue(newVal, group.cacheKey)"
                            />
                        </template>
                    </div>
                </div>
            </template>
        </div>
    </el-popover>
</template>

<script lang="ts">
import {Component, Vue, Prop, Emit} from 'vue-property-decorator';

import RoboOverflowText from '../robo-overflow-text/index.vue';
import RoboSelectAll from '../robo-check-all/index.vue';
import RoboSelectMultiCheckbox from '../robo-checkbox-multi/index.vue';

@Component({
    components: {RoboSelectAll, RoboOverflowText, RoboSelectMultiCheckbox}
})
export default class RoboSelectMultiGroup extends Vue {
    @Prop({type: String, required: true}) title!: string;
    @Prop({type: Array, required: true}) cacheConfig!: RoboCacheConfigs;

    @Prop({type: Object, required: true}) value!: RoboCacheValue;

    @Prop({type: Number, default: 280}) width!: string;
    @Prop({type: String, default: '请选择'}) placeholder!: string;

    @Emit('update:value')
    emitUpdate(newVal: RoboCacheValue) {
        return newVal;
    }

    @Emit('change')
    emitChange(newVal: RoboCacheValue) {
        return newVal;
    }

    isInputActive = false;

    // cacheConfig 做了兼容，在这里直接处理了缓存
    get cacheOptionsGroups(): RoboCacheConfigItem[] {
        return this.cacheConfig.map((v) => {
            if (typeof v === 'string') {
                (this.$roboOptions.getOptions as any)(v);
                return {
                    cacheKey: v,
                    options: (this.$roboOptions as any).cache[v].options,
                    groupTitle: (this.$roboOptions as any).cache[v].title,
                    value: this.value[v]
                };
            }
            let options = v.options;
            if (!Array.isArray(options)) {
                (this.$roboOptions.getOptions as any)(v.cacheKey);
                options = (this.$roboOptions as any).cache[v.cacheKey].options;
            }
            return {
                cacheKey: v.cacheKey,
                options: options,
                groupTitle: v.groupTitle || (this.$roboOptions as any).cache[v.cacheKey].title,
                value: this.value[v.cacheKey]
            };
        });
    }

    get selectedValue() {
        return {...this.value};
    }
    set selectedValue(newVal: RoboCacheValue) {
        this.emitUpdate(newVal);
        this.emitChange(newVal);
    }

    get isSelectAll() {
        return this.allOptionsList.length === this.allSelectedList.length;
    }
    set isSelectAll(isSelectAll: boolean) {
        const newVal = this.cacheOptionsGroups.reduce((t, v) => {
            return {
                ...t,
                [v.cacheKey]: isSelectAll ? v.options.map((v) => v.value) : []
            };
        }, {} as RoboCacheValue);
        this.selectedValue = {...this.selectedValue, ...newVal};
    }

    get noOptions() {
        return !this.cacheOptionsGroups.some((v) => Array.isArray(v.options) && v.options.length > 0);
    }

    // 用于处理全选
    get allSelectedList() {
        return this.cacheOptionsGroups.reduce((t, v) => {
            return [...t, ...this.selectedValue[v.cacheKey]];
        }, [] as Array<string | number>);
    }

    get allOptionsList() {
        return this.cacheOptionsGroups.reduce((t, v) => {
            if (Array.isArray(v.options)) {
                return [...t, ...v.options.map((v) => v.value)];
            }
            return [...t];
        }, [] as Array<string | number>);
    }

    get inputValue() {
        if (this.noOptions) {
            return '';
        }
        if (this.isSelectAll) {
            return '已全选';
        }
        return this.allSelectedList.length;
    }

    updateSelectedValue(newVal: Array<string | number>, cacheKey: string) {
        this.selectedValue = {
            ...this.value,
            [cacheKey]: newVal
        };
    }

    onClear() {
        this.isSelectAll = false;
    }
}
</script>

<style lang="scss">
.robo-select-multi-group {
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

            .robo-select-multi-group-select-icon {
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

        .options-group-container {
            padding: 10px 0;
        }

        .options-group {
            display: grid;
            grid-template-columns: minmax(auto, 80px) auto;
            grid-column-gap: 16px;
            padding: 0 16px;
            font-size: 14px;
            color: #344156;
        }

        .option-title {
            white-space: nowrap;
            padding-top: 10px;
            color: #6e768e;
        }

        .el-checkbox {
            height: 100%;
            width: 100%;
            font-size: 0;
            color: #344156;

            .el-checkbox__label {
                width: calc(100% - 16px);
            }
        }

        .empty {
            text-align: center;
            color: #9fafc3;
        }
    }

    &-popper {
        &.el-popper.el-popover {
            width: 560px !important;
            padding: 4px 0;
            max-height: 268px;
            overflow-y: auto;
            margin-top: 1px;
            background: #fff;
            box-shadow: 0 2px 8px 0 #dcdee0;
            border-radius: 4px;

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
