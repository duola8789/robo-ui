<template>
    <div class="robo-columns-container" :class="revert ? 'is-revert' : ''">
        <div class="robo-2-columns-main robo-2-columns-block">
            <div class="robo-2-columns-header">
                <slot name="main-header"></slot>
            </div>
            <slot name="default"></slot>
        </div>
        <div class="robo-2-columns-aside">
            <div v-for="(item, index) in asideBlocks" :key="item" class="robo-2-columns-block">
                <div class="robo-2-columns-header">
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

    .robo-2-columns-main {
        flex: 28 1 896px;
        margin-right: 16px;
    }

    .robo-2-columns-aside {
        flex: 9 1 288px;

        > div {
            padding: 16px;
            background: #fff;
            border-radius: 2px;
        }
    }

    &.is-revert {
        flex-direction: row-reverse;

        .robo-2-columns-main {
            margin-right: 0;
        }

        .robo-2-columns-aside {
            margin-right: 16px;
        }
    }

    .robo-2-columns-block {
        padding: 16px;
        background: #fff;
        border-radius: 2px;
        margin-bottom: 16px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .robo-2-columns-header {
        font-size: 16px;
        color: #181c32;
        line-height: 1;
        margin-bottom: 16px;
    }
}
</style>
