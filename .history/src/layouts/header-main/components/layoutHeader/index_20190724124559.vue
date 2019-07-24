<template>
  <div class="header">
    <header flex="box:justify">
      <div class="header__selection">1111</div>
      <div class="header__title" flex=''>22</div>
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
  color: #fff;
  &__selection {
    width: 161px;
    height: 44px;
    background-color: #2c33d9;
  }

  &__title {
  }

  &__time {
  }
}
</style>