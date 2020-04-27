<!-- Description: 资产占比模块 -->
<template>
  <div class="container">
    <!-- 标题 -->
    <div class="titleDiv">
      <p class="titleText">资产占比(按风险)</p>
    </div>
    <!-- 名称、金额、占比图、占比数值 -->
    <div class="content" v-for="(projectItem,itemIndex) in proportionOfAssets" :key="itemIndex">
      <div class="project">
        <div class="projectItem">{{projectItem.projectItem}}</div>
      </div>
      <div class="asset">
        <div class="assetItem">{{projectItem.assetItem}}</div>
      </div>
      <div class="proportionProgress">
        <div class="progressItem">
          <ProportionProgress :width="projectItem.proportionItem"></ProportionProgress>
        </div>
        <!-- <div class="progressItem">{{projectItem.progressItem}}</div> -->
      </div>
      <div class="proportionNum">
        <div class="proportionItem">{{projectItem.proportionItem}}</div>
      </div>
    </div>
    <!-- 建议 -->
    <div class="viewSuggestion" @click="cutSuggestionVisable">
      <van-transition :show="isSuggestionVisable" name="fade-down" duration="500">
        <div class="visableSuggestion" v-if="isSuggestionVisable">
          <div class="suggestionResult">
            <p>{{suggestion.result}}</p>
          </div>
          <div class="suggestionContent">
            <p>{{suggestion.suggestions}}</p>
          </div>
        </div>
      </van-transition>
      <div class="inVisableSuggestion" v-if="true">
        <img :src="isSuggestionVisable?visablesuggestionImg:inVisableSuggestionImg" />
      </div>
    </div>
  </div>
</template>

<script>
import ProportionProgress from '@/components/ProportionProgress'
export default {
  components: {
    ProportionProgress
  },
  data () {
    return {
      userid: 1,
      isSuggestionVisable: false,
      visablesuggestionImg: '../../static/images/up.png',
      inVisableSuggestionImg: '../../static/images/down.png',
      suggestion: '',
      proportionOfAssets: [
        // {
        //   projectItem: '股票',
        //   assetItem: '51324',
        //   progressItem: '51%',
        //   proportionItem: '51%'
        // },
        // {
        //   projectItem: '基金',
        //   assetItem: '4032.1',
        //   progressItem: '3.6%',
        //   proportionItem: '3.6%'
        // },
        // {
        //   projectItem: '黄金',
        //   assetItem: '201',
        //   progressItem: '0.4%',
        //   proportionItem: '0.4%'
        // },
        // {
        //   projectItem: '定期',
        //   assetItem: '40000',
        //   progressItem: '42%',
        //   proportionItem: '42%'
        // },
        // {
        //   projectItem: '其他',
        //   assetItem: '3201.24',
        //   progressItem: '3%',
        //   proportionItem: '3%'
        // }
      ]
    }
  },
  onLoad () {
    this.getTotalEarn()
  },
  methods: {
    // 获取各类型资产
    getTotalEarn () {
      this.$httpWX.get({
        url: '/personalFinancialAssets/getAssetsFromRisk',
        data: {
          userid: this.userid
        }
      }).then(res => {
        console.log(res)
        this.proportionOfAssets = res.assetsList
        this.suggestion = res.suggestion
        console.log(this.suggestion)
      })
    },
    // 切换建议可见性
    cutSuggestionVisable () {
      if (this.isSuggestionVisable === true) {
        this.isSuggestionVisable = false
      } else {
        this.isSuggestionVisable = true
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 30rpx;
  width: 680rpx;
  height: auto;
  border-radius: 20rpx;
  background-color: #191b2a;
  display: flex;
  flex-wrap: wrap;
  font-family: PingFang SC;
}
/*--------- 标题 ---------*/
.titleDiv {
  font-size: 32rpx;
  height: 80rpx;
  width: 100%;
  color: white;
  border-bottom: 1px solid #515151;
  border-radius: 20rpx 20rpx 0 0;
  background-color: #5e5e5e;
}
.titleText {
  margin-top: 20rpx;
  margin-left: 30rpx;
}
/*--------- 下部内容部分 ---------*/
.content {
  height: 80rpx;
  width: 100%;
  display: flex;
  color: white;
}
/* 项目 */
.project {
  width: 120rpx;
  height: 100%;
  background-color: #30323f;
  font-size: 32rpx;
  display: flex;
  flex-wrap: wrap;
}
/* 项目名称 item */
.projectItem {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 资产 */
.asset {
  width: 250rpx;
  display: flex;
  flex-wrap: wrap;
}
.assetItem {
  width: 100%;
  height: 100%;
  display: flex;
  font-weight: bold;
  align-items: center;
  padding-left: 20rpx;
}
/* 进度条 & 进度数值 */
.proportionProgress {
  display: flex;
  flex-wrap: wrap;
  width: 220rpx;
  height: 100%;
}
/* 进度条 item */
.progressItem {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 20rpx;
}

/* 占比值 */
.proportionNum {
  width: 100rpx;
  margin-right: 20rpx;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.proportionItem {
  height: 100%;
  display: flex;
  align-items: center;
}
/* 查看建议 */
.viewSuggestion {
  height: auto;
  width: 100%;
  border-radius: 0 0 20rpx 20rpx;
}
.inVisableSuggestion {
  height: 50rpx;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inVisableSuggestion > img {
  height: 30rpx;
  width: 30rpx;
  background-color: #000;
  opacity: 0.1;
}
.visableSuggestion {
  height: auto;
  background-color: #191b2a;
  color: #ff6600;
  /* text-align: center; */
  font-size: 28rpx;
  width: 100%;
}
.visableSuggestion > p {
  margin: 20rpx;
}
/** 建议内容 */
.suggestionContent {
  display: flex;
  color: #f3f3f3;
  margin: 30rpx;
}
/** 建议结果 如：过于激进 */
.suggestionResult {
  display: flex;
  justify-content: center;
}
</style>
