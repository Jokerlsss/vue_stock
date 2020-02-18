<template>
  <div class="container">
    <button class="add_btn" hover-class="add_btn_hover">
      <img src="../../static/images/addPro.png" class="btnImg" />
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 按钮外部主体 */
.container {
  width: 160rpx;
  height: 120rpx;
  background-color: #fff;
  opacity: 0.7;
  border-radius: 80rpx 0 0 80rpx;
  position: fixed;
  bottom: 30rpx;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* 增加项目按钮 */
.add_btn {
  right: 20rpx;
  width: 100rpx;
  height: 100rpx;
  border-radius: 50rpx;
  background-color: #000000;
  opacity: 0.4;
  padding: 0;
}
.add_btn_hover {
  opacity: 0.7;
}
/* 按钮背景图 */
.btnImg {
  width: 60rpx;
  height: 60rpx;
  margin-top: 20rpx;
}
</style>
