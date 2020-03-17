<template>
  <div class="container">
    <!-- 静态基本信息 -->
    <div class="baseInfo">
      <!-- 上部 -->
      <!-- // TODO: 将每个模板拆分为template方便组合 -->
      <div class="baseTop">
        <div class="proName">
          <p>招商中证混合</p>
        </div>
        <div class="proType">
          <van-tag round color="#3399FF" size="large" class="typeTag">基</van-tag>
        </div>
      </div>
      <!-- 底部 -->
      <div class="baseBottom">
        <div class="proCode">
          <p>100210</p>
        </div>
        <div class="proRiskType">
          <riskTag :characterType="riskType"></riskTag>
        </div>
      </div>
    </div>
    <!-- 动态信息 -->
    <div class="dynamicInfo">
      <div class="infoCell">
        <div class="title">
          <p>涨跌幅</p>
        </div>
        <div class="num">
          <p>4.5%</p>
        </div>
      </div>
      <div class="infoCell">
        <div class="title">
          <p>净值</p>
        </div>
        <div class="num">
          <p>2.9378</p>
        </div>
      </div>
      <div class="infoCell">
        <div class="title">
          <p>人气</p>
        </div>
        <div class="num">
          <p>3012</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import riskTag from '@/components/CharacterTag'
export default {
  components: {
    riskTag
  },
  data () {
    return {
      riskType: '中风险'
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
/* 名字、代码、风险类型、产品类型 */
.baseInfo {
  margin-top: 30rpx;
  border-radius: 20rpx;
  width: 100%;
  height: 140rpx;
  display: flex;
  flex-wrap: wrap;
}
/* 名字、产品类型 */
.baseTop {
  font-size: 36rpx;
  height: 55%;
  width: 100%;
  display: flex;
  align-items: center;
}
.proName {
  color: #fff;
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
}
.proName > p {
  margin-left: 30rpx;
}
.proType {
  font-size: 28rpx;
  width: 10%;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  padding-right: 10rpx;
}
/* 代码、风险类型 */
.baseBottom {
  font-size: 28rpx;
  height: 45%;
  width: 100%;
  display: flex;
  align-items: center;
}
.proCode {
  height: 100%;
  width: 22%;
  display: flex;
  align-items: center;
}
.proCode > p {
  margin-left: 30rpx;
  color: #fff;
}
.proRiskType {
  color: #fff;
}
/* 涨跌幅、净值、人气 */
.dynamicInfo {
  width: 100%;
  height: 160rpx;
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
  font-size: 32rpx;
  color: #9898a0;
  height: 40%;
  width: 100%;
}
.num {
  color: #fff;
  font-size: 44rpx;
  height: 60%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
