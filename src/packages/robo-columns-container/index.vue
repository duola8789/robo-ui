<template>
    <div class="robo-columns-container" :class="revert ? 'is-revert' : ''">
        <div class="robo-columns-main robo-columns-block">
            <div v-if="$slots['main-header']" class="robo-columns-header">
                <slot name="main-header"></slot>
            </div>
            <slot name="default"></slot>
        </div>
        <div class="robo-columns-aside">
            <div v-for="(item, index) in asideBlocks" :key="item" class="robo-columns-block robo-aside-columns-block">
                <div v-if="$slots[asideSlotName('aside-header', index)]" class="robo-columns-header">
                    <slot :name="asideSlotName('aside-header', index)"></slot>
                </div>
                <slot :name="asideSlotName('aside', index)"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class RoboColumnsContainer extends Vue {
    @Prop({type: Number, default: 1}) asideBlocks!: number;
    @Prop({type: Boolean, default: false}) revert!: boolean;

    asideSlotName(baseName: string, index: number) {
        if (index === 0) {
            return baseName;
        }
        return `${baseName}-${index + 1}`;
    }
}
</script>

<style lang="scss">
.robo-columns-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    .robo-columns-main {
        flex: 1 1 896px;
        margin-right: 16px;
        margin-bottom: 0;
    }

    .robo-columns-aside {
        flex: 0 1 288px;

        > div {
            padding: 16px;
            background: #fff;
            border-radius: 2px;
        }
    }

    &.is-revert {
        flex-direction: row-reverse;

        .robo-columns-main {
            margin-right: 0;
        }

        .robo-columns-aside {
            margin-right: 16px;
        }
    }

    .robo-columns-block {
        padding: 16px;
        background: #fff;
        border-radius: 2px;

        &:last-child {
            margin-bottom: 0;
        }

        &.robo-aside-columns-block {
            padding: 24px;
            margin-bottom: 16px;

            &:last-child {
                margin-bottom: 0;
            }

            .el-button {
                width: 100%;
                margin-bottom: 16px;
                margin-left: 0;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }

    .robo-columns-header {
        font-size: 16px;
        color: #181c32;
        line-height: 1;
        margin-bottom: 16px;
    }
}
</style>
