import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // 项目筛选按钮状态
    state: {
        checkStock: true,
        checkFund: true,
        checkGold: true,
        checkRegular: true,
        checkOther: true,
        isChangeToScrollTable: false
    },
    mutations: {
        // 项目页面-切换成列表形式
        isChangeToScrollTable: (state) => {
            if (state.isChangeToScrollTable === true) {
                state.isChangeToScrollTable = false
            } else {
                state.isChangeToScrollTable = true
            }
        },
        // 股票类型
        changeStock: (state) => {
            if (state.checkStock === true) {
                state.checkStock = false
            } else {
                state.checkStock = true
            }
        },
        // 基金类型
        changeFund: (state) => {
            if (state.checkFund === true) {
                state.checkFund = false
            } else {
                state.checkFund = true
            }
        },
        // 黄金类型
        changeGold: (state) => {
            if (state.checkGold === true) {
                state.checkGold = false
            } else {
                state.checkGold = true
            }
        },
        // 定期类型
        changeRegular: (state) => {
            if (state.checkRegular === true) {
                state.checkRegular = false
            } else {
                state.checkRegular = true
            }
        },
        // 其他类型
        changeOther: (state) => {
            if (state.checkOther === true) {
                state.checkOther = false
            } else {
                state.checkOther = true
            }
        }
    }
})
