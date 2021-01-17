/**
 * 非开发模式路由懒加载
 * @param componentPath `./src/views`下的文件名
 */
import {RouteConfig} from 'vue-router';
import {getRouteConfigHelper, getMenuConfigHelper} from '@/config/helper';
import {TypePageConfig, TypeMenuConfig} from '@/config/types';

export const PAGE_CONFIGS: TypePageConfig[] = [
    {
        path: '/home',
        menuTitle: 'Home',
        menuIcon: 'icon-home',
        componentPath: 'home'
    },
    {
        path: '/robo-ui',
        menuTitle: 'RoboUI',
        menuIcon: 'icon-filter-vintage',
        componentPath: 'robo-ui/index',
        children: [{path: 'font-icon', componentPath: 'robo-ui/pages/font-icon', menuTitle: 'Robo Font Icon'}]
    },
    {
        path: '/basic',
        menuTitle: 'Basic',
        menuIcon: 'icon-storage',
        componentPath: 'basic/index',
        children: [{path: 'button', componentPath: 'basic/pages/button', menuTitle: 'El Button'}]
    },
    // {
    //     path: '/form',
    //     menuTitle: 'Form',
    //     menuIcon: 'icon-content-copy',
    //     componentPath: 'form/index',
    //     children: [
    //         {path: 'checkbox', componentPath: 'form/pages/checkbox', menuTitle: 'Ele Checkbox'},
    //         {path: 'select', componentPath: 'form/pages/select', menuTitle: 'Ele Select'},
    //         {path: 'select-all', componentPath: 'form/pages/select-all', menuTitle: 'Robo Select All'},
    //         {
    //             path: 'select-multi-checkbox',
    //             componentPath: 'form/pages/select-multi-checkbox',
    //             menuTitle: 'Robo Select Multi Checkbox'
    //         },
    //         {
    //             path: 'select-multi-simple',
    //             componentPath: 'form/pages/select-multi-simple',
    //             menuTitle: 'Robo Select Multi Simple'
    //         },
    //         {
    //             path: 'select-multi-complex',
    //             componentPath: 'form/pages/select-multi-complex',
    //             menuTitle: 'Robo Select Multi Complex'
    //         }
    //     ]
    // },
    // {
    //     path: '/notice',
    //     menuTitle: 'Notice',
    //     menuIcon: 'icon-hearing',
    //     componentPath: 'notice/index',
    //     children: [
    //         {path: 'message', componentPath: 'notice/pages/message', menuTitle: 'Message'},
    //         {path: 'message-box', componentPath: 'notice/pages/message-box', menuTitle: 'MessageBox'}
    //     ]
    // },
    // {
    //     path: '/navigation',
    //     menuTitle: 'Navigation',
    //     menuIcon: 'icon-signal-wifi-statusba2',
    //     children: [{path: 'breadcrumb', componentPath: 'breadcrumb', menuTitle: 'Breadcrumb'}]
    // },
    {
        path: '*',
        componentPath: 'common/error-page',
        hideInMenu: true
    }
];

export const ROUTE_CONFIGS: RouteConfig[] = getRouteConfigHelper(PAGE_CONFIGS);

export const MENU_CONFIG: TypeMenuConfig[] = getMenuConfigHelper(PAGE_CONFIGS);
