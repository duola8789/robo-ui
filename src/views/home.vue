<template>
    <el-card class="home-card" header="RoboUI For RoboX FE Team">
        <robo-info class="home-title">共包含两部分内容，共29个基础组件和业务组件（2020-01-27）</robo-info>
        <el-row :gutter="20">
            <el-col :span="14">
                <el-card header="Robo-UI组件：自研组件（共15）">
                    <div class="inside-card">
                        <el-card v-for="item in roboItems" :key="item.name" shadow="hover">
                            <div class="item" @click="onClick('/robo-ui', item.url)">
                                <div class="item-top">{{ item.name }}</div>
                                <div class="item-bottom">{{ item.code }}</div>
                            </div>
                        </el-card>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card header="ElementUI改造（theme-robo主题），用法不变，部分组件需要传入指定的参数（共14）">
                    <div class="inside-card">
                        <el-card v-for="item in eleItems" :key="item.name" shadow="hover">
                            <div class="item" @click="onClick('', item.url)">
                                <div class="item-top">{{ item.name }}</div>
                            </div>
                        </el-card>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </el-card>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class HomePage extends Vue {
    get roboItems() {
        return [
            {name: '字体图标', code: '<robo-font-icon />', url: '/font-icon'},
            {name: '文字剪切', code: '<robo-overflow-text />', url: '/overflow-text'},
            {name: '标签', code: '<robo-tag />', url: '/tag'},
            {name: '用户头像', code: '<robo-user-avatar />', url: '/user-avatar'},
            {name: '面包屑', code: '<robo-breadcrumb />', url: '/breadcrumb'},
            {name: '提示信息', code: '<robo-info />', url: '/info'},
            {name: '全选', code: '<robo-check-all />', url: '/check-all'},
            {name: '缓存Checkbox', code: '<robo-checkbox-multi />', url: '/checkbox-multi'},
            {name: '缓存Checkbox组', code: '<robo-checkbox-multi-group />', url: '/checkbox-multi-group'},
            {name: '缓存Select', code: '<robo-select-multi />', url: '/select-multi'},
            {name: '缓存Select组', code: '<robo-select-multi-group />', url: '/select-multi-group'},
            {name: '两栏布局', code: '<robo-2-columns-container />', url: '/2-columns-container'},
            {name: '异常页面', code: '<robo-error-page />', url: '/error-page'},
            {name: '导航', code: '<robo-aside-nav-menu />'},
            {name: '侧边栏', code: '<robo-aside-nav />'}
        ];
    }

    get eleItems() {
        return [
            {name: 'Button', url: '/basic/el-button'},
            {name: 'Input', url: '/form/el-input'},
            {name: 'Checkbox', url: '/form/el-checkbox'},
            {name: 'Select', url: '/form/el-select'},
            {name: 'DatePicker', url: '/form/el-datepicker'},
            {name: 'Form', url: '/form/el-form'},
            {name: 'Table', url: '/data/el-table'},
            {name: 'Pagination', url: '/data/el-pagination'},
            {name: 'Message', url: '/notice/el-message'},
            {name: 'MessageBox', url: '/notice/el-message-box'},
            {name: 'Loading', url: '/notice/el-loading'},
            {name: 'Tab', url: '/navigation/el-tab'},
            {name: 'Dialog', url: '/others/el-dialog'},
            {name: 'Collapse', url: '/others/el-collapse'}
        ];
    }

    onClick(base: string, path?: string) {
        if (!path) {
            this.$message.error('展示页面 To Be Done...');
            return;
        }
        this.$router.push(`${base}${path}`);
    }
}
</script>

<style lang="scss">
.home-card {
    > .el-card__header {
        color: #1989fa;
        font-size: 28px;
        font-weight: bold;
    }

    .home-title {
        margin-bottom: 16px;
    }

    .inside-card {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 16px;
    }

    .item {
        cursor: pointer;
    }

    .item-bottom {
        margin-top: 8px;
        color: #3182bd;
        font-family: monospace;
    }
}
</style>
