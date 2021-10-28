/*
 * @Description: 
 * @Author: ljy
 * @Date: 2021-10-28 10:57:40
 * @LastEditors: ljy
 * @LastEditTime: 2021-10-28 14:17:28
 */
import {get, post } from "@/utils/request.js"

export function findAllTag() {
    return get('/abouts/findAllTag');
}
export function findAll() {
    return get('/abouts/findAll');
}