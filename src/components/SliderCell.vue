<!-- Description：滑动单元格-->
<template>
  <div class="container" @touchstart="touchStart" @touchmove="touchMove">
    <div class="content" :style="isSlid?Slid:noSlid"></div>

    <div class="btn"></div>
  </div>
</template>

<script>
import StockDataCell from '@/components/StockDataCell'
export default {
  components: {
    StockDataCell
  },
  data () {
    return {
      clientS: '',
      clientE: '',
      isSlid: false,
      noSlid: 'right:0',
      // Slid 根据删除按钮的宽度来
      Slid: 'right:100rpx'
    }
  },
  methods: {
    touchStart: function (e) {
      this.clientS = e.mp.changedTouches[0].clientX
    },
    touchMove: function (e) {
      this.clientE = e.mp.changedTouches[0].clientX
      // distanceX : 距离
      var distanceX = this.clientE - this.clientS
      if (distanceX === 0 || distanceX > 0) {
        // 当单元格处在已滑动时，向右可滑回原状
        if (this.isSlid === true) {
          this.isSlid = false
        }
      }
      if (distanceX < 0) {
        this.isSlid = true
      }
    }
  }
}
</script>

<style scoped>
/* relative 相对定位的元素不允许重叠 */
.container {
  height: 100rpx;
  width: 680rpx;
  position: relative;
}
.content {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  background-color: #8989a0;
  transition: right 0.3s ease-in-out;
}
.btn {
  width: 100rpx;
  height: 100%;
  background-color: #ff6600;
  position: absolute;
  right: 0;
}
</style>
