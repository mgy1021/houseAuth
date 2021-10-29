/*
 * @Description: 
 * @Author: ljy
 * @Date: 2021-10-28 14:16:59
 * @LastEditors: ljy
 * @LastEditTime: 2021-10-28 14:26:57
 */
import {get, post } from "@/utils/request.js"

export function queryOne(params) {
    return post('/carousel/queryOne', params);
}