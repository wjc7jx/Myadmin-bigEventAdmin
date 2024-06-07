// 导入主样式文件
import '@/assets/main.scss'
// 导入pinia状态管理模块，对于pinia的处理在store/index.ts中
import pinia from './stores'
// 导入Vue Router路由模块
import router from './router'
// 导入Vue应用实例创建函数
import { createApp } from 'vue'
// 导入应用的主组件
import App from './App.vue'

// 创建Vue应用实例
const app = createApp(App)
// 注册pinia状态管理模块
app.use(pinia)
// 注册路由模块
app.use(router)

// 将应用实例挂载到HTML元素上
app.mount('#app')
