<template>
  <div class="container">
    <Steps
      v-for="(oprateItem,index) in stepsList"
      :key="index"
      :operateDate="oprateItem.operateDate"
      :operateDesc="oprateItem.operateDesc"
    ></Steps>
  </div>
</template>

<script>
import Steps from '@/components/Steps'
export default {
  components: {
    Steps
  },
  data () {
    return {
      stepsList: [
        {
          operateDate: '2020-3-11 14:23:21',
          operateDesc: '加仓 招商中证白酒 5000 元'
        },
        {
          operateDate: '2020-3-10 14:23:21',
          operateDesc: '加仓 招商中证白酒 5000 元'
        },
        {
          operateDate: '2020-3-9 14:23:21',
          operateDesc: '加仓 招商中证白酒 5000 元'
        },
        {
          operateDate: '2020-3-8 14:23:21',
          operateDesc: '加仓 招商中证白酒 5000 元'
        }
      ]
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
