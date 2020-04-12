<template>
  <div class="container">
    <!-- // TODO: 根据是否已买来判断该展现什么样的模块组件出来 -->
    <!-- 项目基础信息 -->
    <projectBaseInfo
      :productName="projectBaseData.productName"
      :productCode="projectBaseData.productCode"
      :riskType="projectBaseData.riskType"
      :productType="projectBaseData.productType"
    ></projectBaseInfo>
    <!-- 卖出、买入按钮 -->
    <projectOprateBtn
      :productName="projectBaseData.productName"
      :productCode="projectBaseData.productCode"
      :productType="projectBaseData.productType"
      :dateOfEstablishment="projectBaseData.dateOfEstablishment"
      :amountOfAssets="personalFinancialAssets.amountOfAssets"
    ></projectOprateBtn>
    <!-- 走势图 -->
    <div class="trend">
      <div class="btnDiv">
        <!-- // TODO: 当按钮处于激活态时，应该禁用(禁用的样式如何修改) -->
        <button
          class="chooseBtn"
          :class="{'active':activeStatusOneMonth}"
          @click="changeActiveStatusOneMonth"
        >近一月</button>
        <button
          class="chooseBtn"
          :class="{'active':activeStatusThreeMonth}"
          @click="changeActiveStatusThreeMonth"
        >近三月</button>
        <button
          class="chooseBtn"
          :class="{'active':activeStatusSixMonth}"
          @click="changeActiveStatusSixMonth"
        >近六月</button>
        <button
          class="chooseBtn"
          :class="{'active':activeStatusOneYear}"
          @click="changeActiveStatusOneYear"
        >近一年</button>
        <button
          class="chooseBtn"
          :class="{'active':activeStatusThreeYear}"
          @click="changeActiveStatusThreeYear"
        >近三年</button>
      </div>
      <!-- 走势图 -->
      <projectTrend :trendData="trendData"></projectTrend>
    </div>
    <!-- 详细信息 -->
    <ProjectDetailInfo
      v-for="(detailItem,index) in detailInfoList"
      :key="index"
      :title="detailItem.title"
      :info="detailItem.info"
    ></ProjectDetailInfo>
    <BottomSpace></BottomSpace>
  </div>
</template>

<script>
import projectBaseInfo from '@/components/projectDetail/ProjectBaseInfo'
import projectTrend from '@/components/projectDetail/ProjectTrend'
import projectOprateBtn from '@/components/projectDetail/ProjectOprateBtn'
import ProjectDetailInfo from '@/components/projectDetail/ProjectDetailInfo'
import BottomSpace from '@/components/BottomSpace'
export default {
  components: {
    projectBaseInfo,
    projectOprateBtn,
    projectTrend,
    ProjectDetailInfo,
    BottomSpace
  },
  mounted () {
    // 根据 code 获取后台数据
    this.getProjectInfo()
  },
  /** 获取从主页跳转过来的活动数据：id和活动名称 */
  onLoad (option) {
    this.productCode = option.productCode
    console.log('productCode', this.productCode)
    // 根据 code & time 获取后台数据
    this.getTrendInfo()
    this.getPersonalAssets()
  },
  // TODO: 接收 flag 参数，0 为未买项目，1 为已买项目
  data () {
    return {
      // 走势图数据
      trendData: [],
      // time：默认查询近一个月，即取 -1
      time: -1,
      // 按钮选中状态
      activeStatusOneMonth: true,
      activeStatusThreeMonth: false,
      activeStatusSixMonth: false,
      activeStatusOneYear: false,
      activeStatusThreeYear: false,

      projectBaseData: '',
      projectDetailData: '',
      personalFinancialAssets: '',
      // TODO: 把控件改成固定 title，通过 invisable 和 type 判断该显示哪些
      // TODO: 控件判断类型，用不同数组来接收
      detailInfoList: [
        {
          title: '基金经理',
          info: '张三'
        },
        {
          title: '成立时间',
          info: '2017-3-4'
        },
        {
          title: '资产规模',
          info: '10亿'
        }
      ]
    }
  },
  methods: {
    /** 根据按钮的不同展示不同内容 */
    changeActiveStatusOneMonth () {
      // time ：-1 为 前一个月~现在
      this.time = -1
      this.activeStatusOneMonth = true
      this.activeStatusThreeMonth = false
      this.activeStatusSixMonth = false
      this.activeStatusOneYear = false
      this.activeStatusThreeYear = false
      // 获取走势图
      this.getTrendInfo()
    },
    changeActiveStatusThreeMonth () {
      // time ：-3 为 前三个月~现在
      this.time = -3
      this.activeStatusOneMonth = false
      this.activeStatusThreeMonth = true
      this.activeStatusSixMonth = false
      this.activeStatusOneYear = false
      this.activeStatusThreeYear = false
      this.getTrendInfo()
    },
    changeActiveStatusSixMonth () {
      this.time = -6
      this.activeStatusOneMonth = false
      this.activeStatusThreeMonth = false
      this.activeStatusSixMonth = true
      this.activeStatusOneYear = false
      this.activeStatusThreeYear = false
      this.getTrendInfo()
    },
    changeActiveStatusOneYear () {
      this.time = -12
      this.activeStatusOneMonth = false
      this.activeStatusThreeMonth = false
      this.activeStatusSixMonth = false
      this.activeStatusOneYear = true
      this.activeStatusThreeYear = false
      this.getTrendInfo()
    },
    changeActiveStatusThreeYear () {
      this.time = -36
      this.activeStatusOneMonth = false
      this.activeStatusThreeMonth = false
      this.activeStatusSixMonth = false
      this.activeStatusOneYear = false
      this.activeStatusThreeYear = true
      this.getTrendInfo()
    },
    /** 获取个人资产数据 */
    getPersonalAssets () {
      this.$httpWX.get({
        url: '/personalFinancialAssets/selectOne',
        data: {
          productCode: this.productCode,
          userid: 1
        }
      }).then(res => {
        this.personalFinancialAssets = res
      })
    },
    /** 获取走势图数据 */
    getTrendInfo () {
      this.$httpWX.get({
        url: '/financialProduct/selectToTrend',
        data: {
          productCode: this.productCode,
          // time -1:近一月  -3:近三月  -6：近半年  -12:近一年  -36：近三年
          time: this.time
        }
      }).then(res => {
        this.trendData = res.worthList
        console.log('this.trendData:', this.trendData)
      })
    },
    /** 根据 type 获取项目信息 */
    getProjectInfo () {
      this.$httpWX.get({
        url: '/financialProduct/selectProjectDetail',
        data: {
          productCode: this.productCode
        }
      }).then(res => {
        // TODO: 不同类型的项目展现出来的字段不一样，不如使用多页面来展现，就可以省去这些 if 判断
        console.log(res)
        this.projectBaseData = res.financialProduct
        if (this.projectBaseData.productType === '股票') {
          this.projectDetailData = res.stock
        } else if (this.projectBaseData.productType === '基金') {
          this.projectDetailData = res.fund
        } else if (this.projectBaseData.productType === '定期') {
          this.projectDetailData = res.regular
        } else if (this.projectBaseData.productType === '黄金') {
          this.projectDetailData = res.gold
        }
        console.log(this.projectDetailData)
        console.log('projectBaseData', this.projectBaseData)
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: PingFang SC;
}
.trend {
  margin-top: 50rpx;
  height: auto;
  width: 680rpx;
}
/** 筛选时间按钮 */
.btnDiv {
  width: 100%;
  display: flex;
}
.chooseBtn {
  border-radius: 0;
  width: auto;
  font-size: 26rpx;
  background-color: #191b2a;
  color: #9898a0;
}
/** 按钮激活样式 */
.active {
  background-color: #ff6600;
  color: white;
}
</style>
