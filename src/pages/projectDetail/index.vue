<template>
  <div class="container">
    <!-- // TODO: 根据是否已买来判断该展现什么样的模块组件出来 -->
    <!-- 项目基础信息 -->
    <projectBaseInfo></projectBaseInfo>
    <!-- 卖出、买入按钮 -->
    <projectOprateBtn></projectOprateBtn>
    <!-- 走势图 -->
    <projectTrend></projectTrend>
    <!-- 详细信息 -->
    <ProjectDetailInfo
      v-for="(detailItem,index) in detailInfoList"
      :key="index"
      :title="detailItem.title"
      :info="detailItem.info"
    ></ProjectDetailInfo>
    <BottomSpace></BottomSpace>
  </div>
</template>

<script>
import projectBaseInfo from '@/components/projectDetail/ProjectBaseInfo'
import projectTrend from '@/components/projectDetail/ProjectTrend'
import projectOprateBtn from '@/components/projectDetail/ProjectOprateBtn'
import ProjectDetailInfo from '@/components/projectDetail/ProjectDetailInfo'
import BottomSpace from '@/components/BottomSpace'
export default {
  components: {
    projectBaseInfo,
    projectOprateBtn,
    projectTrend,
    ProjectDetailInfo,
    BottomSpace
  },
  // TODO: 接收 flag 参数，0 为未买项目，1 为已买项目
  data () {
    return {
      detailInfoList: [
        {
          title: '基金经理',
          info: '张三'
        },
        {
          title: '成立时间',
          info: '2017-3-4'
        },
        {
          title: '资产规模',
          info: '10亿'
        }
      ]
    }
  },
  methods: {
    // TODO: 接收从前端传进来的 code ，用 code 去发起请求查询详细信息
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: PingFang SC;
}
</style>
