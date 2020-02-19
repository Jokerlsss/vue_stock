<template>
  <div class="container" @touchstart="touchStart" @touchend="touchEnd">
    <!-- 右侧筛选弹出层 -->
    <van-popup
      :show="show"
      position="right"
      custom-style="width:30%;height:100%;opacity:0.8"
      @close="onClose"
    >内容</van-popup>
    <!-- 顶部资产明细 -->
    <MoneyInfo></MoneyInfo>
    <!-- 项目卡片 -->
    <StockDataCell StockType="基"></StockDataCell>
    <StockDataCell StockType="金"></StockDataCell>
    <StockDataCell StockType="定"></StockDataCell>
    <StockDataCell StockType="其"></StockDataCell>
    <StockDataCell StockType="股"></StockDataCell>
    <StockDataCell StockType="基"></StockDataCell>
    <!-- 添加项目按钮 -->
    <AddProBtn></AddProBtn>
    <!-- 底部留空 -->
    <div class="space"></div>
  </div>
</template>

<script>
import StockDataCell from '@/components/StockDataCell'
import AddProBtn from '@/components/AddProBtn'
import MoneyInfo from '@/components/MoneyInfo'
import SliderCell from '@/components/SliderCell'
import ScrollTable from '@/components/ScrollTable'
import DefinedTable from '@/components/Table'
export default {
  components: {
    StockDataCell,
    AddProBtn,
    MoneyInfo,
    SliderCell,
    ScrollTable,
    DefinedTable
  },
  data () {
    return {
      show: false,
      start: '',
      end: '',
      interval: '',
      time: 0
    }
  },
  methods: {
    onClose: function () {
      this.show = false
    },
    // *问题：为什么用箭头函数就不能将show传给控件？箭头函数与function的区别？that和this的区别？
    // showPopup: function () {
    //   this.show = true
    // },

    touchStart: function (e) {
      this.start = e.mp.changedTouches[0].clientX
      this.interval = setInterval(() => {
        this.time++
      }, 100)
    },
    touchEnd: function (e) {
      this.end = e.mp.changedTouches[0].clientX
      // 当滑动事件小于 1 秒时、且滑动距离大于 40 px 触发
      if (this.end - this.start <= -40 && this.time < 10) {
        this.show = true
      }
      if (this.end - this.start >= 40 && this.time < 10) {
        this.show = false
      }
      clearInterval(this.interval)
      this.time = 0
    }
  }
}
</script>

<style>
page {
  background-color: #12121e;
}
</style>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
/* 底部留白部分 */
.space {
  width: 100%;
  height: 150rpx;
}
</style>
