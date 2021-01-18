<template>
    <el-checkbox-group v-model="selectedList" class="robo-select-multi-checkbox" :class="direction">
        <ul class="checkbox-list">
            <li v-for="option in cacheOptions" :key="option.value" class="checkbox-item">
                <el-checkbox :label="option.value">
                    {{ option.label }}
                </el-checkbox>
            </li>
        </ul>
    </el-checkbox-group>
</template>

<script lang="ts">
import {Component, Vue, Prop, Emit, Watch} from 'vue-property-decorator';

import RoboOverflowText from '../robo-overflow-text/index.vue';
import RoboSelectAll from '../robo-select-all/index.vue';

@Component({
    components: {RoboSelectAll, RoboOverflowText}
})
export default class RoboSelectMultiCheckbox extends Vue {
    @Prop({type: [Array]}) options!: {value: any; label: string}[];
    @Prop({type: [Object, String]}) cacheKey!: any;

    @Prop({type: Array, required: true}) value!: Array<string | number>;
    @Prop({type: String, default: 'horizontal'}) direction!: 'vertical' | 'horizontal';

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
}
</script>

<style scoped lang="scss">
.robo-select-multi-checkbox {
    &.vertical {
        .checkbox-list {
            .checkbox-item {
                height: 40px;
                line-height: 40px;
                padding: 0 16px;
                cursor: pointer;

                ::v-deep .el-checkbox {
                    width: 100%;
                }

                &:hover {
                    background: #fbfcfe;
                }
            }
        }
    }

    &.horizontal {
        .checkbox-list {
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            .checkbox-item {
                font-size: 0;
                padding: 10px 0;
                margin-right: 16px;
                cursor: pointer;

                ::v-deep .el-checkbox {
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
