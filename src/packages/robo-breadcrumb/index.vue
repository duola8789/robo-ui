<template>
    <div v-if="!hide && routeList.length > 0" class="robo-breadcrumb">
        <div v-for="(item, index) in routeList" :key="index" class="robo-breadcrumb-item">
            <span role="link" class="robo-breadcrumb-text" @click="onClick(index, item.path, item.query)">
                {{ item.title }}
            </span>
            <span class="robo-breadcrumb-separator">/</span>
        </div>
    </div>
</template>

<script lang="ts">
// 面包屑组件，默认需要在路由配置时向 meta 中添加以下属性（除非传入 route 为 false）
// {
//     breadcrumbTitle: string; // 展示的标题
//     hideBreadcrumb?: boolean; // 将在对应的路由下隐藏面包屑
//     tabTitles: ['TabA', 'TabB', 'TabC']， // 对应 Tab 下需要添加并且切换面包屑组件的情况，配合 route.query 和 tab-route-mixin 搭配使用

// }
import {Component, Vue, Emit, Prop} from 'vue-property-decorator';

@Component
export default class RoboBreadcrumb extends Vue {
    @Prop({type: Boolean, default: true}) route!: boolean;
    @Prop({type: Array, default: () => []}) pathList!: {path: string; title: string; query?: any}[];

    @Emit('current-page-click')
    currentPageClick() {}

    get hide() {
        return this.$route.meta?.hideBreadcrumb;
    }

    get parentRouteList(): {path: string; title: string; query?: any}[] {
        const {matched, query} = this.$route;

        return matched
            .filter((v) => v.meta?.breadcrumbTitle)
            .reduce((t, v) => {
                const current = {
                    path: v.path,
                    title: v.meta.breadcrumbTitle,
                    query: query || undefined
                };

                if (!Array.isArray(v.meta?.tabTitles) || v.meta?.tabTitles.length === 0) {
                    return [...t, current];
                }

                const tabRouteTitle =
                    typeof query?.tabIndex === 'string' ? v.meta.tabTitles[query?.tabIndex] : v.meta.tabTitles[0];
                return [
                    ...t,
                    {
                        path: v.path,
                        title: tabRouteTitle,
                        query: query || undefined
                    }
                ];
            }, [] as any);
    }

    get routeList() {
        const {meta = {}, query} = this.$route;
        return (this.route ? this.parentRouteList : this.pathList).concat({
            path: '',
            title: meta?.breadcrumbTitle || '当前页面',
            query: query || undefined
        });
    }

    onClick(index: number, path: string, query: any) {
        if (index === 0) {
            return;
        }
        if (path) {
            this.$router.push({path, query});
        } else {
            this.currentPageClick();
        }
    }
}
</script>

<style lang="scss">
.robo-breadcrumb {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 16px;
    line-height: 1;
    font-size: 12px;
    color: #6e768e;

    .robo-breadcrumb-item {
        .robo-breadcrumb-separator {
            margin: 0 8px;
            vertical-align: middle;
        }

        .robo-breadcrumb-text {
            vertical-align: middle;
        }

        &:first-child {
            .robo-breadcrumb-text {
                cursor: not-allowed;
            }
        }

        &:nth-child(n + 2) {
            .robo-breadcrumb-text {
                cursor: pointer;
                transition: all linear 0.1s;

                &:hover {
                    color: #1f66ff;
                }

                &:active,
                &:focus {
                    color: #0046bf;
                }
            }
        }

        &:last-child {
            .robo-breadcrumb-text {
                color: #344156;
            }

            .robo-breadcrumb-separator {
                display: none;
            }
        }
    }
}
</style>
