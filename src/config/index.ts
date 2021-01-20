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
        children: [
            {path: 'font-icon', componentPath: 'robo-ui/pages/font-icon', menuTitle: 'Robo Font Icon'},
            {path: 'select-all', componentPath: 'robo-ui/pages/select-all', menuTitle: 'Robo Select All'},
            {
                path: 'select-multi-checkbox',
                componentPath: 'robo-ui/pages/select-multi-checkbox',
                menuTitle: 'Robo Select Multi Checkbox'
            },
            {
                path: 'select-multi',
                componentPath: 'robo-ui/pages/select-multi',
                menuTitle: 'Robo Select Multi'
            },
            {
                path: 'select-multi-group',
                componentPath: 'robo-ui/pages/select-multi-group',
                menuTitle: 'Robo Select Multi Group'
            }
        ]
    },
    {
        path: '/basic',
        menuTitle: 'Basic',
        menuIcon: 'icon-storage',
        componentPath: 'basic/index',
        children: [{path: 'button', componentPath: 'basic/pages/button', menuTitle: 'El Button'}]
    },
    {
        path: '/form',
        menuTitle: 'Form',
        menuIcon: 'icon-content-copy',
        componentPath: 'form/index',
        children: [
            {path: 'checkbox', componentPath: 'form/pages/checkbox', menuTitle: 'Ele Checkbox'},
            {path: 'select', componentPath: 'form/pages/select', menuTitle: 'Ele Select'}
        ]
    },
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
    {
        path: '/navigation',
        menuTitle: 'Navigation',
        menuIcon: 'icon-signal-wifi-statusba2',
        componentPath: 'navigation/index',
        children: [{path: 'tab', componentPath: 'navigation/pages/tab', menuTitle: 'Tab'}]
    },
    {
        path: '*',
        componentPath: 'common/error-page',
        hideInMenu: true
    }
];

export const ROUTE_CONFIGS: RouteConfig[] = getRouteConfigHelper(PAGE_CONFIGS);

export const MENU_CONFIG: TypeMenuConfig[] = getMenuConfigHelper(PAGE_CONFIGS);
