<template>
  <div class="container">
    <mpvue-echarts :echarts="echarts" :onInit="onInit" />
  </div>
</template>

<script>
import echarts from 'echarts/dist/diy_echarts.min'
import mpvueEcharts from 'mpvue-echarts'
function initChart (canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  })
  canvas.setChart(chart)
  var option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  }
  chart.setOption(option)
  return chart
}
export default {
  data () {
    return {
      echarts,
      onInit: initChart
    }
  },
  components: {
    mpvueEcharts
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
