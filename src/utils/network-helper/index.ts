/* eslint-disable camelcase */
import axios from 'axios';
import {loadingRequestHandler, loadingResponseHandler, commonErrorHandler} from './interceptorHandler';
import {TypeGet, TypePost, TypePut, TypeDel, TypeUpload} from '@/utils/network-helper/types';

// 配置 Axios
axios.defaults.timeout = 15000;
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

// 请求拦截器，后添加的先执行
axios.interceptors.request.use(loadingRequestHandler.onFulfilled, loadingRequestHandler.onRejected);

// 响应拦截器，后添加的后执行
axios.interceptors.response.use(loadingResponseHandler.onFulfilled, loadingResponseHandler.onRejected);
axios.interceptors.response.use(commonErrorHandler.onFulfilled, commonErrorHandler.onRejected);

// 封装 get 方法
const get: TypeGet = async (url, params = {}, config) => {
    const response = await axios.get(url, {params, ...config});
    return response.data;
};

// 封装 post 方法
const post: TypePost = async (url, data = {}, config) => {
    const response = await axios.post(url, data, {
        ...config
    });
    return response.data;
};

// 封装 put 方法
const put: TypePut = async (url, data = {}, config) => {
    const response = await axios.put(url, data, {
        ...config
    });
    return response.data;
};

// 封装 put 方法
const del: TypeDel = async (url, data = {}, config) => {
    const response = await axios.delete(url, {
        data,
        ...config
    });
    return response.data;
};

// 封装 upload 方法，默认使用 post 方法
const upload: TypeUpload = async (url, data = {}, config) => {
    const response = await axios({
        url,
        method: 'post',
        data,
        ...config
    });
    return response.data;
};

// 使用 request 统一调用
export const request = {get, post, del, put, upload};
