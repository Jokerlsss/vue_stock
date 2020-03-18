<template>
  <div class="container">
    <div class="imgDiv">
      <img :src="stepsImg" />
    </div>
    <div class="infoDiv">
      <div class="dateDiv">
        <p>{{earnDate}}</p>
      </div>
      <div class="oprateDiv">
        <p>{{isEarn?earnText:lossText}}{{earnNum}} 元</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    earnDate: '',
    earnNum: ''
  },
  data () {
    return {
      earnDate: this.earnDate,
      earnNum: this.earnNum,
      earnText: '收入: ',
      lossText: '亏损: ',
      isEarn: true,
      stepsImg: '../../../static/images/steps.png'
    }
  },
  onReady () {
    this.judgeIsEarn()
  },
  methods: {
    // TODO: 根据收益来生成不同的图片
    judgeIsEarn () {
      if (this.earnNum < 0) {
        //   如果为负数，则取正，状态更改为“亏损”
        this.isEarn = false
        this.stepsImg = '../../static/images/lossSteps.png'
      } else if (this.earnNum > 0) {
        this.isEarn = true
        this.stepsImg = '../../static/images/earnSteps.png'
      } else if (this.earnNum === 0) {
        this.isEarn = true
      }
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
/* 操作信息详情 */
.oprateDiv {
  font-size: 28rpx;
  height: 50%;
  width: 100%;
  color: #fff;
}
</style>
