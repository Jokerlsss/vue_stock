<template>
  <div class="progress" :style="widthStyle"></div>
</template>

<script>
// 将第一名样式标红：设置全局变量，用冒泡排序法去判断
export default {
  props: {
    width: ''
  },
  data () {
    return {
      widthStyle: ''
    }
  },
  onLoad () {
    this.widthStyle = 'width:' + this.width
  }
}
</script>

<style scoped>
/* 自定义进度条 */
.progress {
  height: 40%;
  background-color: #ff9900;
  border-radius: 0 30rpx 30rpx 0;
  /* width: 50%; */
}
</style>
