import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import index from '../pages/index.vue'
import login from '../pages/login.vue'
export default new Router({
  routes: [
    {
      path:'/index',
      component:index,
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'*',
      redirect:"/login"
    }
  ]
})
