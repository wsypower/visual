<template>
  <div class="layout__box" :style="{ width: width }">
    <header class="layout__box__header" flex="cross:center">III {{title}}</header>
    <main class="layout__box__content" :style="{ height: height }" :class="{ isborder: border }">
        <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LayoutBox',
  props: {
    title: {
      type: String,
      default: '总事项统计'
    },
    height: {
      type: String,
      default: '221px'
    },
    width: {
      type: String,
      default: '100%'
    },
    border: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.layout__box {
  width: 100%;
  &__header {
    font-family: titleFont;
    font-size: 20px;
    color: #ffffff;
    height: 61px;
    width: 100%;
  }
  &__content {
    height: 221px;
    width: 100%;
    color: #fff;
  }
  .isborder {
    position: relative;
    &::before {
      position: absolute;
      top: 0;
      content: ' ';
      display: block;
      height: 3px;
      width: 100%;
      background: url('~@images/boxBorder.png') no-repeat center center;
      background-size: 100%;
    }
    &::after {
      content: ' ';
      position: absolute;
      bottom: 0;
      display: block;
      height: 3px;
      width: 100%;
      background: url('~@images/boxBorder.png') no-repeat center center;
      background-size: 100%;
    }
  }
}
</style>