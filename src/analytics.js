export function initializeAnalytics (measurementId) {
  if (!measurementId) return

  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())
  // GA4 Enhanced Measurement handles subsequent browser history changes.
  window.gtag('config', measurementId)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)
}

export const gtagProxy = {
  event (...args) {
    gtagProxy.query('event', ...args)
  },
  query (...args) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag(...args)
    }
  }
}
