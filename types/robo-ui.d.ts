import Vue from 'vue';

import {RoboErrorPage} from './packages/error-page';
import {RoboFontIcon} from './packages/font-icon';
import {RoboOverflowText} from './packages/overflow-text';
import {RoboAsideNavMenu} from './packages/aside-nav-menu';
import {RoboAsideNav} from './packages/aside-nav';
import {RoboSelectAll} from './packages/select-all';
import {RoboSelectMultiCheckbox} from './packages/select-multi-checkbox';
import {RoboSelectMulti} from './packages/select-multi';
import {RoboSelectMultiGroup} from './packages/select-multi-group';
import {RoboBreadcrumb} from './packages/breadcrumb';
import {RoboUserAvatar} from './packages/user-avatar';

export function install(vue: typeof Vue): void;

export class ErrorPage extends RoboErrorPage {}
export class FontIcon extends RoboFontIcon {}
export class OverflowText extends RoboOverflowText {}
export class AsideNavMenu extends RoboAsideNavMenu {}
export class AsideNav extends RoboAsideNav {}
export class SelectAll extends RoboSelectAll {}
export class SelectMultiCheckbox extends RoboSelectMultiCheckbox {}
export class SelectMulti extends RoboSelectMulti {}
export class SelectMultiGroup extends RoboSelectMultiGroup {}
export class Breadcrumb extends RoboBreadcrumb {}
export class UserAvatar extends RoboUserAvatar {}
