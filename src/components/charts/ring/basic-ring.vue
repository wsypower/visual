<template>
  <div class="basic__ring">
    <ve-ring
      :data="chartData"
      width="100%"
      height="98%"
      :legend-visible="false"
      :settings="ringSettings"
      :colors="colors"
    ></ve-ring>
  </div>
</template>

<script>
export default {
  name: 'basicRing',
  props: {
    row: {
      type: Array
    }
  },
  data() {
    return {
      // chartData: {
      //   /* 第一项为维度 第二项为指标 */
      //   columns: ['name', 'value'],
      //   /* 数据 */
      //   rows: [{ name: '个人', value: 1393 }, { name: '企业', value: 3530 }, { name: '基层', value: 2923 }]
      // }
    }
  },
  computed: {
    chartData() {
      return {
        /* 第一项为维度 第二项为指标 */
        columns: ['name', 'value'],
        /* 数据 */
        rows: this.row
      }
    },
    /* 配置项目颜色 */
    colors() {
      return ['#03FAB3', '#0270D7', '#FF5959']
    },
    ringSettings() {
      return {
        /* 环图外半径与内半径 */
        radius: [45, 60],
        /* 位置纵向偏移量 */
        offsetY: 100,
        labelLine: {
          show: true,
          /* 第一段line长度 */
          length: 10,
          /* 第二段line长度 */
          length2: 20,
          lineStyle: {
            type: 'solid'
          }
        },
        /* 环图图形上的文本标签 */
        label: {
          show: true,
          // formatter: [
          //   {},
          // ],
          formatter: '{b}: {c}件 \n {a|({d}%)}',
          lineHeight: 20,
          color: '#fff',
          // backgroundColor: '#132860',
          boborderColor: '#fff',
          borderRadius: 4,
          padding: 5,
          shadowColor: '#070B29',
          fontSize: 16,
          rich: {
            a: {
              color: '#36D2FC',
              fontSize: 16
            }
          }
        },
        /* 数据保留数据 */
        digit: 10
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.basic__ring {
  width: 100%;
  height: 100%;
}
</style>