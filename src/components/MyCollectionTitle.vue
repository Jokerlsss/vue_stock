<template>
  <div class="container">
    <div class="titleDiv">
      <p>我的收藏</p>
    </div>
    <div class="filterDiv">
      <van-dropdown-menu>
        <van-dropdown-item :value="valueDefault" :options="option1" />
        <van-dropdown-item :value="valueDefault" :options="option2" />
        <van-dropdown-item :value="valueDefault" :options="option3" />
      </van-dropdown-menu>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      option1: [
        { text: '收益率', value: 0 },
        { text: '从高到低', value: 1 },
        { text: '从低到高', value: 2 }
      ],
      option2: [
        { text: '净值', value: 0 },
        { text: '从高到低', value: 1 },
        { text: '从低到高', value: 2 }
      ],
      option3: [
        { text: '恢复默认', value: 0 }
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
  /* background-color: blue; */
}
</style>
