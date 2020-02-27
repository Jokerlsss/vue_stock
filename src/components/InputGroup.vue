<template>
  <div class="inputGroup">
    <div class="inputTitle">
      <p>{{inputTitle}}</p>
    </div>
    <div class="input">
      <input :placeholder="placeholder" type="textarea" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inputTitle: '',
    placeholder: ''
  },
  data () {
    return {
      inputTitle: this.inputTitle,
      placeholder: this.placeholder
    }
  }
}
</script>

<style scoped>
/* 输入框组：标题 & 输入框 */
.inputGroup {
  font-family: PingFang SC;
  margin-top: 40rpx;
  width: 600rpx;
  height: 114rpx;
  display: flex;
  flex-wrap: wrap;
}
.inputTitle {
  width: 100%;
  height: 34rpx;
  font-weight: bold;
  font-size: 28rpx;
  color: #cccccc;
}
.input {
  width: 100%;
  height: 80rpx;
  font-size: 36rpx;
  border-bottom: 1px solid #9898a0;
  display: flex;
  align-items: center;
}
.input > input {
  width: 100%;
}
</style>
