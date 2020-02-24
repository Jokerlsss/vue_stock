<!-- Description: 资产占比模块 -->
<template>
  <div class="container">
    <div class="titleDiv">
      <p class="titleText">资产占比</p>
    </div>
    <div class="content">
      <div class="project">
        <div class="projectItem">股票</div>
        <div class="projectItem">基金</div>
        <div class="projectItem">黄金</div>
        <div class="projectItem">定期</div>
        <div class="projectItem">其他</div>
      </div>
      <div class="asset">
        <div class="assetItem">51204</div>
        <div class="assetItem">4032.1</div>
        <div class="assetItem">210</div>
        <div class="assetItem">40014</div>
        <div class="assetItem">3201.24</div>
      </div>
      <div class="proportionPrograss">
        <div class="prograssItem">51204</div>
        <div class="prograssItem">4032.1</div>
        <div class="prograssItem">210</div>
        <div class="prograssItem">40014</div>
        <div class="prograssItem">3201.24</div>
      </div>
      <div class="proportionNum"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  margin-top: 30rpx;
  width: 680rpx;
  height: 480rpx;
  border-radius: 20rpx;
  background-color: #191b2a;
  display: flex;
  flex-wrap: wrap;
  font-family: PingFang SC;
}
/*--------- 标题 ---------*/
.titleDiv {
  font-size: 32rpx;
  height: 80rpx;
  width: 100%;
  color: white;
  border-bottom: 1px solid #515151;
}
.titleText {
  margin-top: 20rpx;
  margin-left: 30rpx;
}
/*--------- 下部内容部分 ---------*/
.content {
  height: 400rpx;
  width: 100%;
  display: flex;
  color: white;
}
/* 项目 */
.project {
  width: 120rpx;
  height: 100%;
  background-color: #30323f;
  font-size: 32rpx;
  display: flex;
  flex-wrap: wrap;
}
/* 项目 item */
.projectItem {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 资产 */
.asset {
  width: 200rpx;
  display: flex;
  flex-wrap: wrap;
}
.assetItem {
  width: 100%;
  height: 20%;
  display: flex;
  font-weight: bold;
  align-items: center;
  padding-left: 20rpx;
}
/* 进度条 & 进度数值 */
.proportionPrograss {
  display: flex;
  flex-wrap: wrap;
  width: 230rpx;
  height: 100%;
}
.prograssItem {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
}
.proportionNum {
  width: 140rpx;
  height: 100%;
}
</style>
