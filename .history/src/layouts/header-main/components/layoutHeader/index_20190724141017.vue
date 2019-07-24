<template>
  <div class="layout__header">
    <div class="header" flex="box:justify cross:center">
      <div class="header__selection"></div>
      <div class="header__title" flex="cross:center main:center">"浙江省“三服务”小管家"</div>
      <div class="header__time">11111</div>
    </div>
    <nav></nav>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader'
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'title';
  src: url('~@/assets/font/FZZDHJW.TTF') format('truetype');
}
.layout__header {
  width: 100%;
  flex: 0 0 159px;
  padding: 0 50px;
  .header {
    height: 105px;
    width: 100%;
    &__selection {
      width: 161px;
      height: 44px;
      background-color: #2c33d9;
    }

    &__title {
      font-family: title;
      font-size: 36px;
      line-height: 70px;
      letter-spacing: 4px;
      color: #ffffff;
      -webkit-text-stroke: 1px #000000;
      text-shadow:  0px 0px 9px rgba(177, 81, 81, 0.6);
    }

    &__time {
    }
  }
}
</style>