/*
 * @Description:
 * @Author: Mogy
 * @Date: 2021-10-23 11:25:32
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-29 13:01:53
 */

import Cookies from "js-cookie";
import { tokenKey } from "./config";

// 设置token
export function setToken(token) {
    Cookies.set(tokenKey, token)
}

// 取token
export function getToken() {
    return Cookies.get(tokenKey)
}

// 移除token
export function removeToken() {
    Cookies.remove(tokenKey)
}