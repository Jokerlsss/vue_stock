<template>
  <div class="container">
    <scroll-view class="scrollBox" scroll-y="true">
      <!-- 项目一 -->
      <div class="productName">
        <!-- 选择项目 -->
        <div class="leftProduct" @click="openDialog1">
          <span>{{productName1===''?'点此选择项目一':productName1}}</span>
        </div>
        <!-- 选择项目的弹窗 -->
        <van-dialog
          use-slot
          title=" "
          :show="showDialog1"
          @close="onClose1"
          close-on-click-overlay="true"
          show-confirm-button="false"
          key="1"
        >
          <ChooseDialog @onClose="onClose1" @getProductName="getProductName1" key="1"></ChooseDialog>
        </van-dialog>
        <div class="middle"></div>
        <div class="rightProduct" @click="openDialog2">
          <!-- <input
            v-model="productName2"
            readonly="readonly"
            placeholder="请选择项目二"
            type="text"
            @focus="openDialog2"
          />-->
          <span>{{productName2===''?'点此选择项目二':productName2}}</span>
        </div>
        <!-- 选择项目的弹窗 -->
        <van-dialog
          use-slot
          title=" "
          :show="showDialog2"
          @close="onClose2"
          close-on-click-overlay="true"
          show-confirm-button="false"
          key="2"
        >
          <ChooseDialog @onClose="onClose2" @getProductName="getProductName2" key="2"></ChooseDialog>
        </van-dialog>
      </div>
      <!-- 对比数据详情区域 -->
      <div class="compareDetail">
        <div class="leftProduct">{{productType1}}</div>
        <div class="middle">项目\n类型</div>
        <div class="rightProduct">{{productType2}}</div>
      </div>
      <!-- 对比数据详情区域 -->
      <!-- <div class="compareDetail">
        <div class="leftProduct"></div>
        <div class="middle">今日\n涨跌</div>
        <div class="rightProduct"></div>
      </div>-->
      <!-- 对比数据详情区域 -->
      <!-- // TODO 更高的值加上颜色高亮 -->
      <!-- // TODO 加上 % -->
      <div class="compareDetail">
        <div
          class="leftProduct"
        >{{productOneList.oneMonthEarn===0?'--':productOneList.oneMonthEarn}}</div>
        <div class="middle">一月\n收益</div>
        <div
          class="rightProduct"
        >{{productTwoList.oneMonthEarn===0?'--':productTwoList.oneMonthEarn}}</div>
      </div>
      <!-- 对比数据详情区域 -->
      <div class="compareDetail">
        <div
          class="leftProduct"
        >{{productOneList.threeMonthEarn===0?'--':productOneList.threeMonthEarn}}</div>
        <div class="middle">三月\n收益</div>
        <div
          class="rightProduct"
        >{{productTwoList.threeMonthEarn===0?'--':productTwoList.threeMonthEarn}}</div>
      </div>
      <!-- 对比数据详情区域 -->
      <div class="compareDetail">
        <div
          class="leftProduct"
        >{{productOneList.sixMonthEarn===0?'--':productOneList.sixMonthEarn}}</div>
        <div class="middle">六月\n收益</div>
        <div
          class="rightProduct"
        >{{productTwoList.sixMonthEarn===0?'--':productTwoList.sixMonthEarn}}</div>
      </div>
      <!-- 对比数据详情区域 -->
      <div class="compareDetail">
        <div class="leftProduct">{{productOneList.oneYearEarn===0?'--':productOneList.oneYearEarn}}</div>
        <div class="middle">一年\n收益</div>
        <div class="rightProduct">{{productTwoList.oneYearEarn===0?'--':productTwoList.oneYearEarn}}</div>
      </div>
      <!-- 对比数据详情区域 -->
      <div class="compareDetail">
        <div
          class="leftProduct"
        >{{productOneList.threeYearEarn===0?'--':productOneList.threeYearEarn}}</div>
        <div class="middle">三年\n收益</div>
        <div
          class="rightProduct"
        >{{productTwoList.threeYearEarn===0?'--':productTwoList.threeYearEarn}}</div>
      </div>
    </scroll-view>
    <button class="clearBtn" @click="clearEvent">重置</button>
  </div>
</template>

<script>
import ChooseDialog from '@/components/productCompare/ChooseDialogCompare'
export default {
  components: {
    ChooseDialog
  },
  data () {
    return {
      showDialog1: false,
      showDialog2: false,
      //   获取选中的产品信息
      // TODO 如果字数超出，则用...代替
      productName1: '',
      productCode1: '',
      productType1: '',

      productName2: '',
      productCode2: '',
      productType2: '',

      // 产品一、二的数据
      productOneList: '',
      productTwoList: ''
    }
  },
  onUnload () {
    this.productTwoList = ''
    this.productOneList = ''

    this.productName1 = ''
    this.productCode1 = ''
    this.productType1 = ''

    this.productName2 = ''
    this.productCode2 = ''
    this.productType2 = ''
  },
  methods: {
    clearEvent () {
      this.productTwoList = ''
      this.productOneList = ''

      this.productName1 = ''
      this.productCode1 = ''
      this.productType1 = ''

      this.productName2 = ''
      this.productCode2 = ''
      this.productType2 = ''
    },
    //   项目一的弹窗开关
    openDialog1 () {
      this.showDialog1 = true
    },
    onClose1 () {
      this.showDialog1 = false
    },
    // 项目二的弹窗开关
    openDialog2 () {
      this.showDialog2 = true
    },
    onClose2 () {
      this.showDialog2 = false
    },
    // 第一：获取搜索后选中的值
    getProductName1 (productName, productCode, productType) {
      this.productName1 = productName
      this.productCode1 = productCode
      this.productType1 = productType
      // 根据 this.productCode1 发起请求 financialProduct/selectCompare
      this.getTotalEarn1(this.productCode1)
    },
    // 第二：获取搜索后选中的值
    getProductName2 (productName, productCode, productType) {
      this.productName2 = productName
      this.productCode2 = productCode
      this.productType2 = productType
      this.getTotalEarn2(this.productCode2)
    },
    /** 获取对比详细数据:1 */
    getTotalEarn1 (productCode) {
      this.$httpWX.get({
        url: '/financialProduct/selectCompare',
        data: {
          productCode: productCode
        }
      }).then(res => {
        console.log(res)
        this.productOneList = res
      })
    },
    /** 获取对比详细数据:2 */
    getTotalEarn2 (productCode) {
      this.$httpWX.get({
        url: '/financialProduct/selectCompare',
        data: {
          productCode: productCode
        }
      }).then(res => {
        console.log(res)
        this.productTwoList = res
      })
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
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* 滚动:比较区域 */
.scrollBox {
  border-radius: 15rpx;
  margin-top: 40rpx;
  background-color: #191b2a;
  height: 850rpx;
  width: 680rpx;
  white-space: nowrap;
  color: white;
  font-family: PingFang SC;
}
/** 产品名称选择区 */
.productName {
  width: 100%;
  height: 80rpx;
  /* background-color: brown; */
  display: flex;
  flex-wrap: nowrap;
}
.leftProduct > span {
  font-size: 32rpx;
  font-weight: bold;
}
.rightProduct > span {
  font-size: 32rpx;
  font-weight: bold;
}
/** 具体信息div */
.leftProduct {
  /* padding-left: 30rpx; */
  width: 40%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: cadetblue; */
}
.middle {
  width: 20%;
  display: flex;
  justify-content: center;
  color: #999999;
  align-items: center;
  background-color: #333333;
}
.rightProduct {
  /* padding-left: 30rpx; */
  width: 40%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: cadetblue; */
}
/** 数值比较区域 */
.compareArea {
  width: 100%;
  height: 80rpx;
}
.compareDetail {
  width: 100%;
  height: 140rpx;
  font-size: 30rpx;
  display: flex;
  flex-wrap: nowrap;
}
/* 比较的表头 */
.middle {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
}
/** 重置按钮 */
.clearBtn {
  margin-top: 60rpx;
  width: 680rpx;
  background-color: #191b2a;
  color: white;
  border-radius: 20rpx;
  font-size: 46rpx;
}
.clearBtn:hover {
  background-color: #333333;
}
</style>
