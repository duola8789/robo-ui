<template>
    <div class="robo-overflow-text-container">
        <div v-if="!isOverflow" ref="content" class="robo-normal-text">
            <slot name="icon"></slot>
            <span>{{ content }}</span>
        </div>
        <el-popover
            v-else
            :trigger="trigger"
            :placement="placement"
            :popper-class="innerPopperClass"
            :open-delay="100"
            :class="popperClass"
        >
            <p>{{ content }}</p>
            <div slot="reference" class="robo-overflow-text">
                <slot name="icon"></slot>
                <span>{{ content }}</span>
            </div>
        </el-popover>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Watch, Ref} from 'vue-property-decorator';

@Component
export default class RoboOverflowText extends Vue {
    @Prop({default: 'hover', type: String}) readonly trigger!: string;
    @Prop({default: 'top', type: String}) readonly placement!: string;
    @Prop({required: true, type: String}) readonly content!: string;
    @Prop({default: '', type: String}) readonly popperClass!: string;
    @Prop({default: false, type: Boolean}) readonly visible!: boolean;

    @Ref('content') readonly contentEl!: HTMLElement;

    isOverflow = false;

    // 通过 visible 控制，只需要判断一次
    isSetByVisible = false;

    get innerPopperClass() {
        if (this.popperClass) {
            return this.popperClass;
        }
        return 'robo-overflow-text-popper';
    }

    setIsOverflow() {
        setTimeout(() => {
            if (this.contentEl) {
                this.isOverflow = this.contentEl.clientWidth < this.contentEl.scrollWidth;
            }
        });
    }

    // 判断元素的 clientWidth 是否小于 scrollWidth，是的话说明溢出，需要剪切
    @Watch('content', {immediate: true})
    contentWatch(newVal: string, oldVal: string) {
        if (newVal !== oldVal) {
            this.isOverflow = false;
            this.setIsOverflow();
        }
    }

    // 适用于弹窗等不会立刻出现的情况
    @Watch('visible')
    visibleWatcher(newVal: string, oldVal: string) {
        if (newVal !== oldVal) {
            if (!this.isSetByVisible) {
                this.setIsOverflow();
                this.isSetByVisible = true;
            }
        }
    }
}
</script>

<style lang="scss">
.robo-overflow-text-container {
    .robo-overflow-text {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        transition: color linear 0.2s;
    }
}
</style>
