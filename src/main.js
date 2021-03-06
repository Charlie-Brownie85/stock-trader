import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

import './assets/styles/main.scss'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.filter('currency', value => '$' + value.toLocaleString());

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
