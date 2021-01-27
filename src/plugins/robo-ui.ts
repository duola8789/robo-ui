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
import RoboInfo from '@/packages/robo-info/index.vue';

[
    {name: 'RoboTag', comp: RoboTag},
    {name: 'RoboUserAvatar', comp: RoboUserAvatar},
    {name: 'RoboOverflowText', comp: RoboOverflowText},
    {name: 'RoboSymbolIcon', comp: RoboSymbolIcon},
    {name: 'RoboErrorPage', comp: RoboErrorPage},
    {name: 'RoboAsideNavMenu', comp: RoboAsideNavMenu},
    {name: 'RoboAsideNav', comp: RoboAsideNav},
    {name: 'RoboBreadcrumb', comp: RoboBreadcrumb},
    {name: 'RoboCheckAll', comp: RoboCheckAll},
    {name: 'RoboCheckboxMulti', comp: RoboCheckboxMulti},
    {name: 'RoboCheckboxMultiGroup', comp: RoboCheckboxMultiGroup},
    {name: 'RoboSelectMulti', comp: RoboSelectMulti},
    {name: 'RoboSelectMultiGroup', comp: RoboSelectMultiGroup},
    {name: 'Robo2ColumnsContainer', comp: Robo2ColumnsContainer},
    {name: 'RoboInfo', comp: RoboInfo}
].forEach((v) => {
    Vue.component(v.name, v.comp);
});
