import Vue from 'vue'
import App from './App'

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
