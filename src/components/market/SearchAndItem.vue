<template>
  <div class="container">
    <van-search background="#12121e" :value="value" placeholder="请输入产品名称或代码" use-action-slot>
      <view slot="action" bind:tap="onClick">
        <button class="searchBtn">搜索</button>
      </view>
    </van-search>
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
    isNoContentPage () {
      if (this.productList.length !== 0) {
        return false
      } else {
        return true
      }
    }
  },
  props: {
    productList: []
  },
  // TODO: 当数据为空时提示
  data () {
    return {
      productList: this.productList
    }
  }
}
</script>

<style scoped>
.container {
  font-family: PingFang SC;
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
</style>
