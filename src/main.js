import Vue from 'vue'
import App from './App.vue'

// 核心插件
import cgvisual from '@/plugins/visual'
// store
import store from './store/index'
// 菜单和路由设置
import router from '@/router/index'

Vue.config.productionTip = false

//mock => 生产环境(上线前请注释！！！)
import '@/mock'

// 核心插件
Vue.use(cgvisual)
new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    // 展示系统信息
    this.$store.commit('cgvisual/releases/versionShow')
  }
}).$mount('#app')
