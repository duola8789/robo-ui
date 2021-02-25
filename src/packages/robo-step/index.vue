<template>
    <div class="robo-step" :style="space">
        <div class="robo-step-left">
            <i class="robo-step-icon" :class="status"></i>
            <div class="robo-step-line"></div>
        </div>
        <div class="robo-step-right">
            <p class="robo-step-title">{{ title }}</p>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class RoboStep extends Vue {
    @Prop({type: String, default: ''}) status!: 'finish' | 'default';
    @Prop({type: String, required: true}) title!: string;

    get space() {
        const space = (this.$parent as any).space;
        if (space) {
            return {
                height: `${space + 28}px`
            };
        }
        return {height: '100%'};
    }
}
</script>

<style lang="scss">
$default-color: #9fafc3;
$finish-color: #055fe7;

.robo-step {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 1;
    height: 100%;

    .robo-step-left {
        height: 100%;
        margin-top: 2px;
        margin-right: 8px;

        .robo-step-icon {
            display: block;
            width: 6px;
            height: 6px;
            margin-bottom: 2px;
            background: $default-color;
            border-radius: 50%;

            &.default {
                background: $default-color;
            }

            &.finish {
                background: $finish-color;
            }
        }

        .robo-step-line {
            width: 1px;
            height: calc(100% - 10px);
            background: #dee4ea;
            margin: 0 auto;
        }
    }

    .robo-step-right {
        .robo-step-title {
            height: 20px;
            line-height: 20px;
            color: #181c32;
            margin-bottom: 8px;
        }
    }

    &:last-child {
        flex-grow: 0;

        .robo-step-line {
            display: none;
        }
    }
}
</style>
