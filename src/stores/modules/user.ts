import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '../../api/user'

/**
 * 使用pinia定义一个名为'big-user'的store。
 * 这个store用于管理用户的登录状态和信息。
 */
// 用户模块 token setToken removeToken
export const useUserStore = defineStore(
  'big-user',
  () => {
    // 用户登录令牌的ref。
    const token = ref('')

    /**
     * 设置用户登录令牌。
     * @param newToken 新的登录令牌。
     */
    const setToken = (newToken) => {
      token.value = newToken
    }

    /**
     * 清除用户登录令牌。
     */
    const removeToken = () => {
      token.value = ''
    }

    // 存储用户信息，对象形式。
    const user = ref({})

    /**
     * 异步获取用户信息。
     * @returns {Promise<void>} 无返回值，但会更新user ref。
     */
    const getUser = async () => {
      const res = await userGetInfoService() // 请求获取数据
      user.value = res.data.data
    }

    /**
     * 设置用户信息。
     * @param obj 新的用户信息对象。
     */
    const setUser = (obj) => {
      user.value = obj
    }

    // 返回store的状态和方法。
    return {
      token,
      setToken,
      removeToken,
      user,
      getUser,
      setUser
    }
  },
  {
    persist: true
  }
)
