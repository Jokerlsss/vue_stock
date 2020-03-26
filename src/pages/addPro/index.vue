<template>
  <div class="container">
    <div class="inputGroup">
      <!-- 项目名称 -->
      <div class="inputTitle">
        <p>名称</p>
      </div>
      <div class="input">
        <input v-model="productName" placeholder="请选择已购买的投资项目" type="text" @focus="openDialog" />
      </div>
    </div>

    <div class="inputGroup">
      <div class="inputTitle">
        <p>项目代码</p>
      </div>
      <div class="input">
        <input v-model="productCode" type="text" />
      </div>
    </div>

    <div class="inputGroup">
      <div class="inputTitle">
        <p>项目类型</p>
      </div>
      <div class="input">
        <input v-model="productType" type="text" />
      </div>
    </div>

    <div class="inputGroup">
      <div class="inputTitle">
        <p>交易平台</p>
      </div>
      <div class="input">
        <input v-model="platform" placeholder="请选择已购买的投资项目" type="text" />
      </div>
    </div>

    <!-- 除了股票，其他均为“购入金额” -->
    <div class="inputGroup" v-if="!isShowInput">
      <div class="inputTitle">
        <p>购入金额</p>
      </div>
      <div class="input">
        <input v-model="holdingCost" placeholder="请选择已购买的投资项目" type="text" />
      </div>
    </div>

    <!-- 只有股票是“持有份额” -->
    <div class="inputGroup" v-if="isShowInput">
      <div class="inputTitle">
        <p>持有份额</p>
      </div>
      <div class="input">
        <input v-model="amountOfAssets" placeholder="请选择已购买的投资项目" type="text" />
      </div>
    </div>

    <div class="inputGroup">
      <div class="inputTitle">
        <p>买入时间</p>
      </div>
      <div class="input">
        <input v-model="buyTime" placeholder="请选择已购买的投资项目" type="text" />
      </div>
    </div>

    <div class="inputGroup">
      <div class="inputTitle">
        <p>备注</p>
      </div>
      <div class="input">
        <input v-model="note" placeholder="请选择已购买的投资项目" type="text" />
      </div>
    </div>

    <!-- 基金：项目代码、用户ID、交易平台、购入金额（需转换成持有份额）、*持仓成本（持有单价*持有份额）、买入时间、备注 -->
    <!-- 定期：项目代码、用户ID、交易平台、购入金额、买入时间、备注 -->
    <!-- 股票：项目代码、用户ID、交易平台、持有份额（需转换成购入金额）、*持仓成本（持有单价*持有份额）、买入时间、备注 -->
    <!-- 黄金：项目代码、用户ID、交易平台、购入金额（需转换成持有份额）、*持仓成本（持有单价*持有份额）、买入时间、备注 -->

    <!-- <InputGroup inputTitle="名称" placeholder="请选择已购买的投资项目"></InputGroup>
    <InputGroup inputTitle="金额" placeholder="请输入购买金额"></InputGroup>
    <InputGroup inputTitle="买入时间" placeholder="当日净值由此决定，请谨慎选择"></InputGroup>
    <InputGroup inputTitle="交易平台" placeholder="请选择购买的平台"></InputGroup>-->
    <div class="getBtn">
      <van-button color="#CC6600" size="large" round>完成</van-button>
    </div>
    <BottomSpace></BottomSpace>
    <van-dialog
      use-slot
      title=" "
      :show="showDialog"
      @close="onClose"
      close-on-click-overlay="true"
      show-confirm-button="false"
    >
      <ChooseDialog @onClose="onClose" @getProductName="getProductName"></ChooseDialog>
    </van-dialog>
  </div>
</template>

<script>
import InputGroup from '@/components/InputGroup'
import BottomSpace from '@/components/BottomSpace'
import ChooseDialog from '@/components/addPro/ChooseDialog'
export default {
  computed: {
    isShowInput () {
      if (this.productType === '股票') {
        return true
      } else {
        return false
      }
    }

  },
  data () {
    return {
      showDialog: false,
      // 表单信息
      productName: '',
      productCode: '',
      productType: '',
      platform: '',
      holdingCost: '',
      amountOfAssets: '',
      buyTime: '',
      note: ''
    }
  },
  methods: {
    insertPersonalProject () {
      this.$httpWX.post({
        url: '/personalFinancialAssets/insert',
        data: {
          // TODO: 改为全局变量 userID
          userID: 1,
          productName: this.productName,
          productCode: this.productCode,
          productType: this.productType,
          platform: this.platform,
          holdingCost: this.holdingCost,
          amountOfAssets: this.amountOfAssets,
          buyTime: this.buyTime,
          note: this.note
        }
      }).then(res => {
        if (res === 1) {
          console.log('删除项目成功！')
        } else {
          console.log('删除失败请重试！')
        }
      })
    },
    // 获取搜索后选中的值
    getProductName (productName, productCode, productType) {
      this.productName = productName
      this.productCode = productCode
      this.productType = productType
    },
    openDialog () {
      this.showDialog = true
    },
    onClose () {
      this.showDialog = false
    }
  },
  components: {
    InputGroup,
    BottomSpace,
    ChooseDialog
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
  margin-top: 20rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.getBtn {
  margin-top: 100rpx;
  width: 600rpx;
  height: 80rpx;
}
/* 输入框组 */
/* 输入框组：标题 & 输入框 */
.inputGroup {
  font-family: PingFang SC;
  margin-top: 40rpx;
  width: 600rpx;
  display: flex;
  flex-wrap: wrap;
}
.inputTitle {
  width: 100%;
  height: 34rpx;
  font-weight: bold;
  font-size: 28rpx;
  color: #cccccc;
}
.input {
  color: #fff;
  width: 100%;
  height: 80rpx;
  font-size: 36rpx;
  border-bottom: 1px solid #9898a0;
  display: flex;
  align-items: center;
}
.input > input {
  width: 100%;
}
</style>
