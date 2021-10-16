/*
 * @Description:补充的webpack配置文件
 * @Author: Mogy
 * @Date: 2021-10-14 13:23:31
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-15 16:55:05
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
    devServer: {
        port: 3000,
        open: true
    },
    publicPath: "./"
}