
<template>
  <div class="layout__nav" flex="main:center cross:center">
    <nav class="layout__nav__items" flex>
      <div
        :class="navItemIndex===index?'layout__nav__active layout__nav__item':'layout__nav__item'"
        flex="main:center cross:center"
        v-for="(item, index) in navItem"
        :key="index"
        @click="navItemClickHandler(index)"
      >
        <cg-icon-svg :name="item.icon"></cg-icon-svg>
        <span>{{item.name}}</span>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'LayoutHaderNav',
  data() {
    return {
      /* nav点击的初始索引 */
      navItemIndex: 0,
      /* nav列表 */
      navItem: [
        {
          icon: 'xqgk',
          name: '辖区概况',
          path: ''
        },
        {
          icon: 'sxfx',
          name: '事项分析',
          path: ''
        },
        {
          icon: 'dxal',
          name: '典型案例',
          path: ''
        },
        {
          icon: 'hdxx',
          name: '活动信箱',
          path: ''
        },
        {
          icon: 'jcjf',
          name: '基层减负',
          path: ''
        }
      ]
    }
  },
  methods: {
    /**
     * @description 点击navItem赋值索引激活active
     * @author weiyafei
     * @date 2019-07-24-21:38:53
     * @param {Object} index navItem的索引
     */
    navItemClickHandler(index) {
      this.navItemIndex = index
    }
  }
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
    cursor: pointer;
    font-weight: 600;
    transform: all 0.
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
  &__active {
    color: #fff;
    .svg-icon {
      color: #fff;
    }
  }
}
</style>