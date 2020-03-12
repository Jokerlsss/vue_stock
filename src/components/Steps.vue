<template>
  <div class="container">
    <div class="imgDiv">
      <img src="../../static/images/steps.png" />
    </div>
    <div class="infoDiv">
      <div class="dateDiv">
        <p>{{operateDate}}</p>
      </div>
      <div class="oprateDiv">
        <p>{{operateDesc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    operateDate: '',
    operateDesc: ''
  },
  data () {
    return {
      operateDate: this.operateDate,
      operateDesc: this.operateDesc
    }
  }
}
</script>

<style scoped>
.container {
  font-family: PingFang SC;
  height: 100rpx;
  width: 680rpx;
  background-color: #191b2a;
  display: flex;
  justify-content: center;
}
/* 步骤条图标 */
.imgDiv {
  width: 88rpx;
  height: 100%;
  display: flex;
  justify-content: center;
}
.imgDiv > img {
  height: 100%;
  width: 22rpx;
}
/* 操作信息div */
.infoDiv {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
/* 操作日期 */
.dateDiv {
  display: flex;
  align-items: flex-end;
  color: #9898a0;
  font-size: 24rpx;
  height: 50%;
  width: 100%;
}
/* 操作信息详情 */
.oprateDiv {
  font-size: 28rpx;
  height: 50%;
  width: 100%;
  color: #fff;
}
</style>
