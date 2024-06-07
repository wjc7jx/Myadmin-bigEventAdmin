<script setup>
/**
 * 使用 defineProps 定义组件接收的外部属性。
 * @param {String} title - 组件标题，必须提供。
 */
defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>
<!-- 页面container可分为header（title extra）和main -->
<template>
  <el-card class="page-container" :class="{ 'dark-mode': isDark }">
    <template #header>
      <div class="header">
        <span>{{ title }}</span>
        <div class="extra">
          <!-- 为组件提供额外的自定义内容区域，此处可添加按钮 -->
          <slot name="extra"></slot>
        </div>
      </div>
    </template>
    <!-- 组件的主要内容区域，允许父组件向此处注入内容 -->
    <slot></slot>
  </el-card>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;
  .header {
    display: flex;
    justify-content: space-between;
    // 在两边展开
    align-items: center;
  }
}
</style>
