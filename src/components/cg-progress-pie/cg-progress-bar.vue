<template>
  <div class="cg-progress-bar" flex="box:first dir:top">
    <div class="header" flex="cross:baseline main:justify">
      <div class="status">{{status}}</div>
      <div class="nums" flex="cross:baseline">
        <!-- <span>{{nums}}</span>万 -->
        <span>
          <cg-count :decimals="decimals" :startVal="oldValue" :endVal="nums" :duration="1500"></cg-count>
        </span>件
      </div>
    </div>
    <div class="main">
      <div class="progress_bar" flex="cross:center" :style="{borderColor:color}">
        <div class="component" :style="{backgroundColor:color}"></div>
        <div class="bar">
          <el-progress
            :show-text="false"
            :text-inside="true"
            :color="color"
            :stroke-width="12"
            :percentage="percentageData"
          ></el-progress>
          <div class="percentage_nums" felx="cross:center">{{percentageData}}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  name: 'cgProgressBar',
  data() {
    return {
      oldValue: 0,
      newValue: 0
    }
  },
  props: {
    percentage: {
      type: Number,
      default: 70
    },
    color: {
      type: String,
      default: '#FFCE25'
    },
    nums: {
      type: Number,
      default: 70
    },
    status: {
      type: String,
      default: '进行中'
    },
    decimals: {
      type: Number,
      default: 0
    }
  },
  watch: {
    nums(newValue, oldValue) {
      this.newValue = newValue
      this.oldValue = oldValue
    }
  },
  computed: {
    percentageData() {
      const percentage = this.percentage >>> 0
      return percentage === 100 ? 99 : percentage
    }
  }
}
</script>

<style lang="scss" scoped>
.cg-progress-bar {
  width: 100%;
  height: 87px;
  .header {
    width: 100%;
    height: 45px;
    .status {
      color: #ffffff;
      font-size: 16px;
      font-family: titleFont;
    }
    .nums {
      color: #3fd3fd;
      font-family: titleFont;
      font-size: 13px;
      span {
        font-family: number;
        font-size: 36px;
        margin-right: 5px;
      }
    }
  }
  .main {
    width: 100%;
    .progress_bar {
      height: 22px;
      width: 100%;
      border-left: 2px solid;
      border-color: #03fab3;
      position: relative;
      .component {
        position: absolute;
        height: 12px;
        width: 12px;
        background-color: #03fab3;
        z-index: 1;
      }
      .bar {
        width: 100%;
        height: 12px;
      }
      .percentage_nums {
        height: 22px;
        width: 100%;
        padding-top: 5px;
        color: #3fd3fd;
        font-size: 12px;
        text-align: right;
      }
    }
  }
  /deep/.el-progress-bar__outer {
    background-color: #254e7d;
  }
}
</style>