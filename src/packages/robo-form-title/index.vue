<template>
    <div class="robo-form-title">
        <i class="robo-form-prefix-icon"></i>
        <span class="robo-form-prefix-content">{{ title }}</span>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class RoboFormTitle extends Vue {
    @Prop({type: String, required: true}) title!: string;
}
</script>

<style lang="scss">
.robo-form-title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 40px;
    border-bottom: 1px solid #edf1f6;

    .robo-form-prefix-icon {
        display: inline-block;
        width: 2px;
        height: 14px;
        margin-right: 8px;
        background: #055fe7;
    }

    .robo-form-prefix-content {
        font-size: 14px;
        color: #181c32;
    }
}
</style>
