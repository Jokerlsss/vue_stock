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
    <AssetInfo :allAssets="allAssets" :dayEarn="dayEarn" :holdEarn="holdEarn"></AssetInfo>
    <!-- No Content 页面 -->
    <NoContentPage v-if="isNoContentPage"></NoContentPage>
    <!-- 滚动表格 -->
    <ScrollTable
      :totalEarn="totalEarn"
      :financialProjectList="financialProjectList"
      v-if="isChangeToScrollTable"
    ></ScrollTable>
    <!-- 项目卡片 -->
    <div v-if="isChangeToScrollTable?false:true">
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
    <AddProBtn @showPopup="openPopup" :financialProjectList="financialProjectList"></AddProBtn>
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
      // NoProjectList = 1 的 1 为表头，即只有表头时，判断数组为空
      const NoProjectList = 1
      const UNCHECKED = false
      // 当所有项目筛选为空时，出现 NoContentPage 页面
      // TODO: 当无数据但仍有 switch 勾选时，不会显示空数据，应该改进
      if (globalStore.state.checkStock === UNCHECKED &&
        globalStore.state.checkFund === UNCHECKED &&
        globalStore.state.checkGold === UNCHECKED) {
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
      isShowPopup: false,
      totalEarn: 0,

      // assetsInfo => 总资产、总最新收益、总持有收益
      allAssets: 0,
      dayEarn: 0,
      holdEarn: 0,

      financialProjectList: [
        // 表头
        {
          productName: '项目名称',
          productType: '项目类型',
          productCode: '',
          holdAssets: '资产',
          dayEarn: '最新收益',
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
    this.getTotalEarn()
    this.getAssetsInfo()
    console.log('index onShow')
  },
  methods: {
    closePopup: function () {
      this.isShowPopup = false
    },
    openPopup: function () {
      this.isShowPopup = true
    },
    getAssetsInfo () {
      this.$httpWX.get({
        url: '/personalFinancialAssets/getAssetsInfo',
        data: {
          userid: globalStore.state.userID
        }
      }).then(res => {
        if (res.status === 500) {
          this.allAssets = 0
          this.dayEarn = 0
          this.holdEarn = 0
        } else {
          this.allAssets = res.allAssets
          this.dayEarn = res.dayEarn
          this.holdEarn = res.holdEarn
        }
      })
    },
    // 获取累计收益
    getTotalEarn () {
      this.$httpWX.get({
        url: '/personalFinancialAssets/getTotalEarn',
        data: {
          userid: globalStore.state.userID
        }
      }).then(res => {
        if (res.status === 500) {
          this.totalEarn = 0
        } else {
          this.totalEarn = res
        }
        globalStore.commit('getTotalEarn', this.totalEarn)
      })
    },
    // 获取个人资产
    getPersonalAssets () {
      this.$httpWX.get({
        url: '/personalFinancialAssetsVO/listByWrapper',
        data: {
          userid: globalStore.state.userID
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
            dayEarn: '最新收益',
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
