<template>
  <div class="container">
    <MyCollectionTitle></MyCollectionTitle>
    <div class="collectionTable">
      <ScrollTable :financialProjectList="financialProjectList"></ScrollTable>
    </div>
  </div>
</template>

<script>
import MyCollectionTitle from '@/components/MyCollectionTitle'
import ScrollTable from '@/components/ScrollTable'
export default {
  components: {
    MyCollectionTitle,
    ScrollTable
  },
  data () {
    return {
      financialProjectList: [
        // 表头
        {
          name: '项目名称',
          type: '项目类型',
          asset: '资产',
          dayEarn: '每日收益',
          hadEarn: '持有收益'
        },
        // 表内容
        {
          name: '通用股份',
          type: '股',
          asset: 4146,
          dayEarn: '+12',
          hadEarn: '-41'
        },
        {
          name: '三全食品',
          type: '基',
          asset: 40621,
          dayEarn: '+432',
          hadEarn: '-451'
        },
        {
          name: '鹏华债券',
          type: '定',
          asset: 4333,
          dayEarn: '+110',
          hadEarn: '-99'
        },
        {
          name: '汤圆股份',
          type: '金',
          asset: 8204,
          dayEarn: '+304',
          hadEarn: '-102'
        },
        {
          name: '余额宝',
          type: '其',
          asset: 900,
          dayEarn: '+41',
          hadEarn: '-84'
        },
        {
          name: '上海一汽',
          type: '股',
          asset: 7654,
          dayEarn: '+14',
          hadEarn: '-11'
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
  justify-content: center;
  flex-wrap: wrap;
}
.collectionTable {
  display: flex;
  width: 680rpx;
  justify-content: center;
}
</style>
