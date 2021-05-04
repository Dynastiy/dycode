import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import axios from 'axios'

Vue.use(axios);

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
