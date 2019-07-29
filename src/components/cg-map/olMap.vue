<template>
  <div id="map"></div>
</template>

<script>
import 'ol/ol.css'
import { Map, View } from 'ol'
import { defaults } from 'ol/control'
import { defaults as interactionDefaults } from 'ol/interaction'
import { Vector as VectorLayer } from 'ol/layer.js'
import Select from 'ol/interaction/Select'
import { pointerMove } from 'ol/events/condition.js'
import { Vector as VectorSource } from 'ol/source.js'
import GeoJSON from 'ol/format/GeoJSON.js'
import Style from 'ol/style/Style'
import Fill from 'ol/style/Fill'
import Text from 'ol/style/Text'
import Stroke from 'ol/style/Stroke'
import layerData from './data/33.json'
import { mapState } from 'vuex'
let fillLayer
let clickFeature
export default {
  name: 'olMap',
  mounted() {
    // 初始化地图底图
    this.initMap()
  },
  computed: {
    ...mapState('cgvisual/code', {
      globalCode: state => state.code
    })
  },
  watch: {
    globalCode: function(code) {
      this.focusTo(code)
    }
  },
  methods: {
    initMap() {
      const _this = this
      /* 添加地图 */
      this.map = new Map({
        loadTilesWhileAnimating: true,
        target: 'map',
        // 设置地图控件，默认的三个控件都不显示
        controls: defaults({
          attribution: false,
          zoom: false,
          rotate: false
        }),
        //设置地图鼠标事件，默认的都改成false
        interactions: interactionDefaults({
          doubleClickZoom: false,
          mouseWheelZoom:false,
          altShiftDragRotate: false,
          keyboard: false,
          shiftDragZoom: false,
          dragPan:false,
          pinchZoom: false
        }),
        view: new View({
          projection: 'EPSG:4326',
          center: [120.41036132812501, 29.11955078125],
          zoom: 7.9,
          maxZoom: 20,
          minZoom: 5
        })
      })
      this.focusTo(this.globalCode)
      let pointer = new Select({
        condition: pointerMove,
        style: this.hoverStyle
      })
      this.map.addInteraction(pointer)
      // 鼠标移动事件
      pointer.on('select', function(e) {
        let features = fillLayer.getSource().getFeatures()
        for (let f in features) {
          features[f].setStyle(
            new Style({
              fill: new Fill({
                //矢量图层填充颜色，以及透明度
                color: '#152961'
              }),
              text: new Text({
                text: features[f].get('name'),
                font: '16px bold FZZZHONGJW--GB1-0',
                fill: new Fill({
                  color: '#fff'
                }),
                offsetX: features[f].get('name') === '舟山市' ? -30 : 0,
                offsetY: features[f].get('name') === '舟山市' ? 32 : 0,
                overflow: true
              }),
              stroke: new Stroke({
                //边界样式
                color: '#3b66f9',
                width: 2
              })
            })
          )
        }
        if (clickFeature) {
          clickFeature.setStyle(
            new Style({
              fill: new Fill({
                //矢量图层填充颜色，以及透明度
                color: '#073ec8'
              }),
              text: new Text({
                text: clickFeature.get('name'),
                font: '16px bold FZZZHONGJW--GB1-0',
                fill: new Fill({
                  color: '#fff'
                }),
                offsetX: clickFeature.get('name') === '舟山市' ? -30 : 0,
                offsetY: clickFeature.get('name') === '舟山市' ? 32 : 0,
                overflow: true
              }),
              stroke: new Stroke({
                //边界样式
                color: '#48d6fd',
                width: 2
              })
            })
          )
        }
        let feature = e.target.getFeatures().getArray()[0]
        if (feature) {
          _this.pointerCallback(feature.get('code'))
          feature.setStyle(
            new Style({
              fill: new Fill({
                //矢量图层填充颜色，以及透明度
                color: '#073ec8'
              }),
              text: new Text({
                text: feature.get('name'),
                font: '16px bold FZZZHONGJW--GB1-0',
                fill: new Fill({
                  color: '#fff'
                }),
                offsetX: feature.get('name') === '舟山市' ? -30 : 0,
                offsetY: feature.get('name') === '舟山市' ? 32 : 0,
                overflow: true
              }),
              stroke: new Stroke({
                //边界样式
                color: '#48d6fd',
                width: 2
              })
            })
          )
        }
      })
      // 单击事件
      let olMap = this.map
      this.map.on('click', function({ pixel }) {
        let feature = olMap.forEachFeatureAtPixel(pixel, feature => feature)
        if (feature && feature.get('code')) {
          clickFeature = feature
          _this.clickCallback(feature.get('code'))
          let features = fillLayer.getSource().getFeatures()
          for (let f in features) {
            features[f].setStyle(
              new Style({
                fill: new Fill({
                  //矢量图层填充颜色，以及透明度
                  color: '#152961'
                }),
                text: new Text({
                  text: features[f].get('name'),
                  font: '16px bold FZZZHONGJW--GB1-0',
                  fill: new Fill({
                    color: '#fff'
                  }),
                  offsetX: features[f].get('name') === '舟山市' ? -30 : 0,
                  offsetY: features[f].get('name') === '舟山市' ? 32 : 0,
                  overflow: true
                }),
                stroke: new Stroke({
                  //边界样式
                  color: '#3b66f9',
                  width: 2
                })
              })
            )
          }
          feature.setStyle(
            new Style({
              fill: new Fill({
                //矢量图层填充颜色，以及透明度
                color: '#073ec8'
              }),
              text: new Text({
                text: feature.get('name'),
                font: '16px bold FZZZHONGJW--GB1-0',
                fill: new Fill({
                  color: '#fff'
                }),
                offsetX: feature.get('name') === '舟山市' ? -30 : 0,
                offsetY: feature.get('name') === '舟山市' ? 32 : 0,
                overflow: true
              }),
              stroke: new Stroke({
                //边界样式
                color: '#48d6fd',
                width: 2
              })
            })
          )
        }
      })
    },
    focusTo(code) {
      if (fillLayer) {
        this.map.removeLayer(fillLayer)
      }
      fillLayer = new VectorLayer({
        source: new VectorSource({
          features: new GeoJSON().readFeatures(layerData)
        }),
        style: this.fillStyle
      })
      this.map.addLayer(fillLayer)
      if (code.length === 4) {
        const features = fillLayer.getSource().getFeatures()
        for (let k in features) {
          if (features[k].get('code') == code) {
            clickFeature = features[k]
            features[k].setStyle(
              new Style({
                fill: new Fill({
                  //矢量图层填充颜色，以及透明度
                  color: '#073ec8'
                }),
                text: new Text({
                  text: features[k].get('name'),
                  font: '16px bold FZZZHONGJW--GB1-0',
                  fill: new Fill({
                    color: '#fff'
                  }),
                  offsetX: features[k].get('name') === '舟山市' ? -30 : 0,
                  offsetY: features[k].get('name') === '舟山市' ? 32 : 0,
                  overflow: true
                }),
                stroke: new Stroke({
                  //边界样式
                  color: '#48d6fd',
                  width: 2
                })
              })
            )
            break
          }
        }
      }
    },
    hoverStyle(feature) {
      return new Style({
        fill: new Fill({
          //矢量图层填充颜色，以及透明度
          color: '#073ec8'
        }),
        text: new Text({
          text: feature.get('name'),
          font: '16px bold FZZZHONGJW--GB1-0',
          fill: new Fill({
            color: '#fff'
          }),
          offsetX: feature.get('name') === '舟山市' ? -30 : 0,
          offsetY: feature.get('name') === '舟山市' ? 32 : 0,
          overflow: true
        }),
        stroke: new Stroke({
          //边界样式
          color: '#48d6fd',
          width: 2
        })
      })
    },
    fillStyle(feature) {
      return new Style({
        fill: new Fill({
          //矢量图层填充颜色，以及透明度
          color: '#152961'
        }),
        text: new Text({
          text: feature.get('name'),
          font: '16px bold FZZZHONGJW--GB1-0',
          fill: new Fill({
            color: '#fff'
          }),
          offsetX: feature.get('name') === '舟山市' ? -30 : 0,
          offsetY: feature.get('name') === '舟山市' ? 32 : 0,
          overflow: true
        }),
        stroke: new Stroke({
          //边界样式
          color: '#3b66f9',
          width: 2
        })
      })
    },
    //地图click事件绑定回调
    clickCallback(code) {
      this.$emit('clickHandler', code)
    },
    //地图hover事件绑定回调
    pointerCallback(code) {
      this.$emit('hoverHandler', code)
    }
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
