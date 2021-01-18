import Vue from 'vue';

import {RoboErrorPage} from './packages/error-page';
import {RoboFontIcon} from './packages/font-icon';
import {RoboOverflowText} from './packages/overflow-text';
import {RoboAsideNavMenu} from './packages/aside-nav-menu';
import {RoboAsideNav} from './packages/aside-nav';
import {RoboSelectAll} from './packages/select-all';
import {RoboSelectMultiCheckbox} from './packages/select-multi-checkbox';

export function install(vue: typeof Vue): void;

export class ErrorPage extends RoboErrorPage {}
export class FontIcon extends RoboFontIcon {}
export class OverflowText extends RoboOverflowText {}
export class AsideNavMenu extends RoboAsideNavMenu {}
export class AsideNav extends RoboAsideNav {}
export class SelectAll extends RoboSelectAll {}
export class SelectMultiCheckbox extends RoboSelectMultiCheckbox {}
