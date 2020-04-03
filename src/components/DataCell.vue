<template>
  <div class="container">
    <StockDataCell
      v-for="(item,index) in financialProjectList"
      :key="index"
      :name="item.productName"
      :type="item.productType"
      :asset="item.holdingCost"
      :dayEarn="item.dayEarn"
      :hadEarn="item.holdEarn"
    ></StockDataCell>
  </div>
</template>

<script>
import StockDataCell from '@/components/StockDataCell'
export default {
  components: {
    StockDataCell
  },
  props: {
    financialProjectList: []
  },
  mounted () {
    console.log('DataCell', this.financialProjectList)
  },
  data () {
    return {
      financialProjectList: this.financialProjectList
    }
  }
}
</script>

<style scoped>
.container {
  font-family: PingFang SC;
}
</style>
