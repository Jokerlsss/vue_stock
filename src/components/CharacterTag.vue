<template>
  <div class="container" :style="colorStyle">
    <p>{{characterType}}</p>
  </div>
</template>

<script>
export default {
  props: {
    characterType: ''
  },
  computed: {
    colorStyle () {
      if (this.characterType === '保守') {
        return this.greyStyle
      } else if (this.characterType === '谨慎') {
        return this.greenStyle
      } else if (this.characterType === '稳健') {
        return this.blueStyle
      } else if (this.characterType === '积极') {
        return this.orangeStyle
      } else if (this.characterType === '激进') {
        return this.redStyle
      } else {
        return this.greyStyle
      }
    }
  },
  data () {
    return {
      characterType: this.characterType,
      greyStyle: 'border:1px solid #9898a0;color:#9898a0',
      greenStyle: 'border:1px solid #339900;color:#339900',
      blueStyle: 'border:1px solid #3399FF;color:#3399FF',
      orangeStyle: 'border:1px solid #FF6600;color:#FF6600',
      redStyle: 'border:1px solid #CC3333;color:#CC3333'
    }
  }
}
</script>
-
<style scoped>
.container {
  background-color: none;
  width: auto;
  font-size: 24rpx;
  border-radius: 15rpx;
  padding: 5rpx 15rpx;
  height: 30rpx;
}
</style>