<template>
    <el-aside class="layout-aside" :class="isCollapsed ? 'is-collapsed' : ''" width="auto">
        <div class="layout-aside-header">
            <div class="logo"></div>
            <div class="collapse-icon-container" @click="isCollapsed = !isCollapsed">
                <robo-font-icon class="collapse-icon" href="icon-view-headline" />
            </div>
        </div>
        <robo-aside-nav-menu :is-collapsed="isCollapsed" :menus="menus" :text-overflow="textOverflow" />
    </el-aside>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import RoboAsideNavMenu from '../robo-aside-nav-menu/index.vue';
import RoboFontIcon from '../robo-font-icon/index.vue';

@Component({
    components: {RoboAsideNavMenu, RoboFontIcon}
})
export default class RoboAsideNav extends Vue {
    @Prop({type: Array, required: true}) readonly menus!: TypeMenuConfig[];
    @Prop({type: Boolean, default: false}) readonly textOverflow!: boolean;

    isCollapsed: boolean = false;
}
</script>

<style scoped lang="scss">
$iconHoverColor: #409eff;
$iconActiveColor: #2067b3;

.layout-aside {
    background: #18182a;

    .layout-aside-header {
        position: relative;
        height: 48px;
        line-height: 48px;
        background: inherit;
        border-bottom: 1px solid #232342;

        .logo {
            position: absolute;
            top: 50%;
            left: 56px;
            transform: translate(0, -50%);
            width: 80px;
            height: 30px;
            background: url('./images/icon-logo.png') no-repeat center center;
            background-size: contain;
            transition: none;
        }

        .collapse-icon-container {
            position: absolute;
            top: 50%;
            left: 168px;
            transform: translate(0, -50%);
            width: 32px;
            height: 32px;
            line-height: 32px;
            border-radius: 4px;
            text-align: center;
            cursor: pointer;
            user-select: none;

            .collapse-icon {
                color: #7f7f91;
                font-size: 16px;
            }

            &:hover {
                background: #26263c;

                .collapse-icon {
                    color: $iconHoverColor;
                }
            }

            &:focus,
            &:active {
                .collapse-icon {
                    color: $iconActiveColor;
                }
            }
        }
    }

    &.is-collapsed {
        .layout-aside-header {
            cursor: pointer;
            user-select: none;

            .logo {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 32px;
                height: 32px;
                background: url('./images/icon-logo-simple.png') no-repeat center center;
                background-size: contain;
            }

            .collapse-icon-container {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
            }

            &:hover {
                .logo {
                    opacity: 0;
                }

                .collapse-icon-container {
                    opacity: 1;
                }
            }
        }
    }
}
</style>
