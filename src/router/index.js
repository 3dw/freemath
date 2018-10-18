import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Intro from '@/components/Intro'
import Maps from '@/components/Maps'
import Card from '@/components/Card'
import Grid from '@/components/Grid'

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
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    }
  ]
})
