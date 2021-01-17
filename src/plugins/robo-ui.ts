import Vue from 'vue';

import RoboSymbolIcon from '@/packages/robo-font-icon/index.vue';
import RoboErrorPage from '@/packages/robo-error-page/index.vue';
import RoboAsideNavMenu from '@/packages/robo-aside-nav-menu/index.vue';
import RoboAsideNav from '@/packages/robo-aside-nav/index.vue';

[RoboSymbolIcon, RoboErrorPage, RoboAsideNavMenu, RoboAsideNav].forEach((Comp) => {
    Vue.component(Comp.name, Comp);
});
