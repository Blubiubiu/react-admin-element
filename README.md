# react-admin-element

react+react-router+mobx+element

[在线体验地址](https://blubiubiu.github.io/build/#/)

## 项目不在维护

因平时实在太忙，同时还要维护多个项目，只能放弃一些，感谢支持

## CLI 工具

```
npm install create-react-admin-cli -g

create-react-admin
```

### 输入上述命令之后会让你选择安装哪个版本：

#### 1. react-admin-demo

这个版本里是我们推荐里版本，里面包括了我们为您提供的一些封装好的简单功能，以及一些常用的插件

#### 2. react-admin-simple

这个版本主要是为了帮助一些只想要基础功能，却对代码无从下手清除的情况下产生的。
版本里只拥有路由，登录，404 功能，其余的多余代码我们已经帮您剔除掉了...

## Install

```bush
// install dependencies
npm install
```

## Run

### Development

```bush
npm run dev
```

### Production(Build)

```bush
npm run build
```

## 简介

&emsp;&emsp;react-admin-element 是基于 react.js，搭配使用[element-react](https://elemefe.github.io/element-react/#/zh-CN/quick-start) UI 组件库形成的一套简易后台管理系统。非常简洁的配置，快速进入程序开发。
如果您想在线体验 react-admin-element，您可以到[在线访问](https://blubiubiu.github.io/build/#/)体验。

如果你只是想要一个清醒爽朗的界面，那你可以下载[简化版模板](https://github.com/Blubiubiu/react-admin-element/tree/clean_version)来做开发。对应的脚手架工具下面的 react-admin-simple 模块。

### 特点

&emsp;&emsp;此项目适用于初始的 react 和 element-react（当然 ui 组件库可以改为其他的组件库）的 ui 组件库构建后台管理系统，项目之初的目的是为了最简洁的构建出一套可用于立即进入开发的架构，开发者只需要处理路由部分的结构就可以构建出左侧的 side-menu，以及 header 的面包屑。我们处理好了相关的 404，500 报错信息页面。

## 功能

&emsp;&emsp;功能部分并非我们这套架构的主要表现点。目前更多的功能正在开发中。。。文档稍后会不断补充。

- 登录/登出
- 组件
  - 图标库
  - 用户权限模块
  - 文件上传
  - excel 导入导出
  - 多级菜单
  - 富文本编辑器
  - 个人设置（主要想展现给头像的裁剪功能）

## 文件结构

```shell
.
├── scripts  项目构建配置
├── config  开发相关配置
├── public  打包所需静态资源
└── src
    └── assets  项目静态资源
        ├── font  字体文件
        ├── css  css文件
        └── images  图片资源
    ├── components  基础组件（开发者只需要关心的组件-组件）
    └── containers  项目运行配置
        ├── App  根组件
        ├── Home  主页
        ├── NotFound  404页面
        └── Pages  业务开发组件页面（开发者只需要关心的组件-页面）
    ├── libs  封装工具函数
    ├── router  路由配置
    └── store  Mobx配置
```

## Links

- [react-admin-element](https://github.com/Blubiubiu/react-admin-element)
- [Element-react-UI](https://elemefe.github.io/element-react/#/zh-CN/quick-start)
- [React 中文文档](https://react.docschina.org/)
- [React-router 英文文档(中文文档总慢半拍)](https://reacttraining.com/react-router/)
- [Mobx 中文文档](https://cn.mobx.js.org/)
