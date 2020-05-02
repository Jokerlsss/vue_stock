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
    <div class="contentDiv" @click="toDetailPageOne">
      <div class="earningsCell">
        <div class="tips">
          <p>近一年收益率</p>
        </div>
        <div class="product">
          <div class="productName">
            <p>{{oneYearList.oneProductName}}</p>
          </div>
          <div class="productEarn">
            <p :style="oneProductEarnStyle">{{oneProductEarnRateShow}}%</p>
          </div>
        </div>
      </div>
      <div class="earningsCell" @click="toDetailPageThree">
        <div class="earningsCell">
          <div class="tips">
            <p>近三年收益率</p>
          </div>
          <div class="product">
            <div class="productName">
              <p>{{threeYearList.threeProductName}}</p>
            </div>
            <div class="productEarn">
              <p :style="threeProductEarnStyle">{{threeProductEarnRateShow}}%</p>
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
    productType: ''
  },
  computed: {
    title () {
      if (this.productType === '股票') {
        return '收益好股'
      } else if (this.productType === '黄金') {
        return '保值黄金'
      } else if (this.productType === '基金') {
        return '指数好基'
      }
    },
    oneProductEarnStyle () {
      var style
      // 根据正负来决定红绿色 & 正负号
      if (this.oneYearList.oneProductEarnRate > 0) {
        this.oneProductEarnRateShow = '+' + this.oneYearList.oneProductEarnRate
        style = 'color: #FF3300;'
      } else {
        this.oneProductEarnRateShow = this.oneYearList.oneProductEarnRate
        style = 'color: #009900;'
      }
      return style
    },
    threeProductEarnStyle () {
      var style
      if (this.threeYearList.threeProductEarnRate > 0) {
        this.threeProductEarnRateShow = '+' + this.threeYearList.threeProductEarnRate
        style = 'color: #FF3300;'
      } else {
        this.threeProductEarnRateShow = this.threeYearList.threeProductEarnRate
        style = 'color: #009900;'
      }
      return style
    }
  },
  data () {
    return {
      // 标题：指数好基
      productType: this.productType,
      // 一年 & 三年收益的 List
      oneYearList: '',
      threeYearList: '',

      oneProductEarnRateShow: '',
      threeProductEarnRateShow: ''
    }
  },
  onLoad () {
    this.getTotalEarn()
  },
  methods: {
    // TODO: 当项目为空时，显示 “--  --”
    getTotalEarn () {
      this.$httpWX.get({
        url: '/financialProduct/selectRecommendAssets',
        data: {
          productType: this.productType
        }
      }).then(res => {
        this.oneYearList = res[0]
        this.threeYearList = res[1]
        console.log(this.oneYearList)
        console.log(this.threeYearList)
        console.log(this.oneYearList.oneProductCode)
        console.log(this.threeYearList.threeProductCode)
      })
    },
    // 跳转到详情页
    toDetailPageOne () {
      const url = '../projectDetail/main?productCode=' + this.oneYearList.oneProductCode
      wx.navigateTo({
        url: url
      })
    },
    toDetailPageThree () {
      const url = '../projectDetail/main?productCode=' + this.threeYearList.threeProductCode
      wx.navigateTo({
        url: url
      })
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
