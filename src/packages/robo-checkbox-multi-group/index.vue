<template>
    <div class="robo-checkbox-multi-group">
        <robo-checkbox-multi
            v-for="group in cacheOptionsGroups"
            :key="group.cacheKey"
            :options="group.options"
            :title="group.groupTitle"
            :title-length="titleLength"
            :cache-key="group.cacheKey"
            :value="selectedValue[group.cacheKey]"
            :max="group.max"
            direction="horizontal"
            @change="(newVal) => updateSelectedValue(newVal, group.cacheKey)"
        />
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Emit} from 'vue-property-decorator';
import RoboCheckboxMulti from '../robo-checkbox-multi/index.vue';

@Component({
    components: {RoboCheckboxMulti}
})
export default class RoboCheckboxMultiGroup extends Vue {
    @Prop({type: Array, required: true}) cacheConfig!: RoboCacheConfigs;
    @Prop({type: Object, required: true}) value!: RoboCacheValue;
    @Prop({type: Number, default: 56}) titleLength!: number;

    @Emit('update:value')
    emitUpdate(newVal: RoboCacheValue) {
        return newVal;
    }

    @Emit('change')
    emitChange(newVal: RoboCacheValue) {
        return newVal;
    }

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
                value: this.value[v.cacheKey],
                max: v.max
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

    updateSelectedValue(newVal: Array<string | number>, cacheKey: string) {
        this.selectedValue = {
            ...this.value,
            [cacheKey]: newVal
        };
    }
}
</script>
