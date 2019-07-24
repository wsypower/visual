/*
 * @Author: wei.yafei
 * @Date: 2019-07-24 19:24:16
 * @Last Modified by: wei.yafei
 * @Last Modified time: 2019-07-24 19:28:15
 */
import setting from '@/setting.js' //默认设置文件
export default {
  namespaced: true,
  state: {
    /* 区域code */
    code: setting.code
  },
  /* 修改code */
  mutations: {
    setCode(state, code) {
      state.code = code
    }
  }
}
