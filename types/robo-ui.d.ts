import Vue from 'vue';

import {RoboErrorPage} from './packages/error-page';
import {RoboFontIcon} from './packages/font-icon';
import {RoboOverflowText} from './packages/overflow-text';
import {RoboAsideNavMenu} from './packages/aside-nav-menu';
import {RoboAsideNav} from './packages/aside-nav';
import {RoboCheckAll} from './packages/check-all';
import {RoboSelectMulti} from './packages/select-multi';
import {RoboSelectMultiGroup} from './packages/select-multi-group';
import {RoboBreadcrumb} from './packages/breadcrumb';
import {RoboUserAvatar} from './packages/user-avatar';
import {RoboCheckboxMulti} from './packages/checkbox-multi';
import {RoboCheckboxMultiGroup} from './packages/checkbox-multi-group';
import {RoboInfo} from './packages/info';
import {RoboTag} from './packages/tag';
import {RoboColumnsContainer} from './packages/columns-container';

export function install(vue: typeof Vue): void;

export class ErrorPage extends RoboErrorPage {}
export class FontIcon extends RoboFontIcon {}
export class OverflowText extends RoboOverflowText {}
export class AsideNavMenu extends RoboAsideNavMenu {}
export class AsideNav extends RoboAsideNav {}
export class CheckAll extends RoboCheckAll {}
export class CheckboxMultiGroup extends RoboCheckboxMultiGroup {}
export class SelectMulti extends RoboSelectMulti {}
export class SelectMultiGroup extends RoboSelectMultiGroup {}
export class Breadcrumb extends RoboBreadcrumb {}
export class UserAvatar extends RoboUserAvatar {}
export class CheckboxMulti extends RoboCheckboxMulti {}
export class Info extends RoboInfo {}
export class Tag extends RoboTag {}
export class ColumnsContainer extends RoboColumnsContainer {}
