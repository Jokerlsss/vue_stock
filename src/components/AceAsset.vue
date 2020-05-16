<!-- Description：王牌资产 -->
<template>
  <div class="container">
    <div class="titleDiv">
      <div class="titleText">王牌资产</div>
      <!-- <div class="titleToMore">
        <p>查看更多></p>
      </div>-->
    </div>
    <div class="contentDiv">
      <div class="contentItem">
        <div class="contentTip">累计收益最高(截止 {{deadLine}})</div>
        <div class="contentInfo">
          <div class="projectName">
            <p>{{totalEarnProductName}}</p>
          </div>
          <div class="projectAsset">
            <p :style="totalEarnTextColor">{{totalEarnShow}}</p>
          </div>
        </div>
      </div>
      <!-- // TODO: 当没有项目购入时，显示：您还没有创建资产 -->
      <div class="contentItem">
        <div class="contentTip">持有收益最高(截止 {{deadLine}})</div>
        <div class="contentInfo">
          <div class="projectName">
            <p>{{holdEarnProductName}}</p>
          </div>
          <div class="projectAsset">
            <p :style="holdEarnTextColor">{{holdEarnShow}}</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import globalStore from '../stores/global-stores'
export default {
  data () {
    return {
      today: new Date().getTime(),
      // 累计收益字段
      totalEarnProductCode: '',
      totalEarnProductName: '',
      totalEarnProductEarn: '',
      totalEarnShow: '',
      // 持有收益字段
      holdEarnProductCode: '',
      holdEarnProductName: '',
      holdEarnProductEarn: '',
      holdEarnShow: ''
    }
  },
  computed: {
    // 截止日期
    deadLine () {
      return this.timestampToTime(this.today)
    },
    holdEarnTextColor () {
      var style
      // 正数：加号   负数：已经自带负号
      if (this.holdEarnProductEarn >= 0) {
        this.holdEarnShow = '+' + this.holdEarnProductEarn
        style = 'color: #FF3300;'
      } else {
        this.holdEarnShow = this.holdEarnProductEarn
        style = 'color: #009900;'
      }
      return style
    },
    totalEarnTextColor () {
      var style
      // 正数：加号   负数：已经自带负号
      if (this.totalEarnProductEarn >= 0) {
        this.totalEarnShow = '+' + this.totalEarnProductEarn
        style = 'color: #FF3300;'
      } else {
        this.totalEarnShow = this.totalEarnProductEarn
        style = 'color: #009900;'
      }
      return style
    }
  },
  onLoad () {
    this.getAceOfAssets()
  },
  methods: {
    // 将截止日期日渐戳转换为日期
    timestampToTime (timestamp) {
      // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var date = new Date(timestamp)
      var Y = date.getFullYear() + '-'
      // 0 代表 1月份，因此要加 1
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      var D = date.getDate() + ' '
      return Y + M + D
    },
    // 获取王牌资产信息
    getAceOfAssets () {
      this.$httpWX.get({
        url: '/personalFinancialAssets/getAceOfAssets',
        data: {
          userid: globalStore.state.userID
        }
      }).then(res => {
        /**
         * {
            "productCode": "102888",
            "totalEarn": 348,
            "productName": "股票2"
           },
           {
            "productCode": "102888",
            "holdEarn": 348,
            "productName": "股票2"
           }
         */
        // 累计收益字段
        this.totalEarnProductCode = res[0].productCode
        this.totalEarnProductName = res[0].productName
        this.totalEarnProductEarn = res[0].totalEarn
        // 持有收益字段
        this.holdEarnProductCode = res[1].productCode
        this.holdEarnProductName = res[1].productName
        this.holdEarnProductEarn = res[1].holdEarn
      })
    }
  }
}
</script>

<style scoped>
.container {
  border-radius: 20rpx;
  font-family: PingFang SC;
  margin-top: 30rpx;
  height: 340rpx;
  width: 680rpx;
  display: flex;
  flex-wrap: wrap;
  background-color: #191b2a;
}
/*--------- 标题 ---------*/
.titleDiv {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 32rpx;
  height: 80rpx;
  width: 100%;
  color: white;
  border-radius: 20rpx 20rpx 0 0;
  background-color: #5e5e5e;
  border-bottom: 1px solid #515151;
}
.titleText {
  width: 50%;
  display: flex;
  margin-left: 30rpx;
}
.titleToMore {
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
  font-size: 24rpx;
  color: #9898a0;
}
.titleToMore > p {
  margin-right: 30rpx;
}
/*--------- 内容 ---------*/
.contentDiv {
  height: 260rpx;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.contentItem {
  height: 130rpx;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.contentTip {
  display: flex;
  align-items: flex-end;
  padding-left: 30rpx;
  height: 40%;
  width: 100%;
  color: #9898a0;
  font-size: 24rpx;
}
.contentInfo {
  height: 60%;
  width: 100%;
  font-size: 32rpx;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
}
.projectName {
  display: flex;
  align-items: center;
  width: 65%;
  height: 100%;
  color: white;
}
.projectName > p {
  margin-left: 30rpx;
}
.projectAsset {
  display: flex;
  flex-direction: row-reverse;
  color: #ff3300;
  display: flex;
  align-items: center;
  width: 35%;
  height: 100%;
}
.projectAsset > p {
  margin-right: 30rpx;
}
</style>