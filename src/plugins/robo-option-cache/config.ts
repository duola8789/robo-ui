// 本地缓存 key 值与服务端 key 值映射，如果配置 options，则不会向服务端获取数据（使用本地配置数据）
export const OPTIONS_KEY_HASH = {
    recipe: {serviceKey: 'recipe_list', defaultTitle: '美食清单'},
    sport: {serviceKey: 'sport_list', defaultTitle: '运动清单'}
};

// 具有缓存的 OPTION 的初始化配置
export const INIT_OPTIONS_CACHE: TypeInitOptionsCache = Object.keys(OPTIONS_KEY_HASH).reduce((t, v) => {
    return {
        ...t,
        [v]: {
            title: OPTIONS_KEY_HASH[v as TypeOptionsKeys].defaultTitle,
            options: (OPTIONS_KEY_HASH[v as TypeOptionsKeys] as any).options || [],
            serviceKey: OPTIONS_KEY_HASH[v as TypeOptionsKeys].serviceKey,
            isRequested: false
        }
    };
}, {} as TypeInitOptionsCache);

export const CACHE_CONFIG = {
    initData: INIT_OPTIONS_CACHE,
    url: '/params/map'
};

export type TypeOptionsKeyHash = typeof OPTIONS_KEY_HASH;

export type TypeOptionsKeys = keyof TypeOptionsKeyHash;

export type TypeInitOptionsCache = TypeRoboOptionCache<TypeOptionsKeyHash>;

export interface TypeOptionsResItem {
    name: string;
    key: string;
    items: {id: number | string; name: string}[];
}

export interface TypeCacheConfigItem {
    cacheKey: TypeOptionsKeys;
    options: TypeRoboOptionItem[];
    groupTitle?: string;
}

export type TypeCacheConfigs = Array<TypeOptionsKeys | TypeCacheConfigItem>;

export type TypeCacheValue = Record<TypeOptionsKeys, Array<string | number>>;
