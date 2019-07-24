import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 核心插件
import cgvisual from '@/plugins/cgvisual'
// store
import store from './store/index'

Vue.config.productionTip = false

// 核心插件
Vue.use(cgvisual)
new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    // 展示系统信息
    this.$store.commit('cg/releases/versionShow')
  }
}).$mount('#app')
