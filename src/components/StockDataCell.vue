<!-- Description:资产卡片信息 -->
<template>
  <div class="container" v-if="isShow" @touchstart="touchStart" @touchmove="touchMove">
    <div class="content" :style="isSlid?Slid:noSlid" @click="toProjectDetail">
      <!-- 资产名字 & 类型 -->
      <div class="title">
        <!-- 资产名字 -->
        <div class="proText">
          <p class="proName">{{name}}</p>
        </div>
        <!-- 类型标签 -->
        <div class="proType">
          <van-tag round :color="TypeColor" size="large" class="typeTag">{{type}}</van-tag>
        </div>
      </div>
      <!-- 收益详情 -->
      <div class="info">
        <!-- 资产 -->
        <div class="asset">
          <div class="infoTop assetTitle">
            <p>资产</p>
          </div>
          <div class="infoBottom assetNum">
            <p>{{asset}}</p>
          </div>
        </div>
        <!-- 今日收益 -->
        <div class="dayYield">
          <div class="infoTop dayYieldTitle">
            <p>今日收益</p>
          </div>
          <div class="infoBottom dayYieldNum">
            <p>{{dayEarn}}</p>
          </div>
        </div>
        <!-- 持有收益 -->
        <div class="holdYield">
          <div class="infoTop holdYieldTitle">
            <p>持有收益</p>
          </div>
          <div class="infoBottom holdYieldNum">
            <p>{{hadEarn}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 删除按钮 -->
    <div class="deleteBtn" @click="deleteProject">
      <img src="../../static/images/delete.png" />
    </div>
  </div>
</template>

<script>
import globalStore from '../stores/global-stores'
export default {
  // 控制卡片可见性
  computed: {
    isShow () {
      if (this.type === '股') {
        return globalStore.state.checkStock
      }
      if (this.type === '基') {
        return globalStore.state.checkFund
      }
      if (this.type === '金') {
        return globalStore.state.checkGold
      }
      if (this.type === '定') {
        return globalStore.state.checkRegular
      }
      if (this.type === '其') {
        return globalStore.state.checkOther
      }
    }
  },
  props: {
    name: '',
    type: '',
    asset: '',
    dayEarn: '',
    hadEarn: '',
    code: ''
  },
  data () {
    return {
      name: this.name,
      type: this.type,
      asset: this.asset,
      dayEarn: this.dayEarn,
      hadEarn: this.hadEarn,
      code: this.code,
      TypeColor: '',

      // 滑动单元格
      clientS: '',
      clientE: '',
      isSlid: false,
      noSlid: 'right:0',
      // Slid 根据删除按钮的宽度来
      Slid: 'right:80rpx'
    }
  },
  onLoad () {
    this.getStockType()
  },
  methods: {
    deleteProject () {
      console.log('确认删除吗？')
    },
    // 滑动单元格
    touchStart: function (e) {
      this.clientS = e.mp.changedTouches[0].clientX
    },
    touchMove: function (e) {
      this.clientE = e.mp.changedTouches[0].clientX
      // distanceX : 距离
      var distanceX = this.clientE - this.clientS
      if (distanceX === 0 || distanceX > 0) {
        // 当单元格处在已滑动时，向右可滑回原状
        if (this.isSlid === true) {
          this.isSlid = false
        }
      }
      if (distanceX < 0) {
        this.isSlid = true
      }
    },
    toProjectDetail () {
      const url = '../projectDetail/main?code=' + this.code
      wx.navigateTo({
        url: url
      })
    },
    // 控制 tag 颜色
    getStockType: function () {
      if (this.type === '股') {
        this.TypeColor = '#CC3333'
      } else if (this.type === '基') {
        this.TypeColor = '#3399FF'
      } else if (this.type === '定') {
        this.TypeColor = '#009900'
      } else if (this.type === '金') {
        this.TypeColor = '#FF9900'
      } else if (this.type === '其') {
        this.TypeColor = '#999999'
      }
    }
  }
}
</script>

<style scoped>
/*---------- 主体 ----------*/
.container {
  margin-top: 30rpx;
  width: 680rpx;
  height: 180rpx;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 3;
}
/* 滑动单元格主体内容 */
.content {
  background-color: #30323f;
  border-radius: 20rpx;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  transition: right 0.3s ease-in-out;
}
.deleteBtn {
  border-radius: 0 20rpx 20rpx 0;
  z-index: 1;
  width: 100rpx;
  height: 100%;
  background-color: #cc3300;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
}
.deleteBtn > img {
  margin-left: 30rpx;
  width: 60rpx;
  height: 60rpx;
}
/*---------- 卡片头部 ----------*/
.title {
  height: 80rpx;
  width: 100%;
  display: flex;
}
/* 项目名称 */
.proText {
  width: 80%;
  height: 100%;
}
.proName {
  color: #fff;
  font-size: 32rpx;
  font-family: PingFang SC;
  margin-top: 20rpx;
  margin-left: 30rpx;
}
/* 类型标签 */
.proType {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  font-family: PingFang SC;
}
.typeTag {
  margin-top: 20rpx;
  margin-right: 30rpx;
  font-size: 32rpx;
}
/*---------- 卡片底部 ----------*/
.info {
  height: 100rpx;
  width: 100%;
  display: flex;
}
/* 资产 Div */
.asset {
  width: 33%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
/* 今日收益 Div */
.dayYield {
  width: 34%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
/* 持有收益 Div */
.holdYield {
  width: 33%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
/* 收益表头栏 */
.infoTop {
  width: 100%;
  height: 42rpx;
  color: #9898a0;
  font-size: 28rpx;
  font-family: PingFang SC;
  margin-top: 8rpx;
}
/* 收益数值栏 */
.infoBottom {
  width: 100%;
  height: 50rpx;
  font-family: PingFang SC;
}
/* 资产 Text */
.assetTitle {
  margin-left: 30rpx;
}
.assetNum {
  margin-left: 30rpx;
  color: #fff;
  font-size: 28rpx;
}
/* 今日收益 Text */
.dayYieldTitle {
  display: flex;
  justify-content: center;
}
.dayYieldNum {
  display: flex;
  justify-content: center;
  color: #ff3300;
  font-size: 28rpx;
}
/* 持有收益 Text */
.holdYieldTitle {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 30rpx;
}
.holdYieldNum {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 30rpx;
  font-size: 28rpx;
  color: #009900;
}
</style>