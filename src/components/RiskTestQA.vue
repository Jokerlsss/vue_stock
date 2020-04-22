<template>
  <div class="container">
    <div class="question">
      <p>问题{{questionid}}：{{questionContent}}</p>
    </div>
    <div class="answer">
      <van-radio-group :value="radio" @change="onChange">
        <van-cell-group>
          <van-cell
            :title="answerItem.answercontent"
            clickable
            :data-name="answerItem.answerid"
            @click="onClick"
            v-for="(answerItem,index) in answerList"
            :key="index"
          >
            <van-radio slot="right-icon" :name="answerItem.answerid" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
  </div>
</template>

<script>
import globalStore from '../stores/global-stores'
export default {
  props: {
    questionContent: '',
    questionid: '',
    answerList: ''
  },
  data () {
    return {
      radio: '',
      questionid: this.questionid,
      answerList: this.answerList,
      questionContent: this.questionContent
    }
  },
  onUnload () {
    this.clearRadio()
    globalStore.state.finish = 0
  },
  methods: {
    // TODO 每次选中答案将答案选项加到全局变量中，存为List，等提交的时候，将该List提交到后端
    onChange (event) {
      console.log('onChange:', event.detail)
      this.radio = event.detail
    },
    onClick (event) {
      // 将 answerid 传递给全局变量
      const answerid = event.currentTarget.dataset.name
      globalStore.commit('chooseAnswer', answerid)
      // 选中值
      this.radio = event.currentTarget.dataset.name
      console.log('onClick', answerid)
    },
    clearRadio () {
      this.radio = ''
    }
  }
}
</script>

<style scoped>
.container {
  height: auto;
  width: 680rpx;
  margin-top: 40rpx;
  background-color: #191b2a;
  color: #9898a0;
  border-radius: 20rpx;
  font-family: PingFang SC;
}
.question {
  width: auto;
  min-height: 70rpx;
  height: auto;
  font-size: 30rpx;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.question > p {
  margin-left: 30rpx;
}
.answer {
  height: auto;
  width: 100%;
}
</style>
