import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.less'

import router from '@/router'
import store from '@/store'
import registerElement from './element-plus'
import cfRequest from './network'

import App from './App.vue'

const app = createApp(App)

app.use(registerElement) // 注册element-plus组件
app.use(router)
app.use(store)

cfRequest.request({
  url: '/home/multidata'
})

app.mount('#app')
