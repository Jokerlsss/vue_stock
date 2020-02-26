<template>
  <div class="container">
    <div class="imgDiv">
      <img src="../../static/images/notfind.png" class="NoContentPageImg" />
    </div>
    <div class="textDiv">当前无内容</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  height: 600rpx;
  width: 680rpx;
}
.imgDiv {
  width: 100%;
  height: 60%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.NoContentPageImg {
  height: 256rpx;
  width: 256rpx;
  opacity: 0.7;
}
.textDiv {
  width: 100%;
  height: 40%;
  color: #9898a0;
  font-size: 36rpx;
  display: flex;
  justify-content: center;
  margin-top: 20rpx;
}
</style>
