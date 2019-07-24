/*
 * @Author: wei.yafei
 * @Date: 2019-06-14 15:44:35
 * @Last Modified by: wei.yafei
 * @Last Modified time: 2019-07-24 21:56:48
 */

/*=============================================
 =                  router配置                 =
 =============================================*/

import layoutHeaderAside from '@/layouts/header-main'
// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
// 对应utils下util.import.development.js和util.import.production.js
// eslint-disable-next-line no-unused-vars
const _import = require('@/utils/util.import.' + process.env.NODE_ENV)

/*=============================================
 =                  在主框架内显示               =
 =============================================*/

//大多数路由设置要写在 frameIn 下。frameIn 中的页面会
//在嵌套在一个包含顶栏和侧边栏的页面布局中显示

const frameIn = [
  {
    path: '/',
    name: 'layoutHeaderAside',
    redirect: { path: '/index' },
    component: layoutHeaderAside,
    meta: {
      title: '三服务小管家'
    },
    children: [
      //测试 => page1
      {
        path: '/index',
        name: 'situation',
        meta: {
          title: '辖区概况'
        },
        component: _import('situation/index.vue')
      }
    ]
  }
]

export const frameInRoutes = frameIn

/*=============================================
 =                 重新组织后导出                =
 =============================================*/

export default [...frameIn]
