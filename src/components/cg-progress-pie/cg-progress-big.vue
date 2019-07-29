<template>
  <div class="cg__progress__pie-big" flex="cross:center main:center">
    <div class="inner__ring" flex="cross:center main:center">
      <cg-progress
        type="circle"
        :percentage="percentageData"
        track-color="#274F7E"
        stroke-color="#3FD3FD"
        :stroke-width="10"
        striped
        reverse
        :show-text="false"
      ></cg-progress>
      <div class="ring_mask_bc" flex="main:center cross:center">
        <div class="center__circle" flex="cross:center main:center dir:top">
          <div class="nums">
            <cg-count :decimals="decimals" :startVal="oldValue" :endVal="nums" :duration="1500"></cg-count>
          </div>
          <div class="title">总事项(万)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cgProgressPieBig',
  data() {
    return {
      oldValue: 0,
      newValue: 0
    }
  },
  props: {
    percentage: {
      type: Number,
      default: 25
    },
    nums: {
      type: Number,
      default: 25
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
.cg__progress__pie-big {
  width: 160px;
  height: 160px;
  border: 1px solid #254c7a;
  border-radius: 50%;
  .inner__ring {
    width: 150px;
    height: 150px;
    border: 2px solid #3bbee8;
    border-radius: 50%;
    position: relative;
  }
  .ring_mask_bc {
    position: absolute;
    @include center-translate();
    width: 126px;
    height: 126px;
    border-radius: 50%;
    z-index: 1;
    // border: 12px dashed #2A174B;
    .center__circle {
      width: 96px;
      height: 96px;
      border: 1px dashed #36d3fc;
      border-radius: 50%;
      .nums {
        font-family: number;
        color: #ffffff;
        font-size: 36px;
      }
      .title {
        font-family: titleFont;
        color: #3fd3fd;
        font-size: 12px;
      }
    }
  }
}
</style>