<template>
  <div class="container">
    <div class="bottomSpace">{{softwareInfo}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      softwareInfo: 'CopyRight 2020-2-21 FJUT-MMS1601'
    }
  }
}
</script>

<style scoped>
/* 底部留白部分 */
.bottomSpace {
  width: 100%;
  height: 150rpx;
  color: #434343;
  display: flex;
  justify-content: center;
  font-size: 24rpx;
  align-items: center;
}
</style>
