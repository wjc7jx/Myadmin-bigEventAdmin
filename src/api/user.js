// 导入请求工具，用于发送HTTP请求。request 在内部调用了 instance 实例
import request from '@/utils/request'

/**
 * 注册服务。
 *
 * 通过发送POST请求到'/api/reg'路径，注册新用户。
 * 请求体包含用户名、密码和确认密码。
 *
 * @param {object} data - 注册信息对象，包含username, password, repassword
 * @param {string} data.username - 用户名
 * @param {string} data.password - 密码
 * @param {string} data.repassword - 确认密码
 * @returns {Promise} - 返回一个Promise对象，解析后的结果是服务器返回的数据
 */
// 注册接口
export const userRegisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', { username, password, repassword })

/**
 * 登录服务。
 *
 * 通过发送POST请求到'/api/login'路径，进行用户登录。
 * 请求体包含用户名和密码。
 *
 * @param {object} data - 登录信息对象，包含username, password
 * @param {string} data.username - 用户名
 * @param {string} data.password - 密码
 * @returns {Promise} - 返回一个Promise对象，解析后的结果是服务器返回的数据
 */
// 登录接口
export const userLoginService = ({ username, password }) =>
  request.post('/api/login', { username, password })

/**
 * 获取用户信息服务。
 *
 * 通过发送GET请求到'/my/userinfo'路径，获取当前用户的基本信息。
 *
 * @returns {Promise} - 返回一个Promise对象，解析后的结果是服务器返回的用户信息
 */
// 获取用户基本信息
export const userGetInfoService = () => request.get('/my/userinfo')

// 尚未实现
// /**
//  * 更新用户信息服务。
//  *
//  * 通过发送PUT请求到'/my/userinfo'路径，更新当前用户的基本信息。
//  * 请求体包含用户ID、昵称和电子邮件地址。
//  *
//  * @param {object} data - 用户信息更新对象，包含id, nickname, email
//  * @param {number/string} data.id - 用户ID
//  * @param {string} data.nickname - 昵称
//  * @param {string} data.email - 电子邮件地址
//  * @returns {Promise} - 返回一个Promise对象，解析后的结果是服务器返回的更新信息
//  */
// // 更新用户基本信息
// export const userUpdateInfoService = ({ id, nickname, email }) =>
//   request.put('/my/userinfo', { id, nickname, email })

// /**
//  * 更新用户头像服务。
//  *
//  * 通过发送PATCH请求到'/my/update/avatar'路径，更新当前用户的头像。
//  * 请求体包含新的头像链接。
//  *
//  * @param {string} avatar - 新的头像链接
//  * @returns {Promise} - 返回一个Promise对象，解析后的结果是服务器返回的更新信息
//  */
// // 更新用户头像
// export const userUpdateAvatarService = (avatar) => request.patch('/my/update/avatar', { avatar })

// /**
//  * 更新用户密码服务。
//  *
//  * 通过发送PATCH请求到'/my/updatepwd'路径，更新当前用户的密码。
//  * 请求体包含原密码、新密码和确认新密码。
//  *
//  * @param {object} data - 密码更新对象，包含old_pwd, new_pwd, re_pwd
//  * @param {string} data.old_pwd - 原密码
//  * @param {string} data.new_pwd - 新密码
//  * @param {string} data.re_pwd - 确认新密码
//  * @returns {Promise} - 返回一个Promise对象，解析后的结果是服务器返回的更新信息
//  */
// // 更新用户密码
// export const userUpdatePasswordService = ({ old_pwd, new_pwd, re_pwd }) =>
//   request.patch('/my/updatepwd', { old_pwd, new_pwd, re_pwd })
