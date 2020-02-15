<template>
  <div class="container">
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
  justify-content: center;
}
</style>
