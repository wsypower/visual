import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins//element/element.js'
// 核心插件
import visual from '@/plugins/visual'
// store
import store from './store/index'

Vue.config.productionTip = false

// 核心插件
Vue.use(visual)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
