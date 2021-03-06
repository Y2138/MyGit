import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//import js
import '@/mock/mock.js'
import routes from './router/routes'
import store from './store'

//import css

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes(ES6语法)
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
