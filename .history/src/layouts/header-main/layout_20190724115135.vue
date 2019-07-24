<template>
  <div class="view_layout" flex="dir:top box:first">
    <header></header>
    <main></main>
  </div>
</template>

<script>
import { LayoutHader,LayoutMain  } from './components/index'
export default {
  name: 'layoutHeaderMain',
  components: {
    LayoutHader,LayoutMain
  }
}
</script>

<style lang="scss" scoped>
.view_layout {
  width: 1920px;
  height: 1080px;
  background: url('~@images/cgvisualbackgrond.png');
}
</style>