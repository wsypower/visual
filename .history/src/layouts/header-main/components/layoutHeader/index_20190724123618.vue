<template>
  <div class="layout__header">
      <header flex='cross:center box:justify'>
        <div class="Selection"></div>
        <div class="title"></div>
        <div class="title"></div>
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