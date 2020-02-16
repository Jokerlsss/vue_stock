<template>
  <div class="container">
    <StockDataCell></StockDataCell>
    <StockDataCell></StockDataCell>
    <StockDataCell></StockDataCell>
    <StockDataCell></StockDataCell>
    <StockDataCell></StockDataCell>
    <StockDataCell></StockDataCell>
    <StockDataCell></StockDataCell>
  </div>
</template>

<script>
import StockDataCell from '@/components/StockDataCell'
export default {
  components: {
    StockDataCell
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
