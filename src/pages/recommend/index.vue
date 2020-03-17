<template>
  <div class="container">
    <RecommendCell
      v-for="(recommendItem,index) in recommendList"
      :key="index"
      :title="recommendItem.title"
      :oneYearProductEarn="recommendItem.oneYearProductEarn"
      :oneYearProductName="recommendItem.oneYearProductName"
      :threeYearProductEarn="recommendItem.threeYearProductEarn"
      :threeYearProductName="recommendItem.threeYearProductName"
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
          title: '指数好基',
          oneYearProductEarn: '+122.4',
          oneYearProductName: '招商中证白酒C',
          threeYearProductEarn: '+233',
          threeYearProductName: '鹏华中债债券'
        },
        {
          title: '收益好股',
          oneYearProductEarn: '+144.4',
          oneYearProductName: '三全食品',
          threeYearProductEarn: '+131',
          threeYearProductName: '博思科技'
        },
        {
          title: '稳健定期',
          oneYearProductEarn: '+10.4',
          oneYearProductName: '健康保险',
          threeYearProductEarn: '+11',
          threeYearProductName: '招商银行定期'
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
