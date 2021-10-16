/*
 * @Description: 
 * @Author: Mogy
 * @Date: 2021-10-13 15:44:13
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-15 13:46:18
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  }, {
    path: '/houseUpdate',
    name: 'HouseUpdate',
    component: () => import('../views/HouseUpdate.vue')
  }, {
    path: '/queryHouse',
    name: 'QueryHouse',
    component: () => import('../views/queryHouse.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
