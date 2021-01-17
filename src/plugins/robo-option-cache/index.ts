/* eslint-disable camelcase */
import Vue from 'vue';
import {request} from '@/utils';
import {CACHE_CONFIG, OPTIONS_KEY_HASH, TypeInitOptionsCache, TypeOptionsKeys, TypeOptionsResItem} from './config';

// 根据后端的参数 serviceKey 获取前端缓存的 key 值
function getOptionKeysByRes(resKey: string): TypeOptionsKeys | null {
    const keys: any[] = Object.keys(OPTIONS_KEY_HASH);
    return keys.find((key: TypeOptionsKeys) => OPTIONS_KEY_HASH[key as TypeOptionsKeys].serviceKey === resKey);
}

// 根据前端缓存的 key 值获得后端需要的参数 serviceKey
export const getOptionReqKeys = (key: TypeOptionsKeys): string | null => OPTIONS_KEY_HASH[key].serviceKey;

class RoboOptionCache {
    url: string;
    cache: TypeRoboOptionCache<TypeInitOptionsCache>;

    paramsQueue: string[] = [];
    actionTimer: number | null = null;

    constructor(config: TypeROCOption<TypeInitOptionsCache>) {
        this.url = config.url;
        this.cache = Vue.observable<TypeRoboOptionCache<TypeInitOptionsCache>>({...config.initData});
    }

    async getOptions(keys: TypeOptionsKeys | TypeOptionsKeys[]) {
        const cacheKeys = Array.isArray(keys) ? keys : [keys];
        const filterKeys = [...new Set(cacheKeys)].filter(
            (key) => getOptionReqKeys(key) && !this.cache[key].isRequested
        );
        const serviceKeys = filterKeys.map((key) => getOptionReqKeys(key) as string);

        if (serviceKeys.length > 0) {
            this.paramsQueue.push(...serviceKeys);

            for (const key of filterKeys) {
                this.cache[key].isRequested = true;
            }

            if (this.actionTimer) {
                clearTimeout(this.actionTimer);
                this.actionTimer = null;
            }

            this.actionTimer = setTimeout(async () => {
                if (this.paramsQueue.length === 0) {
                    return;
                }
                const {data, code} = await request.get<TypeOptionsResItem[]>(
                    this.url,
                    {param_keys: this.paramsQueue},
                    {
                        extraInfo: {noGlobalLoading: true}
                    }
                );
                if (+code === 0 && Array.isArray(data)) {
                    for (const item of data) {
                        const cacheKey = getOptionKeysByRes(item.key);
                        if (cacheKey) {
                            const options = Array.isArray(item.items)
                                ? item.items.map((v) => ({label: v.name, value: v.id}))
                                : [];
                            this.setOptions(cacheKey, options, item.name);
                        }
                    }
                    this.paramsQueue = [];
                }
            }, 500);
        }
    }

    setOptions(key: TypeOptionsKeys, options: TypeRoboOptionItem[], title?: string) {
        this.cache[key] = {
            ...this.cache[key],
            title: title || this.cache[key].title,
            options
        };
    }
}

const RoboOptionCachePlugin = {
    install(_Vue: typeof Vue, options: TypeROCOption<TypeInitOptionsCache>) {
        Vue.prototype.$roboOptions = new RoboOptionCache(options);
    }
};

Vue.use(RoboOptionCachePlugin, CACHE_CONFIG);

// 添加到 Vue 原型上
declare module 'vue/types/vue' {
    interface Vue {
        $roboOptions: RoboOptionCache;
    }
}
