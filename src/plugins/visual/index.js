/*
 * @Author: wei.yafei
 * @Date: 2019-07-24 22:27:26
 * @Last Modified by:   wei.yafei
 * @Last Modified time: 2019-07-24 22:27:26
 */
// Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// axios
import '../axios/axios'
// 组件
import '@/components'
// svg 图标
import '@/assets/svg-icons'
// ie polyfill
import '@babel/polyfill'
// filters
import VueFiltersDayjs from '@/plugins/filters/date/main.js'
// 功能插件
import pluginError from '@/plugins/error'
import pluginLog from '@/plugins/log'
import pluginOpen from '@/plugins/open'

export default {
  install(Vue, options) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示
    // https://cn.vuejs.org/v2/api/#productionTip
    Vue.config.productionTip = false
    // 当前环境
    Vue.prototype.$env = process.env.NODE_ENV
    // 当前的 baseUrl
    Vue.prototype.$baseUrl = process.env.BASE_URL
    // 当前版本
    Vue.prototype.$version = process.env.VUE_APP_VERSION
    // 构建时间
    Vue.prototype.$buildTime = process.env.VUE_APP_BUILD_TIME
    // Element
    Vue.use(ElementUI)
    // 插件
    Vue.use(pluginLog)
    Vue.use(pluginOpen)
    Vue.use(pluginError)
    Vue.use(VueFiltersDayjs)
  }
}
