<template>
  <div class="container">
    <RiskTestTitle></RiskTestTitle>
    <scroll-view class="scrollBox" scroll-y="true">
      <RiskTestQA
        v-for="(testItem,index) in QAlist"
        :key="index"
        :answerList="testItem.answerList"
        :questionid="testItem.questionid"
        :questionContent="testItem.questionContent"
        ref="riskTestQA"
      ></RiskTestQA>
    </scroll-view>
    <button class="subBtn" @click="commitEvent">提交</button>
    <BottomSpace></BottomSpace>
    <!-- 提交成功后的提示 -->
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import globalStore from '../../stores/global-stores'

import Toast from '../../../static/vant/toast/toast'
import RiskTestTitle from '@/components/RiskTestTitle'
import RiskTestQA from '@/components/RiskTestQA'
import BottomSpace from '@/components/BottomSpace'
export default {
  data () {
    return {
      QAlist: []
    }
  },
  components: {
    RiskTestTitle,
    RiskTestQA,
    BottomSpace
  },
  onLoad () {
    this.getQA()
  },
  methods: {
    commitEvent () {
      if (globalStore.state.finish === 8) {
        globalStore.commit('commitAnswer')
        // TODO 清空 radio 已选的值
        this.$httpWX.get({
          url: '/answer/commitAnswer',
          data: {
            answerList: globalStore.state.answerList,
            userid: globalStore.state.userID
          }
        }).then(res => {
          /** 清空所有 radio 选项 */
          // this.$refs['riskTestQA'].clearRadio()
          console.log(res)
          Toast({
            type: 'success',
            message: ' 提交成功\n\n您是' + res + '型',
            onClose: () => {
              // 在提示关闭后，跳转到项目页面
              this.toMinePage()
            }
          })
          // TODO 提交成功后，清空答案数组
        })
      } else {
        Toast({
          type: 'fail',
          message: '请填完整'
        })
      }
    },
    /** 跳转到个人主页 */
    toMinePage () {
      wx.switchTab({
        url: '/pages/mine/main'
      })
    },
    getQA () {
      this.$httpWX.get({
        url: '/question/getQA'
      }).then(res => {
        console.log(res)
        this.QAlist = res
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
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
/* 滚动容器 */
.scrollBox {
  max-height: 750rpx;
  width: 680rpx;
  white-space: nowrap;
  color: white;
  font-family: PingFang SC;
}
.subBtn {
  margin-top: 60rpx;
  width: 680rpx;
  height: 80rpx;
  background-color: #cc6600;
  color: #ffffff;
  font-size: 36rpx;
}
</style>
