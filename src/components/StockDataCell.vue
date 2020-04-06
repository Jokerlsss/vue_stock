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
          <van-tag round :color="TypeColor" size="large" class="typeTag">{{typeShow}}</van-tag>
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
            <p>最新收益</p>
          </div>
          <div class="infoBottom dayYieldNum">
            <p :style="dayEarnTextColor">{{dayEarnShow}}</p>
          </div>
        </div>
        <!-- 持有收益 -->
        <div class="holdYield">
          <div class="infoTop holdYieldTitle">
            <p>持有收益</p>
          </div>
          <div class="infoBottom holdYieldNum">
            <p :style="hadEarnTextColor">{{hadEarnShow}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 删除按钮 -->
    <div class="deleteBtn" @click="openDeleteDialog">
      <img src="../../static/images/delete.png" />
    </div>
    <!-- 确定删除弹窗 -->
    <van-dialog id="van-dialog" confirm-button-color="#fff" cancel-button-color="#9898a0" />
    <!-- 删除成功后的提示 -->
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import globalStore from '../stores/global-stores'
import Dialog from '../../static/vant/dialog/dialog'
import Toast from '../../static/vant/toast/toast'
export default {
  // 控制卡片可见性
  computed: {
    dayEarnTextColor () {
      var style
      if (this.dayEarn >= 0) {
        this.dayEarnShow = '+' + this.dayEarn
        style = 'color: #FF3300;'
      } else {
        this.dayEarnShow = this.dayEarn
        style = 'color: #009900;'
      }
      return style
    },
    hadEarnTextColor () {
      var style
      // 正数：加号   负数：已经自带负号
      if (this.hadEarn >= 0) {
        this.hadEarnShow = '+' + this.hadEarn
        style = 'color: #FF3300;'
      } else {
        this.hadEarnShow = this.hadEarn
        style = 'color: #009900;'
      }
      return style
    },
    isShow () {
      if (this.type === '股票') {
        return globalStore.state.checkStock
      }
      if (this.type === '基金') {
        return globalStore.state.checkFund
      }
      if (this.type === '黄金') {
        return globalStore.state.checkGold
      }
      if (this.type === '定期') {
        return globalStore.state.checkRegular
      }
      if (this.type === '其他') {
        return globalStore.state.checkOther
      }
    },
    typeShow () {
      if (this.type === '股票') {
        return '股'
      }
      if (this.type === '基金') {
        return '基'
      }
      if (this.type === '黄金') {
        return '金'
      }
      if (this.type === '定期') {
        return '定'
      }
      if (this.type === '其他') {
        return '其'
      }
    }
  },
  props: {
    name: '',
    type: '',
    asset: '',
    dayEarn: '',
    hadEarn: '',
    code: '',
    // 为展示用的数据（用于加正负号）
    assetShow: '',
    dayEarnShow: '',
    hadEarnShow: ''
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

    // 将资产信息传递到全局变量
    this.postAssetsToStore()
    this.postDayEarnToStore()
    this.postHadEarnToStore()
  },
  /** 在控件销毁时清空资产信息，以免重复累加 */
  beforeDestroy () {
    globalStore.commit('clearAssetsInfo')
  },
  methods: {
    // TODO: 切换页面后，收益会变为空
    // 将 今日收益 & 持有收益 & 资产 & 累计收益 传递给全局变量
    postAssetsToStore () {
      if (this.isShow) {
        globalStore.commit('getAssets', this.asset)
      }
    },
    postDayEarnToStore () {
      if (this.isShow) {
        globalStore.commit('getDayEarn', this.dayEarn)
      }
    },
    postHadEarnToStore () {
      if (this.isShow) {
        globalStore.commit('getHadEarn', this.hadEarn)
      }
    },

    // 打开删除项目确定框
    openDeleteDialog () {
      this.isSlid = false
      Dialog.confirm({
        title: '确定删除该项目吗？',
        message: this.name,
        closeOnClickOverlay: true,
        // 开启异步关闭
        asyncClose: true,
        zIndex: 999
      }).then(() => {
        // this.deleteProject()
        setTimeout(() => {
          Dialog.close()
          Toast.success('删除成功')
        }, 200)
      }).catch(() => {
        Dialog.close()
        Toast.fail('删除失败')
      })
    },
    // 删除项目
    deleteProject () {
      // 传给后端参数为：userID、personalFinancialAssetsID
      this.$httpWX.post({
        url: '/personalFinancialAssets/deleteByWrapper',
        data: {
          // TODO: 改为全局变量 userID
          userID: 1,
          personalFinancialAssetsID: this.personalFinancialAssetsID
        }
      }).then(res => {
        if (res === 1) {
          console.log('删除项目成功！')
        } else {
          console.log('删除失败请重试！')
        }
      })
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
    // toProjectDetail () {
    //   const url = '../projectDetail/main?code=' + this.code
    //   wx.navigateTo({
    //     url: url
    //   })
    // },
    // 控制 tag 颜色
    // TODO: 改变 type 值判断，包括上面的 isShow
    getStockType: function () {
      if (this.type === '股票') {
        this.TypeColor = '#CC3333'
      } else if (this.type === '基金') {
        this.TypeColor = '#3399FF'
      } else if (this.type === '定期') {
        this.TypeColor = '#009900'
      } else if (this.type === '黄金') {
        this.TypeColor = '#FF9900'
      } else if (this.type === '其他') {
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
}
/* 滑动单元格主体内容 */
.content {
  background-color: #30323f;
  border-radius: 20rpx;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  transition: right 0.3s ease-in-out;
}
.deleteBtn {
  border-radius: 0 20rpx 20rpx 0;
  z-index: 0;
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
  /* color: #ff3300; */
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
  /* color: #009900; */
}
</style>