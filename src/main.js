import Vue from 'vue'
import App from './App'
import WXrequest from './utils/wx-request'

Vue.prototype.$httpWX = WXrequest

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
// 等价于 app.json
export default {
    config: {
        pages: [
            'pages/index/main',
            'pages/mine/main'
        ]
        // window: {
        //     backgroundTextStyle: 'light',
        //     navigationBarBackgroundColor: '#fff',
        //     navigationBarTitleText: '第一个小程序',
        //     navigationBarTextStyle: 'black'
        // }
    }
}
