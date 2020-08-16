// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { Button, Row, Col ,Search , Swipe , SwipeItem , Lazyload  } from 'vant'
Vue.use(Button).use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem).use(Lazyload)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


// const store = new Vuex.Store({
//   //state 中存放的就是全局共享的数据
//   state: {  count: 0}
// })
// new Vue({
//   el:'#app',
//   render: h=>h(app),
//   router,
  // 将创建的共享数据对象，挂载到vue实例中
  // 所有的组件，就可以直接从store中获取全局的数据了
  // store
// })