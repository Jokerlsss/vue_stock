<!-- Description:资产项目页面 -->
<template>
  <div class="container" @touchstart="touchStart" @touchend="touchEnd">
    <!-- 右侧筛选弹出层 -->
    <van-popup
      :show="show"
      position="right"
      custom-style="width:30%;height:100%;opacity:0.8;display:flex;flex-direction:column-reserve"
      @close="onClose"
    >
      <PopupContent></PopupContent>
    </van-popup>
    <!-- 顶部资产明细 -->
    <MoneyInfo></MoneyInfo>
    <!-- Not Found 页面 -->
    <NotFound v-if="isNotFound"></NotFound>
    <ScrollTable :StockList="StockList"></ScrollTable>
    <!-- 项目卡片 -->
    <!-- <StockDataCell
      v-for="(item,index) in StockList"
      :key="index"
      :name="item.name"
      :type="item.type"
      :asset="item.asset"
      :dayEarn="item.dayEarn"
      :hadEarn="item.hadEarn"
    ></StockDataCell>-->
    <!-- 添加项目按钮 -->
    <AddProBtn></AddProBtn>
    <!-- 底部留空 -->
    <div class="space"></div>
  </div>
</template>

<script>
import globalStore from '../../stores/global-stores'

import StockDataCell from '@/components/StockDataCell'
import AddProBtn from '@/components/AddProBtn'
import MoneyInfo from '@/components/MoneyInfo'
import SliderCell from '@/components/SliderCell'
import ScrollTable from '@/components/ScrollTable'
import DefinedTable from '@/components/Table'
import PopupContent from '@/components/PopupContent'
import NotFound from '@/components/NotFound'
export default {
  computed: {
    isNotFound () {
      // 当所有项目筛选为空时，出现 NotFound 页面
      if (globalStore.state.checkStock === false &&
        globalStore.state.checkFund === false &&
        globalStore.state.checkGold === false &&
        globalStore.state.checkRegular === false &&
        globalStore.state.checkOther === false) {
        return true
      }
      // 当前页面无项目时
      if (this.StockList.length === 0) {
        return true
      } else {
        return false
      }
    }
  },
  components: {
    StockDataCell,
    AddProBtn,
    MoneyInfo,
    SliderCell,
    ScrollTable,
    DefinedTable,
    PopupContent,
    NotFound
  },
  data () {
    return {
      show: false,
      start: '',
      end: '',
      interval: '',
      time: 0,

      StockList: [
        {
          name: '通用股份',
          type: '股',
          asset: '4146',
          dayEarn: '+12',
          hadEarn: '-41'
        },
        {
          name: '三全食品',
          type: '基',
          asset: '40621',
          dayEarn: '+432',
          hadEarn: '-451'
        },
        {
          name: '鹏华债券',
          type: '定',
          asset: '4333',
          dayEarn: '+110',
          hadEarn: '-99'
        },
        {
          name: '汤圆股份',
          type: '金',
          asset: '8204',
          dayEarn: '+304',
          hadEarn: '-102'
        },
        {
          name: '余额宝',
          type: '其',
          asset: '900',
          dayEarn: '+41',
          hadEarn: '-84'
        },
        {
          name: '上海一汽',
          type: '股',
          asset: '7654',
          dayEarn: '+14',
          hadEarn: '-11'
        }
      ]
    }
  },
  methods: {
    // 关闭弹出层
    onClose: function () {
      this.show = false
    }
    // *问题：为什么用箭头函数就不能将show传给控件？箭头函数与function的区别？that和this的区别？
    // touchStart: function (e) {
    //   this.start = e.mp.changedTouches[0].clientX
    //   this.interval = setInterval(() => {
    //     this.time++
    //   }, 100)
    // },
    // touchEnd: function (e) {
    //   this.end = e.mp.changedTouches[0].clientX
    //   // 当滑动事件小于 1 秒时、且滑动距离大于 40 px 触发
    //   if (this.end - this.start <= -40 && this.time < 10) {
    //     this.show = true
    //   }
    //   if (this.end - this.start >= 40 && this.time < 10) {
    //     this.show = false
    //   }
    //   clearInterval(this.interval)
    //   this.time = 0
    // }
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
