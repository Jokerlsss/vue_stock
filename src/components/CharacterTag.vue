<template>
  <div class="container">
    <p>{{characterType}}</p>
  </div>
</template>

<script>
export default {
  props: {
    characterType: ''
  },
  data () {
    return {
      characterType: this.characterType
    }
  }
}
</script>
-
<style scoped>
.container {
  background-color: none;
  border: 1px solid #3399ff;
  color: #3399ff;
  width: auto;
  font-size: 24rpx;
  border-radius: 15rpx;
  padding: 5rpx 15rpx;
  height: 30rpx;
}
</style>