<template>
    <div class="robo-info" :class="type">
        <i class="robo-info-icon" :class="icon"></i>
        <span class="robo-info-text"><slot></slot></span>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class RoboInfo extends Vue {
    @Prop({type: String, default: 'info'}) type!: 'success' | 'error' | 'warning' | 'info';

    get icon() {
        return `el-icon-${this.type}`;
    }
}
</script>

<style lang="scss">
$icon-info-color: #c2c6cc;
$icon-warning-color: #ff8645;
$icon-success-color: #1cbc9d;
$icon-error-color: #ff6868;

$background-info-color: #edf1f6;
$background-warning-color: #fff3e8;
$background-success-color: rgba(28, 188, 157, 0.08);
$background-error-color: #ffefef;

@mixin color($color) {
    background: #fff3e8;

    .robo-info-icon {
        color: #ff8645;
    }
}

.robo-info {
    padding: 16px;
    line-height: 20px;
    font-size: 14px;
    color: #6e768e;
    border-radius: 4px;

    .robo-info-icon {
        margin-right: 8px;
        vertical-align: middle;
    }

    .robo-info-text {
        vertical-align: middle;
    }

    &.info {
        background: $background-info-color;

        .robo-info-icon {
            color: $icon-info-color;
        }
    }

    &.warning {
        background: $background-warning-color;

        .robo-info-icon {
            color: $icon-warning-color;
        }
    }

    &.success {
        background: $background-success-color;

        .robo-info-icon {
            color: $icon-success-color;
        }
    }

    &.error {
        background: $background-error-color;

        .robo-info-icon {
            color: $icon-error-color;
        }
    }
}
</style>
