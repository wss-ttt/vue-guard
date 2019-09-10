// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

router.beforeEach(function(to,from,next){
  let isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
  console.log('进入守卫')
  console.log('状态:',isLogin)
  console.log('to',to)
  console.log('from',from)
  console.log('next',next)
  if(isLogin){
    document.title = 'wss:'+to.name
    next()
  }else{
    if(to.path === '/login'){
      next()
    }else{
      next({
        name:'login'
      })
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
