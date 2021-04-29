# 安装

## React Developer Tools

在使用 React 时，我们推荐在你的浏览器上安装 [React Developer Tools](https://github.com/facebook/react/tree/master/packages/react-devtools)。它允许你在一个更友好的界面中审查和调试 React 应用。当然，你也可以直接在 Google 扩展应用商店搜索这一应用安装。

## 直接使用`script`引入

直接下载并用 `<script>` 标签引入，`React` 和`ReactDOM`会被注册为一个全局变量。

### CDN

React 和 ReactDOM 都可以在 CDN 上获得。

```
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

上面的版本只适合开发环境，不适合生产环境。压缩并优化后的 React 可用生产版本在：

```
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```

如果要加载指定版本的 `react` 和 `react-dom` ，只要把以上代码中的 `16` 替换为相应的版本数字即可。

#### 为什么有 `crossorigin` 属性？

如果你从 CDN 引用 React，我们建议保留 [`crossorigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) 属性设置：

```
<script crossorigin src="..."></script>
```

我们还建议验证你正在使用的 CDN 设置了 `Access-Control-Allow-Origin: *` HTTP标头：

[![Access-Control-Allow-Origin: *](https://react.html.cn/static/cdn-cors-header-89baed0a6540f29e954065ce04661048-dd807.png)](https://react.html.cn/static/cdn-cors-header-89baed0a6540f29e954065ce04661048-dd807.png)

这可以在 React 16 及更高版本中实现更好的 [错误处理体验](https://react.html.cn/blog/2017/07/26/error-handling-in-react-16.html)。

## 推荐的工具链

React团队主要推荐以下解决方案：

- [Create React App](https://react.html.cn/docs/create-a-new-react-app.html#create-react-app) (最适合 [单页应用](https://react.html.cn/docs/glossary.html#single-page-application))
- [Next.js](https://react.html.cn/docs/create-a-new-react-app.html#nextjs) (最适合Node.js应用程序)
- [Gatsby](https://react.html.cn/docs/create-a-new-react-app.html#gatsby) (最适合静态网站)
- [更灵活的工具链](https://react.html.cn/docs/create-a-new-react-app.html#更灵活的工具链)

### Create React App

[Create React App](http://github.com/facebookincubator/create-react-app) 是 **学习React** 最舒适的环境，并且是构建 **新的[单页](https://react.html.cn/docs/glossary.html#单页应用) 应用程序** 的最佳方式。

它设置了您的开发环境，以便您可以使用最新的 JavaScript 功能，提供良好的开发人员体验，并优化您的应用程序的生产代码。 你需要在你的机器上安装 Node >= 6 和 npm >= 5.2。 要创建项目，请运行：

```
npx create-react-app my-app
cd my-app
npm start
```

::: tip 注意

第一行的`npx` 不是拼写错误 — 它是 [npm 5.2+ 附带的包运行工具](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)。

:::

Create React App 不会处理后端逻辑或数据库；它只是创建一个前端构建管道（build pipeline），所以你可以使用它来配合任何你想使用的后端。它使用像 [Babel](http://babeljs.io/) 和 [webpack](https://webpack.js.org/) 这样的构建工具，但是已经为你配置好了，你可以零配置使用。

当您准备好部署到生产环境中时，运行 `npm run build` 将在 `build` 文件夹中创建一个应用程序的优化构建。您可以 [从其 README](https://github.com/facebookincubator/create-react-app#create-react-app-) 和 [用户指南](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#table-of-contents) 中了解有关 Create React App 的更多信息。

### Next.js

[Next.js](https://nextjs.org/) 一个很流行，而且轻量级，用 React 构建 **静态和服务器渲染应用程序** 的框架。 它包括 **开箱即用的样式和路由解决方案** ，并假设您使用 [Node.js](https://nodejs.org/) 作为服务器环境。

从 [其官方指南](https://nextjs.org/learn/) 了解 Next.js 。

### Gatsby

[Gatsby](https://www.gatsbyjs.org/) 是使用 React 创建 **静态网站** 的最佳方式。 它可以让你使用 React 组件， 但输出预渲染的 HTML 和 CSS 以保证最快的加载时间。

从 [其官方指南](https://www.gatsbyjs.org/docs/) 和 [初学者工具包列表](https://www.gatsbyjs.org/docs/gatsby-starters/) 了解 Gatsby 。

### 更灵活的工具链

以下工具链提供了更多的灵活性和选择性。我们建议更有经验的用户的可以尝试他们：

- **[Neutrino](https://neutrinojs.org/)** 将 [webpack](https://webpack.js.org/) 的强大功能与简单的预设结合在一起，并且包括 [React应用程序](https://neutrinojs.org/packages/react/) 和 [React组件](https://neutrinojs.org/packages/react-components/) 的预设。
- **[nwb](https://github.com/insin/nwb)** 特别适合用于将 [React组件发布到 npm 上](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#developing-react-components-and-libraries-with-nwb)。它 [也可以用于](https://github.com/insin/nwb/blob/master/docs/guides/ReactApps.md#developing-react-apps-with-nwb) 创建 React 应用程序。
- **[Parcel](https://parceljs.org/)** 是一个快速，零配置的Web应用程序打包器，可以[与React配合](https://parceljs.org/recipes.html#react) 使用。
- **[Razzle](https://github.com/jaredpalmer/razzle)** 是一个服务器渲染框架，不需要任何配置，但提供了比 Next.js 更大的灵活性。

## 从零开始创建工具链

JavaScript 构建工具链通常由以下部分组成：

- 一个 **包管理器** ，如 [Yarn](https://yarnpkg.com/) 或 [npm](https://www.npmjs.com/) 。 它可让您充分利用第三方软件包的庞大生态系统，并轻松安装或更新它们。
- 一个 **打包器**，例如 [webpack](https://webpack.js.org/) 或 [Parcel](https://parceljs.org/)。 它允许您编写模块化代码，并将它们组合在一起成为小的包，以优化加载时间。
- 一个 **编译器**，例如[Babel](http://babeljs.io/)。 它可以让你编写的现代 JavaScript 代码在旧版浏览器中仍然可用。

如果您更喜欢从头开始创建自己的 JavaScript 工具链，请[查看本指南](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658) ，以重新创建一些 Create React App 功能。

不要忘记确保您自定义的工具链 [正确设置以用于生产](https://react.html.cn/docs/optimizing-performance.html#use-the-production-build) 。