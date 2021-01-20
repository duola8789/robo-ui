<template>
    <div id="app">
        <el-container class="root-container">
            <robo-aside-nav :menus="menus" :text-overflow="true" />
            <el-main class="layout-main">
                <robo-breadcrumb :route="true" @current-page-click="refresh = !refresh" />
                <router-view :key="refresh" />
            </el-main>
        </el-container>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {MENU_CONFIG} from '@/config';

@Component
export default class App extends Vue {
    menus = MENU_CONFIG;

    refresh = true;
}
</script>

<style lang="scss">
html,
body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-size: 14px;
}

#app {
    font-family: 'PingFang SC', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial,
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    color: #344156;
    height: 100%;
    min-width: 1440px;
    font-weight: normal;
    background: #fff;
}

.root-container {
    height: 100%;

    .root-aside {
        background: #18182a;
    }

    .aside-header {
        position: relative;
        height: 48px;
        line-height: 48px;
        background: inherit;
        border-bottom: 1px solid #232342;

        .collapse-icon {
            margin-left: 20px;
            color: #7f7f91;
            font-size: 20px;
        }
    }

    .layout-aside-menu {
        &:not(.el-menu--collapse) {
            width: 208px;
        }
    }
}

input::-webkit-credentials-auto-fill-button {
    display: none !important;
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
}

input:focus::-webkit-contacts-auto-fill-button {
    opacity: 0;
}

// 滚动条样式
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-track {
    width: 6px;
    height: 6px;
    background: transparent;
}

::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #484b56;
}

.page-container {
    > .el-card {
        margin-bottom: 16px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
<style scoped lang="scss"></style>
