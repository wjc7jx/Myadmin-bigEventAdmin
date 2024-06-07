// 导入请求工具，用于发送HTTP请求
import request from '@/utils/request'

/**
 * 获取文章分类列表
 * 该函数发送一个GET请求，获取用户的文章分类列表
 * @returns {Promise} 返回一个Promise，解析为服务器响应的数据
 */
// 分类：获取文章分类
export const artGetChannelsService = () => request.get('/my/cate/list')

/**
 * 添加文章分类
 * 该函数发送一个POST请求，用于添加新的文章分类
 * @param {Object} data 包含新分类信息的对象
 * @returns {Promise} 返回一个Promise，解析为服务器响应的数据
 */
// 分类：添加文章分类
export const artAddChannelService = (data) => request.post('/my/cate/add', data)

/**
 * 编辑文章分类
 * 该函数发送一个PUT请求，用于更新已有的文章分类信息
 * @param {Object} data 包含更新后分类信息的对象
 * @returns {Promise} 返回一个Promise，解析为服务器响应的数据
 */
// 分类：编辑文章分类
export const artEditChannelService = (data) =>
  request.put('/my/cate/info', data)

/**
 * 删除文章分类
 * 该函数发送一个DELETE请求，用于删除指定的文章分类
 * @param {number} id 要删除的分类的ID
 * @returns {Promise} 返回一个Promise，解析为服务器响应的数据
 */
// 分类：删除文章分类
export const artDelChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: { id }
  })

/**
 * 获取文章列表
 * 该函数发送一个GET请求，获取用户的文章列表
 * @param {Object} params 查询参数，用于过滤文章列表
 * @returns {Promise} 返回一个Promise，解析为服务器响应的数据
 */
// 文章：获取文章列表
export const artGetListService = (params) =>
  request.get('/my/article/list', {
    params
  })

/**
 * 发布文章
 * 该函数发送一个POST请求，用于发布新的文章
 * @param {Object} data 包含新文章信息的对象，通常是一个formData对象
 * @returns {Promise} 返回一个Promise，解析为服务器响应的数据
 */
// 文章：添加文章
// 注意：data需要是一个formData格式的对象
export const artPublishService = (data) => request.post('/my/article/add', data)

/**
 * 获取文章详情
 * 该函数发送一个GET请求，获取指定文章的详细信息
 * @param {number} id 指定文章的ID
 * @returns {Promise} 返回一个Promise，解析为服务器响应的数据
 */
// 文章：获取文章详情
export const artGetDetailService = (id) =>
  request.get('/my/article/info', {
    params: { id }
  })

/**
 * 编辑文章
 * 该函数发送一个PUT请求，用于更新已有的文章信息
 * @param {Object} data 包含更新后文章信息的对象
 * @returns {Promise} 返回一个Promise，解析为服务器响应的数据
 */
// 文章：编辑文章接口
export const artEditService = (data) => request.put('/my/article/info', data)

/**
 * 删除文章
 * 该函数发送一个DELETE请求，用于删除指定的文章
 * @param {number} id 指定文章的ID
 * @returns {Promise} 返回一个Promise，解析为服务器响应的数据
 */
// 文章：删除文章接口
export const artDelService = (id) =>
  request.delete('/my/article/info', { params: { id } })
