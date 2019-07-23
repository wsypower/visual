/*
 * @Author: wei.yafei
 * @Date: 2019-06-11 11:58:18
 * @Last Modified by: wei.yafei 
 * @Last Modified time: 2019-07-23 22:17:25
 */

/*=============================================
=                   store                     =
=============================================*/

import Vue from 'vue'
import Vuex from 'vuex'
// import Cookies from '@utils/util.cookies.js'
//解决vuex刷新后数据消失问题  => 简单教程（https://juejin.im/post/5cb3fea0f265da03587befa7）
//默认持久化所有state
// import createPersistedState from 'vuex-persistedstate'
import cgVisual from './modules/cgvisual'
Vue.use(Vuex)
/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    cgVisual
  }
})

export default store
