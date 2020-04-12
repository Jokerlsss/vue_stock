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
      <!-- <DataCell :financialProjectList="financialProjectList"></DataCell> -->
      <StockDataCell
        v-for="(item,index) in financialProjectList"
        :key="index"
        :productName="item.productName"
        :productType="item.productType"
        :asset="item.holdAssets"
        :dayEarn="item.dayEarn"
        :hadEarn="item.holdEarn"
        :productCode="item.productCode"
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
import DataCell from '@/components/DataCell'
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
      // TODO: 当无数据但仍有 switch 勾选时，不会显示空数据，应该改进
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
    BottomSpace,
    DataCell
  },
  data () {
    return {
      userid: 1,
      isShowPopup: false,
      financialProjectList: [
        // 表头
        {
          productName: '项目名称',
          productType: '项目类型',
          productCode: '',
          holdAssets: '资产',
          dayEarn: '每日收益',
          holdEarn: '持有收益'
        }
      ]
    }
  },
  // mounted () {
  //   this.getPersonalAssets()
  // },
  onShow () {
    this.getPersonalAssets()
  },
  methods: {
    closePopup: function () {
      this.isShowPopup = false
    },
    openPopup: function () {
      this.isShowPopup = true
    },
    getPersonalAssets () {
      this.$httpWX.get({
        url: '/personalFinancialAssetsVO/listByWrapper',
        data: {
          userid: this.userid
        }
      }).then(res => {
        // 每次获取数据时先清空原有数据，防止 push 重复
        this.financialProjectList = [
          // 表头
          {
            productName: '项目名称',
            productType: '项目类型',
            productCode: '',
            holdAssets: '资产',
            dayEarn: '每日收益',
            holdEarn: '持有收益'
          }
        ]
        // 保留 this.financialProjectList 的表头，数据在表头后进行 push
        for (var i = 0; i < res.length; i++) {
          this.financialProjectList.push(res[i])
        }
        console.log(res)
      })
    }
    // async getDataTest () {
    //   const { data: res } = await this.$httpWX.get(
    //     `/personalFinancialAssetsVO/listByWrapper?${this.userid}`
    //   )
    //   console.log('await:', res)
    // }

    // ? 为什么用箭头函数就不能将show传给控件？箭头函数与function的区别？that和this的区别？
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
