<template>
  <div class="container">
    <div class="imgDiv">
      <!-- '加仓 招商中证白酒 5000 元' -->
      <img src="../../static/images/steps.png" />
    </div>
    <div class="infoDiv">
      <div class="dateDiv">
        <div class="date">
          <p>{{timestampToTime}}</p>
        </div>
        <div class="assetsDiv">
          <p class="totalAssets">
            剩：
            <span>{{holdAssets}}</span>元
          </p>
        </div>
      </div>
      <div class="oprateDiv">
        <p>{{operationName}} {{productName}} {{oprateAmount}} 元</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // 将Date转换为日期标准格式
    timestampToTime () {
      var moment = require('moment')
      return moment(this.operatingdate).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  props: {
    operatingdate: '',
    operationName: '',
    productName: '',
    oprateAmount: '',
    holdAssets: ''
  },
  data () {
    return {
      operatingdate: this.operatingdate,
      operationName: this.operationName,
      productName: this.productName,
      oprateAmount: this.oprateAmount,
      holdAssets: this.holdAssets
    }
  }
}
</script>

<style scoped>
.container {
  font-family: PingFang SC;
  height: 100rpx;
  width: 680rpx;
  background-color: #191b2a;
  display: flex;
  justify-content: center;
}
/* 步骤条图标 */
.imgDiv {
  width: 88rpx;
  height: 100%;
  display: flex;
  justify-content: center;
}
.imgDiv > img {
  height: 100%;
  width: 22rpx;
}
/* 操作信息div */
.infoDiv {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
/* 操作日期 */
.dateDiv {
  display: flex;
  align-items: flex-end;
  color: #9898a0;
  font-size: 24rpx;
  height: 50%;
  width: 100%;
}
.date {
  width: 70%;
}
.assetsDiv {
  width: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 30rpx;
}
/* 操作后更新新的资产 */
.totalAssets {
  font-size: 24rpx;
  color: #9898a0;
}
.totalAssets > span {
  color: #ff6600;
}
/* 操作信息详情 */
.oprateDiv {
  font-size: 28rpx;
  height: 50%;
  width: 100%;
  color: #fff;
}
</style>
