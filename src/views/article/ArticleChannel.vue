<script setup>
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import { artGetChannelsService, artDelChannelService } from '../../api/article'
import ChannelEdit from './components/ChannelEdit.vue'

// 初始化文章分类列表的引用
const channelList = ref([])
// 初始化加载状态的引用
const loading = ref(false)
// 初始化对话框的引用
const dialog = ref()

/**
 * 获取文章分类列表
 * 异步加载文章分类数据，更新channelList
 */
const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  loading.value = false
}
// 初始化时调用获取列表方法
getChannelList()

//#region 删除
/**
 * @param {Object} row - 要删除的分类信息
 * 弹出确认框后，调用删除服务，成功后刷新列表
 */
const onDelChannel = async (row) => {
  await ElMessageBox.confirm('你确认要删除该分类么', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await artDelChannelService(row.id)
  ElMessage.success('删除成功')
  getChannelList()
}
//#endregion

//#region 编辑文章分类
/**
 * @param {Object} row - 要编辑的分类信息
 * 打开对话框进行编辑
 */
const onEditChannel = (row) => {
  dialog.value.open(row)
}
//#endregion

//#region 新增文章分类
const onAddChannel = () => {
  dialog.value.open({})
}
//#endregion

/**
 * 新增或编辑分类成功后的回调
 * 刷新分类列表
 */
const onSuccess = () => {
  getChannelList()
}
</script>

<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button @click="onAddChannel">添加分类</el-button>
    </template>

    <el-table v-loading="loading" :data="channelList" style="width: 100%">
      <el-table-column type="index" label="序号" width="100"></el-table-column>
      <el-table-column prop="cate_name" label="分类名称"></el-table-column>
      <el-table-column prop="cate_alias" label="分类别名"></el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="{ row, $index }">
          <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="onEditChannel(row, $index)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="onDelChannel(row, $index)"
          ></el-button>
        </template>
      </el-table-column>
      <!-- 数据为空处理 -->
      <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
    </el-table>

    <channel-edit ref="dialog" @success="onSuccess"></channel-edit>
  </page-container>
</template>

<style lang="scss" scoped></style>
