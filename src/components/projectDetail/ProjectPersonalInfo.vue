<template>
  <div class="container">
    <!-- 动态信息 -->
    <div class="dynamicInfo">
      <div class="infoCell">
        <div class="title">
          <p>资产</p>
        </div>
        <div class="num">
          <p>20001.21</p>
        </div>
      </div>
      <div class="infoCell">
        <div class="title">
          <p>今日收益</p>
        </div>
        <div class="num">
          <p>300.12</p>
        </div>
      </div>
      <div class="infoCell">
        <div class="title">
          <p>累计收益</p>
        </div>
        <div class="num">
          <p>30120.22</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // 产品类型转换成单字显示

  },
  props: {
  },
  components: {

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
  width: 680rpx;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
/* 涨跌幅、净值、人气 */
.dynamicInfo {
  width: 100%;
  height: 130rpx;
  display: flex;
  background-color: #191b2a;
  border-radius: 20rpx;
  margin-top: 30rpx;
}
.infoCell {
  width: 33.3%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.title {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 28rpx;
  color: #9898a0;
  height: 40%;
  width: 100%;
}
.num {
  color: #fff;
  font-size: 40rpx;
  height: 60%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
