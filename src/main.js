// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import '@babel/polyfill/noConflict'
import 'isomorphic-fetch'
import './firebase'
import VueFire from 'vuefire'
import promise from 'es6-promise'
import VueAnalytics from 'vue-analytics'

promise.polyfill()

const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics, {
  id: 'UA-26178243-4',
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  },
  autoTracking: {
    pageviewOnLoad: false
  }
})

Vue.use(VueFire)

require('semantic-ui-css/semantic.css')

Vue.use(SuiVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
