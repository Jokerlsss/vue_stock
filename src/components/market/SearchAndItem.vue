<template>
  <div class="container">
    <div class="searchDiv">
      <input
        background="#191b2a"
        @input="searchMarketProject"
        v-model="inputValue"
        placeholder="搜索"
        placeholder-class="placeholderStyle"
        use-action-slot
      />
      <!-- <button class="searchBtn" @click="searchMarketProject">搜索</button> -->
    </div>
    <div class="projectItem">
      <ProjectItemPanel
        v-for="(projectItem,index) in productList"
        :key="index"
        :productName="projectItem.productName"
        :productCode="projectItem.productCode"
        :riskType="projectItem.riskType"
      ></ProjectItemPanel>
      <!-- No Content 页面 -->
      <NoContentPage v-if="isNoContentPage"></NoContentPage>
    </div>
  </div>
</template>

<script>
import ProjectItemPanel from '@/components/market/ProjectItemPanel'
import NoContentPage from '@/components/NoContentPage'
export default {
  components: {
    ProjectItemPanel,
    NoContentPage
  },
  computed: {
    // true:有数据  false:无数据
    // 当数据为空时，显示当前无内容的图片
    isNoContentPage () {
      if (this.productList.length !== 0) {
        return false
      } else {
        return true
      }
    }
  },
  props: {
    productList: [],
    productType: ''
  },
  data () {
    return {
      productList: this.productList,
      productType: this.productType,
      inputValue: ''
    }
  },
  methods: {
    searchMarketProject () {
      var isInputNum = this.inputEvent()
      if (isInputNum) {
        this.$httpWX.get({
          url: '/financialProduct/searchMarketProject',
          data: {
            productCode: this.inputValue,
            productName: '',
            productType: this.productType
          }
        }).then(res => {
          this.productList = res
          console.log(this.productList)
        })
      } else {
        this.$httpWX.get({
          url: '/financialProduct/searchMarketProject',
          data: {
            productName: this.inputValue,
            productCode: '',
            productType: this.productType
          }
        }).then(res => {
          this.productList = res
          console.log(this.productList)
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
    }
  }
}
</script>

<style>
/** placeholder 样式 */
.placeholderStyle {
  /* left: 20rpx; */
}
</style>

<style scoped>
.container {
  font-family: PingFang SC;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.searchBtn {
  height: 60rpx;
  background-color: #191b2a;
  color: #9898a0;
  font-size: 26rpx;
}
.projectItem {
  min-height: 700rpx;
  width: 100%;
  color: #9898a0;
}
/** 搜索框DIV */
.searchDiv {
  height: 70rpx;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 20rpx;
  margin-bottom: 20rpx;
  justify-content: center;
  width: 90%;
}
.searchDiv > input {
  color: #ffffff;
  background-color: #191b2a;
  font-size: 32rpx;
  width: 100%;
  height: 100%;
  border-radius: 30rpx;
  padding-left: 30rpx;
}
.searchDiv > button {
  margin-left: 10rpx;
}
</style>
