/*
 * @Description: 
 * @Author: Mogy
 * @Date: 2021-10-13 15:44:13
 * @LastEditors: Mogy
 * @LastEditTime: 2021-10-19 16:48:12
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.css'
import less from "less"
import 'animate.css';
Vue.use(less);

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
