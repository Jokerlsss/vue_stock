<template>
  <div class="container">
    <div class="inputGroup">
      <!-- 项目名称 -->
      <div class="inputTitle">
        <p>名称</p>
      </div>
      <div class="input">
        <input v-model="productName" readonly="readonly" disabled type="text" @focus="openDialog" />
      </div>
    </div>

    <div class="inputGroup">
      <div class="inputTitle">
        <p>项目代码</p>
      </div>
      <div class="input">
        <input v-model="productCode" type="text" disabled />
      </div>
    </div>

    <div class="inputGroup">
      <div class="inputTitle">
        <p>项目类型</p>
      </div>
      <div class="input">
        <input v-model="productType" type="text" disabled />
      </div>
    </div>

    <!-- 除了股票，其他均为“购入金额” -->
    <div class="inputGroup" v-if="!isShowInput">
      <div class="inputTitle">
        <p>购入金额</p>
      </div>
      <div class="input">
        <input v-model="holdingCost" placeholder="请输入整数" type="text" @input="moneyCheck()" />
      </div>
    </div>

    <!-- 只有股票是“持有份额” -->
    <div class="inputGroup" v-if="isShowInput">
      <div class="inputTitle">
        <p>持有份额</p>
      </div>
      <div class="input">
        <input v-model="amountOfAssets" placeholder="请输入整数" type="text" @input="amountCheck()" />
      </div>
    </div>

    <div class="inputGroup">
      <div class="inputTitle">
        <p>买入时间</p>
      </div>
      <div class="input">
        <input
          v-model="showBuyTime"
          placeholder="请选择已购买的投资项目"
          type="text"
          @focus="openShowTimeSelect"
          disabled
        />
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
      <van-button color="#CC6600" size="large" round @click="commitEvent()">完成</van-button>
    </div>
    <BottomSpace></BottomSpace>
    <!-- 股票名称选择弹窗 -->
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
    <!-- 时间选择器 -->
    <van-popup
      :show="showTimeSelect"
      position="bottom"
      custom-style="height: 40%;"
      @close="closeShowTimeSelet"
      close-on-click-overlay="true"
      closeable="true"
    >
      <!-- // TODO: 设定时间可选跨度 -->
      <van-datetime-picker
        type="date"
        :max-date="maxDate"
        :min-date="minDate"
        :value="buyTime"
        @input="timeSelectInput"
      />
    </van-popup>

    <!-- 确定提交弹窗 -->
    <!-- // TODO: 确定提交 -->
    <van-dialog
      title="确定新增该项目吗？"
      :message="productName?productName:' '"
      :show="isConfirmDialog"
      @close="closeConfirmDialog"
      close-on-click-overlay="true"
      show-confirm-button="true"
      show-cancel-button="true"
      @confirm="confirmEvent"
    ></van-dialog>
    <!-- 提交成功后的提示 -->
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import InputGroup from '@/components/InputGroup'
import BottomSpace from '@/components/BottomSpace'
import ChooseDialog from '@/components/addPro/ChooseDialog'
import Toast from '../../../static/vant/toast/toast'
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
      // 弹出时间选择器
      showTimeSelect: false,
      showDialog: false,
      maxDate: new Date().getTime(),
      // buyTime转换为日期格式：仅展示
      showBuyTime: this.timestampToTime(new Date().getTime()),
      // 是否弹出确定弹窗
      isConfirmDialog: false,
      // 表单信息
      productName: '',
      productCode: '',
      productType: '',
      platform: '',
      holdingCost: '',
      amountOfAssets: '',
      buyTime: '',
      note: '',
      // 发布项目日期
      minDate: ''
    }
  },
  onLoad (option) {
    // 若通过项目点击进入到该页面的，则接收 productName & productCode & productType & dateOfEstablishment
    this.productCode = option.productCode
    this.productName = option.productName
    this.productType = option.productType

    // getTime(): 将发布日期转换成时间戳
    var timestamp = new Date(option.dateOfEstablishment)
    this.minDate = timestamp.getTime()
    console.log(this.minDate)
    // 展示在 input 框中的日期
    this.buyTime = this.minDate

    // 根据 code & time 获取后台数据
  },
  // onUnload:页面在点击返回箭头时触发
  onUnload () {
    this.productName = ''
    this.productCode = ''
    this.productType = ''
    this.platform = ''
    this.holdingCost = ''
    this.amountOfAssets = ''
    this.buyTime = ''
    this.note = ''
    this.minDate = ''
    this.maxDate = new Date().getTime()
    // this.showBuyTime = ''
  },
  methods: {
    // 周末校验
    isWorkday () {
      var nowDate = new Date()
      if (nowDate.getDay() === 0 || nowDate.getDay() === 6) {
        return false
      } else {
        return true
      }
    },
    // 判空校验
    isNull () {
      if (this.productType === undefined) {
        return false
      } else if (this.productType === '股票') {
        if (this.productName === '' || this.productCode === '' || this.productType === '' || this.amountOfAssets === '') {
          return false
        } else {
          return true
        }
      } else if (this.productType === '黄金' || this.productType === '基金') {
        /** 黄金、基金：份额为空，金额有值 */
        if (this.productName === '' || this.productCode === '' || this.productType === '' || this.holdingCost === '') {
          return false
        } else {
          return true
        }
      }
    },
    // 提交事件
    commitEvent () {
      const isWorkday = this.isWorkday()
      const isNull = this.isNull()
      if (isNull === false) {
        Toast.fail('请完善信息')
      } else if (isWorkday === false) {
        Toast.fail('周末不能加仓')
      } else if (isNull === true && isWorkday === true) {
        // 打开确认添加弹窗
        this.openConfirmDialog()
      }
    },
    // 份额数字校验
    amountCheck () {
      // 校验规则：非零的正整数
      var reg = /^[1-9]\d*$/
      if (!reg.test(this.amountOfAssets)) {
        this.amountOfAssets = ''
      }
    },
    // 金额数字校验
    moneyCheck () {
      // 校验规则：非零的正整数
      var reg = /^[1-9]\d*$/
      if (!reg.test(this.holdingCost)) {
        this.holdingCost = ''
      }
    },
    // 确认新增时提交数据到服务器
    confirmEvent () {
      this.insertPersonalProject()
    },

    // 切换确定提交弹窗可见性
    openConfirmDialog () {
      this.isConfirmDialog = true
    },
    closeConfirmDialog () {
      this.isConfirmDialog = false
    },
    // 跳转到项目页面
    toProPage () {
      wx.switchTab({
        url: '/pages/index/main'
      })
    },
    // 切换时间选择器可进行
    openShowTimeSelect () {
      this.showTimeSelect = true
    },
    closeShowTimeSelet () {
      this.showTimeSelect = false
    },
    // 将时间戳转成日期格式
    timestampToTime (timestamp) {
      // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var date = new Date(timestamp)
      var Y = date.getFullYear() + '-'
      // 0 代表 1月份，因此要加 1
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      var D = date.getDate() + ' '
      return Y + M + D
    },
    // 选中时间录入文本框中
    // timeSelectInput (e) {
    //   // 将时间戳转换成日期格式：仅展示用，提交时仍用时间戳提交
    //   this.showBuyTime = this.timestampToTime(e.mp.detail)
    //   // buyTime = 时间戳
    //   this.buyTime = e.mp.detail
    // },
    // 新增项目记录
    insertPersonalProject () {
      this.$httpWX.post({
        url: '/personalFinancialAssets/addPositions',
        data: {
          // TODO: 改为全局变量 userID
          userid: 1,
          productName: this.productName,
          productCode: this.productCode,
          productType: this.productType,
          holdingCost: this.holdingCost,
          amountOfAssets: this.amountOfAssets,
          buyTime: this.buyTime
        }
      }).then(res => {
        // 当 res 为 1 时则表明加仓成功
        if (res === 1) {
          Toast({
            type: 'success',
            message: '提交成功',
            onClose: () => {
              // 在提示关闭后，跳转到项目页面
              this.toProPage()
            }
          })
        } else {
          Toast.fail('出现了错误')
        }
      })
    },
    // 获取搜索后选中的值
    getProductName (productName, productCode, productType, dateOfEstablishment) {
      this.productName = productName
      this.productCode = productCode
      this.productType = productType
      // getTime(): 将发布日期转换成时间戳
      var timestamp = new Date(dateOfEstablishment)
      this.minDate = timestamp.getTime()
      // 展示在input框中的值也应该改变
      this.buyTime = this.minDate
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
