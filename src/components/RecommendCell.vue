<template>
  <div class="container">
    <div class="titleDiv">
      <div class="logo">
        <img src="../../static/images/star.png" />
      </div>
      <div class="text">
        <p>{{title}}</p>
      </div>
    </div>
    <div class="contentDiv">
      <div class="earningsCell">
        <div class="tips">
          <p>近一年收益率</p>
        </div>
        <div class="product">
          <div class="productName">
            <p>{{oneYearProductName}}</p>
          </div>
          <div class="productEarn">
            <p>{{oneYearProductEarn}}%</p>
          </div>
        </div>
      </div>
      <div class="earningsCell">
        <div class="earningsCell">
          <div class="tips">
            <p>近三年收益率</p>
          </div>
          <div class="product">
            <div class="productName">
              <p>{{threeYearProductName}}</p>
            </div>
            <div class="productEarn">
              <p>{{threeYearProductEarn}}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: '',
    oneYearProductEarn: '',
    oneYearProductName: '',
    threeYearProductEarn: '',
    threeYearProductName: ''
  },
  data () {
    return {
      title: '',
      oneYearProductEarn: this.oneYearProductEarn,
      threeYearProductEarn: this.threeYearProductEarn,
      oneYearProductName: this.oneYearProductName,
      threeYearProductName: this.threeYearProductName
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 40rpx;
  font-family: PingFang SC;
  width: 680rpx;
  height: 340rpx;
  display: flex;
  flex-wrap: wrap;
  background-color: #191b2a;
  border-radius: 10rpx;
}
/* 外层单元格标题 */
.titleDiv {
  width: 100%;
  height: 80rpx;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #515151;
}
/* 星星标志 */
.logo {
  margin-left: 30rpx;
  height: 100%;
  display: flex;
  align-items: center;
  width: 50rpx;
}
.logo > img {
  height: 50rpx;
  width: 50rpx;
}
/* 标题文字 */
.text {
  margin-left: 20rpx;
  display: flex;
  align-items: center;
  color: white;
  font-size: 32rpx;
}
/* 推荐内容 */
.contentDiv {
  height: 260rpx;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
}
/* 推荐内容明细 */
.earningsCell {
  height: 100rpx;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.tips {
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  color: #9898a0;
  font-size: 24rpx;
}
.tips > p {
  margin-left: 30rpx;
}
.product {
  width: 100%;
  height: 60%;
  display: flex;
}
.productName {
  display: flex;
  align-items: center;
  width: 70%;
  height: 100%;
  color: white;
}
.productName > p {
  margin-left: 30rpx;
}
/* TODO:当收益率为负数时，应为绿色 */
.productEarn {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 30%;
  height: 100%;
  color: #ff3300;
}
.productEarn > p {
  margin-right: 30rpx;
}
</style>
