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
        componentPath: 'home',
        meta: {
            hideBreadcrumb: true
        }
    },
    {
        path: '/robo-ui',
        menuTitle: 'RoboUI',
        menuIcon: 'icon-filter-vintage',
        componentPath: 'robo-ui/index',
        children: [
            {path: 'font-icon', componentPath: 'robo-ui/pages/font-icon', menuTitle: 'Robo Font Icon'},
            {path: 'overflow-text', componentPath: 'robo-ui/pages/overflow-text', menuTitle: 'Robo Overflow Text'},
            {path: 'tag', componentPath: 'robo-ui/pages/tag', menuTitle: 'Robo Tag'},
            {path: 'user-avatar', componentPath: 'robo-ui/pages/user-avatar', menuTitle: 'Robo User Avatar'},
            {path: 'breadcrumb', componentPath: 'robo-ui/pages/breadcrumb', menuTitle: 'Robo Breadcrumb'},
            {path: 'info', componentPath: 'robo-ui/pages/info', menuTitle: 'Robo Info'},
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
                path: 'columns-container',
                componentPath: 'robo-ui/pages/columns-container',
                menuTitle: 'Robo Columns Container'
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
        children: [{path: 'el-button', componentPath: 'basic/pages/button', menuTitle: 'El Button'}]
    },
    {
        path: '/form',
        menuTitle: 'Form',
        menuIcon: 'icon-content-copy',
        componentPath: 'form/index',
        children: [
            {path: 'el-input', componentPath: 'form/pages/input', menuTitle: 'Ele Input'},
            {path: 'el-checkbox', componentPath: 'form/pages/checkbox', menuTitle: 'Ele Checkbox'},
            {path: 'el-select', componentPath: 'form/pages/select', menuTitle: 'Ele Select'},
            {path: 'el-datepicker', componentPath: 'form/pages/datepicker', menuTitle: 'Ele Date Picker'},
            {path: 'el-form', componentPath: 'form/pages/form', menuTitle: 'Ele Form'}
        ]
    },
    {
        path: '/data',
        menuTitle: 'Data',
        menuIcon: 'icon-data-usage',
        componentPath: 'data/index',
        children: [
            {path: 'el-table', componentPath: 'data/pages/table', menuTitle: 'Ele Table'},
            {path: 'el-pagination', componentPath: 'data/pages/pagination', menuTitle: 'Ele Pagination'}
        ]
    },
    {
        path: '/notice',
        menuTitle: 'Notice',
        menuIcon: 'icon-hearing',
        componentPath: 'notice/index',
        children: [
            {path: 'el-message', componentPath: 'notice/pages/message', menuTitle: 'Ele Message'},
            {path: 'el-message-box', componentPath: 'notice/pages/message-box', menuTitle: 'Ele MessageBox'},
            {path: 'el-loading', componentPath: 'notice/pages/loading', menuTitle: 'Ele Loading'}
        ]
    },
    {
        path: '/navigation',
        menuTitle: 'Navigation',
        menuIcon: 'icon-signal-wifi-statusba2',
        componentPath: 'navigation/index',
        children: [
            {path: 'el-tab', componentPath: 'navigation/pages/tab', menuTitle: 'Ele Tab'},
            {path: 'el-dropdown', componentPath: 'navigation/pages/dropdown', menuTitle: 'Ele Dropdown'}
        ]
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
