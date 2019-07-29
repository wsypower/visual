/*
 * @Author: wei.yafei
 * @Date: 2019-07-26 15:14:48
 * @Last Modified by: wei.yafei
 * @Last Modified time: 2019-07-26 18:47:58
 */

import request from '@/plugins/axios/axios'
/**
 * @description 登录接口获取区域code
 * @author weiyafei
 * @date 2019-07-26-15:15:09
 * @param {Object} data
 */
export function getCode(data = {}) {
  return request({
    url: 'screen/region',
    method: 'post',
    params: data
  })
}

/**
 * @description 获取全省总事项数据
 * @author weiyafei
 * @date 2019-07-26-15:43:03
 * @param {Object} code 区域code
 */
export function getTotal(data = {}) {
  return request({
    url: 'screen/total',
    method: 'post',
    params: data
  })
}

/**
 * @description 获取今日的事项统计
 * @author weiyafei
 * @date 2019-07-26-16:48:50
 * @param {Object} code 区域code
 */
export function getToday(data = {}) {
  return request({
    url: 'screen/today',
    method: 'post',
    params: data
  })
}

export function getAreaData(data = {}) {
  return request({
    url: 'screen/area',
    method: 'post',
    params: data
  })
}

export function getServer(data = {}) {
  return request({
    url: 'screen/wttype',
    method: 'post',
    params: data
  })
}
