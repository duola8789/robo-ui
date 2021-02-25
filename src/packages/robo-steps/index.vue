<template>
    <div class="robo-steps" :style="{height: space ? 'auto' : '100%'}">
        <slot :space="space"></slot>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class RoboSteps extends Vue {
    @Prop({type: Number}) space!: number;
}
</script>

<style lang="scss">
.robo-steps {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
}
</style>
