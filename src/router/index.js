import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import markdown from '@/components/markdown'
import map from '@/components/map'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/markdown',
      name:'markdown',
      component:markdown
    },
    {
      path:'/map',
      name:'map',
      component:map
    }
  ]
})
