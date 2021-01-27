import {RouteConfig} from 'vue-router';
import {TypeLazyLoadComp, TypeMenuConfig, TypePageConfig, TypeRouteMeta} from '@/config/types';

/**
 * 非开发模式路由懒加载
 * @param componentPath `./src/views`下的文件名
 */
function lazyLoadHelper(componentPath: string): TypeLazyLoadComp {
    if (process.env.NODE_ENV === 'development') {
        const comp = require(`@/views/${componentPath}.vue`);
        return comp.default || comp;
    }

    return () => import(/* webpackChunkName: "view-[request]-[index]" */ `@/views/${componentPath}.vue`);
}

// 根据 PAGE_CONFIGS 设置路由的 meta 属性
function getRouteMetaHelper(pageConfig: TypePageConfig): TypeRouteMeta {
    const {meta, menuTitle = ''} = pageConfig;
    return {
        breadcrumbTitle: meta?.breadcrumbTitle ? meta.breadcrumbTitle : menuTitle,
        hideBreadcrumb: meta?.hideBreadcrumb ? meta.hideBreadcrumb : false
    };
}

// 根据 PAGE_CONFIGS 获得路由列表
export function getRouteConfigHelper(pageConfigs: TypePageConfig[]): RouteConfig[] {
    return pageConfigs.reduce((t, v) => {
        const current: RouteConfig = v.componentPath
            ? {
                  path: v.path,
                  component: lazyLoadHelper(v.componentPath),
                  meta: getRouteMetaHelper(v)
              }
            : {
                  path: v.path,
                  meta: getRouteMetaHelper(v)
              };
        if (Array.isArray(v.children) && v.children.length > 0) {
            current.children = v.children.map((child) =>
                child.componentPath
                    ? {
                          path: child.path,
                          component: lazyLoadHelper(child.componentPath),
                          meta: getRouteMetaHelper(child)
                      }
                    : {
                          path: `${v.path}/${child.path}`,
                          meta: getRouteMetaHelper(child)
                      }
            );
        }
        return [...t, current];
    }, [] as RouteConfig[]);
}

// 根据 PAGE_CONFIGS 获得侧边栏导航列表
export function getMenuConfigHelper(pageConfig: TypePageConfig[]): TypeMenuConfig[] {
    return pageConfig
        .filter((v) => !v.hideInMenu)
        .map((v) => {
            const current: TypeMenuConfig = {
                path: v.path,
                title: v.menuTitle || '',
                icon: v.menuIcon || ''
            };
            if (Array.isArray(v.children)) {
                current.children = v.children
                    .filter((child) => !child.hideInMenu)
                    .map((child) => ({title: child.menuTitle || '', path: child.path}));
            }
            return current;
        });
}
