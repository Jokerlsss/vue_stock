<template>
  <div class="container">
    <!-- 头像 -->
    <div class="userImg">
      <van-image fit="cover" round width="80rpx" height="80rpx" src="../../images/user.png" />
    </div>
    <div class="userName">{{username}}</div>
    <div class="userCharacter">
      <!-- <van-tag type="primary" size="large" round>稳健</van-tag> -->
      <CharacterTag :characterType="investmentCharacter"></CharacterTag>
    </div>
  </div>
</template>

<script>
import CharacterTag from '@/components/CharacterTag'
import globalStore from '../stores/global-stores'
export default {
  props: {
    investmentCharacter: ''
  },
  computed: {
    username () {
      return globalStore.state.userName
    }
  },
  components: {
    CharacterTag
  },
  data () {
    return {
      investmentCharacter: this.investmentCharacter
    }
  },
  onLoad () {
  },
  methods: {
  }
}
</script>

<style scoped>
.container {
  font-family: PingFang SC;
  margin-top: 30rpx;
  width: 600rpx;
  height: 80rpx;
  display: flex;
}
/* 用户头像 */
.userImg {
  width: 80rpx;
  height: 100%;
}
/* 用户名 */
.userName {
  display: flex;
  align-items: center;
  width: 400rpx;
  height: 100%;
  color: #9898a0;
  font-size: 40rpx;
  padding-left: 20rpx;
}
/* 用户投资性格 */
.userCharacter {
  width: 120rpx;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>