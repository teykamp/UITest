import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo, {
  container: '.o-main-view',
  offset: -90,
});

// import Matter from "matter-js";
// Object.definePrototype(Vue.prototype, '$Matter', { value: Matter });

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init()
  },
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
