<template>
  <div class="container">
    <div class="text">
      <div class="title">
        <p>投资风险偏好测评</p>
      </div>
      <div class="subTitle">
        <p>请如实填写以下问卷</p>
      </div>
    </div>
    <div class="progress">
      <van-circle
        :value="circleValue"
        :text="circleText"
        size="60"
        stroke-width="4"
        color="#FF6600"
        layer-color="#9898a0"
      />
    </div>
  </div>
</template>

<script>
import globalStore from '../stores/global-stores'
export default {
  computed: {
    circleText () {
      const temp = this.circleValue + '%'
      console.log(temp)
      return temp
    },
    circleValue () {
      // 八道题，除以8之后是以百分数表示
      return globalStore.state.finish / 8 * 100
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.container {
  font-family: PingFang SC;
  margin-top: 40rpx;
  height: 320rpx;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.text {
  height: 50%;
  width: 100%;
}
.title {
  color: #fff;
  height: 50%;
  font-size: 40rpx;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
.subTitle {
  color: #9898a0;
  height: 50%;
  font-size: 28rpx;
  display: flex;
  justify-content: center;
}
.progress {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
