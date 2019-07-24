
<template>
  <div class="layout__nav" flex="main:center cross:center">
    <nav class="layout__nav__items" flex>
      <div class="layout__nav__item" flex="main:center cross:center" v-for="(item, index) in items" :key="index">
        <cg-icon-svg name="xqgk"></cg-icon-svg>
        <span>辖区概况</span>
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
  name: 'LayoutHaderNav',
  data() {
    return {
      navItem: [
        {
          icon:'xqgk',
          name:'辖区概况',
          path:'',
        },
         {
          icon:'sxfx',
          name:'辖区概况',
          path:'',
        },
         {
          icon:'dxal',
          name:'辖区概况',
          path:'',
        },
         {
          icon:'hdxx',
          name:'辖区概况',
          path:'',
        },
         {
          icon:'xqgk',
          name:'辖区概况',
          path:'',
        }
      ]
    }
  },
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
    font-family: 'titleFont';
    font-size: 18px;
    color: #49d9fe;
    @include last(1) {
      margin-right: 0;
    }
    .svg-icon {
      margin-top: 2px;
      margin-right: 9px;
      color: #49d9fe;
      font-size: 18px;
    }
  }
}
</style>