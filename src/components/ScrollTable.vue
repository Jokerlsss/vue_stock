<!-- Descripion：scroll-view 滑动表格-->
<template>
  <div class="container">
    <div class="left-ProjectName">
      <div class="projectNameCell"></div>
      <div
        class="projectNameCell"
        v-for="(projectName,proIndex) in projectNameList"
        :key="proIndex"
      >{{projectName.productName}}</div>
    </div>
    <!-- <div class="right-ProjectInfo"> -->
    <!-- 滚动 -->
    <!-- enable-flex 将滚动控件变为 flex 布局的容器 -->
    <scroll-view class="scrollBox" scroll-x="true">
      <div
        class="scrollCell"
        v-for="(projectInfo,infoIndex) in financialProjectList"
        :key="infoIndex"
        @click="cellClick"
      >
        <div class="item">{{projectInfo.productType}}</div>
        <div class="item">{{projectInfo.holdAssets}}</div>
        <div class="item">{{projectInfo.dayEarn}}</div>
        <div class="item">{{projectInfo.holdEarn}}</div>
      </div>
    </scroll-view>
    <!-- </div> -->
  </div>
</template>

<script>
import globalStore from '../stores/global-stores'
export default {
  computed: {
    // 去除索引为 0 的表头数据
    projectNameList () {
      var projectNameList = []
      for (var len = 1; len < this.financialProjectList.length; len++) {
        projectNameList.push(this.financialProjectList[len])

        // 在每次切换之后，将资产信息清空后，生成表格时重新赋值给全局变量并计算
        globalStore.commit('getAssets', this.financialProjectList[len].holdAssets)
        globalStore.commit('getDayEarn', this.financialProjectList[len].dayEarn)
        globalStore.commit('getHadEarn', this.financialProjectList[len].holdEarn)
      }
      return projectNameList
    }
  },
  beforeDestroy () {
    globalStore.commit('clearAssetsInfo')
  },
  props: {
    financialProjectList: '',
    totalEarn: ''
  },
  data () {
    return {
      financialProjectList: this.financialProjectList,
      totalEarn: this.totalEarn
    }
  },
  methods: {
    // TODO: 点击表格某一行时进入到项目详情
    cellClick (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 30rpx;
  height: auto;
  width: 100%;
  display: flex;
  border: 1px solid #9898a0;
}
/*--------- 左边固定栏 ---------*/
.left-ProjectName {
  width: 30%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
/* 项目名单元格 */
.projectNameCell {
  height: 100rpx;
  width: 100%;
  font-size: 28rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-bottom: 1px solid #9898a0;
}
/*--------- 右边滑动栏 ---------*/
.right-ProjectInfo {
  width: 70%;
  height: 100%;
}
.scrollCell {
  /* display: inline-block; */
}
/* 滚动容器 */
.scrollBox {
  width: 80%;
  white-space: nowrap;
  color: white;
  background-color: #393942;
  font-family: PingFang SC;
}
/* 
inline:行内元素。可与其他元素共享一行，但不可调宽高，padding 有效，margin 左右有效
block:块级元素。与其他元素不共享一行，能调宽高，默认填满父级元素。padding、margin 均有效
inline-block:可与其他元素共享的块级元素
 */
.item {
  height: 100rpx;
  width: 200rpx;
  display: inline-block;
  text-align: center;
  line-height: 100rpx;
  border-bottom: 1px solid #9898a0;
}
</style>
