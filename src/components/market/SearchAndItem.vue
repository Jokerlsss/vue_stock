<template>
  <div class="container">
    <van-search background="#12121e" :value="value" placeholder="请输入产品名称或代码" use-action-slot>
      <view slot="action" bind:tap="onClick">
        <button class="searchBtn">搜索</button>
      </view>
    </van-search>
    <div class="projectItem">
      <ProjectItemPanel></ProjectItemPanel>
    </div>
  </div>
</template>

<script>
import ProjectItemPanel from '@/components/market/ProjectItemPanel'
export default {
  components: {
    ProjectItemPanel
  },
  props: {
    test: ''
  },
  data () {
    return {
      test: this.test
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
