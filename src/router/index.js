import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import index from '../pages/index.vue'
import login from '../pages/login.vue'
import manage from '../pages/manage.vue'
import manageAdd from '../pages/manageAdd.vue'
export default new Router({
  routes: [
    {
      path:'/index',
      component:index,
      children:[
        {
          path:'manage',
          component:manage,
          children:[
            {
              path:'manageAdd',
              component:manageAdd
            }
          ]
        }
      ]
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/manageAdd',
      component:manageAdd
    },
    {
      path:'*',
      redirect:"/login"
    }
  ]
})
