<!-- Description:添加项目的按钮 -->
<template>
  <div class="container">
    <div>
      <button class="openBtnGroup" hover-class="openBtnGroup_hover" @click="cutBtnGroupVisable">
        <img
          :src="openBtnGroupImg"
          class="openBtnImg"
          :style="isOpenBtnGroup?RotateBtn:noRotateBtn"
        />
      </button>
    </div>
    <!-- 按钮组 -->
    <div>
      <!-- 弹出层按钮 -->
      <button
        class="popupBtn"
        hover-class="btnGroup_hover"
        :style="isOpenBtnGroup?popupBtnSlideStyle:popupBtnNoSlideStyle"
        @click="showPopup"
      >
        <img :src="popupBtnImg" class="BtnGroupImg" v-if="isOpenBtnGroup" />
      </button>
      <!-- 切换卡片按钮 -->
      <button
        class="cutShowBtn"
        hover-class="btnGroup_hover"
        :style="isOpenBtnGroup?cutShowSlideStyle:cutShowNoSlideStyle"
        @click="cutShow"
      >
        <img
          :src="isChangeToScrollTable?toTableBtnImg:toCellBtnImg"
          class="BtnGroupImg"
          v-if="isOpenBtnGroup"
        />
      </button>
      <!-- 添加按钮 -->
      <button
        class="addProBtn"
        hover-class="btnGroup_hover"
        :style="isOpenBtnGroup?addBtnSlideStyle:addBtnNoSlideStyle"
        @click="toAddProPage"
      >
        <img :src="addProBtnImg" class="BtnGroupImg" v-if="isOpenBtnGroup" />
      </button>
      <!-- 进入对比项目页面按钮 -->
      <button
        class="addProBtn"
        hover-class="btnGroup_hover"
        :style="isOpenBtnGroup?toCompareSlidBtnStyle:toCompareNOSlidBtnStyle"
        @click="toComparePage"
      >
        <img :src="compareBtnImg" class="BtnGroupImg" v-if="isOpenBtnGroup" />
      </button>
    </div>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import Toast from '../../static/vant/toast/toast'
import globalStore from '../stores/global-stores'
export default {
  props: {
    financialProjectList: ''
  },
  computed: {
    isChangeToScrollTable () {
      return globalStore.state.isChangeToScrollTable
    }
  },
  data () {
    return {
      // financialProjectList 若长度只有1（表头），则不能切换成表格形式
      financialProjectList: this.financialProjectList,

      isOpenBtnGroup: false,

      toCompareSlidBtnStyle: 'bottom:530rpx;opacity:0.9',
      toCompareNOSlidBtnStyle: 'bottom:40rpx;opacity:0.4',

      popupBtnSlideStyle: 'bottom:410rpx;opacity:0.9',
      popupBtnNoSlideStyle: 'bottom:40rpx;opacity:0.4',

      cutShowSlideStyle: 'bottom:290rpx;opacity:0.9',
      cutShowNoSlideStyle: 'bottom:40rpx;opacity:0.4',

      addBtnSlideStyle: 'bottom:170rpx;opacity:0.9',
      addBtnNoSlideStyle: 'bottom:40rpx;opacity:0.4;',

      RotateBtn: 'transform: rotate(180deg);',
      noRotateBtn: 'transform: rotate(0deg);',

      toCellBtnImg: '../../static/images/list.png',
      toTableBtnImg: '../../static/images/card.png',

      openBtnGroupImg: '../../static/images/up.png',
      popupBtnImg: '../../static/images/select.png',
      addProBtnImg: '../../static/images/addPro.png',
      compareBtnImg: '../../static/images/compare.png'
    }
  },
  methods: {
    cutBtnGroupVisable: function () {
      const OPEN = true
      const CLOSE = false
      if (this.isOpenBtnGroup === CLOSE) {
        this.isOpenBtnGroup = OPEN
      } else {
        this.isOpenBtnGroup = CLOSE
      }
    },
    toComparePage () {
      wx.navigateTo({
        url: '../productCompare/main'
      })
      this.cutBtnGroupVisable()
    },
    toAddProPage () {
      wx.navigateTo({
        url: '../addPro/main'
      })
      this.cutBtnGroupVisable()
    },
    // 切换视图
    cutShow () {
      if (this.financialProjectList.length === 1) {
        Toast.fail('空数据不支持切换')
        this.cutBtnGroupVisable()
      } else {
        globalStore.commit('isChangeToScrollTable')
        globalStore.commit('clearAssetsInfo')
        this.cutBtnGroupVisable()
      }
    },
    // 弹出层
    showPopup () {
      this.$emit('showPopup')
      this.cutBtnGroupVisable()
    }
  }
}
</script>

<style scoped>
/*--------- 按钮外部主体 ---------*/
.container {
  z-index: 99;
  width: 160rpx;
  height: 120rpx;
  background-color: #fff;
  opacity: 0.7;
  border-radius: 80rpx 0 0 80rpx;
  position: fixed;
  bottom: 30rpx;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* 管理项目按钮 */
.openBtnGroup {
  position: relative;
  z-index: 999;
  right: 20rpx;
  width: 100rpx;
  height: 100rpx;
  border-radius: 50rpx;
  background-color: #000000;
  opacity: 0.4;
  padding: 0;
}
/* 点击触发样式 */
.openBtnGroup_hover {
  opacity: 0.7;
}
/* 管理按钮背景图 */
.openBtnImg {
  width: 60rpx;
  height: 60rpx;
  margin-top: 20rpx;
  transition: 0.3s ease-in-out;
}
/*--------- 按钮组 ---------*/
.btnGroup_hover {
  background-color: #ff9900 !important;
}
/* 1、弹出层按钮 */
.popupBtn {
  position: fixed;
  padding: 0;
  right: 52rpx;
  bottom: 40rpx;
  width: 100rpx;
  height: 100rpx;
  border-radius: 50rpx;
  background-color: #666666;
  z-index: 1;
  transition: bottom 0.3s ease-in-out;
}
/* 2、切换展示方式按钮 */
.cutShowBtn {
  position: fixed;
  padding: 0;
  right: 52rpx;
  bottom: 40rpx;
  width: 100rpx;
  height: 100rpx;
  border-radius: 50rpx;
  background-color: #666666;
  z-index: 2;
  transition: bottom 0.3s ease-in-out;
}
/* 3、添加按钮 */
.addProBtn {
  position: fixed;
  padding: 0;
  right: 52rpx;
  bottom: 40rpx;
  width: 100rpx;
  height: 100rpx;
  border-radius: 50rpx;
  background-color: #666666;
  z-index: 3;
  transition: bottom 0.3s ease-in-out;
}
/* 按钮组图标 */
.BtnGroupImg {
  width: 60rpx;
  height: 60rpx;
  margin-top: 20rpx;
}
</style>
