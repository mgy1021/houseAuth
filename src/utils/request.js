/*
 * @Description:
 * @Author: Mogy
 * @Date: 2021-10-19 16:36:05
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-22 10:16:20
 */
import axios from 'axios';
import qs from 'qs';
import { Message } from '_element-ui@2.15.6@element-ui';
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
    const { data: res } = response
    if (res.status !== 200) {
        if (res.status === 500) {
            // 后台服务器异常
            Message({
                message: res.message,
                type: "error",
                duration: 5 * 1000
            })
        }
        if (res.status === 401) {
            // token异常
            // removeToken();
            // 手动操作跳转到登录页
            Message({
                message: res.message,
                type: "error",
                duration: 5 * 1000
            })
        }
        return Promise.reject(new Error(res.message || 'Error'))
    } else {
        return res;
    }
}, error => {
    // 弹框提示
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
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
