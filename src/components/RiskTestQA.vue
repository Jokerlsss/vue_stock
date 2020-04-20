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
  methods: {
    // TODO 直接
    onChange (event) {
      console.log('onChange:', event.detail)
      this.radio = event.detail
    },
    onClick (event) {
      console.log('onClick', event.currentTarget.dataset.name)
      this.radio = event.currentTarget.dataset.name
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
