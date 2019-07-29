import Vue from 'vue'
import iconSvg from './cg-icon/cg-icon-svg/index'
import cgContainer from './cg-container'
import cgMapOl from './cg-map/olMap'
import layoutBox from './LayoutBox/LayoutBox.vue'
import Progress from 'vue-multiple-progress'
import VueOdometer from 'v-odometer/src'
import countTo from 'vue-count-to'
Vue.use(VueOdometer)
//!注意 有些组件使用异步加载会有影响
Vue.component('cg-container', cgContainer)
Vue.component('cg-icon-svg', iconSvg)
Vue.component('cg-map', cgMapOl)
Vue.component('layout-box', layoutBox)
Vue.component('cg-progress', Progress)
Vue.component('vue-odometer', VueOdometer)
Vue.component('cg-count', countTo)
