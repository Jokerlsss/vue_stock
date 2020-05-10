import Vue from 'vue'
import Vuex from 'vuex'
// import { arrayIndexOf } from 'xe-utils/methods'

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
        totalEarn: 0,
        hadAsset: 0,

        // 答题问卷十一道题的状态
        answerOne: null,
        answerTwo: null,
        answerThree: null,
        answerFour: null,
        answerFive: null,
        answerSix: null,
        answerSeven: null,
        answerEight: null,
        // 答卷完成度
        finish: 0,
        // 答案数组
        answerList: [],
        // 用户信息
        userName: '',
        userID: '',
        investmentCharacter: ''
    },
    mutations: {
        /** 将用户信息保存在全局变量中 */
        changeUserName: (state, param) => {
            state.userName = param
        },
        changeInvestmentCharacter: (state, param) => {
            state.investmentCharacter = param
        },
        changeUserId: (state, param) => {
            state.userID = param
        },
        /** 风险测评：点击提交时触发（清空所有答案选项 & 完成度），将答案整合成数组（便于提交后端） */
        commitAnswer: (state) => {
            state.answerList = []
            // 将答案存进List中
            state.answerList.push(state.answerOne)
            state.answerList.push(state.answerTwo)
            state.answerList.push(state.answerThree)
            state.answerList.push(state.answerFour)
            state.answerList.push(state.answerFive)
            state.answerList.push(state.answerSix)
            state.answerList.push(state.answerSeven)
            state.answerList.push(state.answerEight)
            console.log('-------------')
            console.log('answerList', state.answerList)
            // 清空答案选项
            state.answerOne = null
            state.answerTwo = null
            state.answerThree = null
            state.answerFour = null
            state.answerFive = null
            state.answerSix = null
            state.answerSeven = null
            state.answerEight = null
            // 清空进度
            state.finish = 0
        },
        /** 风险测评：选择答案时触发 */
        chooseAnswer: (state, answerid) => {
            const questionid = answerid.substr(0, 1)
            if (questionid === '1') {
                // 完成度 +1
                // 只有第一次选择时 finish+1，之后继续选择同一道题则不算进总答题数
                if (state.answerOne === null) {
                    state.finish = state.finish + 1
                    console.log('state.finish', state.finish)
                }

                state.answerOne = answerid
                console.log(state.answerOne)
            } else if (questionid === '2') {
                // 完成度 +1
                // 只有第一次选择时 finish+1，之后继续选择同一道题则不算进总答题数
                if (state.answerTwo === null) {
                    state.finish = state.finish + 1
                    console.log('state.finish', state.finish)
                }

                state.answerTwo = answerid
                console.log(state.answerTwo)
            } else if (questionid === '3') {
                // 完成度 +1
                // 只有第一次选择时 finish+1，之后继续选择同一道题则不算进总答题数
                if (state.answerThree === null) {
                    state.finish = state.finish + 1
                    console.log('state.finish', state.finish)
                }

                state.answerThree = answerid
                console.log(state.answerThree)
            } else if (questionid === '4') {
                // 完成度 +1
                // 只有第一次选择时 finish+1，之后继续选择同一道题则不算进总答题数
                if (state.answerFour === null) {
                    state.finish = state.finish + 1
                    console.log('state.finish', state.finish)
                }

                state.answerFour = answerid
                console.log(state.answerFour)
            } else if (questionid === '5') {
                // 完成度 +1
                // 只有第一次选择时 finish+1，之后继续选择同一道题则不算进总答题数
                if (state.answerFive === null) {
                    state.finish = state.finish + 1
                    console.log('state.finish', state.finish)
                }

                state.answerFive = answerid
                console.log(state.answerFive)
                // 完成度 +1
            } else if (questionid === '6') {
                // 完成度 +1
                // 只有第一次选择时 finish+1，之后继续选择同一道题则不算进总答题数
                if (state.answerSix === null) {
                    state.finish = state.finish + 1
                    console.log('state.finish', state.finish)
                }

                state.answerSix = answerid
                console.log(state.answerSix)
            } else if (questionid === '7') {
                // 完成度 +1
                // 只有第一次选择时 finish+1，之后继续选择同一道题则不算进总答题数
                if (state.answerSeven === null) {
                    state.finish = state.finish + 1
                    console.log('state.finish', state.finish)
                }

                state.answerSeven = answerid
                console.log(state.answerSeven)
            } else if (questionid === '8') {
                // 完成度 +1
                // 只有第一次选择时 finish+1，之后继续选择同一道题则不算进总答题数
                if (state.answerEight === null) {
                    state.finish = state.finish + 1
                    console.log('state.finish', state.finish)
                }

                state.answerEight = answerid
                console.log(state.answerEight)
            }
        },
        // 在切换卡片时，清空资产数据防止重复累加（累计收益除外，累计收益无累加操作）
        clearAssetsInfo: (state) => {
            state.allAsset = 0
            state.dayAsset = 0
            state.hadAsset = 0
        },
        // 累计收益
        getTotalEarn: (state, totalEarn) => {
            state.totalEarn = parseFloat(totalEarn)
        },
        // 接收资产信息并累加
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
        // getTotalAsset: (state, totalAsset) => {
        //     if (totalAsset !== '累计收益') {
        //         // 保留两位小数
        //         state.totalAsset += parseFloat(totalAsset)
        //     }
        // },
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
