import Vue from 'vue';

import {RoboUIComponent} from './component';

/**
 * component common definition
 */
export type Component = RoboUIComponent;

export function install(vue: typeof Vue): void;

import {RoboErrorPage} from './packages/error-page';

export class ErrorPage extends RoboErrorPage {}
