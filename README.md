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
https://github.com/wjc7jx/Myadmin.git
```

2. 安装依赖:

```bash
pnpm install
```

3. 运行项目:

```bash
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
