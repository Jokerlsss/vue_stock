<template>
  <div class="container">
    <OprateTitle @getMonthOfOperate="getMonthOfOperate" @getHistoryOperate="getHistoryOperate"></OprateTitle>
    <scroll-view class="scrollBox" scroll-y="true">
      <div class="Steps">
        <Steps
          v-for="(oprateItem,index) in stepsList"
          :key="index"
          :operatingdate="oprateItem.operatingdate"
          :operationName="oprateItem.operationName"
          :productName="oprateItem.productName"
          :oprateAmount="oprateItem.oprateAmount"
          :holdAssets="oprateItem.holdAssets"
        ></Steps>
      </div>
    </scroll-view>
    <div class="bottomSpace"></div>
    <BottomSpace></BottomSpace>
  </div>
</template>

<script>
import globalStore from '../../stores/global-stores'

import Steps from '@/components/Steps'
import OprateTitle from '@/components/OprateTitle'
import BottomSpace from '@/components/BottomSpace'
export default {
  components: {
    Steps,
    OprateTitle,
    BottomSpace
  },
  data () {
    return {
      stepsList: [
        // {
        //   operateDate: '2020-3-11 14:23:21',
        //   operateDesc: '加仓 招商中证白酒 5000 元'
        // },
        // {
        //   operateDate: '2020-3-10 14:23:21',
        //   operateDesc: '加仓 招商中证白酒 5000 元'
        // }
      ]
    }
  },
  onLoad () {
    this.getHistoryOperate()
  },
  methods: {
    getHistoryOperate () {
      this.$httpWX.get({
        url: '/historicalOperation/listForPersonal',
        data: {
          userid: globalStore.state.userID
        }
      }).then(res => {
        console.log(res)
        this.stepsList = res
      })
    },
    // 根据下拉框选项选择近几月历史操作
    getMonthOfOperate (month) {
      this.$httpWX.get({
        url: '/historicalOperation/getMonthOfOperate',
        data: {
          userid: globalStore.state.userID,
          month: month
        }
      }).then(res => {
        this.stepsList = res
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.Steps {
  background-color: #191b2a;
  padding-top: 30rpx;
}
/* 滚动容器 */
.scrollBox {
  max-height: 750rpx;
  width: 680rpx;
  white-space: nowrap;
  color: white;
  background-color: #393942;
  font-family: PingFang SC;
}
/* 从最后一个操作开始，底部留空 */
.bottomSpace {
  height: 40rpx;
  width: 680rpx;
  border-radius: 0 0 10rpx 10rpx;
  background-color: #191b2a;
}
</style>
