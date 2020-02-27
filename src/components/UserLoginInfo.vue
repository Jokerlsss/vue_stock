<template>
  <div class="container">
    <!-- 头像 -->
    <div class="userImg">
      <van-image fit="cover" round width="80rpx" height="80rpx" src="../../images/user.png" />
    </div>
    <div class="userName">Joker-ls</div>
    <div class="userCharacter">
      <!-- <van-tag type="primary" size="large" round>稳健</van-tag> -->
      <CharacterTag characterType="稳健"></CharacterTag>
    </div>
  </div>
</template>

<script>
import CharacterTag from '@/components/CharacterTag'
export default {
  components: {
    CharacterTag
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