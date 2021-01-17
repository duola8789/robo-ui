<template>
    <el-menu
        class="layout-aside-menu"
        :router="true"
        :collapse="isCollapsed"
        :default-active="defaultActive"
        :unique-opened="false"
        @open="onOpen"
        @close="onClose"
    >
        <template v-for="menu in menus">
            <!-- 有子菜单 -->
            <template v-if="menu.children && menu.children.length > 0">
                <el-submenu :key="menu.path" :index="menu.path">
                    <template slot="title">
                        <robo-font-icon :href="menuIcon(menu.icon, menu.path)" />
                        <span slot="title">{{ menu.title }}</span>
                    </template>
                    <el-menu-item
                        v-for="item in menu.children"
                        :key="getItemPath(menu.path, item.path)"
                        :index="getItemPath(menu.path, item.path)"
                        :class="textOverflow ? '' : 'text-overflow'"
                        :title="textOverflow ? '' : item.title"
                    >
                        <robo-overflow-text
                            v-if="textOverflow"
                            :content="item.title"
                            :visible="openedPath.includes(menu.path)"
                            placement="right"
                        />
                        <span v-else>{{ menu.title }}</span>
                    </el-menu-item>
                </el-submenu>
            </template>
            <!-- 没有子菜单 -->
            <template v-else>
                <el-menu-item :key="menu.path" :index="menu.path">
                    <robo-font-icon :href="menuIcon(menu.icon, menu.path)" placement="right" />
                    <span slot="title">{{ menu.title }}</span>
                </el-menu-item>
            </template>
        </template>
    </el-menu>
</template>

<script lang="ts">
// 导航组件，目前只支持二级路由，如果需要三级路由并展开对应的导航菜单，需要在路由配置时向 meta 中添加以下属性
// {
//     openMenu: true; // 打开父级导航
// }
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import RoboOverflowText from '../robo-overflow-text/index.vue';
import RoboFontIcon from '../robo-font-icon/index.vue';

@Component({components: {RoboOverflowText, RoboFontIcon}})
export default class RoboAsideNavMenu extends Vue {
    @Prop({type: Boolean, required: true}) readonly isCollapsed!: boolean;
    @Prop({type: Array, required: true}) readonly menus!: TypeMenuConfig[];
    @Prop({type: Boolean, default: false}) readonly textOverflow!: boolean;
    @Prop({type: Boolean, default: false}) readonly activeIcon!: boolean;

    defaultActive = '';
    openedPath: string[] = [];

    // 与视觉同学的约定，导航选中时，替换为 icon-xxx-solid 的实心图标
    menuIcon(iconName: string, menuPath: string) {
        if (!this.activeIcon) {
            return iconName;
        }
        const isActive = this.defaultActive.startsWith(menuPath);
        return isActive ? `${iconName}-solid` : iconName;
    }

    getItemPath(parentPath: string, childPath: string) {
        return `${parentPath}${childPath.startsWith('/') ? childPath : '/' + childPath}`;
    }

    onOpen(indexPath: string) {
        this.openedPath.push(indexPath);
    }

    onClose(indexPath: string) {
        const index = this.openedPath.indexOf(indexPath);
        index > -1 && this.openedPath.splice(index, 1);
    }

    @Watch('$route.path', {immediate: true})
    onRouteChange() {
        const openMenu = this.$route.meta && this.$route.meta.openMenu;
        this.defaultActive = openMenu
            ? this.$route.path
                  .split('/')
                  .slice(0, 3)
                  .join('/')
            : this.$route.path;
    }
}
</script>

<style lang="scss">
.layout-aside-menu {
    &:not(.el-menu--collapse) {
        width: 208px;
    }

    .text-overflow {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
</style>
