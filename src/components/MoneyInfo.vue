<template>
  <div class="container">
    <!-- 总资产 -->
    <div class="allAsset">
      <div class="assetText">
        总资产
        <img :src="visableFlag?visableimg:invisableimg" class="visableImg" @click="cutVisable" />
      </div>
      <div class="assetNum">{{visableFlag?allAsset:invisableNum}}</div>
    </div>
    <!-- 收益 -->
    <div class="earnings">
      <div class="earnDiv">
        <div class="earnText">今日收益</div>
        <div class="earnNum">{{visableFlag?dayAsset:invisableNum}}</div>
      </div>
      <div class="earnDiv">
        <div class="earnText">持有收益</div>
        <div class="earnNum">{{visableFlag?hadAsset:invisableNum}}</div>
      </div>
      <div class="earnDiv">
        <div class="earnText">累计收益</div>
        <div class="earnNum">{{visableFlag?totalAsset:invisableNum}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 可见 & 不可见 状态及对应图标
      visableFlag: true,
      visableimg: '../../static/images/visable.png',
      invisableimg: '../../static/images/invisable.png',
      // 四项收益
      allAsset: '41115',
      dayAsset: '+300',
      totalAsset: '+3400',
      hadAsset: '+15420',
      invisableNum: '----'
    }
  },
  methods: {
    cutVisable () {
      if (this.visableFlag === true) {
        this.visableFlag = false
      } else {
        this.visableFlag = true
      }
    }
  }
}
</script>

<style scoped>
/*--------- 主体 ---------*/
.container {
  margin-top: 24rpx;
  height: 280rpx;
  width: 680rpx;
}
/*--------- 总资产 ---------*/
.allAsset {
  height: 140rpx;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
/* 总资产标题 */
.assetText {
  width: 100%;
  height: 60rpx;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
  color: #9898a0;
  font-family: PingFang SC;
}
/* 可见 & 不可见 图标 */
.visableImg {
  margin-left: 20rpx;
  height: 46rpx;
  width: 50rpx;
}
/* 总资产数值 */
.assetNum {
  width: 100%;
  height: 80rpx;
  /* background-color: yellow; */
  display: flex;
  justify-content: center;
  font-size: 56rpx;
  color: white;
  font-weight: bold;
  font-family: PingFang SC;
}
/*--------- 收益 ---------*/
.earnings {
  height: 140rpx;
  width: 100%;
  display: flex;
}
/* 三项收益 div */
.earnDiv {
  width: 33.3%;
  display: flex;
  flex-wrap: wrap;
  color: #9898a0;
}
/* 收益标题 */
.earnText {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: PingFang SC;
  font-size: 28rpx;
  /* background-color: blue; */
}
/* 收益数值 */
.earnNum {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: PingFang SC;
  font-size: 30rpx;
  color: #ff3300;
  /* color: #009900; 绿色 */
}
</style>