import Vue from 'vue'
import Vuex from 'vuex'
// import Vuetify from 'vuetify'
import router from './router'
import App from './App.vue'

Vue.use(Vuex)
// Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  // Vuetify,
  render: h => h(App),
}).$mount('#app')
