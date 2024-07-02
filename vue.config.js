const SitemapPlugin = require('sitemap-webpack-plugin').default
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

const paths = [
  {
      path: '/',
      name: '首頁@自由數學',
      lastmod: '2023-09-19',
      priority: 1.0,
      changefreq: 'yearly'
  },
  {
      path: '/intro',
      name: '編創緣起',      
      lastmod: '2023-09-19',
      priority: 0.7,
      changefreq: 'yearly'
  },
  {
    path: '/tools',
    name: '小工具',
    lastmod: '2023-09-19',
    priority: 0.6,
    changefreq: 'yearly'
  },
  {
    path: '/one1/',
    name: '一對一系列：倒溯法',
    lastmod: '2023-09-19',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/one2',
    name: '一對一系列：前推法',
    lastmod: '2023-09-19',
    priority: 0.8,
    changefreq: 'yearly'
  },
  {
    path: '/one3',
    name: '一對一系列：具體經驗',
    lastmod: '2023-09-19',
    priority: 0.7,
    changefreq: 'yearly'
  },
  {
    path: '/one4/',
    name: '一對一系列：渡過心理障礙',
    lastmod: '2023-09-19',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/one5',
    name: '一對一系列：主客易位法',
    lastmod: '2023-09-19',
    priority: 0.8,
    changefreq: 'yearly'
  },
  {
    path: '/one6',
    name: '一對一系列：面對錯誤',
    lastmod: '2023-09-19',
    priority: 0.7,
    changefreq: 'yearly'
  },
  {
    path: '/one7/',
    name: '一對一系列：互為主體、交互佈題法',
    lastmod: '2023-09-19',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/one8',
    name: '一對一系列：前推法',
    lastmod: '2023-09-19',
    priority: 0.8,
    changefreq: 'yearly'
  },
  {
    path: '/one9',
    name: '數學學習診斷是什麼？',
    lastmod: '2023-09-19',
    priority: 0.7,
    changefreq: 'yearly'
  }
]


module.exports = {
  transpileDependencies: true,
  runtimeCompiler: true, 
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
        child_process: false
      }
    },
    plugins: [
      new SitemapPlugin({ base: 'https://etcoding.tech', paths }),
      new NodePolyfillPlugin()
    ]
  },
  pwa: {
    workboxOptions: {
      exclude: [/\.gitkeep/],
      skipWaiting: true,
      clientsClaim: true
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'

}