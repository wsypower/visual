<template>
  <div class="header">
    <header flex="box:justify cross:center">
      <div class="header__selection">"浙江省“三服务”小管家"</div>
      <div class="header__title" flex='cross:center main:center'>22</div>
      <div class="header__time">11111</div>
    </header>
    <nav></nav>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader'
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  flex: 0 0 159px;
  padding: 0 50px;
  header{
    height: 105px;
    width: 100%;
  }
  &__selection {
    width: 161px;
    height: 44px;
    background-color: #2c33d9;
  }

  &__title {
    @font-face{
     font-family: '字体名称随便起'; 
     src: url('../font/字体名称.eot');
         url('../font/字体名称.ttf') format('truetype'),
         url('../font/字体名称.svg') format('svg');
}
  }

  &__time {
  }
}
</style>