import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 核心插件
import cg-visual from '@/plugins/cg-visual'
// store
import store from './store/index'

Vue.config.productionTip = false

// 核心插件
Vue.use(cg-visual)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
