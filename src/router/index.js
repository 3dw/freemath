import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Intro from '@/components/Intro'
import Maps from '@/components/Maps'
import Stones from '@/components/Stones'
import Donate from '@/components/Donate'
import Vedio from '@/components/Vedio'
import Faq from '@/components/Faq'
import Card from '@/components/Card'
import Play12 from '@/components/Play12'
import Grid from '@/components/Grid'
import Outer from '@/components/Outer'
import Tools from '@/components/Tools'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/maps',
      name: 'Maps',
      component: Maps
    },
    {
      path: '/stones',
      name: 'Stones',
      component: Stones
    },
    {
      path: '/stones/:my',
      name: 'Stones',
      component: Stones
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    },
    {
      path: '/vedio',
      name: 'Vedio',
      component: Vedio
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/outer',
      name: 'Outer',
      component: Outer
    },
    {
      path: '/tools',
      name: 'Tools',
      component: Tools
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/play12',
      name: 'Play12',
      component: Play12
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    }
  ]
})
