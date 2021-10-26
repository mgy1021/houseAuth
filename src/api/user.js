/*
 * @Description:
 * @Author: Mogy
 * @Date: 2021-10-23 10:09:21
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-23 10:10:32
 */
import { get, post } from "@/utils/request.js"

export function login(param) {
    return post("/user/login", param)
}
