<template>
  <div class="container">
    <!-- // TODO: 无数据时显示：数据为空 -->
    <!-- // TODO: 根据返回状态码判断异常并展示给用户看 -->
    <van-tabs :active="active" @change="onChange" swipeable sticky>
      <van-tab title="股票" name="a">
        <SearchAndItem :test="1" :productList="productList" :productType="productType"></SearchAndItem>
      </van-tab>
      <van-tab title="基金" name="b">
        <SearchAndItem :test="2" :productList="productList" :productType="productType"></SearchAndItem>
      </van-tab>
      <van-tab title="定期" name="c">
        <SearchAndItem :test="3" :productList="productList" :productType="productType"></SearchAndItem>
      </van-tab>
      <van-tab title="黄金" name="d">
        <SearchAndItem :test="4" :productList="productList" :productType="productType"></SearchAndItem>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import SearchAndItem from '@/components/market/SearchAndItem'
export default {
  components: {
    SearchAndItem
  },
  data () {
    return {
      active: 'a',
      // 默认进入页面时为股票页面
      productType: '股票',
      productList: []
    }
  },
  mounted () {
    this.getFinancialProduct()
  },
  methods: {
    getFinancialProduct () {
      this.$httpWX.get({
        url: '/financialProduct/listByWrapper',
        data: {
          productType: this.productType
        }
      }).then(res => {
        this.productList = res
        // console.log(this.productList)
      })
    },
    onChange (e) {
      // 获取当前 Tab 选中的栏目
      this.productType = e.target.title
      this.getFinancialProduct()
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
  font-family: PingFang SC;
}
</style>
