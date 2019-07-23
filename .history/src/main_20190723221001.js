import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 核心插件
import cgVisual from '@/plugins/visual'
// store
import store from './store/index'

Vue.config.productionTip = false

// 核心插件
Vue.use(cgVisual)
new Vue({
  router,
  store,
  render: h => h(App)
  
}).$mount('#app')
