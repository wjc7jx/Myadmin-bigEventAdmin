/**
 * 初始化并配置Vue Router实例。
 * 使用Vue Router来管理应用中的路由，连接不同的组件和页面。
 * 设置了两个主要路由：登录页面和主应用布局，主布局下包含了多个子路由，用于展示不同的功能模块。
 * 在路由跳转前添加了一个全局前置守卫，用于拦截未登录用户访问需要登录才能访问的页面。
 */
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'

// 创建Vue Router实例
const router = createRouter({
  // 使用Vue Router的Web历史模式来处理页面的导航
  history: createWebHistory(import.meta.env.BASE_URL),
  // 定义路由配置
  routes: [
    // 登录页面路由配置
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
    // 主应用布局路由配置，包含多个子路由
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/article/manage',
      children: [
        // 文章管理页面路由配置
        {
          path: '/article/manage',
          component: () => import('@/views/article/ArticleManage.vue')
        },
        // 文章频道页面路由配置
        {
          path: '/article/channel',
          component: () => import('@/views/article/ArticleChannel.vue')
        },
        // 用户个人资料页面路由配置
        {
          path: '/user/profile',
          component: () => import('@/views/user/UserProfile.vue')
        },
        // 用户头像页面路由配置
        {
          path: '/user/avatar',
          component: () => import('@/views/user/UserAvatar.vue')
        },
        // 用户密码修改页面路由配置
        {
          path: '/user/password',
          component: () => import('@/views/user/UserPassword.vue')
        }
      ]
    }
  ]
})

/**
 * 全局前置守卫：在每次路由跳转前执行。
 * 用于拦截未登录用户访问需要登录才能访问的页面，如果用户未登录且试图访问非登录页面，则重定向到登录页面。
 * @param to 要导航到的路由对象
 * @returns {string|void} 如果需要重定向，则返回目标路径；否则返回void，允许继续路由跳转。
 */
// 登录拦截
router.beforeEach((to) => {
  // 使用User Store中的token来判断用户是否已登录
  const useStore = useUserStore()
  // 如果用户未登录且试图访问的不是登录页面，则重定向到登录页面
  if (!useStore.token && to.path !== '/login') return '/login'
})

export default router
