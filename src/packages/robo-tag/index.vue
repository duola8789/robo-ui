<template>
    <span class="robo-tag" :style="roboStyle" :class="type">
        <slot name="default"></slot>
    </span>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class RoboTag extends Vue {
    @Prop({type: String}) type!: 'error' | 'success' | 'task' | 'info' | 'warning' | 'fail';
    @Prop({type: String, default: ''}) textColor!: string;
    @Prop({type: String, default: ''}) borderColor!: string;
    @Prop({type: String}) backgroundColor!: string;

    get _backgroundColor() {
        if (this.backgroundColor) {
            return this.backgroundColor;
        }
        return '#fff';
    }

    get _borderColor() {
        if (this.borderColor) {
            return this.borderColor;
        }
        return this.textColor;
    }

    get roboStyle() {
        return {
            color: this.textColor,
            borderColor: this._borderColor,
            backgroundColor: this._backgroundColor
        };
    }
}
</script>

<style lang="scss">
$default-color: #6e768e;
$info-color: #00cfe6;
$error-color: #ff6868;
$success-color: #1cbc9d;
$task-color: #277ff2;
$warning-color: #ff8645;
$fail-color: #c2c6cc;

.robo-tag {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    height: 20px;
    font-size: 12px;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    color: $default-color;
    border-color: $default-color;

    &.info {
        color: $info-color;
        border-color: $info-color;
    }

    &.success {
        color: $success-color;
        border-color: $success-color;
    }

    &.error {
        color: $error-color;
        border-color: $error-color;
    }

    &.task {
        color: $task-color;
        border-color: $task-color;
    }

    &.warning {
        color: $warning-color;
        border-color: $warning-color;
    }

    &.fail {
        color: $fail-color;
        border-color: $fail-color;
    }
}
</style>
