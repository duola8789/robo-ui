import Vue from 'vue';

import RoboUserAvatar from '@/packages/robo-user-avatar/index.vue';
import RoboOverflowText from '@/packages/robo-overflow-text/index.vue';
import RoboFontIcon from '@/packages/robo-font-icon/index.vue';
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
import RoboColumnsContainer from '@/packages/robo-columns-container/index.vue';
import RoboInfo from '@/packages/robo-info/index.vue';
import RoboFormTitle from '@/packages/robo-form-title/index.vue';
import RoboImagePreview from '@/packages/robo-image-preview/index.vue';
import RoboSteps from '@/packages/robo-steps/index.vue';
import RoboStep from '@/packages/robo-step/index.vue';

[
    {name: 'RoboTag', comp: RoboTag},
    {name: 'RoboUserAvatar', comp: RoboUserAvatar},
    {name: 'RoboOverflowText', comp: RoboOverflowText},
    {name: 'RoboFontIcon', comp: RoboFontIcon},
    {name: 'RoboErrorPage', comp: RoboErrorPage},
    {name: 'RoboAsideNavMenu', comp: RoboAsideNavMenu},
    {name: 'RoboAsideNav', comp: RoboAsideNav},
    {name: 'RoboBreadcrumb', comp: RoboBreadcrumb},
    {name: 'RoboCheckAll', comp: RoboCheckAll},
    {name: 'RoboCheckboxMulti', comp: RoboCheckboxMulti},
    {name: 'RoboCheckboxMultiGroup', comp: RoboCheckboxMultiGroup},
    {name: 'RoboSelectMulti', comp: RoboSelectMulti},
    {name: 'RoboSelectMultiGroup', comp: RoboSelectMultiGroup},
    {name: 'RoboColumnsContainer', comp: RoboColumnsContainer},
    {name: 'RoboInfo', comp: RoboInfo},
    {name: 'RoboInfo', comp: RoboInfo},
    {name: 'RoboFormTitle', comp: RoboFormTitle},
    {name: 'RoboImagePreview', comp: RoboImagePreview},
    {name: 'RoboSteps', comp: RoboSteps},
    {name: 'RoboStep', comp: RoboStep}
].forEach((v) => {
    Vue.component(v.name, v.comp);
});
