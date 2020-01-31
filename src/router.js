import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

import Main from './components/Main.vue'
import AddProduct from './components/AddProduct.vue'

Vue.use(Router)
Vue.use(Vuex)

let routes = [
  { path: '/', component: Main },
  { path: '/add-product', component: AddProduct },
]


let router = new Router({
  mode: 'history', 
  routes: routes
})

export default router
