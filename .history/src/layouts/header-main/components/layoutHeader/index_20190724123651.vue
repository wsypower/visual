<template>
  <div class="layout__header">
    <header flex="cross:center box:justify">
      <div class="layout__header__selection"></div>
      <div class="layout__header__title"></div>
      <div class="layout__header__time"></div>
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
.layout__header {
  width: 100%;
  flex: 0 0 159px;

}
</style>