<template>
  <div class="container">
    <InputGroup inputTitle="名称" placeholder="请选择已购买的投资项目"></InputGroup>
    <InputGroup inputTitle="金额" placeholder="请输入购买金额"></InputGroup>
    <InputGroup inputTitle="买入时间" placeholder="当日净值由此决定，请谨慎选择"></InputGroup>
    <InputGroup inputTitle="交易平台" placeholder="请选择购买的平台"></InputGroup>
    <div class="getBtn">
      <van-button color="#CC6600" size="large" round>完成</van-button>
    </div>
    <BottomSpace></BottomSpace>
  </div>
</template>

<script>
import InputGroup from '@/components/InputGroup'
import BottomSpace from '@/components/BottomSpace'
export default {
  components: {
    InputGroup,
    BottomSpace
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
  margin-top: 20rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.getBtn {
  margin-top: 100rpx;
  width: 600rpx;
  height: 80rpx;
}
</style>
