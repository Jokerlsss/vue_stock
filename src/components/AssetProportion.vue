<!-- Description: 资产占比模块 -->
<template>
  <div class="container">
    <div class="titleDiv">
      <p class="titleText">资产占比</p>
    </div>
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
      proportionOfAssets: [
        {
          projectItem: '股票',
          assetItem: '51324',
          progressItem: '51%',
          proportionItem: '51%'
        },
        {
          projectItem: '基金',
          assetItem: '4032.1',
          progressItem: '3.6%',
          proportionItem: '3.6%'
        },
        {
          projectItem: '黄金',
          assetItem: '201',
          progressItem: '0.4%',
          proportionItem: '0.4%'
        },
        {
          projectItem: '定期',
          assetItem: '40000',
          progressItem: '42%',
          proportionItem: '42%'
        },
        {
          projectItem: '其他',
          assetItem: '3201.24',
          progressItem: '3%',
          proportionItem: '3%'
        }
      ]
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
  width: 210rpx;
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
  width: 260rpx;
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

/* 进度值 */
.proportionNum {
  width: 100rpx;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.proportionItem {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
