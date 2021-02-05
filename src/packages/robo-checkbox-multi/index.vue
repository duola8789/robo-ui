<template>
    <div class="robo-checkbox-multi" :class="direction">
        <div v-if="showTitle" class="label" :style="{flexBasis: titleLength + 'px'}">{{ title }}</div>
        <div class="content">
            <el-checkbox v-if="showCheckAll" v-model="checkAll" class="checkbox-all">全选</el-checkbox>
            <el-checkbox-group v-model="selectedList" class="checkbox-list" :max="max">
                <div v-for="option in cacheOptions" :key="option.value" class="checkbox-item">
                    <el-checkbox :label="option.value" :disabled="setBtnDisabled(option)">
                        {{ option.label }}
                    </el-checkbox>
                </div>
            </el-checkbox-group>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Emit, Watch} from 'vue-property-decorator';

@Component
export default class RoboCheckboxMulti extends Vue {
    @Prop({type: Array}) options!: {value: any; label: string}[];
    @Prop({type: String}) cacheKey!: any;

    @Prop({type: String, default: ''}) title!: string;
    @Prop({type: Number, default: 56}) titleLength!: number;
    @Prop({type: Array, required: true}) value!: Array<string | number>;
    @Prop({type: String, default: 'horizontal'}) direction!: 'vertical' | 'horizontal';
    @Prop({type: Boolean, default: true}) showCheckAll!: boolean;
    @Prop({default: undefined}) max!: undefined | number;

    get showTitle() {
        return this.direction === 'horizontal' && this.title;
    }

    get cacheOptions() {
        if (Array.isArray(this.options)) {
            return this.options;
        }
        if (!this.cacheKey) {
            throw new Error('options 和 cacheKey 至少传一个作为 Prop！');
        }
        if (!(this.$roboOptions as any).cache[this.cacheKey]) {
            throw new Error(`配置中不存在 ${this.cacheKey}，需要提前配置！`);
        }
        this.$roboOptions.getOptions(this.cacheKey);
        return (this.$roboOptions as any).cache[this.cacheKey].options;
    }

    get selectedList() {
        return [...this.value];
    }
    set selectedList(newVal: Array<string | number>) {
        this.emitUpdate(newVal);
        this.emitChange(newVal);
    }

    get checkAll() {
        const {cacheOptions} = this;
        if (!Array.isArray(cacheOptions) || cacheOptions.length === 0) {
            return false;
        }
        const validOptions = cacheOptions.filter((v) => !v.disabled);
        return this.selectedList.length >= (this.max ? Math.min(this.max, validOptions.length) : validOptions.length);
    }
    set checkAll(isCheckAll: boolean) {
        const {cacheOptions} = this;
        if (isCheckAll) {
            if (Array.isArray(cacheOptions) && cacheOptions.length > 0) {
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
            }
        } else {
            this.selectedList = [];
        }
    }

    @Watch('cacheOptions')
    optionsWatcher() {
        if (!Array.isArray(this.cacheOptions) || this.cacheOptions.length === 0) {
            this.emitNoOptions(true);
        } else {
            this.emitNoOptions(false);
        }
    }

    @Emit('update:value')
    emitUpdate(newVal: Array<string | number>) {
        return newVal;
    }

    @Emit('change')
    emitChange(newVal: Array<string | number>) {
        return newVal;
    }

    @Emit('no-options')
    emitNoOptions(isNoOptions: boolean) {
        return isNoOptions;
    }

    setBtnDisabled(option: TypeRoboOptionItem) {
        if (option.disabled) {
            return true;
        }
        if (!this.max || !this.selectedList || this.selectedList.length < this.max) {
            return false;
        }
        return !this.selectedList.some((v) => v === option.value);
    }
}
</script>

<style lang="scss">
.robo-checkbox-multi {
    &.vertical {
        .checkbox-all {
            height: 40px;
            line-height: 40px;
            padding: 0 16px;
            cursor: pointer;
        }

        .checkbox-list {
            .checkbox-item {
                height: 40px;
                line-height: 40px;
                padding: 0 16px;
                cursor: pointer;

                .el-checkbox {
                    width: 100%;
                }

                &:hover {
                    background: #fbfcfe;
                }
            }
        }
    }

    &.horizontal {
        display: flex;
        align-items: flex-start;

        .label {
            margin-right: 16px;
            flex: 0 0 auto;
            padding: 10px 0;
            line-height: 20px;
        }

        .content {
            display: flex;
            align-items: flex-start;
        }

        .checkbox-all {
            flex: 0;
            display: inline-block;
            font-size: 0;
            padding: 10px 0;
            margin-right: 16px;
            cursor: pointer;
        }

        .checkbox-list {
            margin-left: -68px;
            text-indent: 68px;

            .checkbox-item {
                display: inline-block;
                font-size: 0;
                padding: 10px 0;
                margin-right: 16px;
                cursor: pointer;
                text-indent: 0;

                .el-checkbox {
                    height: 100%;
                    width: 100%;
                    font-size: 0;

                    .el-checkbox__label {
                        width: 80%;
                    }
                }
            }
        }
    }
}
</style>
