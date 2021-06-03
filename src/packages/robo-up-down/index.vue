<template>
    <div class="robo-up-down" :class="size">
        <robo-font-icon
            class="robo-up robo-up-down-icon"
            href="icon-arrow-drop-up"
            :class="upDisabled ? 'disabled' : ''"
            @click.native="onMove('up')"
        />
        <robo-font-icon
            class="robo-down robo-up-down-icon"
            href="icon-arrow-drop-down"
            :class="downDisabled ? 'disabled' : ''"
            @click.native="onMove('down')"
        />
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Emit} from 'vue-property-decorator';

@Component
export default class RoboUpDown extends Vue {
    @Prop({type: Boolean, default: false}) upDisabled!: boolean;
    @Prop({type: Boolean, default: false}) downDisabled!: boolean;
    @Prop({type: String, default: 'small'}) size!: 'medium' | 'small' | 'mini';

    @Emit('move')
    emitMove(direction: 'up' | 'down') {
        return direction;
    }

    onMove(direction: 'up' | 'down') {
        if ((direction === 'up' && !this.upDisabled) || (direction === 'down' && !this.downDisabled)) {
            this.emitMove(direction);
        }
    }
}
</script>

<style lang="scss">
$primaryColor: #055fe7;
$primaryHoverColor: #377fec;
$primaryActiveColor: #0556d0;

$disabledColor: #c2c6cc;

.robo-up-down {
    position: relative;
    width: 16px;
    height: 16px;
    text-align: center;

    &.medium {
        font-size: 12px;

        .robo-up-down-icon {
            &.robo-up {
                transform: translate(-50%, -3px);
            }

            &.robo-down {
                transform: translate(-50%, 3px);
            }
        }
    }

    &.small {
        font-size: 10px;

        .robo-up-down-icon {
            &.robo-up {
                transform: translate(-50%, -1px);
            }

            &.robo-down {
                transform: translate(-50%, 1px);
            }
        }
    }

    &.mini {
        font-size: 8px;

        .robo-up-down-icon {
            &.robo-up {
                transform: translate(-50%, 0.5px);
            }

            &.robo-down {
                transform: translate(-50%, -0.5px);
            }
        }
    }

    .robo-up-down-icon {
        position: absolute;
        left: 50%;
        font-size: inherit;
        color: $primaryColor;

        &:not(.disabled) {
            &:hover {
                color: $primaryHoverColor;
            }

            &:active {
                color: $primaryActiveColor;
            }
        }

        &.robo-up {
            top: 0;
        }

        &.robo-down {
            bottom: 0;
        }

        &.disabled {
            color: $disabledColor;
            cursor: not-allowed;
        }
    }
}
</style>
