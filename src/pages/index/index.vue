<template>
  <div class="container">
    <van-popup
      :show="show"
      position="right"
      custom-style="width:30%;height:100%;opacity:0.7"
      @close="onClose"
    >内容</van-popup>
    <MoneyInfo></MoneyInfo>
    <StockDataCell StockType="基"></StockDataCell>
    <StockDataCell StockType="金"></StockDataCell>
    <StockDataCell StockType="定"></StockDataCell>
    <StockDataCell StockType="其"></StockDataCell>
    <StockDataCell StockType="股"></StockDataCell>
    <StockDataCell StockType="基"></StockDataCell>
    <AddProBtn></AddProBtn>
    <VxeTable></VxeTable>
    <div class="space"></div>
  </div>
</template>

<script>
import StockDataCell from '@/components/StockDataCell'
import AddProBtn from '@/components/AddProBtn'
import MoneyInfo from '@/components/MoneyInfo'
export default {
  components: {
    StockDataCell,
    AddProBtn,
    MoneyInfo
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    onClose: function () {
      this.show = false
    },
    // *问题：为什么用箭头函数就不能将show传给控件？箭头函数与function的区别？that和this的区别？
    showPopup: function () {
      this.show = true
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
.space {
  width: 100%;
  height: 150rpx;
}
</style>
