<template>
    <svg class="robo-font-icon" aria-hidden="true">
        <use ref="iconFont" :xlink:href="iconHref"></use>
    </svg>
</template>

<script lang="ts">
import {Component, Vue, Prop, Watch, Ref} from 'vue-property-decorator';

const DEFAULT_ICON: string = 'icon-sentiment-very-dissa';

@Component
export default class RoboFontIcon extends Vue {
    @Prop({required: true, type: String}) href!: string;

    @Ref() iconFont!: HTMLElement;

    iconHref = `#${DEFAULT_ICON}`;

    @Watch('href', {immediate: true})
    hrefWatch() {
        this.iconHref = `#${this.href || DEFAULT_ICON}`;
        setTimeout(() => {
            if (this.iconFont.getBoundingClientRect().width === 0) {
                this.iconHref = `#${DEFAULT_ICON}`;
            }
        });
    }
}
</script>

<style scoped lang="scss">
.robo-font-icon {
    color: inherit;
    cursor: pointer;
    user-select: none;
    transition: all linear 0.1s;
}
</style>
