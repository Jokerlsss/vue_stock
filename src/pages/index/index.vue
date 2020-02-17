<template>
  <div class="container">
    <StockDataCell StockType="基"></StockDataCell>
    <StockDataCell StockType="金"></StockDataCell>
    <StockDataCell StockType="定"></StockDataCell>
    <StockDataCell StockType="其"></StockDataCell>
    <StockDataCell StockType="股"></StockDataCell>
    <StockDataCell StockType="基"></StockDataCell>
    <VxeTable></VxeTable>
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

    }
  }
}
</script>

<style>
page {
  background-color: #12121e;
}
</style>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
