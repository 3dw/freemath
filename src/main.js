// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import '@babel/polyfill/noConflict'
import 'isomorphic-fetch'
import { rtdbPlugin } from 'vuefire'
import promise from 'es6-promise'
import VueAnalytics from 'vue-analytics'
import autofocus from 'vue-autofocus-directive'
Vue.directive('autofocus', autofocus)

promise.polyfill()
Vue.use(rtdbPlugin)

require('semantic-ui-css/semantic.css')
Vue.use(SuiVue)

Vue.use(VueAnalytics, {
  id: 'UA-26178243-4',
  router,
  checkDuplicatedScript: true,
  autoTracking: {
    pageviewOnLoad: false
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
