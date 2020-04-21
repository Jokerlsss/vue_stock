<!-- Description:项目详情的按钮 -->
<template>
  <div class="container">
    <div>
      <button class="openBtnGroup" hover-class="openBtnGroup_hover" @click="cutBtnGroup">
        <img
          :src="openBtnGroupImg"
          class="openBtnImg"
          :style="isOpenBtnGroup?RotateBtn:noRotateBtn"
        />
      </button>
    </div>
    <!-- 按钮组 -->
    <div>
      <!-- 卖出按钮 -->
      <!-- <button
        class="popupBtn"
        hover-class="btnGroup_hover"
        :style="isOpenBtnGroup?popupBtnSlideStyle:popupBtnNoSlideStyle"
      >
        <img :src="sellImg" class="BtnGroupImg" v-if="isOpenBtnGroup" />
      </button>-->
      <!-- 买入按钮 -->
      <button
        class="cutShowBtn"
        hover-class="btnGroup_hover"
        :style="isOpenBtnGroup?cutShowSlideStyle:cutShowNoSlideStyle"
        @click="toAddPro"
      >
        <img :src="buyImg" class="BtnGroupImg" v-if="isOpenBtnGroup" />
      </button>
      <!-- 备用按钮 -->
      <button
        class="oprateBtn"
        hover-class="btnGroup_hover"
        :style="isOpenBtnGroup?addBtnSlideStyle:addBtnNoSlideStyle"
        @click="toSellPage"
      >
        <img :src="sellImg" class="BtnGroupImg" v-if="isOpenBtnGroup" />
      </button>
    </div>
  </div>
</template>

<script>
// TODO: 增加Toast节点
import Toast from '../../../dist/wx/static/vant/toast/toast'
export default {
  props: {
    productName: '',
    productCode: '',
    productType: '',
    dateOfEstablishment: '',
    amountOfAssets: ''
  },
  data () {
    return {
      // 从项目详情中传递过来的参数
      productName: this.productName,
      productCode: this.productCode,
      productType: this.productType,
      dateOfEstablishment: this.dateOfEstablishment,
      amountOfAssets: this.amountOfAssets,

      isOpenBtnGroup: false,
      // 设置按钮组展开前和展开后的样式
      popupBtnSlideStyle: 'bottom:410rpx;opacity:0.9',
      popupBtnNoSlideStyle: 'bottom:40rpx;opacity:0.4',

      cutShowSlideStyle: 'bottom:290rpx;opacity:0.9',
      cutShowNoSlideStyle: 'bottom:40rpx;opacity:0.4',

      addBtnSlideStyle: 'bottom:170rpx;opacity:0.9',
      addBtnNoSlideStyle: 'bottom:40rpx;opacity:0.4;',

      RotateBtn: 'transform: rotate(180deg);',
      noRotateBtn: 'transform: rotate(0deg);',

      sellImg: '../../static/images/sell.png',
      buyImg: '../../static/images/buy.png',
      //   toCellBtnImg: '../../static/images/list.png',
      //   toTableBtnImg: '../../static/images/card.png',

      openBtnGroupImg: '../../static/images/up.png',
      //   popupBtnImg: '../../static/images/select.png',
      addProBtnImg: '../../static/images/addPro.png'
    }
  },
  methods: {
    cutBtnGroup: function () {
      const OPEN = true
      const CLOSE = false
      if (this.isOpenBtnGroup === CLOSE) {
        this.isOpenBtnGroup = OPEN
      } else {
        this.isOpenBtnGroup = CLOSE
      }
    },
    // 带参数传递到买入页面
    toAddPro () {
      this.$httpWX.get({
        url: '/personalFinancialAssets/isExist',
        data: {
          // TODO: 改为全局变量 userID
          userID: 1,
          productCode: this.productCode
        }
      }).then(res => {
        // 是否存在  存在：1   不存在：0
        if (res === 1) {
          // 存在时，跳转到加仓页面
          const url = '../addPositions/main?productCode=' + this.productCode + '&productType=' + this.productType + '&productName=' + this.productName + '&dateOfEstablishment=' + this.dateOfEstablishment
          wx.navigateTo({
            url: url
          })
          // 关闭按钮组
          this.cutBtnGroup()
        } else {
          // 不存在时，跳转到添加项目页面
          const url = '../addPro/main?productCode=' + this.productCode + '&productType=' + this.productType + '&productName=' + this.productName + '&dateOfEstablishment=' + this.dateOfEstablishment
          wx.navigateTo({
            url: url
          })
          // 关闭按钮组
          this.cutBtnGroup()
        }
      })
    },
    // 带参数传递到卖出界面
    toSellPage () {
      this.$httpWX.get({
        url: '/personalFinancialAssets/isExist',
        data: {
          // TODO: 改为全局变量 userID
          userID: 1,
          productCode: this.productCode
        }
      }).then(res => {
        // 是否存在  存在：1   不存在：0
        if (res === 1) {
          // 存在时，跳转到卖出页面
          const url = '../sellPro/main?productCode=' + this.productCode + '&productType=' + this.productType + '&productName=' + this.productName + '&dateOfEstablishment=' + this.dateOfEstablishment + '&amountOfAssets=' + this.amountOfAssets
          wx.navigateTo({
            url: url
          })
          // 关闭按钮组
          this.cutBtnGroup()
        } else {
          Toast.fail('未拥有该资产')
          this.cutBtnGroup()
        }
      })
    }
  }
}
</script>

<style scoped>
/*--------- 按钮外部主体 ---------*/
.container {
  z-index: 1;
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
.oprateBtn {
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
