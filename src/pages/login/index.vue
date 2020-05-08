<template>
  <div class="container">
    <!-- 头像区域 -->
    <div class="head">
      <van-image fit="cover" round width="200rpx" height="200rpx" :src="headImg" />
    </div>
    <!-- 输入框区域 -->
    <div class="inputDiv">
      <div class="input">
        <p>用户</p>
        <input type="text" maxlength="10" v-model="userName" placeholder="长度不超过10个字符" />
      </div>
      <div class="input">
        <p>密码</p>
        <input type="text" password placeholder="请输入密码" v-model="userPassword" />
      </div>
    </div>
    <!-- 按钮 -->
    <div class="btnDiv">
      <button class="commitBtn" @click="login">登录 / 注册</button>
    </div>
    <!-- 弹窗 -->
    <van-dialog
      title="检测到该用户名未注册"
      message="是否注册并登录"
      :show="isConfirmDialog"
      @close="closeConfirmDialog"
      close-on-click-overlay="true"
      show-confirm-button="true"
      show-cancel-button="true"
      @confirm="confirmEvent"
    ></van-dialog>
    <!-- 提交成功后的提示 -->
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import Toast from '../../../static/vant/toast/toast'
export default {
  data () {
    return {
      headImg: '../../../static/images/user.png',
      userName: '',
      userPassword: '',

      // 是否弹出弹窗
      isConfirmDialog: false
    }
  },
  methods: {
    login () {
      this.$httpWX.get({
        url: '/user/login',
        data: {
          userName: this.userName,
          userPassword: this.userPassword
        }
      }).then(res => {
        // res:1 => 登录成功
        // res:0 => 无该用户，需要注册
        // res:2 => 密码错误
        console.log('登录', res)

        if (res === 1) {
          Toast({
            type: 'success',
            message: '登录成功',
            onClose: () => {
              this.toMarket()
            }
          })
        } else if (res === 2) {
          Toast.fail('密码错误')
        } else if (res === 0) {
          this.isConfirmDialog = true
        }
      })
    },
    // 注册
    registered () {
      this.$httpWX.get({
        url: '/user/registered',
        data: {
          userName: this.userName,
          userPassword: this.userPassword
        }
      }).then(res => {
        console.log('注册：', res)
        // 注册后并登录
        this.login()
      })
    },
    // 切换确定提交弹窗可见性
    openConfirmDialog () {
      this.isConfirmDialog = true
    },
    closeConfirmDialog () {
      this.isConfirmDialog = false
    },
    // 在点击确定之后执行的操作
    confirmEvent () {
      this.registered()
    },
    // 登录后跳转
    toMarket () {
      wx.switchTab({
        url: '/pages/market/main'
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
  height: 800rpx;
}
/** 头像 */
.head {
  height: 400rpx;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/** 输入框区域 */
.inputDiv {
  display: flex;
  justify-content: center;
  height: 100rpx;
  width: 100%;
  flex-wrap: wrap;
}
.input {
  display: flex;
  flex-wrap: nowrap;
  height: 70rpx;
  width: 70%;
  margin-bottom: 50rpx;
  border-bottom: 1px solid #9898a0;
  color: white;
  font-size: 32rpx;
}
.input > p {
  margin-right: 20rpx;
}
.btnDiv {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.commitBtn {
  margin-top: 100rpx;
  width: 70%;
  height: 100rpx;
  font-size: 38rpx;
  border-radius: 20rpx;
  color: white;
  background-color: #ff6600;
}
</style>
