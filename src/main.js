import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import promise from 'es6-promise'
import axios from 'axios'
import './registerServiceWorker'

promise.polyfill()

import 'semantic-ui-css/semantic.css'

const gtagProxy = {
  event (...args) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag(...args)
    }
  },
  query (...args) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag(...args)
    }
  }
}

const app = createApp(App)

app.config.globalProperties.$http = axios
app.config.globalProperties.$gtag = gtagProxy
app.directive('autofocus', {
  mounted (el) {
    if (typeof el.focus === 'function') {
      el.focus()
    }
  }
})

app.use(router)
app.mount('#app')
