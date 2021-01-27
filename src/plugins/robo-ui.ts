import Vue from 'vue';

import RoboUserAvatar from '@/packages/robo-user-avatar/index.vue';
import RoboOverflowText from '@/packages/robo-overflow-text/index.vue';
import RoboSymbolIcon from '@/packages/robo-font-icon/index.vue';
import RoboErrorPage from '@/packages/robo-error-page/index.vue';
import RoboAsideNavMenu from '@/packages/robo-aside-nav-menu/index.vue';
import RoboAsideNav from '@/packages/robo-aside-nav/index.vue';
import RoboBreadcrumb from '@/packages/robo-breadcrumb/index.vue';
import RoboCheckAll from '@/packages/robo-check-all/index.vue';
import RoboSelectMulti from '@/packages/robo-select-multi/index.vue';
import RoboCheckboxMulti from '@/packages/robo-checkbox-multi/index.vue';
import RoboCheckboxMultiGroup from '@/packages/robo-checkbox-multi-group/index.vue';
import RoboSelectMultiGroup from '@/packages/robo-select-multi-group/index.vue';
import RoboTag from '@/packages/robo-tag/index.vue';
import Robo2ColumnsContainer from '@/packages/robo-2-columns-container/index.vue';

[
    RoboTag,
    RoboUserAvatar,
    RoboOverflowText,
    RoboSymbolIcon,
    RoboErrorPage,
    RoboAsideNavMenu,
    RoboAsideNav,
    RoboBreadcrumb,
    RoboCheckAll,
    RoboCheckboxMulti,
    RoboCheckboxMultiGroup,
    RoboSelectMulti,
    RoboSelectMultiGroup,
    Robo2ColumnsContainer
].forEach((Comp) => {
    Vue.component(Comp.name, Comp);
});
