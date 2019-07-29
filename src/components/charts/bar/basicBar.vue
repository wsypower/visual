<template>
  <div class="basic__bar">
    <!-- <div class="basic__bar_bc" flex="dir:top main:justify">
      <div class="bar_bc" v-for="(item,index) in row" :key="index"></div>
    </div>-->
    <ve-bar
      :data="chartData"
      width="100%"
      height="100%"
      :legend-visible="false"
      :settings="barSettings"
      :colors="colors"
      :extend="extend"
      data-order
    ></ve-bar>
  </div>
</template>

<script>
export default {
  name: 'basicBar',
  data() {
    return {
      rowDataIndex: ''
      // chartData: {
      //   columns: ['name', 'qys', 'jcs', 'qzs'],
      //   rows: [
      //     { name: '杭州市(总计:5000件)', qys: 1393, jcs: 1093, qzs: 1205, zs: 5000 },
      //     { name: '宁波市', qys: 3530, jcs: 3230, qzs: 1205, zs: 5000 },
      //     { name: '温州市', qys: 2923, jcs: 2623, qzs: 1205, zs: 5000 },
      //     { name: '嘉兴市', qys: 1723, jcs: 1423, qzs: 1205, zs: 5000 },
      //     { name: '湖州市', qys: 3792, jcs: 3492, qzs: 1205, zs: 5000 },
      //     { name: '绍兴市', qys: 4593, jcs: 4293, qzs: 1205, zs: 5000 },
      //     { name: '金华市', qys: 4593, jcs: 4293, qzs: 1205, zs: 5000 },
      //     { name: '衢州市', qys: 4593, jcs: 4293, qzs: 1205, zs: 5000 },
      //     { name: '舟山市', qys: 4593, jcs: 4293, qzs: 1205, zs: 5000 },
      //     { name: '台州市', qys: 4593, jcs: 4293, qzs: 1205, zs: 5000 },
      //     { name: '丽水市', qys: 4593, jcs: 4293, qzs: 1205, zs: 5000 }
      //   ]
      // }
    }
  },

  props: ['row'],
  computed: {
    chartData() {
      return {
        columns: ['name', 'qys', 'jcs', 'qzs'],
        rows: this.row
      }
    },
    colors() {
      return ['#FF5959', '#0270D7', '#03FAB3', '#233E74']
    },
    barSettings() {
      return {
        stack: {
          xxx: ['qys', 'jcs', 'qzs']
        },
        labelMap: {
          qys: '企业',
          jcs: '基层',
          qzs: '群众',
          zs: '总数'
        },
        label: {
          show: false,
          position: 'right',
          color: '#fff'
          // color: '#fff'
          // align: 'right'
        }
      }
    },
    extend() {
      return {
        grid: {
          top: '0',
          bottom: '0',
          left: '0',
          right: '40'
          // formatter: '{b}: {@[2]}'
        },
        xAxis: {
          show: false
        },
        yAxis: {
          show: true,
          position: 'left',
          axisLine: {
            lineStyle: {
              color: 'red'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: 16,
              align: 'right'
            }
          },
          nameTextStyle: {
            align: 'left'
          }
        },
        series: {
          barWidth: 12,
          barMinHeight: 5,
          label: {
            // position: 'right',
            // color: '#fff'
            // align: 'left'
          },
          // itemStyle: {
          //   shadowColor: 'rgba(0, 0, 0, 0.5)',
          //   shadowBlur: 10
          // }
          emphasis: {
            cursor: 'pointer'
          }
        },
        /* 给第一项设置圆角 */
        'series.0.itemStyle.barBorderRadius': [5, 0, 0, 5],
        // 'series.0.itemStyle.shadowBlur': 0,
        // 'series.0.itemStyle.shadowColor': '#35CCF6',
        // 'series.0.itemStyle.shadowOffsetY': 1,

        // 'series.1.itemStyle.shadowBlur': 0,
        // 'series.1.itemStyle.shadowColor': '#35CCF6',
        // 'series.1.itemStyle.shadowOffsetY': 1,

        // 'series.2.itemStyle.shadowBlur': 0,
        // 'series.2.itemStyle.shadowColor': '#35CCF6',
        'series.2.itemStyle.shadowOffsetY': 1,
        /* 数据设置圆角 */
        'series.2.itemStyle.barBorderRadius': [0, 5, 5, 0],

        // 'series.3.itemStyle.barWidth': 14,
        // 'series.3.itemStyle.xAxisIndex': 1,
        // 'series.3.data': [100, 100, 100, 100, 100],
        // 'series.4.itemStyle.barBorderRadius': [0, 5, 5, 0],
        // 'series[length-1].itemStyle.barBorderRadius': [0, 5, 5, 0],

        /* 最后一项背景色的设置 */
        axisLabel: {
          show: false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.basic__bar {
  width: 100%;
  height: 100%;
  position: relative;
  .basic__bar_bc {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    padding-top: 23px;
    .bar_bc {
      width: 100%;
      // height: 10px;
      flex: 0 0 10px;
      background-color: red;
    }
  }
}
</style>