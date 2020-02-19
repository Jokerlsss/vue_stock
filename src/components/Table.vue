<template>
  <div class="container">
    <div class="table">
      <div class="tr" v-for="(itemTr,indexTr) in rowsList" :key="indexTr">
        <div
          class="td"
          :style="width"
          v-for="(itemTd,indexTd) in colsList"
          :key="indexTd"
        >{{colsList}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rows: '',
    cols: ''
  },
  data () {
    return {
      width: '',
      rows: this.rows,
      cols: this.cols,
      rowsList: [],
      colsList: []
    }
  },
  created () {
    this.countColsWidth()
    this.pushList()
  },
  methods: {
    countColsWidth: function () {
      var temp = 100 / this.cols
      this.width = 'width:' + temp + '%'
      console.log(this.width)
    },
    pushList: function () {
      for (var i = 1; i <= this.rows; i++) {
        this.rowsList[i] = i
        console.log(this.rowsList[i])
      }
      for (var j = 1; j <= this.cols; j++) {
        this.colsList[j] = j
        console.log(this.colsList[j])
      }
    }
  }
}
</script>

<style scoped>
.container {
  height: 500rpx;
  width: 680rpx;
  background-color: brown;
}
.table {
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: white;
}
.tr {
  height: 80rpx;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
.td {
  height: 100%;
  /* width: 33.3%; */
}
/* .tb {
  display: flex;
  flex-wrap: wrap;
  height: 100rpx;
  width: 680rpx;
  color: aliceblue;
}
.tb > tr {
  border: 1px solid white;
  width: 680rpx;
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
}
.tb > td {
  width: auto;
  height: 100%;
  display: inline-block;
} */
</style>
