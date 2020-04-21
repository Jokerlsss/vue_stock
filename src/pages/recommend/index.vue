<template>
  <div class="container">
    <!-- // TODO: 传productType过去，到控件中去获取后台数据 -->
    <RecommendCell
      v-for="(recommendItem,index) in recommendList"
      :key="index"
      :productType="recommendItem.productType"
    ></RecommendCell>
    <BottomSpace></BottomSpace>
  </div>
</template>

<script>
import RecommendCell from '@/components/RecommendCell'
import BottomSpace from '@/components/BottomSpace'
export default {
  components: {
    RecommendCell,
    BottomSpace
  },
  data () {
    return {
      recommendList: [
        {
          productType: '基金'
        },
        {
          productType: '股票'
        },
        {
          productType: '黄金'
        }
      ]
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
