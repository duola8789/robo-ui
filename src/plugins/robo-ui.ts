import Vue from 'vue';

import RoboSymbolIcon from '@/packages/robo-font-icon/index.vue';
import RoboErrorPage from '@/packages/robo-error-page/index.vue';
import RoboAsideNavMenu from '@/packages/robo-aside-nav-menu/index.vue';
import RoboAsideNav from '@/packages/robo-aside-nav/index.vue';
import RoboBreadcrumb from '@/packages/robo-breadcrumb/index.vue';
import RoboSelectAll from '@/packages/robo-select-all/index.vue';
import RoboSelectMulti from '@/packages/robo-select-multi/index.vue';
import RoboSelectMultiCheckbox from '@/packages/robo-select-multi-checkbox/index.vue';
import RoboSelectMultiGroup from '@/packages/robo-select-multi-group/index.vue';

[
    RoboSymbolIcon,
    RoboErrorPage,
    RoboAsideNavMenu,
    RoboAsideNav,
    RoboBreadcrumb,
    RoboSelectAll,
    RoboSelectMultiCheckbox,
    RoboSelectMulti,
    RoboSelectMultiGroup
].forEach((Comp) => {
    Vue.component(Comp.name, Comp);
});
