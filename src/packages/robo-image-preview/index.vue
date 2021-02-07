<template>
    <div v-if="innerVisible" class="robo-image-preview-wrapper">
        <div class="robo-image-preview">
            <div class="robo-image-preview-header">
                <p class="header-text">{{ current.title }}</p>
                <i class="el-icon-close" @click="innerVisible = false"></i>
            </div>
            <div class="robo-image-preview-content">
                <img :src="current.src" alt="" />
            </div>
            <div class="robo-image-preview-footer">
                <div
                    class="change-current"
                    :class="currentIndex === 0 ? 'is-disabled' : ''"
                    @click="changePreview(false)"
                >
                    <robo-font-icon class="change-current-icon" href="icon-arrow-left"></robo-font-icon>
                    <span class="last-text">上一张</span>
                </div>
                <div class="image-name" :title="current.name">{{ current.name }}</div>
                <div
                    class="change-current"
                    :class="currentIndex === previewList.length - 1 ? 'is-disabled' : ''"
                    @click="changePreview(true)"
                >
                    <span class="next-text">下一张</span>
                    <robo-font-icon class="change-current-icon" href="icon-arrow-right"></robo-font-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Watch, Emit} from 'vue-property-decorator';

@Component
export default class RoboImagePreview extends Vue {
    @Prop({type: Boolean, default: false, required: true}) visible!: boolean;
    @Prop({type: Array, required: true}) previewList!: TypeRoboPreviewItem[];
    @Prop({type: Number, default: 0}) initIndex!: number;

    get innerVisible() {
        return this.visible;
    }
    set innerVisible(visible) {
        this.toggleDialogVisible(visible);
    }

    @Emit('update:visible')
    toggleDialogVisible(visible: boolean) {
        return visible;
    }

    currentIndex = 0;

    get current() {
        return this.previewList[this.currentIndex];
    }

    @Watch('innerVisible')
    innerVisibleWatcher() {
        if (this.innerVisible) {
            this.currentIndex = Math.max(0, this.initIndex);
        }
    }

    changePreview(forward: boolean) {
        if (forward) {
            if (this.currentIndex === this.previewList.length - 1) {
                return;
            }
        } else {
            if (this.currentIndex === 0) {
                return;
            }
        }
        this.currentIndex = this.currentIndex + (forward ? 1 : -1);
    }
}
</script>

<style lang="scss">
.robo-image-preview-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(10, 20, 32, 0.5);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;

    .robo-image-preview {
        width: 500px;
        color: #fff;
    }

    .robo-image-preview-header {
        overflow: hidden;
        margin-bottom: 12px;

        .header-text {
            float: left;
        }

        .el-icon-close {
            float: right;
            font-size: 16px;
            margin-top: 2px;
            cursor: pointer;
            transition: linear all 0.1s;

            &:hover {
                color: #055fe7;
            }
        }
    }

    .robo-image-preview-content {
        height: 296px;
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 12px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .robo-image-preview-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        color: #fff;
        line-height: 20px;

        .change-current {
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: linear all 0.1s;
            user-select: none;
            flex-shrink: 0;

            &:not(.is-disabled):hover {
                color: #055fe7;
            }

            &.is-disabled {
                cursor: not-allowed;
                color: #aeafb4;
            }

            .change-current-icon {
                font-size: 12px;
                transition: inherit;
            }

            .last-text {
                margin-left: 4px;
                transition: inherit;
            }

            .next-text {
                margin-right: 4px;
                transition: inherit;
            }
        }

        .image-name {
            max-width: 350px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
}
</style>
