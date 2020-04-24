<template>
  <div class="container">
    <div class="searchInput">
      <input background="#191b2a" v-model="inputValue" placeholder="请输入产品名称或代码" use-action-slot />
      <view slot="action">
        <button class="searchBtn" @click="searchProject">搜索</button>
      </view>
    </div>
    <scroll-view class="scrollBox" scroll-y="true">
      <div v-if="isDataNull" class="nullTip">没有更多数据了</div>
      <div
        class="showDiv"
        v-for="(searchItem,index) in searchList"
        :key="index"
        @click="chooseProject(searchItem)"
      >
        <div class="productName">
          <p>{{searchItem.productName}}</p>
        </div>
        <div class="productCode">
          <p>{{searchItem.productCode}}</p>
        </div>
      </div>
    </scroll-view>
    <van-dialog id="van-dialog" confirm-button-color="#fff" cancel-button-color="#9898a0" />
  </div>
</template>

<script>
import Dialog from '../../../static/vant/dialog/dialog'
export default {
  computed: {
    //   控制“没有更多数据了”的可见性
    isDataNull () {
      if (this.searchList.length === 0) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    searchProject () {
      var isInputNum = this.inputEvent()
      if (isInputNum) {
        this.$httpWX.get({
          url: '/financialProduct/searchProject',
          data: {
            productCode: this.inputValue,
            productName: ''
          }
        }).then(res => {
          this.searchList = res
          console.log(this.searchList)
        })
      } else {
        this.$httpWX.get({
          url: '/financialProduct/searchProject',
          data: {
            productName: this.inputValue,
            productCode: ''
          }
        }).then(res => {
          this.searchList = res
          console.log(this.searchList)
        })
      }
    },
    // 判断输入是否为数字，若为纯数字则判定为搜索代码，否则判定为搜索名称
    inputEvent () {
      var reg = /^[0-9]*$/
      if (!reg.test(this.inputValue)) {
        return false
      } else {
        return true
      }
    },
    // 获取选择的项目信息数组
    chooseProject (e) {
      // 将选中的值进行保存
      this.productName = e.productName
      this.productCode = e.productCode
      this.productType = e.productType
      this.dateOfEstablishment = e.dateOfEstablishment
      // this.openDeleteDialog()

      this.$emit('onClose')
      this.$emit('getProductName', this.productName, this.productCode, this.productType, this.dateOfEstablishment)
      this.inputValue = ''
      this.searchList = []
    },
    // 选择项目确定框
    openDeleteDialog () {
      Dialog.confirm({
        title: '确定选择该项目吗？',
        message: this.productName,
        closeOnClickOverlay: true,
        // 开启异步关闭
        asyncClose: true,
        zIndex: 999
      }).then(() => {
        // this.deleteProject()
        setTimeout(() => {
          Dialog.close()
          // 在关闭小弹窗的同时，关闭掉最外层弹窗
          this.$emit('onClose')
          // 将选中的值传递给主页面
          this.$emit('getProductName', this.productName, this.productCode, this.productType, this.dateOfEstablishment)
          this.inputValue = ''
          this.searchList = []
        }, 200)
      }).catch(() => {
        Dialog.close()
      })
    }
  },
  data () {
    return {
      inputValue: '',
      searchList: [],
      productName: '',
      productCode: '',
      productType: '',
      dateOfEstablishment: ''
    }
  }
}
</script>

<style scoped>
.container {
  font-family: PingFang SC;
  /* dialog 弹出窗默认宽度640rpx，高度随自定义内容变化 */
  width: 640rpx;
  height: 700rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
/* 搜索框区域 */
.searchInput {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 640rpx;
  height: 10%;
  padding-bottom: 20rpx;
}

.searchBtn {
  height: 60rpx;
  background-color: #ff6600;
  color: #fff;
  font-size: 26rpx;
}
/* 搜索内容单行展示区域 */
.showDiv {
  width: 640rpx;
  height: 80rpx;
  color: #fff;
  display: flex;
  flex-wrap: nowrap;
  font-size: 28rpx;
}
.productName {
  width: 70%;
  display: flex;
  align-items: center;
}
.productName > p {
  margin-left: 50rpx;
}
.productCode {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.productCode > p {
  margin-right: 50rpx;
}
/* 滚动容器 */
.scrollBox {
  background-color: #12121e;
  height: 90%;
  width: 640rpx;
  white-space: nowrap;
  color: white;
  font-family: PingFang SC;
}
/* 当数据为空时的样式 */
.nullTip {
  width: 100%;
  height: 500rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9898a0;
  font-size: 28rpx;
}
</style>
