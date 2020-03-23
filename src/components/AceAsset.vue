<!-- Description：王牌资产 -->
<template>
  <div class="container">
    <div class="titleDiv">
      <div class="titleText">王牌资产</div>
      <!-- <div class="titleToMore">
        <p>查看更多></p>
      </div>-->
    </div>
    <div class="contentDiv">
      <div class="contentItem">
        <div class="contentTip">累计收益最高(截止2-21)</div>
        <div class="contentInfo">
          <div class="projectName">
            <p>招商中证白酒C</p>
          </div>
          <div class="projectAsset">
            <p>+44121</p>
          </div>
        </div>
      </div>
      <!-- // TODO: 当没有项目购入时，显示：您还没有创建资产 -->
      <div class="contentItem">
        <div class="contentTip">持有收益最高(截止2-21)</div>
        <div class="contentInfo">
          <div class="projectName">
            <p>招商中证白酒C</p>
          </div>
          <div class="projectAsset">
            <p>+204</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  border-radius: 20rpx;
  font-family: PingFang SC;
  margin-top: 30rpx;
  height: 340rpx;
  width: 680rpx;
  display: flex;
  flex-wrap: wrap;
  background-color: #191b2a;
}
/*--------- 标题 ---------*/
.titleDiv {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 32rpx;
  height: 80rpx;
  width: 100%;
  color: white;
  border-radius: 20rpx 20rpx 0 0;
  background-color: #5e5e5e;
  border-bottom: 1px solid #515151;
}
.titleText {
  width: 50%;
  display: flex;
  margin-left: 30rpx;
}
.titleToMore {
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
  font-size: 24rpx;
  color: #9898a0;
}
.titleToMore > p {
  margin-right: 30rpx;
}
/*--------- 内容 ---------*/
.contentDiv {
  height: 260rpx;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.contentItem {
  height: 130rpx;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.contentTip {
  display: flex;
  align-items: flex-end;
  padding-left: 30rpx;
  height: 40%;
  width: 100%;
  color: #9898a0;
  font-size: 24rpx;
}
.contentInfo {
  height: 60%;
  width: 100%;
  font-size: 32rpx;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
}
.projectName {
  display: flex;
  align-items: center;
  width: 65%;
  height: 100%;
  color: white;
}
.projectName > p {
  margin-left: 30rpx;
}
.projectAsset {
  display: flex;
  flex-direction: row-reverse;
  color: #ff3300;
  display: flex;
  align-items: center;
  width: 35%;
  height: 100%;
}
.projectAsset > p {
  margin-right: 30rpx;
}
</style>