  <!-- Description:自选页面-右侧弹出层中的内容 -->
<template>
  <div class="container">
    <div class="tipsText">选择展示项目</div>
    <!-- 筛选按钮 -->
    <div class="typeSwitch">
      <div class="typeSwitchCell">
        <van-tag round color="#FF3300" size="large" class="typeTag">股</van-tag>
        <van-switch :checked="checkStock" @change="changeStock" class="switch" size="48rpx" />
      </div>
      <div class="typeSwitchCell">
        <van-tag round color="#3399FF" size="large" class="typeTag">基</van-tag>
        <van-switch :checked="checkFund" @change="changeFund" class="switch" size="48rpx" />
      </div>
      <div class="typeSwitchCell">
        <van-tag round color="#FF9900" size="large" class="typeTag">金</van-tag>
        <van-switch :checked="checkGold" @change="changeGold" class="switch" size="48rpx" />
      </div>
      <div class="typeSwitchCell">
        <van-tag round color="#009900" size="large" class="typeTag">定</van-tag>
        <van-switch :checked="checkRegular" @change="changeRegular" class="switch" size="48rpx" />
      </div>
      <div class="typeSwitchCell">
        <van-tag round color="#999999" size="large" class="typeTag">其</van-tag>
        <van-switch :checked="checkOther" @change="changeOther" class="switch" size="48rpx" />
      </div>
      <!-- 底部空白处 -->
      <div class="bottomSpace"></div>
    </div>
  </div>
</template>

<script>
// 将各个 switch 状态存进全局变量
import globalStore from '../stores/global-stores'
export default {
  // 将每个类型的可见状态传递给 全局变量
  computed: {
    checkStock () {
      return globalStore.state.checkStock
    },
    checkFund () {
      return globalStore.state.checkFund
    },
    checkGold () {
      return globalStore.state.checkGold
    },
    checkRegular () {
      return globalStore.state.checkRegular
    },
    checkOther () {
      return globalStore.state.checkOther
    }
  },
  data () {
    return {
    }
  },
  methods: {
    // e.mp.detail：改变后的状态，如当前为 true ，则 detail 为 false
    changeStock () {
      globalStore.commit('changeStock')
    },
    changeFund () {
      globalStore.commit('changeFund')
    },
    changeGold () {
      globalStore.commit('changeGold')
    },
    changeRegular () {
      globalStore.commit('changeRegular')
    },
    changeOther () {
      globalStore.commit('changeOther')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  height: auto;
}
/*---------- 提示内容 DIV ----------*/
.tipsText {
  height: 40%;
  width: 100%;
  color: #9898a0;
  font-size: 30rpx;
  display: flex;
  justify-content: center;
  padding-top: 20rpx;
}
/*---------- 筛选按钮 DIV ----------*/
.typeSwitch {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
/* 筛选按钮各行 DIV */
.typeSwitchCell {
  margin-top: 20rpx;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}
.typeTag {
  margin-right: 10rpx;
}
/* 筛选按钮 */
.switch {
  margin-top: 8rpx;
}
/* 底部留白 */
.bottomSpace {
  height: 20%;
  width: 100%;
}
</style>
