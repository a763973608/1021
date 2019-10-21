// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'

//rem
import './assets/js/flexible'
//icon
import './assets/css/iconfont.css'
//base
import './assets/css/base.css'

import commencommen from './components/common'
for (var i in commencommen) {
  Vue.component(i, commencommen[i])
}

Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.config.productionTip = false

// //请求拦截
// axios.interceptors.request.use(config => {
//   config.a = 10;
//   return config
// })

// //响应拦截
// axios.interceptors.request.use(config => {
//   // console.log("-------响应拦截-------")
//   // console.log(config)
//   if (config.data.code == 1) {
//     router.replace("/login")
//     return;
//   }
//   return config;
// })

// router.beforeEach((to, from, next) => {
//   if (to.path == '/login') {
//     next();
//     return;
//   }

//   if (to.path.includes("manage")) {
//     if (sessionStorage.getItem("isAdmin") == '0') {
//       next();
//     } else {
//       next("/login")
//     }
//     return;
//   }
//   if (to.path.includes("user")) {
//     if (sessionStorage.getItem("isAdmin") == '0' || sessionStorage.getItem("isAdmin") == '1') {
//       next()
//     } else {
//       next("/login")
//     }
//     return;
//   }
//   next()
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
