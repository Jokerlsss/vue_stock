<template>
  <div class="container">
    <!-- 总资产 -->
    <div class="allAsset">
      <div class="assetText">
        总资产
        <img src="../../static/images/visable.png" class="visableImg" />
      </div>
      <div class="assetNum">531324</div>
    </div>
    <!-- 收益 -->
    <div class="earnings">
      <div class="earnDiv"></div>
      <div class="earnDiv"></div>
      <div class="earnDiv"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/*--------- 主体 ---------*/
.container {
  margin-top: 24rpx;
  height: 280rpx;
  width: 680rpx;
}
/*--------- 总资产 ---------*/
.allAsset {
  height: 140rpx;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.assetText {
  width: 100%;
  height: 60rpx;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
  color: #9898a0;
}
.visableImg {
  margin-left: 20rpx;
  height: 46rpx;
  width: 50rpx;
}
.assetNum {
  width: 100%;
  height: 80rpx;
  /* background-color: yellow; */
  display: flex;
  justify-content: center;
  font-size: 56rpx;
  color: white;
  font-weight: bold;
}
/*--------- 收益 ---------*/
.earnings {
  height: 140rpx;
  width: 100%;
  /* background-color: brown; */
}
</style>