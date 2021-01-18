/**
 * Created by zh on 2021/1/15.
 * 新添加的组件，需要①添加到components数组中②添加到export对象中（为了按需导出）③添加到export default中（为了一次性引入）
 */
import AsideNav from './src/packages/robo-aside-nav';
import AsideNavMenu from './src/packages/robo-aside-nav-menu';
import Breadcrumb from './src/packages/robo-breadcrumb';
import ErrorPage from './src/packages/robo-error-page';
import FontIcon from './src/packages/robo-font-icon';
import OverflowText from './src/packages/robo-overflow-text';
import SelectAll from './src/packages/robo-select-all';
import SelectMulti from './src/packages/robo-select-multi';
import SelectMultiCheckbox from './src/packages/robo-select-multi-checkbox';
import SelectMultiGroup from './src/packages/robo-select-multi-group';

const components = [
    ErrorPage,
    AsideNav,
    AsideNavMenu,
    Breadcrumb,
    FontIcon,
    OverflowText,
    SelectAll,
    SelectMulti,
    SelectMultiCheckbox,
    SelectMultiGroup
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
    // 判断是否安装
    if (!install.installed) {
        // 遍历注册全局组件
        components.map((component) => Vue.component(component.name, component));
    }
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ErrorPage,
    AsideNav,
    AsideNavMenu,
    Breadcrumb,
    FontIcon,
    OverflowText,
    SelectAll,
    SelectMulti,
    SelectMultiCheckbox,
    SelectMultiGroup
};
