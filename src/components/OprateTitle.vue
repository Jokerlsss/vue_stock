<template>
  <div class="container">
    <div class="titleDiv">
      <p>操作记录</p>
    </div>
    <div class="filterDiv">
      <van-dropdown-menu>
        <van-dropdown-item :value="valueDefault" :options="option1" />
        <van-dropdown-item :value="valueDefault" :options="option2" disabled />
        <van-dropdown-item :value="valueDefault" :options="option3" disabled />
        <van-dropdown-item :value="valueDefault" :options="option4" />
      </van-dropdown-menu>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 年份展示近三年
      option1: [
        { text: '年份', value: 0 },
        { text: '2020', value: 1 },
        { text: '2019', value: 2 },
        { text: '2018', value: 3 }
      ],
      option2: [
        { text: '月份', value: 0 },
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
        { text: '6', value: 6 },
        { text: '7', value: 7 },
        { text: '8', value: 8 },
        { text: '9', value: 9 },
        { text: '10', value: 10 },
        { text: '11', value: 11 },
        { text: '12', value: 12 }
      ],
      option3: [
        { text: '天', value: 0 },
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
        { text: '6', value: 6 },
        { text: '7', value: 7 },
        { text: '8', value: 8 },
        { text: '9', value: 9 },
        { text: '10', value: 10 },
        { text: '11', value: 11 },
        { text: '12', value: 12 }
      ],
      option4: [
        { text: '更多', value: 0 },
        { text: '查看全部', value: 0 }
      ],
      valueDefault: 0
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
</style>
