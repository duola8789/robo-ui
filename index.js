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
import CheckAll from './src/packages/robo-check-all';
import SelectMulti from './src/packages/robo-select-multi';
import SelectMultiGroup from './src/packages/robo-select-multi-group';
import CheckboxMulti from './src/packages/robo-checkbox-multi';
import CheckboxMultiGroup from './src/packages/robo-checkbox-multi-group';
import UserAvatar from './src/packages/robo-user-avatar';
import ColumnsContainer from './src/packages/robo-columns-container';
import Info from './src/packages/robo-info';
import Tag from './src/packages/robo-tag';

const components = [
    {name: 'RoboErrorPage', comp: ErrorPage},
    {name: 'RoboAsideNav', comp: AsideNav},
    {name: 'RoboAsideNavMenu', comp: AsideNavMenu},
    {name: 'RoboBreadcrumb', comp: Breadcrumb},
    {name: 'RoboFontIcon', comp: FontIcon},
    {name: 'RoboOverflowText', comp: OverflowText},
    {name: 'RoboSelectMulti', comp: SelectMulti},
    {name: 'RoboSelectMultiGroup', comp: SelectMultiGroup},
    {name: 'RoboCheckboxMulti', comp: CheckboxMulti},
    {name: 'RoboCheckboxMultiGroup', comp: CheckboxMultiGroup},
    {name: 'RoboUserAvatar', comp: UserAvatar},
    {name: 'Robo2ColumnsContainer', comp: ColumnsContainer},
    {name: 'RoboCheckAll', comp: CheckAll},
    {name: 'RoboInfo', comp: Info},
    {name: 'RoboTag', comp: Tag}
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
    // 判断是否安装
    if (!install.installed) {
        // 遍历注册全局组件
        components.map((component) => Vue.component(component.name, component.comp));
    }
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    AsideNav,
    AsideNavMenu,
    Breadcrumb,
    ErrorPage,
    FontIcon,
    OverflowText,
    CheckAll,
    SelectMulti,
    SelectMultiGroup,
    CheckboxMulti,
    CheckboxMultiGroup,
    UserAvatar,
    ColumnsContainer,
    Info,
    Tag
};

export {
    install,
    AsideNav,
    AsideNavMenu,
    Breadcrumb,
    ErrorPage,
    FontIcon,
    OverflowText,
    CheckAll,
    SelectMulti,
    SelectMultiGroup,
    CheckboxMulti,
    CheckboxMultiGroup,
    UserAvatar,
    ColumnsContainer,
    Info,
    Tag
};
