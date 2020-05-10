<template>
  <div class="container">
    <div class="titleDiv">
      <p>历史收益</p>
    </div>
    <div class="filterDiv">
      <van-dropdown-menu>
        <van-dropdown-item
          :value="monthDefault"
          title="月份"
          :options="option1"
          @change="selectMonth"
        />
      </van-dropdown-menu>
      <button class="confirmBtn" @click="getAllEarn">查看全部</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 年份展示近三年
      option1: [
        { text: '本月', value: 0 },
        { text: '上月份', value: 1 },
        { text: '前月份', value: 2 }
      ],
      option2: [
        { text: '查看全部', value: 1 }
      ],
      monthDefault: 3,
      getAllDefault: 3
    }
  },
  methods: {
    selectMonth (e) {
      const month = e.mp.detail
      this.$emit('getMonthOfEarn', month)
    },
    // 查看全部
    getAllEarn () {
      this.$emit('getHistoryEarn')
    }
  }
}
</script>

<style scoped>
.container {
  font-family: PingFang SC;
  border-radius: 10rpx 10rpx 0 0;
  margin-top: 60rpx;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 680rpx;
  height: auto;
  background-color: #191b2a;
}
/* 标题 */
.titleDiv {
  height: 100rpx;
  width: 100%;
  display: flex;
  align-items: center;
}
.titleDiv > p {
  margin-left: 30rpx;
  font-size: 32rpx;
  color: #9898a0;
}
/* 筛选框 */
.filterDiv {
  height: auto;
  width: 100%;
  background-color: #30323f;
}
/** 下拉框中的确认按钮 */
.confirmBtn {
  background-color: #191b2a;
  width: 100%;
  font-size: 32rpx;
  color: #9898a0;
  text-align: center;
}
</style>
