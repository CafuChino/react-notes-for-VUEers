# 介绍

## 什么是 React ？（What is React?）

React是一个声明式的，高效的，并且灵活的用于构建用户界面的 JavaScript 库。它允许您使用”components(组件)“（小巧而独立的代码片段）组合出各种复杂的UI。

## 起步

::: warning 注意

官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来吧！之前有其它框架的使用经验会有帮助，但这不是必需的。

:::

在这里我为你准备了与Vue的HelloWorld例子类似的项目，你可以在浏览器新标签页中打开它，跟着例子学习一些基础用法。

<iframe src="https://codesandbox.io/embed/restless-haze-iuq2u?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="restless-haze-iuq2u"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## React? React-DOM?

我们使用的`React`严格意义上只包含**核心**的功能。而当需要操作DOM时，需要借助`react-dom`，这一改动是从react v0.14开始的。之所以把DOM操作相关逻辑从react中分离，是因为有了react-native。所以react中只包含Web和Mobile通用的部分，负责Dom操作的相关逻辑分到react-dom中，负责Mobile的包含在react-native中。

>以上部分感谢知乎用户@陈龙，更多信息可以参考：知乎为什么react和react-dom要分成两个包？ - 陈龙的回答 - 知乎 https://www.zhihu.com/question/336664883/answer/790855896

## 元素渲染

React的元素渲染与Vue有所不同，Vue的应用会直接“挂载”到一个DOM元素上，然后对他进行完全控制。而React的声明式渲染逻辑是将一个组件添加到网站中。接下来我将和你展示 Vue，React（function），React（class）三种不同写法的Hello World项目。（注意这里我省略了资源引入，只保留基本逻辑代码）

**VUE版本**

<iframe height="265" style="width: 100%;" scrolling="no" title="Vue Hello World" src="https://codepen.io/cafuchino/embed/OJWYWzB?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

**React Function版本**

<iframe height="265" style="width: 100%;" scrolling="no" title="React Function Hello World" src="https://codepen.io/cafuchino/embed/VwPOPxy?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

**React Class版本**

<iframe height="265" style="width: 100%;" scrolling="no" title="React Class Hello World" src="https://codepen.io/cafuchino/embed/poRmRGJ?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

在React中使用到的是JSX，这些例子中我们都声明了一个`msg`变量，然后在JSX中使用，将它包裹在大括号中。在Vue中用法与之相对应的是文本差值表达式`{{}}`。在 JSX 语法中，你可以在大括号内放置任何有效的 [JavaScript 表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions)。例如，`2 + 2`，`user.firstName` 或 `formatName(user)` 都是有效的 JavaScript 表达式。

除了文本差值，我们还可以这样在JSX中绑定元素attribute：

```jsx
const element = <img src={user.avatarUrl}></img>;
```

::: tip TIP

因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 `camelCase`（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。

例如，JSX 里的 `class` 变成了`className`，而`tabindex`则变为`tabIndex`。

:::

## 条件与循环

React组件可以被赋值给变量，所以只需要在render函数中添加一个if判断，即可用于条件渲染。

<iframe height="265" style="width: 100%;" scrolling="no" title="Conditional Rendering Example" src="https://codepen.io/gaearon/embed/ZpVxNq?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/gaearon/pen/ZpVxNq'>Conditional Rendering Example</a> by Dan Abramov
  (<a href='https://codepen.io/gaearon'>@gaearon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

你可以尝试在codepen上更改登录态的值，你会发现渲染的内容发生了变化。

### 与运算符&&

通过花括号包裹代码，你可以[在 JSX 中嵌入任何表达式](https://react.docschina.org/docs/introducing-jsx.html#embedding-expressions-in-jsx)。这也包括 JavaScript 中的逻辑与 (&&) 运算符。它可以很方便地进行元素的条件渲染。

<iframe height="265" style="width: 100%;" scrolling="no" title="Inline If-Else with Logical &amp;&amp; Operator" src="https://codepen.io/gaearon/embed/ozJddz?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/gaearon/pen/ozJddz'>Inline If-Else with Logical &amp;&amp; Operator</a> by Dan Abramov
  (<a href='https://codepen.io/gaearon'>@gaearon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

之所以能这样做，是因为在 JavaScript 中，`true && expression` 总是会返回 `expression`, 而 `false && expression` 总是会返回 `false`。

因此，如果条件是 `true`，`&&` 右侧的元素就会被渲染，如果是 `false`，React 会忽略并跳过它。

### 三目运算符

另一种内联条件渲染的方法是使用 JavaScript 中的三目运算符 [`condition ? true : false`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)。

在下面这个示例中，我们用它来条件渲染一小段文本

```jsx
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.    </div>
  );
}
```

同样的，它也可以用于较为复杂的表达式中，虽然看起来不是很直观：

```jsx
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />}
    </div>);
}
```

就像在 JavaScript 中一样，你可以根据团队的习惯来选择可读性更高的代码风格。需要注意的是，如果条件变得过于复杂，那你应该考虑如何[提取组件](https://react.docschina.org/docs/components-and-props.html#extracting-components)。

### 列表渲染

在JavaScript中，如果我们需要逐个操作列表元素，我们会使用`map()`方法，而React元素本质上也是一种元素，我们也可以使用相似的方法，将列表中的数据转换成元素列表。

你可以通过使用 `{}` 在 JSX 内构建一个[元素集合](https://react.docschina.org/docs/introducing-jsx.html#embedding-expressions-in-jsx)。

下面，我们使用 Javascript 中的 [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 方法来遍历 `numbers` 数组。将数组中的每个元素变成 `<li>` 标签，最后我们将得到的数组赋值给 `listItems`：

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>  <li>{number}</li>);
```

我们把整个 `listItems` 插入到 `<ul>` 元素中，然后[渲染进 DOM](https://react.docschina.org/docs/rendering-elements.html#rendering-an-element-into-the-dom)：

```jsx
ReactDOM.render(
  <ul>{listItems}</ul>,  document.getElementById('root')
);
```

<iframe height="265" style="width: 100%;" scrolling="no" title="List of Numbers" src="https://codepen.io/gaearon/embed/GjPyQr?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/gaearon/pen/GjPyQr'>List of Numbers</a> by Dan Abramov
  (<a href='https://codepen.io/gaearon'>@gaearon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

当我们运行这段代码，将会看到一个警告 `a key should be provided for list items`，与Vue一样，我们可以给每个元素分配一个`key`来解决上面那个警告：

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

<iframe height="265" style="width: 100%;" scrolling="no" title="List of Numbers With Index" src="https://codepen.io/gaearon/embed/jrXYRR?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/gaearon/pen/jrXYRR'>List of Numbers With Index</a> by Dan Abramov
  (<a href='https://codepen.io/gaearon'>@gaearon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



## 组件状态

React 元素是[不可变对象](https://en.wikipedia.org/wiki/Immutable_object)。一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。按照这一逻辑，除非每次更新都调用`ReactDOM.render()`重新渲染，否则无法更新已经渲染的元素。而大多数React应用只会调用一次`ReactDOM.render()`

### 函数组件

React函数组件的标准是接受唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素（JSX元素），它本质上就是 JavaScript 函数。如：

``` jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

这种函数组件的优点是**简单**，**易于编写和使用**。

