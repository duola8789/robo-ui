declare interface TypeRoboOptionItem {
    label: string;
    value: number | string;
}

declare interface TypeRoboOption {
    title: string;
    serviceKey: string;
    isRequested: boolean;
    options: TypeRoboOptionItem[];
}

declare type TypeRoboOptionCache<T> = Record<keyof T, TypeRoboOption>;

declare interface TypeRoboOptionCacheConfig {
    key: string;
    title?: string;
}

declare interface TypeROCOption<T> {
    initData: TypeRoboOptionCache<T>;
    url: string;
}
