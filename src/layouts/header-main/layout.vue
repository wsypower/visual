<template>
  <div class="view_layout" flex="dir:top box:first">
    <LayoutHeader></LayoutHeader>
    <LayoutMain>
      <router-view></router-view>
    </LayoutMain>
  </div>
</template>

<script>
import { LayoutHeader, LayoutMain } from './components/index'
export default {
  name: 'layoutHeaderMain',
  components: {
    LayoutHeader,
    LayoutMain
  }
}
</script>

<style lang="scss" scoped>
.view_layout {
  width: 1920px;
  height: 1080px;
  background: url('~@images/visualbackgrond.png');
}
</style>