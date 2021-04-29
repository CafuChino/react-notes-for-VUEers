(self.webpackChunkReact_Notes_For_VUEers=self.webpackChunkReact_Notes_For_VUEers||[]).push([[701],{425:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>e});const e={key:"v-3cffd431",path:"/guide/introuduce.html",title:"介绍",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"什么是 React ？（What is React?）",slug:"什么是-react-what-is-react",children:[]},{level:2,title:"起步",slug:"起步",children:[]},{level:2,title:"React? React-DOM?",slug:"react-react-dom",children:[]},{level:2,title:"元素渲染",slug:"元素渲染",children:[]},{level:2,title:"条件与循环",slug:"条件与循环",children:[{level:3,title:"与运算符&&",slug:"与运算符",children:[]},{level:3,title:"三目运算符",slug:"三目运算符",children:[]},{level:3,title:"列表渲染",slug:"列表渲染",children:[]}]},{level:2,title:"组件状态",slug:"组件状态",children:[{level:3,title:"函数组件",slug:"函数组件",children:[]}]}],filePathRelative:"guide/introuduce.md",git:{}}},805:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>Ln});var e=s(252),t=s(577);const p=(0,e.uE)('<h1 id="介绍"><a class="header-anchor" href="#介绍">#</a> 介绍</h1><h2 id="什么是-react-what-is-react"><a class="header-anchor" href="#什么是-react-what-is-react">#</a> 什么是 React ？（What is React?）</h2><p>React是一个声明式的，高效的，并且灵活的用于构建用户界面的 JavaScript 库。它允许您使用”components(组件)“（小巧而独立的代码片段）组合出各种复杂的UI。</p><h2 id="起步"><a class="header-anchor" href="#起步">#</a> 起步</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p>官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来吧！之前有其它框架的使用经验会有帮助，但这不是必需的。</p></div><p>在这里我为你准备了与Vue的HelloWorld例子类似的项目，你可以在浏览器新标签页中打开它，跟着例子学习一些基础用法。</p><iframe src="https://codesandbox.io/embed/restless-haze-iuq2u?fontsize=14&amp;hidenavigation=1&amp;theme=dark" style="width:100%;height:500px;border:0;border-radius:4px;overflow:hidden;" title="restless-haze-iuq2u" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe><h2 id="react-react-dom"><a class="header-anchor" href="#react-react-dom">#</a> React? React-DOM?</h2><p>我们使用的<code>React</code>严格意义上只包含<strong>核心</strong>的功能。而当需要操作DOM时，需要借助<code>react-dom</code>，这一改动是从react v0.14开始的。之所以把DOM操作相关逻辑从react中分离，是因为有了react-native。所以react中只包含Web和Mobile通用的部分，负责Dom操作的相关逻辑分到react-dom中，负责Mobile的包含在react-native中。</p><blockquote><p>以上部分感谢知乎用户@陈龙，更多信息可以参考：知乎为什么react和react-dom要分成两个包？ - 陈龙的回答 - 知乎 https://www.zhihu.com/question/336664883/answer/790855896</p></blockquote><h2 id="元素渲染"><a class="header-anchor" href="#元素渲染">#</a> 元素渲染</h2><p>React的元素渲染与Vue有所不同，Vue的应用会直接“挂载”到一个DOM元素上，然后对他进行完全控制。而React的声明式渲染逻辑是将一个组件添加到网站中。接下来我将和你展示 Vue，React（function），React（class）三种不同写法的Hello World项目。（注意这里我省略了资源引入，只保留基本逻辑代码）</p><p><strong>VUE版本</strong></p>',13),o=(0,e.Wm)("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"Vue Hello World",src:"https://codepen.io/cafuchino/embed/OJWYWzB?height=265&theme-id=light&default-tab=js,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},null,-1),c=(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"React Function版本")],-1),l=(0,e.Wm)("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"React Function Hello World",src:"https://codepen.io/cafuchino/embed/VwPOPxy?height=265&theme-id=light&default-tab=js,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},null,-1),r=(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"React Class版本")],-1),u=(0,e.Wm)("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"React Class Hello World",src:"https://codepen.io/cafuchino/embed/poRmRGJ?height=265&theme-id=light&default-tab=js,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},null,-1),i=(0,e.Uk)("在React中使用到的是JSX，这些例子中我们都声明了一个"),k=(0,e.Wm)("code",null,"msg",-1),d=(0,e.Uk)("变量，然后在JSX中使用，将它包裹在大括号中。在Vue中用法与之相对应的是文本差值表达式"),m=(0,e.Uk)("。在 JSX 语法中，你可以在大括号内放置任何有效的 "),g={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("JavaScript 表达式"),b=(0,e.Uk)("。例如，"),f=(0,e.Wm)("code",null,"2 + 2",-1),v=(0,e.Uk)("，"),W=(0,e.Wm)("code",null,"user.firstName",-1),w=(0,e.Uk)(" 或 "),x=(0,e.Wm)("code",null,"formatName(user)",-1),y=(0,e.Uk)(" 都是有效的 JavaScript 表达式。"),U=(0,e.uE)('<p>除了文本差值，我们还可以这样在JSX中绑定元素attribute：</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>avatarUrl<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>img</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 <code>camelCase</code>（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。</p><p>例如，JSX 里的 <code>class</code> 变成了<code>className</code>，而<code>tabindex</code>则变为<code>tabIndex</code>。</p></div><h2 id="条件与循环"><a class="header-anchor" href="#条件与循环">#</a> 条件与循环</h2><p>React组件可以被赋值给变量，所以只需要在render函数中添加一个if判断，即可用于条件渲染。</p>',5),j=(0,e.Wm)("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"Conditional Rendering Example",src:"https://codepen.io/gaearon/embed/ZpVxNq?height=265&theme-id=light&default-tab=js,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"\n  See the Pen <a href='https://codepen.io/gaearon/pen/ZpVxNq'>Conditional Rendering Example</a> by Dan Abramov\n  (<a href='https://codepen.io/gaearon'>@gaearon</a>) on <a href='https://codepen.io'>CodePen</a>.\n",-1),R=(0,e.Wm)("p",null,"你可以尝试在codepen上更改登录态的值，你会发现渲染的内容发生了变化。",-1),S=(0,e.Wm)("h3",{id:"与运算符"},[(0,e.Wm)("a",{class:"header-anchor",href:"#与运算符"},"#"),(0,e.Uk)(" 与运算符&&")],-1),J=(0,e.Uk)("通过花括号包裹代码，你可以"),I={href:"https://react.docschina.org/docs/introducing-jsx.html#embedding-expressions-in-jsx",target:"_blank",rel:"noopener noreferrer"},L=(0,e.Uk)("在 JSX 中嵌入任何表达式"),z=(0,e.Uk)("。这也包括 JavaScript 中的逻辑与 (&&) 运算符。它可以很方便地进行元素的条件渲染。"),O=(0,e.Wm)("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"Inline If-Else with Logical && Operator",src:"https://codepen.io/gaearon/embed/ozJddz?height=265&theme-id=light&default-tab=js,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"\n  See the Pen <a href='https://codepen.io/gaearon/pen/ozJddz'>Inline If-Else with Logical &amp;&amp; Operator</a> by Dan Abramov\n  (<a href='https://codepen.io/gaearon'>@gaearon</a>) on <a href='https://codepen.io'>CodePen</a>.\n",-1),E=(0,e.uE)('<p>之所以能这样做，是因为在 JavaScript 中，<code>true &amp;&amp; expression</code> 总是会返回 <code>expression</code>, 而 <code>false &amp;&amp; expression</code> 总是会返回 <code>false</code>。</p><p>因此，如果条件是 <code>true</code>，<code>&amp;&amp;</code> 右侧的元素就会被渲染，如果是 <code>false</code>，React 会忽略并跳过它。</p><h3 id="三目运算符"><a class="header-anchor" href="#三目运算符">#</a> 三目运算符</h3>',3),_=(0,e.Uk)("另一种内联条件渲染的方法是使用 JavaScript 中的三目运算符 "),C={href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator",target:"_blank",rel:"noopener noreferrer"},D=(0,e.Wm)("code",null,"condition ? true : false",-1),M=(0,e.Uk)("。"),N=(0,e.uE)('<p>在下面这个示例中，我们用它来条件渲染一小段文本</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> isLoggedIn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isLoggedIn<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      The user is </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>isLoggedIn <span class="token operator">?</span> <span class="token string">&#39;currently&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;not&#39;</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> logged in.    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>同样的，它也可以用于较为复杂的表达式中，虽然看起来不是很直观：</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> isLoggedIn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isLoggedIn<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span>isLoggedIn<span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LogoutButton</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleLogoutClick<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>\n        <span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LoginButton</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleLoginClick<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',4),P=(0,e.Uk)("就像在 JavaScript 中一样，你可以根据团队的习惯来选择可读性更高的代码风格。需要注意的是，如果条件变得过于复杂，那你应该考虑如何"),V={href:"https://react.docschina.org/docs/components-and-props.html#extracting-components",target:"_blank",rel:"noopener noreferrer"},X=(0,e.Uk)("提取组件"),H=(0,e.Uk)("。"),q=(0,e.Wm)("h3",{id:"列表渲染"},[(0,e.Wm)("a",{class:"header-anchor",href:"#列表渲染"},"#"),(0,e.Uk)(" 列表渲染")],-1),A=(0,e.Wm)("p",null,[(0,e.Uk)("在JavaScript中，如果我们需要逐个操作列表元素，我们会使用"),(0,e.Wm)("code",null,"map()"),(0,e.Uk)("方法，而React元素本质上也是一种元素，我们也可以使用相似的方法，将列表中的数据转换成元素列表。")],-1),B=(0,e.Uk)("你可以通过使用 "),G=(0,e.Wm)("code",null,"{}",-1),T=(0,e.Uk)(" 在 JSX 内构建一个"),F={href:"https://react.docschina.org/docs/introducing-jsx.html#embedding-expressions-in-jsx",target:"_blank",rel:"noopener noreferrer"},Y=(0,e.Uk)("元素集合"),Q=(0,e.Uk)("。"),Z=(0,e.Uk)("下面，我们使用 Javascript 中的 "),K={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",target:"_blank",rel:"noopener noreferrer"},$=(0,e.Wm)("code",null,"map()",-1),nn=(0,e.Uk)(" 方法来遍历 "),an=(0,e.Wm)("code",null,"numbers",-1),sn=(0,e.Uk)(" 数组。将数组中的每个元素变成 "),en=(0,e.Wm)("code",null,"<li>",-1),tn=(0,e.Uk)(" 标签，最后我们将得到的数组赋值给 "),pn=(0,e.Wm)("code",null,"listItems",-1),on=(0,e.Uk)("："),cn=(0,e.uE)('<div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> listItems <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>number<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',1),ln=(0,e.Uk)("我们把整个 "),rn=(0,e.Wm)("code",null,"listItems",-1),un=(0,e.Uk)(" 插入到 "),kn=(0,e.Wm)("code",null,"<ul>",-1),dn=(0,e.Uk)(" 元素中，然后"),mn={href:"https://react.docschina.org/docs/rendering-elements.html#rendering-an-element-into-the-dom",target:"_blank",rel:"noopener noreferrer"},gn=(0,e.Uk)("渲染进 DOM"),hn=(0,e.Uk)("："),bn=(0,e.uE)('<div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>listItems<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span>  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',1),fn=(0,e.Wm)("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"List of Numbers",src:"https://codepen.io/gaearon/embed/GjPyQr?height=265&theme-id=light&default-tab=js,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"\n  See the Pen <a href='https://codepen.io/gaearon/pen/GjPyQr'>List of Numbers</a> by Dan Abramov\n  (<a href='https://codepen.io/gaearon'>@gaearon</a>) on <a href='https://codepen.io'>CodePen</a>.\n",-1),vn=(0,e.uE)('<p>当我们运行这段代码，将会看到一个警告 <code>a key should be provided for list items</code>，与Vue一样，我们可以给每个元素分配一个<code>key</code>来解决上面那个警告：</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">NumberList</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> numbers <span class="token operator">=</span> props<span class="token punctuation">.</span>numbers<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> listItems <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>number<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">      </span><span class="token punctuation">{</span>number<span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>listItems<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberList</span></span> <span class="token attr-name">numbers</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>numbers<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>',2),Wn=(0,e.Wm)("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"List of Numbers With Index",src:"https://codepen.io/gaearon/embed/jrXYRR?height=265&theme-id=light&default-tab=js,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"\n  See the Pen <a href='https://codepen.io/gaearon/pen/jrXYRR'>List of Numbers With Index</a> by Dan Abramov\n  (<a href='https://codepen.io/gaearon'>@gaearon</a>) on <a href='https://codepen.io'>CodePen</a>.\n",-1),wn=(0,e.Wm)("h2",{id:"组件状态"},[(0,e.Wm)("a",{class:"header-anchor",href:"#组件状态"},"#"),(0,e.Uk)(" 组件状态")],-1),xn=(0,e.Uk)("React 元素是"),yn={href:"https://en.wikipedia.org/wiki/Immutable_object",target:"_blank",rel:"noopener noreferrer"},Un=(0,e.Uk)("不可变对象"),jn=(0,e.Uk)("。一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。按照这一逻辑，除非每次更新都调用"),Rn=(0,e.Wm)("code",null,"ReactDOM.render()",-1),Sn=(0,e.Uk)("重新渲染，否则无法更新已经渲染的元素。而大多数React应用只会调用一次"),Jn=(0,e.Wm)("code",null,"ReactDOM.render()",-1),In=(0,e.uE)('<h3 id="函数组件"><a class="header-anchor" href="#函数组件">#</a> 函数组件</h3><p>React函数组件的标准是接受唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素（JSX元素），它本质上就是 JavaScript 函数。如：</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Welcome</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello, </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这种函数组件的优点是<strong>简单</strong>，<strong>易于编写和使用</strong>。</p>',4),Ln={render:function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,o,c,l,r,u,(0,e.Wm)("p",null,[i,k,d,(0,e.Wm)("code",null,(0,t.zw)(),1),m,(0,e.Wm)("a",g,[h,(0,e.Wm)(s)]),b,f,v,W,w,x,y]),U,j,R,S,(0,e.Wm)("p",null,[J,(0,e.Wm)("a",I,[L,(0,e.Wm)(s)]),z]),O,E,(0,e.Wm)("p",null,[_,(0,e.Wm)("a",C,[D,(0,e.Wm)(s)]),M]),N,(0,e.Wm)("p",null,[P,(0,e.Wm)("a",V,[X,(0,e.Wm)(s)]),H]),q,A,(0,e.Wm)("p",null,[B,G,T,(0,e.Wm)("a",F,[Y,(0,e.Wm)(s)]),Q]),(0,e.Wm)("p",null,[Z,(0,e.Wm)("a",K,[$,(0,e.Wm)(s)]),nn,an,sn,en,tn,pn,on]),cn,(0,e.Wm)("p",null,[ln,rn,un,kn,dn,(0,e.Wm)("a",mn,[gn,(0,e.Wm)(s)]),hn]),bn,fn,vn,Wn,wn,(0,e.Wm)("p",null,[xn,(0,e.Wm)("a",yn,[Un,(0,e.Wm)(s)]),jn,Rn,Sn,Jn]),In],64)}}}}]);