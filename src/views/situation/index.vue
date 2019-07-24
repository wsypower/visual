<template>
  <div class="situation" flex="box:justify">
    <div class="layout_left"></div>
    <div class="layout_center">
      <cg-map @clickHandler="mapClickHandler" @hoverHandler="mapHoverHandler"></cg-map>
    </div>
    <div class="layout_right"></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'situation',
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
      console.log(code)
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
  }
}
</style>