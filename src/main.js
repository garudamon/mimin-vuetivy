import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import "./plugins/vee-validate";

Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('dashboard_layout', () => import(/* webpackChunkName: "dashboard-layout" */ '@/layouts/dashboard.vue'))
Vue.component('login_layout', () => import(/* webpackChunkName: "login-layout" */ '@/layouts/login.vue'))

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
