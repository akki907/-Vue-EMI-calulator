import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate';
import VueSlideBar from 'vue-slide-bar'

import {routes} from './routes'

Vue.use(VueRouter)
Vue.use(VeeValidate);
Vue.component('vue-slide-bar', VueSlideBar)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: `history`  //To Remove the # tag from the url #IMP
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
