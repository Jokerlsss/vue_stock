<!-- Description: 我的页面 - 操作栏 -->
<template>
  <div class="container">
    <div class="menu">
      <div class="imgDiv">
        <img src="../../static/images/whiteearn.png" />
      </div>
      <div class="menuText">历史收益</div>
    </div>
    <div class="menu">
      <div class="imgDiv">
        <img src="../../static/images/operate.png" />
      </div>
      <div class="menuText">操作记录</div>
    </div>
    <div class="menu">
      <div class="imgDiv">
        <img src="../../static/images/collect.png" />
      </div>
      <div class="menuText">我的收藏</div>
    </div>
    <div class="menu">
      <div class="imgDiv">
        <img src="../../static/images/test.png" />
      </div>
      <div class="menuText">风险测试</div>
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
  height: 150rpx;
  background-color: #191b2a;
  border-radius: 40rpx;
  display: flex;
  justify-content: space-around;
}
/* 菜单按钮 */
.menu {
  width: 25%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.imgDiv {
  width: 100%;
  height: 90rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgDiv > img {
  height: 56rpx;
  width: 56rpx;
}
.menuText {
  color: white;
  display: flex;
  justify-content: center;
  font-size: 28rpx;
  width: 100%;
  height: 60rpx;
}
</style>