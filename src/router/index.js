/*
 * @Description: 
 * @Author: Mogy
 * @Date: 2021-10-13 15:44:13
 * @LastEditors: ljy
 * @LastEditTime: 2021-10-22 15:38:11
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router