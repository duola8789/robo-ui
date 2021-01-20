<template>
    <svg ref="iconSvg" class="robo-font-icon" aria-hidden="true">
        <use ref="iconFont" :xlink:href="iconHref"></use>
    </svg>
</template>

<script lang="ts">
import {Component, Vue, Prop, Watch, Ref} from 'vue-property-decorator';

const DEFAULT_ICON: string = 'icon-sentiment-very-dissa';

@Component
export default class RoboFontIcon extends Vue {
    @Prop({required: true, type: String}) href!: string;

    @Ref() iconSvg!: HTMLElement;
    @Ref() iconFont!: HTMLElement;

    iconHref = `#${DEFAULT_ICON}`;

    // 目前如果无法根据元素可见性（display）变化（比如出现在 dialog 中）时，设置默认图标
    @Watch('href', {immediate: true})
    hrefWatch() {
        this.iconHref = `#${this.href || DEFAULT_ICON}`;
        setTimeout(() => {
            if (this.iconSvg.getBoundingClientRect().width !== 0 && this.iconFont.getBoundingClientRect().width === 0) {
                this.iconHref = `#${DEFAULT_ICON}`;
            }
        });
    }
}
</script>

<style lang="scss">
.robo-font-icon {
    color: inherit;
    cursor: pointer;
    user-select: none;
    transition: all linear 0.1s;
}
</style>
