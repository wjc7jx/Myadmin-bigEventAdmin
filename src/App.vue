<script setup lang="ts">
import { useRouter, RouterView } from 'vue-router'
import { useUserStore } from '@/stores/modules/user'

const router = useRouter()
const userStore = useUserStore()
router
</script>

<template>
  <div>
    <router-view />
    <hr />
    <el-button @click="$router.push('./home')"> 跳转首页 </el-button>
    <p>{{ userStore.token }}</p>
    <el-button @click="userStore.setToken('Bearer sidfhheiwhuvyweqrjh')">
      登录
    </el-button>
    <el-button @click="userStore.removeToken()">退出</el-button>
  </div>
</template>

<style scoped></style>
