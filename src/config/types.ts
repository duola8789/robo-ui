import Vue, {ComponentOptions, AsyncComponent} from 'vue';

export type TypeLazyLoadComp = ComponentOptions<Vue> | typeof Vue | AsyncComponent;

export interface TypeRouteMeta {
    breadcrumbTitle: string;
}

// componentPath 为 `./src/views` 下的文件名
export interface TypePageConfig {
    path: string;
    menuTitle?: string;
    menuIcon?: string;
    componentPath?: string;
    hideInMenu?: boolean;
    meta?: TypeRouteMeta;
    children?: TypePageConfig[];
}

export interface TypeMenuConfig {
    path: string;
    title: string;
    icon: string;
    children?: {path: string; title: string}[];
}
