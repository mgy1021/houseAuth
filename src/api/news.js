/*
 * @Description: 
 * @Author: ljy
 * @Date: 2021-10-28 14:53:16
 * @LastEditors: ljy
 * @LastEditTime: 2021-10-28 14:55:39
 */
import {get, post } from "@/utils/request.js"

export function newsFindAll() {
    return get('/news/findAll');
}