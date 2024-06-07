<script setup>
import { ref } from 'vue'
import { artEditChannelService, artAddChannelService } from '@/api/article.js'

// 控制对话框可见性的引用
const dialogVisible = ref(false)

// 表单实例的引用
const formRef = ref()

// 表单模型的引用，包含分类名称和别名
const formModel = ref({
  cate_name: '',
  cate_alias: ''
})

// 定义表单验证规则
const rules = {
  cate_name: [
    { required: true, message: '请输入分类名称', trigger: 'blur' },
    {
      pattern: /^\S{1,10}$/,
      message: '分类名必须是 1-10 位的非空字符',
      trigger: 'blur'
    }
  ],
  cate_alias: [
    { required: true, message: '请输入分类别名', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{1,15}$/,
      message: '分类名必须是 1-15 位的字母或数字',
      trigger: 'blur'
    }
  ]
}

// 定义emit函数，用于向父组件发送事件
const emit = defineEmits(['success'])

// 提交表单的异步方法，用于编辑或添加分类
const onSubmit = async () => {
  // 验证表单
  await formRef.value.validate()
  // 判断是否是编辑操作
  const isEdit = formModel.value.id
  if (isEdit) {
    // 编辑分类
    await artEditChannelService(formModel.value)
    ElMessage.success('编辑成功')
  } else {
    // 添加分类
    await artAddChannelService(formModel.value)
    ElMessage.success('添加成功')
  }
  // 关闭对话框
  dialogVisible.value = false
  // 触发success事件
  emit('success')
}

// 打开对话框的方法，可传入行数据用于编辑
// open调用后，可以打开弹窗，传入行数据（带id）就为编辑，无数据为添加
const open = (row) => {
  dialogVisible.value = true
  // console.log(row) 数据如下：{id: 18086, cate_name: '文章2', cate_alias: '2'}
  formModel.value = { ...row } // 添加 → 重置了表单内容，编辑 → 存储了需要回显的数据
}

// 向外暴露open方法
defineExpose({
  open
})
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    :title="formModel.id ? '编辑分类' : '添加分类'"
    width="30%"
  >
    <el-form
      ref="formRef"
      :model="formModel"
      :rules="rules"
      label-width="100px"
      style="padding-right: 30px"
    >
      <el-form-item label="分类名称" prop="cate_name">
        <el-input
          v-model="formModel.cate_name"
          placeholder="请输入分类名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="分类别名" prop="cate_alias">
        <el-input
          v-model="formModel.cate_alias"
          placeholder="请输入分类别名"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
