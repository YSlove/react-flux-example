# React Native / JS 实例

## 简介

整个结构使用了Flux架构，实例的原则尝试更好的让Native与JS有更多可共
用的架构

**版本**

* Native ~0.13.2
* React ~0.14.2
* React-DOM ~0.14.2
* flux ~2.1.1

**尝试使用的技术**

* webpack
* webpack hot loader
* es6

**目前实例包含**

* iOS
* Web
* Android(开发中)

**目录**

rntest  
|- android (android 源文件)   
|- app (React 组件等)  
|- ios (ios 源文件)  
|- *index.android.js* (React android 入口)  
|- *index.ios.js* (React ios 入口)  
|- *server.js* (Node 服务)  
|- *webpack.config.js* (webpack配制)

## 使用方法

*所有开发步骤目前是在 MacOS 环境下进行没有测试 Windows*

**初始化**

* `clone到本地`
* `npm install`

**启动web**

* `npm run web` 启动web服务，浏览网页版本

**启动iOS**

* 在iOS目录双击 `rntest.xcodeproj` 

欢迎来我[博客](http://yslove.net/react)大家一起讨论
