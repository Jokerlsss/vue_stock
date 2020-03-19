<template>
  <div class="container">
    <!-- // TODO: 无数据时显示：数据为空 -->
    <van-tabs :active="active" @change="onChange" swipeable sticky>
      <van-tab title="股票" name="a">
        <SearchAndItem :test="1"></SearchAndItem>
      </van-tab>
      <van-tab title="基金" name="b">
        <SearchAndItem :test="2"></SearchAndItem>
      </van-tab>
      <van-tab title="定期" name="c">
        <SearchAndItem :test="3"></SearchAndItem>
      </van-tab>
      <van-tab title="黄金" name="d">
        <SearchAndItem :test="4"></SearchAndItem>
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
      active: 'a'
    }
  },
  methods: {
    onChange (event) {

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
