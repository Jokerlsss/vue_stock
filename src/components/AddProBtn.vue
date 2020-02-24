<!-- Description:添加项目的按钮 -->
<template>
  <div class="container">
    <div>
      <button class="managerBtn" hover-class="managerBtn_hover" @click="isShowMoreBtn">
        <img src="../../static/images/up.png" class="btnImg" :style="isBtn?Rotate:noRotate" />
      </button>
    </div>
    <!-- 按钮组 -->
    <div>
      <!-- 弹出层按钮 -->
      <button
        class="popupBtn"
        hover-class="btnGroup_hover"
        :style="isBtn?popupBtnSlide:popupBtnNoSlide"
        @click="showPopup"
      >
        <img src="../../static/images/select.png" class="BtnGroupImg" v-if="isBtn" />
      </button>
      <!-- 切换卡片按钮 -->
      <button
        class="cutShowBtn"
        hover-class="btnGroup_hover"
        :style="isBtn?cutShowSlide:cutShowNoSlide"
        @click="cutShow"
      >
        <img :src="isShowList?cardShowImg:listShowImg" class="BtnGroupImg" v-if="isBtn" />
      </button>
      <!-- 添加按钮 -->
      <button class="addBtn" hover-class="btnGroup_hover" :style="isBtn?addBtnSlide:addBtnNoSlide">
        <img src="../../static/images/addPro.png" class="BtnGroupImg" v-if="isBtn" />
      </button>
    </div>
  </div>
</template>

<script>
import globalStore from '../stores/global-stores'
export default {
  computed: {
    isShowList () {
      return globalStore.state.isShowList
    }
  },
  data () {
    return {
      isBtn: false,
      popupBtnSlide: 'bottom:410rpx;opacity:0.9',
      popupBtnNoSlide: 'bottom:40rpx;opacity:0.4',

      cutShowSlide: 'bottom:290rpx;opacity:0.9',
      cutShowNoSlide: 'bottom:40rpx;opacity:0.4',

      addBtnSlide: 'bottom:170rpx;opacity:0.9',
      addBtnNoSlide: 'bottom:40rpx;opacity:0.4;',

      Rotate: 'transform: rotate(180deg);',
      noRotate: 'transform: rotate(0deg);',

      // 切换卡片 & 列表视图
      listShowImg: '../../static/images/list.png',
      cardShowImg: '../../static/images/card.png'
    }
  },
  methods: {
    isShowMoreBtn: function () {
      if (this.isBtn === false) {
        this.isBtn = true
      } else {
        this.isBtn = false
      }
    },
    // 切换视图
    cutShow () {
      globalStore.commit('isShowList')
      this.isShowMoreBtn()
    },
    // 弹出层
    showPopup () {
      this.$emit('showPopup')
      this.isShowMoreBtn()
    }
  }
}
</script>

<style scoped>
/*--------- 按钮外部主体 ---------*/
.container {
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
.managerBtn {
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
.managerBtn_hover {
  opacity: 0.7;
}
/* 管理按钮背景图 */
.btnImg {
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
.addBtn {
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
