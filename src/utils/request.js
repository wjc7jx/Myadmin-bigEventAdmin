// 导入用户仓库模块
import { useUserStore } from '@/stores/modules/user'
// 导入axios库用于发起HTTP请求
import axios from 'axios'
// 导入路由器模块，用于在HTTP请求出错时进行路由跳转
import router from '@/router'
// 导入Element Plus的Message组件，用于显示提示信息
import { ElMessage } from 'element-plus'

// 定义基础URL，用于axios实例化时配置请求的服务器地址
const baseURL = 'http://big-event-vue-api-t.itheima.net'

// 创建一个axios实例，配置基础URL和超时时间
const instance = axios.create({
  baseURL,
  timeout: 100000
})
/* instance实例的主要功能：
    属性：
    defaults: 包含 axios 的默认配置，例如 baseURL、timeout 等。
    interceptors: 请求拦截器和响应拦截器，可以通过设置拦截器来在请求发起前或响应返回后执行一些操作。
    （下方通过instance.interceptors.request.use设置拦截器
    其中request是请求，response是响应）
    方法：
    request(config): 发送 HTTP 请求，返回一个 Promise 对象。
    get(url, config): 发送 GET 请求。
    post(url, data, config): 发送 POST 请求。
    其他 HTTP 请求方法，如 put, delete, patch 等。
*/

// 配置请求拦截器，用于在每个请求发送前添加用户认证信息
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 使用用户仓库钩子获取用户令牌
    const userStore = useUserStore()
    // 如果用户令牌存在，将其添加到请求头的Authorization字段
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    // 返回配置对象
    return config
  },
  (err) => Promise.reject(err) // 错误处理，直接拒绝请求
)

// 配置响应拦截器，用于处理服务器返回的响应
// 响应拦截器
//
instance.interceptors.response.use(
  (res) => {
    // 后端返回0，表示成功，直接返回响应
    if (res.data.code === 0) {
      return res
    }
    // 否则，使用Element Plus的Message组件显示错误信息
    ElMessage({ message: res.data.message || '服务异常', type: 'error' })
    // 拒绝请求并返回错误数据，若是res未携带错误信息，则返回服务异常
    return Promise.reject(res.data)
  },
  (err) => {
    // 错误默认情况，只给提示
    ElMessage({
      message: err.response.data.message || '服务异常',
      type: 'error'
    })
    // 打印错误日志
    console.log(err)
    // 如果响应码为401，表示未授权，跳转到登录页面
    if (err.response?.status === 401) {
      router.push('/login')
    }
    // 拒绝请求并返回错误对象
    return Promise.reject(err)
  }
)

// 导出axios实例，供其他模块使用
export default instance
// 导出基础URL，用于手动构造请求时使用
export { baseURL }
