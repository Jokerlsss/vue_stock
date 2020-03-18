<template>
  <div class="container">
    <div class="infoCell">
      <div class="title">
        <p>{{title}}</p>
      </div>
      <div class="info">
        <p>{{info}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: '',
    title: ''
  },
  data () {
    return {
      title: this.title,
      info: this.info
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 5rpx;
  font-family: PingFang SC;
  width: 680rpx;
  height: auto;
  background-color: #191b2a;
  border-radius: 10rpx;
  display: flex;
  flex-wrap: wrap;
}
.infoCell {
  display: flex;
  width: 100%;
  height: 80rpx;
  align-items: center;
}
.title {
  width: 50%;
  color: #fff;
  display: flex;
  align-items: center;
}
.title > p {
  margin-left: 30rpx;
}
.info {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  color: #9898a0;
}
.info > p {
  margin-right: 30rpx;
}
</style>
