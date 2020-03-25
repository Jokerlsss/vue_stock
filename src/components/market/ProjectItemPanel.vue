<template>
  <div class="container" @click="toProjectDetailPage">
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
  },
  methods: {
    // 带参数传递到项目详情
    toProjectDetailPage () {
      const url = '../projectDetail/main?productCode=' + this.productCode
      wx.navigateTo({
        url: url
      })
    }
  }
}
</script>

<style scoped>
.container {
  font-family: PingFang SC;
}
</style>
