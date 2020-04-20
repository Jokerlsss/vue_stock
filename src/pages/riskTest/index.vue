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
      ></RiskTestQA>
    </scroll-view>
    <button class="subBtn">提交</button>
    <BottomSpace></BottomSpace>
    <!-- //TODO: 增加提交按钮 -->
  </div>
</template>

<script>
import RiskTestTitle from '@/components/RiskTestTitle'
import RiskTestQA from '@/components/RiskTestQA'
import BottomSpace from '@/components/BottomSpace'
export default {
  data () {
    return {
      QAlist: [
        // {
        //   QdataName: '1',
        //   question: '您投资中可耐受何种程度的风险波动？',
        //   answer: [
        //     {
        //       AdataName: '1-1',
        //       answerText: '实现资产大幅增长，愿承担很大投资风险'
        //     },
        //     {
        //       AdataName: '1-2',
        //       answerText: '这是答案1-2'
        //     },
        //     {
        //       AdataName: '1-3',
        //       answerText: '这是答案1-3'
        //     }
        //   ]
        // },
        // {
        //   QdataName: '2',
        //   question: '这个是问题2',
        //   answer: [
        //     {
        //       AdataName: '2-1',
        //       answerText: '这是答案2-1'
        //     },
        //     {
        //       AdataName: '2-2',
        //       answerText: '这是答案2-2'
        //     },
        //     {
        //       AdataName: '2-3',
        //       answerText: '这是答案2-3'
        //     }
        //   ]
        // },
        // {
        //   QdataName: '3',
        //   question: '这个是问题3',
        //   answer: [
        //     {
        //       AdataName: '3-1',
        //       answerText: '这是答案3-1'
        //     },
        //     {
        //       AdataName: '3-2',
        //       answerText: '这是答案3-2'
        //     },
        //     {
        //       AdataName: '3-3',
        //       answerText: '这是答案3-3'
        //     }
        //   ]
        // }
      ]
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
    // TODO 提交问卷时，需要传入 userid
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
