
<template>
  <div class="layout__nav" flex="main:center cross:center">
    <nav class="layout__nav__items" flex>
      <div class="layout__nav__item">
        <cg-icon></cg-icon>
      </div>
      <div class="layout__nav__item"></div>
      <div class="layout__nav__item"></div>
      <div class="layout__nav__item"></div>
      <div class="layout__nav__item"></div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'LayoutHaderNav'
}
</script>

<style lang="scss" scoped>
.layout__nav {
  width: 100%;
  height: 56px;
  background: url('~@images/nav.png') no-repeat left top;
  &__items {
    height: 50px;
    width: 1054px;
    padding-left: 5px;
  }
  &__item {
    width: 195px;
    height: 100%;
    margin-right: 22px;
    @include last(1) {
      margin-right: 0;
    }
  }
}
</style>