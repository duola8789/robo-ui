<template>
    <div class="page-container">
        <el-card class="page-title">
            面包屑组件，有非路由模式、路由模式和路由Tab模式，首级不可点击，如果没有 path 字段或者 path 字段与当前 url
            相同，会触发 current-page-click 事件
        </el-card>
        <el-card header="非路由模式：传入 route 为 false，并且传入具体的 pathList 配置">
            <robo-breadcrumb :route="false" :pathList="pathList" @current-page-click="onClick" />
            <code-example :code="code1" />
        </el-card>
        <el-card header="路由模式：不需要传入外参数，但是需要在 router.meta 中进行配置 breadcrumbTitle">
            <robo-breadcrumb @current-page-click="onClick" />
            <code-example :code="code2" />
        </el-card>
        <el-card
            header="路由模式下，某个路由（比如404）不需要展示面包屑，可以在 router.meta 中配置 hideBreadcrumb 为 true"
        >
            <robo-breadcrumb @current-page-click="onClick" />
            <code-example :code="code3" />
        </el-card>
        <el-card
            header="路由Tab模式：某些情况下，Tab切换也要有对应的面包屑展示(如下图)，需要在 router.meta 配置 tabTitles，并且配合 tabRouteMixin 实现"
        >
            <img class="image" alt="" src="http://image.oldzhou.cn/Fpj_0UIq15J8RF7r94kKaZeGCNHR" />
            <code-example :code="code4" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Breadcrumb extends Vue {
    pathList = [{path: '/robo-ui', title: 'RoboUI'}, {path: '/robo-ui/tag', title: 'RoboTag'}, {title: 'Current'}];

    onClick() {
        this.$message.success('Hello');
    }

    get code1() {
        return ['<robo-breadcrumb :route="false" :pathList="pathList" @current-page-click="onClick" />'];
    }

    get code2() {
        return '{\n' + '    breadcrumbTitle: string; // 展示的标题\n' + '}';
    }

    get code3() {
        return '{\n' + '    hideBreadcrumb?: boolean; // 将在对应的路由下隐藏面包屑\n' + '}';
    }

    get code4() {
        return [
            '{\n' +
                "    tabTitles: ['信息管理', '排班管理', '司机资源池管理']， // 对应 Tab 下需要添加并且切换面包屑组件的情况，配合 tab-route-mixin 搭配使用\n" +
                '}',
            '// 对应的组件中\n' +
                '@Component\n' +
                'export default class ResourceManageDriver extends Mixins(TabRouteMixin) {\n' +
                "    activeName = '信息管理';\n" +
                "    tabNames = ['信息管理', '排班管理', '司机资源池管理'];\n" +
                '}'
        ];
    }
}
</script>

<style lang="scss">
.image {
    width: 640px;
}
</style>
