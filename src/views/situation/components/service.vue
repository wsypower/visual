<template>
  <div class="service">
    <layout-box title="服务对象" height="185px">
      <basic-ring :row="rows"></basic-ring>
    </layout-box>
  </div>
</template>

<script>
import basicRing from '@/components/charts/ring/basic-ring.vue'
import { getServer } from '@/api/situation'
import { mapState } from 'vuex'
export default {
  name: 'service',
  components: {
    basicRing
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
    requestGetServer() {
      getServer({ code: this.globalCode }).then(res => {
        this.rows = res
      })
    }
  },
  watch: {
    globalCode(newValue, oldValue) {
      this.requestGetServer()
    }
  },
  mounted() {
    this.requestGetServer()
    setInterval(() => {
      this.requestGetServer()
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
.service {
  width: 100%;
  height: 246px;
}
</style>