<!-- Description:资产项目页面 -->
<template>
  <div class="container">
    <van-popup
      :show="isShowPopup"
      position="right"
      custom-style="width:30%;height:100%;opacity:0.8;display:flex;flex-direction:column-reserve"
      @close="closePopup"
    >
      <PopupContent></PopupContent>
    </van-popup>
    <!-- 顶部资产明细 -->
    <AssetInfo></AssetInfo>
    <!-- No Content 页面 -->
    <NoContentPage v-if="isNoContentPage"></NoContentPage>
    <!-- 滚动表格 -->
    <ScrollTable :financialProjectList="financialProjectList" v-if="isChangeToScrollTable"></ScrollTable>
    <!-- 项目卡片 -->
    <div v-if="isChangeToScrollTable?false:true">
      <StockDataCell
        v-for="(item,index) in financialProjectList"
        :key="index"
        :name="item.name"
        :type="item.type"
        :asset="item.asset"
        :dayEarn="item.dayEarn"
        :hadEarn="item.hadEarn"
      ></StockDataCell>
    </div>
    <!-- 添加项目按钮 -->
    <AddProBtn @showPopup="openPopup"></AddProBtn>
    <!-- 底部留空 -->
    <BottomSpace></BottomSpace>
  </div>
</template>

<script>
import globalStore from '../../stores/global-stores'

import StockDataCell from '@/components/StockDataCell'
import AddProBtn from '@/components/AddProBtn'
import AssetInfo from '@/components/AssetInfo'
import SliderCell from '@/components/SliderCell'
import ScrollTable from '@/components/ScrollTable'
import PopupContent from '@/components/PopupContent'
import NoContentPage from '@/components/NoContentPage'
import BottomSpace from '@/components/BottomSpace'
export default {
  computed: {
    isChangeToScrollTable () {
      return globalStore.state.isChangeToScrollTable
    },
    isNoContentPage () {
      const ShowNoContentPage = true
      const NotShowNoContentPage = false
      const NoProjectList = 0
      const UNCHECKED = false
      // 当所有项目筛选为空时，出现 NoContentPage 页面
      if (globalStore.state.checkStock === UNCHECKED &&
        globalStore.state.checkFund === UNCHECKED &&
        globalStore.state.checkGold === UNCHECKED &&
        globalStore.state.checkRegular === UNCHECKED &&
        globalStore.state.checkOther === UNCHECKED) {
        return ShowNoContentPage
      }
      // 当前页面无项目时，出现 NoContentPage 页面
      if (this.financialProjectList.length === NoProjectList) {
        return ShowNoContentPage
      } else {
        return NotShowNoContentPage
      }
    }
  },
  components: {
    StockDataCell,
    AddProBtn,
    AssetInfo,
    SliderCell,
    ScrollTable,
    PopupContent,
    NoContentPage,
    BottomSpace
  },
  data () {
    return {
      isShowPopup: false,
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
  },
  methods: {
    closePopup: function () {
      this.isShowPopup = false
    },
    openPopup: function () {
      this.isShowPopup = true
    }

    // TODO-为什么用箭头函数就不能将show传给控件？箭头函数与function的区别？that和this的区别？
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
