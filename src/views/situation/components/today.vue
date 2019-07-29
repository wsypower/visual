<template>
  <div class="today">
    <layout-box title="今日走访事项统计" height="160px">
      <div class="content" flex="main:justify">
        <cg-progress-pie
          :icon="total.icon"
          :name="total.name"
          :nums="total.value"
          :percentage="totalNums"
          :color="total.color"
        ></cg-progress-pie>
        <cg-progress-pie
          :icon="processing.icon"
          :name="processing.name"
          :nums="processing.value"
          :percentage="undone"
          :color="processing.color"
        ></cg-progress-pie>
        <cg-progress-pie
          :icon="finished.icon"
          :name="finished.name"
          :nums="finished.value"
          :percentage="completed"
          :color="finished.color"
        ></cg-progress-pie>
      </div>
    </layout-box>
  </div>
</template>

<script>
import cgProgressPie from '@/components/cg-progress-pie/cg-progress-pie.vue'
import { getToday } from '@/api/situation'
import { mapState } from 'vuex'
export default {
  name: 'today',
  components: {
    cgProgressPie
  },
  data() {
    return {
      total: {
        name: '总事项',
        percentage: 100,
        color: '#3FD3FD',
        value: 0,
        icon: 'total'
      },
      processing: {
        name: '进行中',
        percentage: 26,
        color: '#FFCE25',
        value: 0,
        icon: 'processing'
      },
      finished: {
        name: '已办结',
        percentage: 75,
        color: '#03FAB3',
        value: 0,
        icon: 'finished'
      }
    }
  },
  computed: {
    /* 全局的code */
    ...mapState('cgvisual/code', {
      globalCode: state => state.code
    }),
    /* 总事件 */
    totalNums() {
      if (this.processing.value !== 0 || this.finished.value !== 0) {
        return 100
      } else {
        return 0
      }
    },
    /* 未完成的百分比 */
    undone() {
      const divisor = this.total.value
      if (divisor === 0) {
        return 0
      }
      const undone = Math.floor((this.processing.value / divisor) * 100)
      undone == 0 ? 5 : undone
      return undone
    },
    /* 完成的百分比 */
    completed() {
      if (this.processing.value === 0 && this.total.value === 0 && this.finished.value === 0) {
        return 0
      } else {
        return 100 - this.undone
      }
    }
  },
  methods: {
    requestGetToday() {
      getToday({ code: this.globalCode }).then(res => {
        const { end, proceing, total } = res
        this.total.value = total
        this.processing.value = proceing
        this.finished.value = end
      })
    }
  },
  watch: {
    globalCode(newValue, oldValue) {
      this.requestGetToday()
    }
  },
  mounted() {
    this.requestGetToday()
    setInterval(() => {
      this.requestGetToday()
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.today {
  width: 100%;
  height: 221px;
  margin-bottom: 28px;
  .content {
    width: 100%;
    height: 100%;
    padding-top: 3px;
  }
}
</style>