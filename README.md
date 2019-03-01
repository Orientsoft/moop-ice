# ice-open-platform-landingpage

## 设计要点

解耦、解耦、解耦。  
解耦的目标在于每个人的工作**高内聚、低耦合**，从而实现高效化、并行化。  
在前端项目开发中我们主要涉及三个角色：PM、UI、前端工程师。  

**接口**  

前后端要解耦，耦合点在于接口说明文档。PM定义好接口说明文档，则前后端可以进行并行开发，而且互相不需要关心对方实现细节。  
前端开发同样涉及UI和前端工程师的解耦，耦合点就在于**设计原型、公共Components和页面划分**，这里具体的形式就是，设计原型用HTML实现、公共Components和页面划分直接由PM用JSX文件给出。

**角色**  

1. PM：负责UI设计的确认（与UI协同）、公共Components的划分、页面的建立（与前端协作）  
2. UI：负责UI的设计，全局和公共Components的JSX标签和样式  
3. 前端工程师：页面和公共Components的逻辑实现  

**流程**  

流程上分为2个阶段，角色可能会参与多个阶段。  

* 设计阶段：  
    1. PM确认需求，给出系统流程文档  
    2. UI进行设计    
* 实现阶段：  
    1. PM进行公共Component和页面的划分，给出JSX文件  
    2. UI进行Component和页面的具体标签构建、样式编写  
    3. 前端工程师进行逻辑开发  

---
## 技术实现  

从整体来看，现代前端本质上就是一个MVC框架。

* React主要负责View视图的渲染
* Mobx定义了Model模型（及其基本操作）
* 页面上的业务函数实现了Controller控制  

1. Component的解耦  
    Component作为独立的组件，实现的时候不参与整体逻辑流程（不需要引入Mobx状态机，内部状态直接使用内置state即可），它与外界的接口就只有props属性：  

    * 输入：直接填入Store的observable、computed属性即可实现自动响应。  
    * 输出：props定义onXXX回调函数，比如组件内有按钮可点击，则允许外部定义onClick事件，原则上外部高层代码会在事件定义中去调用Mobx Action更新Store。 

    这样，在Component开发阶段，完全不需要管整体逻辑和状态，只需要安心写好自己的内部逻辑即可。即实现了内部逻辑高内聚、与外部逻辑低耦合。  

2. 页面的解耦  
    原则上React要求完全组件化，实际上页面可以看作“单例”的组件。  
    关键点在于页面与页面之间的解耦，是通过Mobx Store完成的（参照组件是如何通过Props实现解耦的）：  

    * 输入：页面会观察Store的状态，并进行渲染或传递给组件。  
    * 输出：页面可以实现自己的业务逻辑，直接用类方法进行定义，在其中去调用Store的Action进行状态更新，并把它们赋予标签或组件的回调函数。  

    这样，每个页面只需要关心自己需要从Store中观察那些状态，以及要用Action去更新那些状态（页面内高内聚）。当Store的状态更新之后，其他页面如果有Observe对应的状态，则会自动触发渲染（页面间低耦合）。

3. 整体逻辑的耦合  
    整体逻辑和状态，由Mobx Store维护，原则上我们只从顶层JSX引入一个顶层的appStore。  
    appStore可以由多个子Store构成（不过实际上Mobx是支持嵌套observable传递的，所以直接定义嵌套的JSON也行）。  

---

## IceWorks说明  

该模板适用于开放平台的引导页，默认内置一个页面和六个不同风格的展示区块

> 使用文档

使用:

* 启动调试服务: `npm start`
* 构建 dist: `npm run build`

目录结构:

* react-router @4.x 默认采用 hashHistory 的单页应用
* 入口文件: `src/index.js`
* 导航配置: `src/menuConfig.js`
* 路由配置: `src/routerConfig.js`
* 路由入口: `src/router.jsx`
* 布局文件: `src/layouts`
* 通用组件: `src/components`
* 页面文件: `src/pages`

效果图:
![screenshot](https://img.alicdn.com/tfs/TB1F3SAuGmWBuNjy1XaXXXCbXXa-2840-1596.png)
