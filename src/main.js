import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './router'

import testComponent from './components/test-component.vue'
import testCard from './components/test-card.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './sass/custom.scss'

Vue.component('button-counter', testComponent)
Vue.component('card-test', testCard)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
