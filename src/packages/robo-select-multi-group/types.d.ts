declare interface TypeRoboOptionItem {
    label: string;
    value: number | string;
}

declare interface RoboCacheConfigItem {
    cacheKey: string;
    options: TypeRoboOptionItem[];
    groupTitle?: string;
}

declare type RoboCacheConfigs = Array<string | RoboCacheConfigItem>;

declare interface RoboCacheValue {
    [keys: string]: Array<string | number>;
}
