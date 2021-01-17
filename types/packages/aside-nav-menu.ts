import {RoboUIComponent} from '../component';

declare interface RoboMenuItem {
    path: string;
    title: string;
}

declare interface RoboMenuConfig {
    path: string;
    icon: string;
    title: string;
    children: RoboMenuItem[];
}

export declare class RoboAsideNavMenu extends RoboUIComponent {}
