<template>
  <div class="container">
    <HistoryEarnTitle></HistoryEarnTitle>
    <scroll-view class="scrollBox" scroll-y="true">
      <!-- // TODO: 增加数据为空页面 -->
      <div class="earnSteps">
        <HistoryEarnSteps
          v-for="(earnItem,index) in earnList"
          :key="index"
          :dayEarn="earnItem.dayEarn"
          :earningsdate="earnItem.earningsdate"
        ></HistoryEarnSteps>
      </div>
    </scroll-view>
    <div class="bottomSpace"></div>
    <BottomSpace></BottomSpace>
  </div>
</template>

<script>
import HistoryEarnSteps from '@/components/historyEarn/HistoryEarnSteps'
import HistoryEarnTitle from '@/components/historyEarn/HistoryEarnTitle'
import BottomSpace from '@/components/BottomSpace'
export default {
  components: {
    HistoryEarnSteps,
    HistoryEarnTitle,
    BottomSpace
  },
  data () {
    return {
      userid: 1,
      earnList: ''
    }
  },
  onShow () {
    this.getHistoryEarn()
  },
  methods: {
    // get：历史收益数据
    getHistoryEarn () {
      this.$httpWX.get({
        url: '/historyEarnings/getHistoryEarn',
        data: {
          userid: this.userid
        }
      }).then(res => {
        this.earnList = res
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
  font-family: PingFang SC;
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
.earnSteps {
  background-color: #191b2a;
  padding-top: 30rpx;
}
</style>
