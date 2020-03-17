<template>
  <div class="container">
    <!-- // TODO: 根据是否已买来判断该展现什么样的模块组件出来 -->
    <projectBaseInfo></projectBaseInfo>
    <AddProBtn></AddProBtn>
    <projectTrend></projectTrend>
  </div>
</template>

<script>
import projectBaseInfo from '@/components/projectDetail/projectBaseInfo'
import projectTrend from '@/components/projectDetail/projectTrend'
import AddProBtn from '@/components/AddProBtn'
export default {
  components: {
    projectBaseInfo,
    AddProBtn,
    projectTrend
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
  font-family: PingFang SC;
}
</style>
