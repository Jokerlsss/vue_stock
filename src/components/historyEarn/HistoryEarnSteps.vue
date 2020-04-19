<template>
  <div class="container">
    <div class="imgDiv">
      <img :src="stepsImg" />
    </div>
    <div class="infoDiv">
      <div class="dateDiv">
        <p>{{timestampToTime}}</p>
      </div>
      <div class="oprateDiv">
        <p>{{isEarn?earnText:lossText}}{{dayEarn}} 元</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dayEarn: '',
    earningsdate: ''
  },
  computed: {
    // 将Date转换为日期标准格式
    timestampToTime () {
      var moment = require('moment')
      return moment(this.earningsdate).format('YYYY-MM-DD')
    }
  },
  data () {
    return {
      dayEarn: this.dayEarn,
      earningsdate: this.earningsdate,
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
    // 根据是否亏损来展示不同的进度图（红 & 绿）
    judgeIsEarn () {
      if (this.dayEarn < 0) {
        //   如果为负数，则取正，状态更改为“亏损”
        this.isEarn = false
        this.stepsImg = '../../static/images/lossSteps.png'
      } else if (this.dayEarn > 0) {
        this.isEarn = true
        this.stepsImg = '../../static/images/earnSteps.png'
      } else if (this.dayEarn === 0) {
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
