<template>
  <div class="layout__header">
    <div class="header" flex="box:justify cross:center">
      <!-- 区域选择器 -->
      <div class="header__selection">
        <!-- elemeent Cascader级连选择器 -->
        <el-cascader
          v-model="regionalSelection"
          :props="cascaderOption"
          :options="options"
          :show-all-levels="false"
          @change="SelectionChange"
        ></el-cascader>
      </div>
      <!-- 项目名称 -->
      <div class="header__title" flex="cross:center main:center">"浙江省“三服务”小管家"</div>
      <!-- 显示时间 -->
      <div class="header__time" flex>
        <!-- 年月日时分秒 -->
        <div class="year_month_day_hour_minute" flex="cross:center">{{time.date}}</div>
        <!-- 星期 -->
        <div class="date_week" flex="cross:center">{{time.week}}</div>
      </div>
    </div>
    <!-- nav选项 -->
    <layout-header-nav></layout-header-nav>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { mapMutations } from 'vuex'
import LayoutHeaderNav from '../components/header/nav/layoutHeaderNav.vue'
export default {
  name: 'LayoutHeader',
  components: {
    LayoutHeaderNav,
  },
  data() {
    return {
      /* 本地时间配置 */
      time: {
        date: '',
        week: ''
      },
      /* Cascader级连选择器v-model数据 */
      regionalSelection: '33',
      /* Cascader级连选择器数据源 */
      options: [
        {
          code: '33',
          label: '浙江省'
        },
        {
          code: '3301',
          label: '杭州市'
        },
        {
          code: '3302',
          label: '绍兴市'
        },
        {
          code: '3303',
          label: '指南'
        },
        {
          code: '3304',
          label: '指南'
        },
        {
          code: '3305',
          label: '指南'
        }
      ]
    }
  },
  computed: {
    /* Cascader级连选择器Prop配置 */
    cascaderOption() {
      return {
        emitPath: false,
        value: 'code'
      }
    }
  },
  mounted() {
    /* 调用时间函数 修改data内 date && week */
    this.setDate()
  },
  methods: {
    ...mapMutations('cgvisual/code', ['setCode']),
    /**
     * @description 设置年月日时分秒周
     * @author weiyafei
     * @date 2019-07-24-17:31:32
     */
    setDate() {
      const weekDate = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      this.getlocalTime(weekDate)
      setInterval(() => {
        this.getlocalTime(weekDate)
      }, 1000)
    },
    /**
     * @description 获取本地时间
     * @author weiyafei
     * @date 2019-07-24-17:31:32
     */
    getlocalTime(week) {
      this.time.date = dayjs().format(`YYYY - MM - DD   HH : mm : ss `)
      this.time.week = week[dayjs().get('day')]
    },
    /**
     * @description 当选中节点变化时触发,赋值给VUEX的code
     * @author weiyafei
     * @date 2019-07-24-17:31:32
     */
    SelectionChange(code) {
      this.setCode(code)
    }
  }
}
</script>

<style lang="scss" scoped>
//title字体
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
    position: relative;
    &__selection {
      width: 161px;
      height: 44px;
      position: absolute;
      left: 0;
      /deep/.el-input__inner {
        border-radius: 0px;
        width: 161px;
        height: 44px;
        background: #101148 url('~@images/selectBtnBc.png') no-repeat left top;
        border: none;
        font-size: 23px;
        font-family: 'titleFont';
        color: #fff;
        text-align: center;
      }
    }

    &__title {
      position: absolute;
      @include center-translate();
      width: 750px;
      font-family: title;
      font-size: 36px;
      line-height: 70px;
      letter-spacing: 4px;
      color: #ffffff;
      text-shadow: 0px 1px 0px #000000, 0px 0px 9px rgba(255, 255, 255, 0.7);
      transition: all 1.5s ease;
      animation: Glow 1.5s ease infinite alternate;
    }

    &__time {
      position: absolute;
      right: 0;
      font-family: number;
      font-size: 24px;
      color: #ffffff;
      font-weight: 600;
      .year_month_day_hour_minute {
        width: 260px;
        margin-right: 10px;
        text-align: left;
      }
      .date_week {
        width: 50px;
      }
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
<style lang="scss">
/* 弹出的多选框 */
.el-cascader__dropdown {
  background-color: #101148;
  border: 1px solid #38b0d8;
  border-radius: 0px;
  .el-cascader-panel {
    font-size: 18px;
    font-family: 'titleFont';
    color: #fff;
  }
}
/* 弹出的多选框的小三角 */
.el-popper[x-placement^='bottom'] .popper__arrow::after {
  top: 0px;
  margin-left: -6px;
  border-top-width: 0;
  border-bottom-color: #38b0d8;
}
.el-popper[x-placement^='bottom'] .popper__arrow {
  top: -6px;
  left: 50%;
  margin-right: 3px;
  border-top-width: 0;
  border-bottom-color: #38b0d8;
}
.el-cascader-menu__wrap {
  height: 350px;
}
.el-cascader-menu {
  color: #fff;
}
.el-cascader-node:not(.is-disabled):focus,
.el-cascader-node:not(.is-disabled):hover {
  background: #f5f7fa;
  color: #3a9cfc;
}
</style>
