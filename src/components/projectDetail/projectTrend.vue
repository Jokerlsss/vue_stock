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
    trendData: '',
    productCode: ''
  },
  computed: {
    onInit () {
      return this.initChart
    }
    // trendData () {
    //   console.log('projectTrendData:', this.trendData)
    //   return this.trendData
    // }
  },
  data () {
    return {
      echarts,
      trendData: this.trendData,
      productCode: this.productCode
      // time: -1,
      // onInit: this.initChart
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
  onLoad () {
    // this.getTrendInfo(-1)
  },
  methods: {
    /** 获取走势图数据 */
    // getTrendInfo (date) {
    //   this.$httpWX.get({
    //     url: '/financialProduct/selectToTrend',
    //     data: {
    //       productCode: this.productCode,
    //       // time -1:近一月  -3:近三月  -6：近半年  -12:近一年  -36：近三年
    //       time: date
    //     }
    //   }).then(res => {
    //     this.trendData = res.worthList
    //     console.log('this.trendData:', this.trendData)
    //   })
    // },
    // TODO 改成 function 去除 return ，图出不来，可以重复触发
    // TODO 增加 return ，图出的来，但外部无法重复触发更新
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
