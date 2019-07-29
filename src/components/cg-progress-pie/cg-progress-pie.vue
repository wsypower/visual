
<template>
  <div class="cg__progress__pie" flex="box:justify">
    <div class="progress__pie" flex="main:center cross:center">
      <div class="outerBorder" flex="main:center cross:center">
        <cg-progress
          type="circle"
          :width="58"
          :percentage="percentageData"
          :striped="true"
          :stroke-width="8"
          :stroke-color="color"
          track-color="#1C4D73"
          :show-text="false"
          reverse
        ></cg-progress>
        <!-- 中间的图标 -->
        <div class="innerRing" flex="main:center cross:center">
          <cg-icon-svg :name="icon" :style="{color:color}"></cg-icon-svg>
        </div>
      </div>
    </div>
    <div class="progress__num" flex="main:center cross:center">
      <div class="progress__num__warp" flex="dir:top box:first  main:justify">
        <div class="progress__num__t" flex="main:right ">{{name}}</div>
        <div class="progress__num__b" flex="main:right cross:bottom">
          <div class="num">
            <cg-count :startVal="oldValue" :endVal="nums" :duration="2500"></cg-count>
          </div>
          <div class="title">件</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cgProgressPie',
  data() {
    return {
      oldValue: 0,
      newValue: 0
    }
  },
  props: {
    color: {
      type: String,
      default: '#3FD3FD'
    },
    percentage: {
      type: Number,
      default: 25
    },
    icon: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: '总事项'
    },
    nums: {
      type: Number,
      default: 25
    }
  },
  watch: {
    nums(newValue, oldValue) {
      console.log(newValue)
      this.newValue = newValue
      this.oldValue = oldValue
    }
  },
  computed: {
    // numsData() {
    //   setInterval(() => {
    //     return this.nums
    //   }, 2000)
    //   setInterval(() => {
    //     return 0
    //   }, 3000)
    // },
    percentageData() {
      const percentage = this.percentage >>> 0
      return percentage === 100 ? 99 : percentage
    }
  },
  mounted() {
    // this.digitalChange()
  },
  methods: {
    digitalChange() {
      console.log(this.newValue)
      setInterval(() => {
        this.newValue = 0
        this.oldValue = 0
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.cg__progress__pie {
  height: 154px;
  min-width: 129px;
  .outerBorder {
    width: 66px;
    height: 66px;
    border: 1.5px solid #214c82;
    border-radius: 50%;
    position: relative;
    .innerRing {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 2px dotted #214c82;
      @include center-translate();
    }
  }
  .progress__pie {
    width: 66px;
    height: 100%;
    .svg-icon {
      font-size: 24px;
    }
  }
  .progress__num__warp {
    height: 66px;
    // min-width: 100%;
    padding-left: 10px;
  }
  .progress__num__t {
    height: 24px;
    width: 100%;
    font-family: titleFont;
    color: #ffffff;
    font-size: 16px;
  }
  .progress__num__b {
    // padding-top: 5px;
    .num {
      font-family: number;
      font-size: 36px;
      margin-right: 2px;
      transition: all 0.2s;
      vertical-align: bottom;
      line-height: 27px;
    }
    .title {
      font-family: titleFont;
      font-size: 14px;
      vertical-align: bottom;
    }
    width: 100%;
    color: #3fd3fd;
  }
}
</style>