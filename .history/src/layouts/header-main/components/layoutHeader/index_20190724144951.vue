<template>
  <div class="layout__header">
    <div class="header" flex="box:justify cross:center">
      <div class="header__selection"></div>
      <div class="header__title" flex="cross:center main:center">"浙江省“三服务”小管家"</div>
      <div class="header__time">{{value|date_date}}</div>
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
    }

    &__title {
      font-family: title;
      font-size: 36px;
      line-height: 70px;
      letter-spacing: 4px;
      color: #ffffff;
      text-shadow: 0px 1px 0px #000000, 0px 0px 9px rgba(255, 255, 255, 0.7);
      transition: all 2.5s ease;
      animation: Glow 2.5s ease infinite alternate;
    }

    &__time {
    }
  }
  @keyframes Glow {
    from {
      text-shadow: 0px 1px 0px #000000, 0px 1px 0px #000000, 0px 1px 0px #000000, 0 0 10px rgba(255, 255, 255, 0.7),
        0 0 14px rgba(255, 255, 255, 0.7), 0 0 16px rgba(255, 255, 255, 0.7);
    }
    to {
      text-shadow: 0px 1px 0px #000000, 0px 1px 0px #000000, 0px 1px 0px #000000, 0 0 4px rgba(255, 255, 255, 0.7),
        0 0 8px rgba(255, 255, 255, 0.7), 0 0 12px rgba(255, 255, 255, 0.7);
    }
  }
}
</style>