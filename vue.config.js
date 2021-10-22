/*
 * @Description:补充的webpack配置文件
 * @Author: Mogy
 * @Date: 2021-10-14 13:23:31
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-22 10:20:35
 */
const { resolve } = require("path")
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '智慧房产认证平台'
                return args
            })
    },
    // 项目自启动,端口号
    devServer: {
        port: 3000,
        open: true
    },
    publicPath: "./"
}