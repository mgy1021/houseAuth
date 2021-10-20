/*
 * @Description:
 * @Author: Mogy
 * @Date: 2021-10-19 16:36:05
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-19 16:57:44
 */
import axios from 'axios';
import qs from 'qs';
import { baseURL } from './config'
const service = axios.create({
    timeout: 10000,
    baseURL,
})

// 请求拦截器
service.interceptors.request.use(config => {
    // Do something before request is sent
    return config;
}, error => {
    // Do something with request error
    return Promise.reject(error);
});

// 响应拦截器
service.interceptors.response.use(response => {
    // Do something before response is sent
    return response;
}, error => {
    // Do something with response error
    return Promise.reject(error);
});

// get请求
export function get(url, data) {
    return service.get(url, { params: data })
}

// post请求
export function post(url, data) {
    return service.post(url, qs.stringify(data))
}

// post发送json数据
export function postJSON(url, data) {
    return service.post(url, data)
}

export default service
