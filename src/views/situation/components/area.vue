<template>
  <div class="areaSituation">
    <layout-box title="区域统计概况" height="749px" :border="false">
      <basic-bar :row="rows"></basic-bar>
    </layout-box>
  </div>
</template>

<script>
import basicBar from '../../../components/charts/bar/basicBar.vue'
import { getAreaData } from '@/api/situation'
import { mapState } from 'vuex'
export default {
  name: 'areaSituation',
  components: {
    basicBar
  },
  data() {
    return {
      rows: []
    }
  },
  computed: {
    /* 全局的code */
    ...mapState('cgvisual/code', {
      globalCode: state => state.code
    })
  },
  methods: {
    requestGetAreaData() {
      getAreaData({ code: this.globalCode }).then(res => {
        const data = res.reverse().map(v => {
          v.name = `${v.name}(总计:${v.zs}件)`
          return v
        })
        this.rows = data
      })
    }
  },
  watch: {
    globalCode(newValue, oldValue) {
      this.requestGetAreaData()
    }
  },
  mounted() {
    this.requestGetAreaData()
    setInterval(() => {
      this.requestGetAreaData()
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
.areaSituation {
  width: 100%;
  height: 810px;
}
</style>