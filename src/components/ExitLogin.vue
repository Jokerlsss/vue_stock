<template>
  <div class="container">
    <button class="exitLoginBtn" @click="exitLogin">退出登录</button>
    <van-dialog id="van-dialog" confirm-button-color="#fff" cancel-button-color="#9898a0" />
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import globalStore from '../stores/global-stores'
import Dialog from '../../static/vant/dialog/dialog'
import Toast from '../../static/vant/toast/toast'
export default {
  methods: {
    exitLogin () {
      Dialog.confirm({
        title: '确定退出登录吗?',
        message: ' ',
        closeOnClickOverlay: true,
        // 开启异步关闭
        asyncClose: true,
        zIndex: 999
      }).then(() => {
        setTimeout(() => {
          Dialog.close()
          Toast.success('退出成功')
          globalStore.commit('exitLogin')
          this.toLoginPage()
        }, 200)
      }).catch(() => {
        Dialog.close()
      })
    },
    // reLaunch：关闭所有页面，跳转到某一页面
    toLoginPage () {
      wx.reLaunch({
        url: '../login/main'
      })
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 30rpx;
  font-family: PingFang SC;
  width: 680rpx;
  height: auto;
}
.exitLoginBtn {
  background-color: #9898a0;
  width: 680rpx;
  border-radius: 20rpx;
  height: 80rpx;
  color: #ffffff;
}
</style>
