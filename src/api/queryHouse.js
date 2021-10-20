/*
 * @Description:
 * @Author: Mogy
 * @Date: 2021-10-19 17:33:45
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-20 13:27:31
 */
import { get, post } from "@/utils/request.js"

// 查询所有的房产信息
export function queryAllHouse() {
    return get("/queryAllHouse")
}

// 查询某个用户的房产
export function queryOneHouse(params) {
    return post("/queryOneHouse", params)
}
// 房产信息上链
// export function houseUpChain(){
//     return post()
// }