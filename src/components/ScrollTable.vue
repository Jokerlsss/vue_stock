<!-- Descripion：scroll-view 滑动表格-->
<template>
  <div class="container">
    <!-- 滚动 -->
    <!-- enable-flex 将滚动控件变为 flex 布局的容器 -->
    <scroll-view class="scrollBox" scroll-x="true">
      <div class="item" v-for="(item,index) in list" :key="index">{{item}}</div>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}
</script>

<style scoped>
.container {
  height: 100rpx;
  width: 680rpx;
}
.scrollBox {
  width: 100%;
  height: 100%;
  white-space: nowrap;
  display: flex;
  background-color: #8989a0;
}
/* 
inline:行内元素。可与其他元素共享一行，但不可调宽高，padding 有效，margin 左右有效
block:块级元素。与其他元素不共享一行，能调宽高，默认填满父级元素。padding、margin 均有效
inline-block:可与其他元素共享的块级元素
 */
.item {
  height: 100%;
  width: 200rpx;
  display: inline-block;
  border: 1px solid #ffffff;
}
</style>
