<template>
  <div class="layout__main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LayoutMain'
}
</script>

<style lang="scss" scoped>
.layout__main {
  width: 100%;
  height: 100%;
}
</style>