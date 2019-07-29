<template>
  <div class="total__statistics">
    <layout-box>
      <div class="content" flex>
        <div class="roundMark" flex="main:center cross:center">
          <!-- 总事项 -->
          <cg-progress-big :decimals="1" :percentage="completed" :nums="generalMatterData"></cg-progress-big>
        </div>
        <div class="schedule">
          <!-- 进行中 -->
          <cg-progress-bar :percentage="undone" color="#FFCE25" :nums="processing" status="进行中"></cg-progress-bar>
          <!-- 已完结 -->
          <cg-progress-bar :percentage="completed" color="#03FAB3" :nums="finished" status="已办结"></cg-progress-bar>
        </div>
      </div>
    </layout-box>
  </div>
</template>

<script>
import cgProgressBig from '@/components/cg-progress-pie/cg-progress-big.vue'
import cgProgressBar from '@/components/cg-progress-pie/cg-progress-bar.vue'
import { getTotal } from '@/api/situation'
import { mapState } from 'vuex'
export default {
  name: 'total',
  components: {
    cgProgressBig,
    cgProgressBar
  },
  data() {
    return {
      //总事项数目
      generalMatter: 0,
      //已完结数目
      finished: 0,
      //未完结数目
      processing: 0
    }
  },
  computed: {
    /* 全局的code */
    ...mapState('cgvisual/code', {
      globalCode: state => state.code
    }),
    /* /1000 */
    generalMatterData() {
      return this.generalMatter / 10000
    },
    /* 未完成的百分比 */
    undone() {
      const divisor = this.generalMatter
      divisor === 0 ? 5 : divisor
      const undone = Math.floor((this.processing / divisor) * 100)
      undone === 0 ? 5 : undone
      return undone
    },
    /* 完成的百分比 */
    completed() {
      if (this.undone === 0 && this.generalMatter === 0) {
        return 0
      } else {
        return 100 - this.undone
      }
    }
  },
  methods: {
    requestTotalData() {
      getTotal({ code: this.globalCode }).then(res => {
        const { end, proceing, total } = res
        this.generalMatter = total
        this.processing = proceing
        this.finished = end
      })
    }
  },
  watch: {
    globalCode(newValue, oldValue) {
      this.requestTotalData()
    }
  },
  mounted() {
    this.requestTotalData()
    setInterval(() => {
      this.requestTotalData()
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
.total__statistics {
  width: 100%;
  height: 285px;
  margin-bottom: 28px;
  .content {
    width: 100%;
    height: 100%;
    padding-top: 3px;
  }
  .roundMark {
    width: 161px;
    height: 217px;
  }
  .schedule {
    width: 302px;
    height: 217px;
    padding-top: 20px;
    padding-left: 30px;
  }
}
</style>