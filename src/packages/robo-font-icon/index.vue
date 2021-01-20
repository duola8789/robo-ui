<template>
    <svg class="robo-font-icon" aria-hidden="true">
        <use :xlink:href="iconHref"></use>
    </svg>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class RoboFontIcon extends Vue {
    @Prop({required: true, type: String}) href!: string;

    iconHref = `#${this.href}`;
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
