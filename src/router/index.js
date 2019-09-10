import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/home',
      name:'home',
      component:resolve=>require(['@/views/Home.vue'],resolve)
    },
    {
      path:'/login',
      name:'login',
      component:resolve=>require(['@/views/Login.vue'],resolve)
    },
    {
      path:'/news',
      name:'news',
      component:resolve=>require(['@/views/news.vue'],resolve)
    },
    {
      path:'/blog',
      name:'blog',
      component:resolve=>require(['@/views/blog.vue'],resolve)
    },
    {
      path:'/photo',
      name:'photo',
      component:resolve=>require(['@/views/photo.vue'],resolve)
    }
  ]
})
