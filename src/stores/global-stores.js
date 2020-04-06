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
        isChangeToScrollTable: false,

        // 个人资产信息
        allAsset: 0,
        dayAsset: 0,
        totalAsset: 0,
        hadAsset: 0
    },
    mutations: {
        // 在切换卡片时，清空资产数据防止重复累加
        clearAssetsInfo: (state) => {
            state.allAsset = 0
            state.dayAsset = 0
            state.totalAsset = 0
            state.hadAsset = 0
        },
        // 接收资产信息并累加
        // TODO：添加 累计收益 的计算方法
        getAssets: (state, assets) => {
            // 做数学运算时去除表头中文
            if (assets !== '资产') {
                // 保留两位小数
                state.allAsset += parseFloat(assets)
            }
            console.log('assets:', state.allAsset)
        },
        getDayEarn: (state, dayEarn) => {
            if (dayEarn !== '每日收益') {
                // 保留两位小数
                state.dayAsset += parseFloat(dayEarn)
            }
            console.log('dayEarn:', state.dayAsset)
        },
        getHadEarn: (state, hadEarn) => {
            if (hadEarn !== '持有收益') {
                // 保留两位小数
                state.hadAsset += parseFloat(hadEarn)
            }
            console.log('hadAsset:', state.hadAsset)
        },
        // 项目页面-切换成列表形式
        isChangeToScrollTable: (state, a) => {
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
