<template>
    <el-avatar class="robo-user-avatar" :size="size" :src="avatar" :style="{fontSize}">
        <robo-font-icon class="fallback-avatar-icon" href="icon-person-solid" />
    </el-avatar>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import RoboFontIcon from '../robo-font-icon/index.vue';

@Component({
    components: {RoboFontIcon}
})
export default class RoboUserAvatar extends Vue {
    @Prop({default: '', type: String}) avatar!: string;
    @Prop({default: 24, type: Number}) size!: number;

    get fontSize() {
        if (this.size > 24) {
            return this.size / 2 + 'px';
        }
        return '14px';
    }
}
</script>

<style lang="scss">
.robo-user-avatar {
    border: 1px solid #eeeff1;

    .fallback-avatar-icon {
        &:hover,
        &:active,
        &:focus {
            color: inherit;
        }
    }
}
</style>
