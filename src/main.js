import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例
const app = createApp(App)

// 配置全局错误处理器
app.config.errorHandler = (err, vm) => {
  console.error('捕获到全局错误:', err)
  console.error('错误发生在:', vm)
}

// 挂载应用
app.mount('#app')
