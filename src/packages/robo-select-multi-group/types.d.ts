declare interface TypeRoboOptionItem {
    label: string;
    value: number | string;
    disabled?: boolean;
}

declare interface RoboCacheConfigItem {
    cacheKey: string;
    options: TypeRoboOptionItem[];
    max?: number;
    groupTitle?: string;
}

declare type RoboCacheConfigs = Array<string | RoboCacheConfigItem>;

declare interface RoboCacheValue {
    [keys: string]: Array<string | number>;
}
