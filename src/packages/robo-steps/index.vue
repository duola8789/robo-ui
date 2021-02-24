<template>
    <div class="robo-steps">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class RoboSteps extends Vue {}
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
