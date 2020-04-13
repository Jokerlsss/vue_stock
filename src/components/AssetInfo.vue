<!-- Description: 项目模块-顶部资产信息 -->
<template>
  <div class="container">
    <!-- 总资产 -->
    <div class="allAsset">
      <div class="assetText">
        总资产
        <img :src="visableFlag?visableImg:invisableImg" class="visableImg" @click="cutVisable" />
      </div>
      <!-- 总资产：数据库存储并从后台读取 -->
      <div class="assetNum">{{visableFlag?allAsset:invisableNum}}</div>
    </div>
    <!-- 收益 -->
    <div class="earnings">
      <div class="earnDiv">
        <div class="earnText">最新收益</div>
        <div class="earnNum" :style="dayAssetStyle">{{visableFlag?dayAsset:invisableNum}}</div>
      </div>
      <div class="earnDiv">
        <div class="earnText">持有收益</div>
        <div class="earnNum" :style="hadAssetStyle">{{visableFlag?hadAsset:invisableNum}}</div>
      </div>
      <div class="earnDiv">
        <div class="earnText">累计收益</div>
        <div class="earnNum" :style="totalEarnStyle">{{visableFlag?totalEarn:invisableNum}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import globalStore from '../stores/global-stores'
export default {
  computed: {
    isChangeToScrollTable () {
      return globalStore.state.isChangeToScrollTable
    },
    /** 总资产 */
    allAsset () {
      // 保留两位小数
      let dfTwo = parseFloat(globalStore.state.allAsset).toFixed(2)
      // 资产不需要正负号和红绿色之分
      return dfTwo
    },
    /** 今日收益 */
    dayAsset () {
      let dfTwo = parseFloat(globalStore.state.dayAsset).toFixed(2)
      // 正红负绿
      if (dfTwo >= 0) {
        dfTwo = '+' + dfTwo
        this.dayAssetStyle = 'color:#FF3300'
      } else {
        this.dayAssetStyle = 'color:#009900'
      }
      return dfTwo
    },
    /** 累计收益 */
    totalEarn () {
      let dfTwo = parseFloat(globalStore.state.totalEarn).toFixed(2)
      if (dfTwo >= 0) {
        dfTwo = '+' + dfTwo
        this.totalEarnStyle = 'color:#FF3300'
      } else {
        this.totalEarnStyle = 'color:#009900'
      }
      return dfTwo
    },
    /** 持有收益 */
    hadAsset () {
      let dfTwo = parseFloat(globalStore.state.hadAsset).toFixed(2)
      if (dfTwo >= 0) {
        dfTwo = '+' + dfTwo
        this.hadAssetStyle = 'color:#FF3300'
      } else {
        this.hadAssetStyle = 'color:#009900'
      }
      return dfTwo
    }
  },
  data () {
    return {
      // 可见 & 不可见 状态及对应图标
      visableFlag: true,
      visableImg: '../../static/images/visable.png',
      invisableImg: '../../static/images/invisable.png',

      // 四项收益样式
      allAssetStyle: '',
      dayAssetStyle: '',
      totalEarnStyle: '',
      hadAssetStyle: '',
      invisableNum: '****',
      // 切换展示方式
      listShowImg: '../../static/images/list.png',
      cardShowImg: '../../static/images/card.png'
    }
  },
  methods: {
    // 切换资产可见性
    // TODO: 当不可见的时候，收益的颜色应设置为灰色或白色
    cutVisable () {
      const VISABLE = true
      const UNVISABLE = false
      if (this.visableFlag === VISABLE) {
        this.visableFlag = UNVISABLE
      } else {
        this.visableFlag = VISABLE
      }
    },
    // 切换项目展示方式
    cutShow () {
      globalStore.commit('isChangeToScrollTable')
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
/* 改变展示方式图标 */
.changeShowImg {
  position: absolute;
  right: 70rpx;
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