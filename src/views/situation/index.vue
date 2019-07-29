<template>
  <div class="situation" flex="box:justify">
    <div class="layout_left" flex="dir:top">
      <!-- 总事项统计 -->
      <total></total>
      <!-- 今日事项统计 -->
      <today></today>
      <!-- 服务对象 -->
      <service></service>
    </div>
    <div class="layout_center">
      <div class="returnEvent">
        <!-- 返回浙江省按钮 -->
        <!-- <el-button type="primary"  icon="el-icon-arrow-left" class='returnEventBtn' circle></el-button> -->
      </div>
      <!-- Hover时弹出 -->
      <div class="map_tip"></div>
      <!-- 地图GIS -->
      <cg-map @clickHandler="mapClickHandler" @hoverHandler="mapHoverHandler"></cg-map>
    </div>
    <div class="layout_right">
      <!-- 区域统计概况 -->
      .
      <area-situation></area-situation>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import total from './components/total.vue'
import today from './components/today.vue'
import service from './components/service.vue'
import areaSituation from './components/area.vue'
export default {
  name: 'situation',
  components: {
    total,
    today,
    service,
    areaSituation
  },
  methods: {
    ...mapMutations('cgvisual/code', ['setCode']),
    /**
     * @description 地图点击事件
     * @author weiyafei
     * @date 2019-07-24-23:25:44
     * @param {Numer} code 区域code
     */
    mapClickHandler(code) {
      this.setCode(code)
    },
    /**
     * @description 地图hover事件
     * @author weiyafei
     * @date 2019-07-24-23:25:59
     * @param {Numer} code 区域code
     */
    mapHoverHandler(code) {
    }
  }
}
</script>

<style lang="scss" scoped>
.situation {
  width: 100%;
  height: 100%;
  .layout_left,
  .layout_right {
    width: 464px;
    padding-top: 37px;
    padding-bottom: 73px;
  }

  .layout_center {
    position: relative;
    .returnEventBtn {
      position: absolute;
      top: 100px;
      left: 40px;
    }
  }
}
</style>