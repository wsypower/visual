import util from '@/utils/util.js'

export default {
  namespaced: true,
  mutations: {
    /**
     * @description 显示版本信息
     * @param {Object} state vuex state
     */
    versionShow() {
      util.log.capsule('三服务数据大屏（cgvisual）', `版本号:v${process.env.VUE_APP_VERSION}`)
    }
  }
}
