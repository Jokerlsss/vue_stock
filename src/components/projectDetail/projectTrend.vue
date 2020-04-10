<template>
  <div class="container">
    <mpvue-echarts :echarts="echarts" :onInit="onInit" />
  </div>
</template>

<script>
import echarts from 'echarts/dist/diy_echarts.min'
import mpvueEcharts from 'mpvue-echarts'
export default {
  props: {
    trendData: ''
  },
  data () {
    return {
      echarts,
      trendData: this.trendData,
      onInit: this.initChart
    }
  },
  components: {
    mpvueEcharts
  },
  // watch: {
  //   // 监听当 trendData 发生变化时，触发 initChart 函数
  //   trendData () {
  //     this.initChart()
  //   }
  // },
  mounted () {
  },
  methods: {
    initChart (canvas, width, height) {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      })
      canvas.setChart(chart)
      var option = {
        xAxis: {
          type: 'category'
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.trendData,
          type: 'line'
        }]
      }
      chart.setOption(option)
      return chart
    }
  }
}
</script>

<style scoped>
.container {
  font-family: PingFang SC;
  display: flex;
  justify-content: center;
  height: 550rpx;
  width: 680rpx;
}
</style>
