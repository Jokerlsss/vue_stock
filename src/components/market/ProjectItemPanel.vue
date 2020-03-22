<template>
  <div class="container">
    <!-- // TODO: 外边框白线去除 -->
    <van-panel :title="productName" :desc="productCode" :status="riskType"></van-panel>
  </div>
</template>

<script>
export default {
  props: {
    productName: '',
    productCode: '',
    riskType: ''
  },
  data () {
    return {
      productName: this.productName,
      productCode: this.productCode,
      riskType: this.riskType
    }
  }
}
</script>

<style scoped>
.container {
  font-family: PingFang SC;
}
</style>
