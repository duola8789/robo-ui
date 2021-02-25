<template>
    <div class="robo-up-down">
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
    font-size: 10px;
    text-align: center;

    .robo-up-down-icon {
        position: absolute;
        left: 0;
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
            transform: translateY(-2px);
        }

        &.robo-down {
            bottom: 0;
            transform: translateY(2px);
        }

        &.disabled {
            color: $disabledColor;
            cursor: not-allowed;
        }
    }
}
</style>
