**项目简介**
本项目是一个基于 Vue3、Pinia、VueRouter4、ElementPlus 等技术栈开发的“大事件”后台数据管理系统。系统包含登录注册、文章管理、文章分类、用户信息管理等功能。
**项目架构**

- **技术栈**: ES6, Vue3, Pinia, VueRouter4, Vite, Axios, ElementPlus
- **代码风格**: 使用 ESLint 和 Prettier 进行代码风格检查和格式化。
- **代码检查工作流**: 基于 husky 和 lint-staged 实现了代码提交前的自动化检查。
  **项目功能**
- **登录注册**: 支持用户登录注册，并使用 Pinia 进行用户状态管理，且持久化处理。
- **文章管理**: 支持文章的增删改查，以及文章状态的管理。
- **文章分类**: 支持文章分类的增删改查，以及分类别名的管理。
- **用户信息管理**: 支持用户基本资料、头像和密码的修改。
  **项目运行**

1. 克隆项目到本地:

```bash
https://github.com/wearetogetherforever/Myadmin.git
```

2. 安装依赖:

```bash
pnpm install
```

3. 运行项目:

```bash
pnpm dev
```

**项目目录结构**

```
big-event-backend
├── src
│   ├── assets             # 静态资源
│   ├── api                # API 接口封装
│   ├── components         # 公共组件
│   ├── router             # 路由配置
│   ├── stores             # Pinia 状态管理
│   ├── utils              # 工具函数
│   ├── views              # 页面组件
│   ├── App.vue            # 根组件
│   ├── main.js            # 入口文件
│   └── vite.config.js     # Vite 配置文件
├── .eslintrc.cjs          # ESLint 配置文件
├── .husky                 # husky 配置目录
├── .lintstagedrc          # lint-staged 配置文件
├── package.json           # 项目配置文件
└── README.md              # 项目说明文档
```

**其他说明**
> 使用账号
> 账号：wjc001
> 密码：123456
>
> - 项目使用了 ElementPlus 组件库进行 UI 界面开发，并使用 unplugin-vue-components 和 unplugin-auto-import 实现了 ElementPlus 的自动按需导入。
> - 项目使用了 pinia-plugin-persistedstate 插件实现了 Pinia 状态管理的持久化，将用户状态等信息存储到本地存储中。
> - 项目使用了 Vite 进行构建和打包，提供了高效的开发体验。
>