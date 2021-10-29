/*
 * @Description: 
 * @Author: Mogy
 * @Date: 2021-10-13 15:44:13
 * @LastEditors: ljy
 * @LastEditTime: 2021-10-29 15:31:14
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { getToken } from "@/utils/auth"
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/news',
        name: 'News',
        component: () =>
            import ('../views/News.vue')
    }, {
        path: '/houseUpdate',
        name: 'HouseUpdate',
        component: () =>
            import ('../views/HouseUpdate.vue')
    }, {
        path: '/queryHouse',
        name: 'QueryHouse',
        component: () =>
            import ('../views/queryHouse.vue')
    },
    {
        path: '/house',
        name: 'House',
        component: () =>
            import ('../views/house.vue')
    },
    {
        path: '/newDetails',
        name: 'NewDetails',
        component: () =>
            import ('../views/newDetails.vue')
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})



// 路由拦截器
// router.beforeEach(async (to, from, next) => {

//   // 确定用户是否已登录
//   const hasToken = getToken()

//   if (hasToken) {
//     if (to.path === '/queryHouse') {
//       // 如果已登录，请重定向到主页
//       next({ path: '/home' })
//       // NProgress.done()
//     }
//     else {
//       next()
//       // determine whether the user has obtained his permission roles through getInfo
//       // const hasRoles = store.getters.roles && store.getters.roles.length > 0
//       // if (hasRoles) {
//       //   next()
//       // } else {
//       //   try {
//       //     // get user info
//       //     // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
//       //     const { id } = await store.dispatch('user/getInfo')
//       //     // generate accessible routes map based on roles
//       //     // 通过id查询该用户可以访问的权限信息
//       //     const accessRoutes = await store.dispatch('permission/generateRoutes', id)
//       //     // accessRoutes是最终要追加的路由表数组
//       //     router.addRoutes(accessRoutes)
//       //     router.options.routes = store.getters.routers
//       //     // hack method to ensure that addRoutes is complete
//       //     // set the replace: true, so the navigation will not leave a history record
//       //     next({ ...to, replace: true })
//       //   } catch (error) {
//       //     // 删除令牌并转到登录页面重新登录
//       //     await store.dispatch('user/resetToken')
//       //     Message.error(error || 'Has Error')
//       //     next(`/login?redirect=${to.path}`)
//       //     NProgress.done()
//       //   }
//       // }
//     }
//   } else {
//     console.log("123");
//     next(`/queryHouse?redirect=${to.path}`)
//     // // 用户没有登录
//     // if (whiteList.indexOf(to.path) !== -1) {
//     //   // in the free login whitelist, go directly
//     //   next()
//     // } else {
//     //   // 没有访问权限的其他页面将重定向到登录页面。
//     //   next(`/login?redirect=${to.path}`)
//     //   NProgress.done()
//     // }
//   }
// })


export default router