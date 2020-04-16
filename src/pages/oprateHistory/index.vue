<template>
  <div class="container">
    <OprateTitle></OprateTitle>
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
      userid: 1,
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
          userid: this.userid
        }
      }).then(res => {
        console.log(res)
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
