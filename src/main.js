import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import promise from 'es6-promise'
import axios from 'axios'
import { initializeAnalytics, gtagProxy } from './analytics'
import './registerServiceWorker'

promise.polyfill()

import 'semantic-ui-css/semantic.css'

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
router.isReady().then(() => {
  if (process.env.NODE_ENV === 'production') {
    initializeAnalytics(process.env.VUE_APP_GA_MEASUREMENT_ID)
  }
  app.mount('#app')
})
