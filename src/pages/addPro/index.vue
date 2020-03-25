<template>
  <div class="container">
    <div class="inputGroup">
      <div class="inputTitle">
        <p>名称</p>
      </div>
      <div class="input">
        <input placeholder="请选择已购买的投资项目" type="text" @focus="onOpen" />
      </div>
    </div>

    <!-- <InputGroup inputTitle="名称" placeholder="请选择已购买的投资项目"></InputGroup>
    <InputGroup inputTitle="金额" placeholder="请输入购买金额"></InputGroup>
    <InputGroup inputTitle="买入时间" placeholder="当日净值由此决定，请谨慎选择"></InputGroup>
    <InputGroup inputTitle="交易平台" placeholder="请选择购买的平台"></InputGroup>-->
    <div class="getBtn">
      <van-button color="#CC6600" size="large" round>完成</van-button>
    </div>
    <BottomSpace></BottomSpace>
    <van-dialog
      use-slot
      title="标题"
      :show="showDialog"
      show-cancel-button
      @close="onClose"
      close-on-click-overlay="true"
    >
      <BottomSpace></BottomSpace>
    </van-dialog>
  </div>
</template>

<script>
import InputGroup from '@/components/InputGroup'
import BottomSpace from '@/components/BottomSpace'
export default {
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    onOpen () {
      this.showDialog = true
    },
    onClose () {
      this.showDialog = false
    }
  },
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
/* 输入框组 */
/* 输入框组：标题 & 输入框 */
.inputGroup {
  font-family: PingFang SC;
  margin-top: 40rpx;
  width: 600rpx;
  height: 114rpx;
  display: flex;
  flex-wrap: wrap;
}
.inputTitle {
  width: 100%;
  height: 34rpx;
  font-weight: bold;
  font-size: 28rpx;
  color: #cccccc;
}
.input {
  color: #fff;
  width: 100%;
  height: 80rpx;
  font-size: 36rpx;
  border-bottom: 1px solid #9898a0;
  display: flex;
  align-items: center;
}
.input > input {
  width: 100%;
}
</style>
