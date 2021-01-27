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
            {path: 'tag', componentPath: 'robo-ui/pages/tag', menuTitle: 'Robo Tag'},
            {path: 'check-all', componentPath: 'robo-ui/pages/check-all', menuTitle: 'Robo Check All'},
            {
                path: 'checkbox-multi',
                componentPath: 'robo-ui/pages/checkbox-multi',
                menuTitle: 'Robo Checkbox Multi'
            },
            {
                path: 'checkbox-multi-group',
                componentPath: 'robo-ui/pages/checkbox-multi-group',
                menuTitle: 'Robo Checkbox Multi Group'
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
            },
            {
                path: '2-columns-container',
                componentPath: 'robo-ui/pages/2-columns-container',
                menuTitle: 'Robo 2 Columns Container'
            },
            {
                path: 'error-page',
                componentPath: 'robo-ui/pages/error-page',
                menuTitle: 'Robo Error Page'
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
            {path: 'input', componentPath: 'form/pages/input', menuTitle: 'Ele Input'},
            {path: 'checkbox', componentPath: 'form/pages/checkbox', menuTitle: 'Ele Checkbox'},
            {path: 'select', componentPath: 'form/pages/select', menuTitle: 'Ele Select'},
            {path: 'datepicker', componentPath: 'form/pages/datepicker', menuTitle: 'Ele Date Picker'},
            {path: 'form', componentPath: 'form/pages/form', menuTitle: 'Ele Form'}
        ]
    },
    {
        path: '/data',
        menuTitle: 'Data',
        menuIcon: 'icon-data-usage',
        componentPath: 'data/index',
        children: [
            {path: 'table', componentPath: 'data/pages/table', menuTitle: 'Ele Table'},
            {path: 'pagination', componentPath: 'data/pages/pagination', menuTitle: 'Ele Pagination'}
        ]
    },
    {
        path: '/notice',
        menuTitle: 'Notice',
        menuIcon: 'icon-hearing',
        componentPath: 'notice/index',
        children: [
            {path: 'message', componentPath: 'notice/pages/message', menuTitle: 'Ele Message'},
            {path: 'message-box', componentPath: 'notice/pages/message-box', menuTitle: 'Ele MessageBox'},
            {path: 'loading', componentPath: 'notice/pages/loading', menuTitle: 'Ele Loading'}
        ]
    },
    {
        path: '/navigation',
        menuTitle: 'Navigation',
        menuIcon: 'icon-signal-wifi-statusba2',
        componentPath: 'navigation/index',
        children: [{path: 'tab', componentPath: 'navigation/pages/tab', menuTitle: 'Tab'}]
    },
    {
        path: '/others',
        menuTitle: 'Others',
        menuIcon: 'icon-speaker-notes',
        componentPath: 'others/index',
        children: [
            {path: 'el-dialog', componentPath: 'others/pages/dialog', menuTitle: 'Ele Dialog'},
            {path: 'el-collapse', componentPath: 'others/pages/collapse', menuTitle: 'Ele Collapse'}
        ]
    },
    {
        path: '*',
        componentPath: 'common/error-page',
        hideInMenu: true
    }
];

export const ROUTE_CONFIGS: RouteConfig[] = getRouteConfigHelper(PAGE_CONFIGS);

export const MENU_CONFIG: TypeMenuConfig[] = getMenuConfigHelper(PAGE_CONFIGS);
