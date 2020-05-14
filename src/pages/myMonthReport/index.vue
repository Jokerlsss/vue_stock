<template>
  <div class="container">
    <div class="title">我的月报</div>
    <div class="monthReport">
      <div class="reportTitle">收益分析</div>
      <div class="reportContent">
        本月，你获得了
        <p class="reportData">&nbsp;{{earnList.monthOfEarnings}}&nbsp;</p>收益
      </div>
      <div class="reportContent">
        盈利的天数有
        <p class="reportData">&nbsp;{{earnList.countOfProfit}}&nbsp;</p>天
      </div>
      <div class="reportContent">
        亏损的天数有
        <p class="reportData">&nbsp;{{earnList.countOfLoss}}&nbsp;</p>天
      </div>
      <div class="reportContent">
        收益最多的是在
        <p class="reportData">&nbsp;{{earnList.earningsDate}}&nbsp;</p>那天
      </div>
      <div class="reportContent">
        这天获得了
        <p class="reportData">&nbsp;{{earnList.dayEarn}}&nbsp;</p>元
      </div>
      <div class="reportContent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{earnList.earnSuggestion}}</div>

      <!-- 分割线 -->
      <div class="reportTitle">操作分析</div>
      <div class="reportContent">
        本月你对资产操作了
        <p class="reportData">&nbsp;{{operateList.countOfOperate}}&nbsp;</p>次
      </div>
      <div class="reportContent">
        其中买入
        <p class="reportData">&nbsp;{{operateList.countOfBuy}}&nbsp;</p>次
      </div>
      <div class="reportContent">
        卖出
        <p class="reportData">&nbsp;{{operateList.countOfSell}}&nbsp;</p>次
      </div>
      <div class="reportContent">
        加仓
        <p class="reportData">&nbsp;{{operateList.countOfSell}}&nbsp;</p>次
      </div>
      <div class="reportContent">
        <p>你操作金额最大的资产是</p>
        <p class="reportData">&nbsp;{{historicalOperation.productName}}&nbsp;</p>
      </div>
      <div class="reportContent">
        该金额为
        <p class="reportData">&nbsp;{{historicalOperation.oprateAmount}}&nbsp;</p>元
      </div>
      <div
        class="reportContent"
      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{operateList.operateSuggestion}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userid: 1,
      earnList: '',
      operateList: '',
      historicalOperation: ''
    }
  },
  onLoad () {
    this.getMonthReportOfEarn()
    this.getMonthReportOfOperate()
  },
  methods: {
    // 获取月报的数据（历史操作）
    getMonthReportOfOperate () {
      this.$httpWX.get({
        url: '/historicalOperation/getMonthReportOfOperate',
        data: {
          userid: this.userid
        }
      }).then(res => {
        console.log(res)
        this.operateList = res
        this.historicalOperation = res.historicalOperation
      })
    },
    // 获取月报数据（历史收益）
    getMonthReportOfEarn () {
      this.$httpWX.get({
        url: '/historyEarnings/getMonthReportOfEarn',
        data: {
          userid: this.userid
        }
      }).then(res => {
        console.log(res)
        this.earnList = res
      })
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
  font-family: PingFang SC;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.title {
  width: 680rpx;
  height: 150rpx;
  font-size: 50rpx;
  color: #9898a0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.monthReport {
  width: 680rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
/** 月报内容 */
.reportContent {
  width: 100%;
  height: 130rpx;
  display: flex;
  justify-content: center;
  align-items: baseline;
  color: aliceblue;
  font-size: 30rpx;
  flex-wrap: wrap;
}
/** 月报的数值 */
.reportData {
  color: #ff6600;
  font-size: 50rpx;
}
/* 操作分析 */
.reportTitle {
  margin-top: 40rpx;
  width: 100%;
  height: 80rpx;
  font-size: 26rpx;
  color: #9898a0;
  display: flex;
  justify-content: center;
}
</style>
