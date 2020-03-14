<template>
  <div class="container">
    <div class="question">
      <p @click="comeon">问题{{QdataName}}：{{question}}</p>
    </div>
    <div class="answer">
      <van-radio-group :value="radio" @change="onChange">
        <van-cell-group>
          <van-cell
            :title="answerItem.answerText"
            clickable
            :data-name="answerItem.AdataName"
            @click="onClick"
            v-for="(answerItem,index) in answerList"
            :key="index"
          >
            <van-radio slot="right-icon" :name="answerItem.AdataName" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    QdataName: '',
    question: '',
    answerList: ''
  },
  data () {
    return {
      radio: '',
      answerList: this.answerList,
      QdataName: this.QdataName,
      question: this.question
    }
  },
  methods: {
    comeon () {
      console.log(this.answerList)
      console.log(this.QdataName)
      console.log(this.question)
    },
    onChange (event) {
      this.setData({
        radio: event.detail
      })
    },
    onClick (event) {
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
  height: 70rpx;
  font-size: 32rpx;
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
