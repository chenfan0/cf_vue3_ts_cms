import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.less'

import router from '@/router'
import store from '@/store'
import registerElement from './element-plus'
import { initialLoginStore } from '@/store'

import App from './App.vue'

const app = createApp(App)

app.use(registerElement) // 注册element-plus组件
app.use(store)
initialLoginStore(store)
app.use(router)
app.mount('#app')
