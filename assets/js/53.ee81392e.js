(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{716:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("当你发现自己的才华撑不起你的野心时，就请安静下来学习吧！")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.icey.cc/3+2.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("鲁迅说过："),a("code",[t._v("答案仅供参考...")])])]),t._v(" "),a("h2",{attrs:{id:"_1、对bfc的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、对bfc的理解"}},[t._v("#")]),t._v(" 1、对BFC的理解?")]),t._v(" "),a("p",[t._v("解析：")]),t._v(" "),a("p",[t._v("是什么？")]),t._v(" "),a("blockquote",[a("p",[t._v("BFC(block formatting context)直译为“块级格式化上下文”。是web页面的可视化css渲染的一部分。它是块级盒布局出现的区域，也是浮动元素进行交互的区域。它规定了内部块级元素（block-level box）如何布局。\nw3c规范中，css2只有BFC（block formatting context）和IFC（inline formatting context），css3中增加了GFC和FFC。")])]),t._v(" "),a("p",[t._v("BFC布局规则：")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("内部box会在垂直方向，一个接一个的放置。")]),t._v(" "),a("li",[t._v("box垂直方向的距离由margin决定，属于同一个bfc的两个相邻的box的margin会发生重叠")]),t._v(" "),a("li",[t._v("每个margin box的左边，与包含块border box的左边相接触（对于从左向右的格式化）。即使存在浮动也如此")]),t._v(" "),a("li",[t._v("BFC区域不会与float box重叠")]),t._v(" "),a("li",[t._v("BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。")]),t._v(" "),a("li",[t._v("计算BFC的高度时，浮动元素也参与计算。")])])]),t._v(" "),a("p",[t._v("怎么产生BFC?")]),t._v(" "),a("ol",[a("li",[t._v("跟元素")]),t._v(" "),a("li",[t._v("float属性部位node")]),t._v(" "),a("li",[t._v("position为absolute或fixed")]),t._v(" "),a("li",[t._v("display为inline-block，table-cell，table-caption，flex，inline-flex")]),t._v(" "),a("li",[t._v("overflow不为visible")])]),t._v(" "),a("p",[t._v("BFC的作用和（原理）")]),t._v(" "),a("ol",[a("li",[t._v("自适应布局")]),t._v(" "),a("li",[t._v("清除内部浮动")]),t._v(" "),a("li",[t._v("防止垂直margin重叠\n"),a("blockquote",[a("p",[t._v("Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠")])])])]),t._v(" "),a("p",[t._v("总结：BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。"),a("br"),t._v("\n参考文章："),a("a",{attrs:{href:"https://www.cnblogs.com/chakson/p/4972286.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解BFC"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_2、css-reset-是什么-normalize-css-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、css-reset-是什么-normalize-css-是什么"}},[t._v("#")]),t._v(" 2、CSS reset 是什么？normalize.css 是什么？")]),t._v(" "),a("p",[t._v("解析：")]),t._v(" "),a("p",[t._v("什么是？"),a("br"),t._v("\nHTML标签在浏览器中都有默认的样式，不同浏览器的默认样式之前存在差异。例如ul默认带有锁进样式，ie时候margin实现的，FireFox是padding实现的。开发时浏览器的默认样式会带来很多兼容性问题，影响开发效率。"),a("br"),t._v("\n解决方案就是一开始就将浏览器的默认样式去掉，覆盖掉浏览器的css默认属性。就是css reset。")]),t._v(" "),a("h2",{attrs:{id:"_3、css中浮动是怎么回事-清除浮动的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、css中浮动是怎么回事-清除浮动的方式"}},[t._v("#")]),t._v(" 3、css中浮动是怎么回事？清除浮动的方式？")]),t._v(" "),a("p",[t._v("解析：")]),t._v(" "),a("ul",[a("li",[t._v("原因：子盒子浮动脱离标准文档流 无法撑开父盒子。")]),t._v(" "),a("li",[t._v("负作用：1、父盒子背景无法显示 2、边框无法撑开 3、margin padding设置值无法正常显示")]),t._v(" "),a("li",[t._v("解决：\n"),a("ul",[a("li",[t._v("父盒子设置固定合适的高度")]),t._v(" "),a("li",[t._v("clear:both")]),t._v(" "),a("li",[t._v("父盒子div设置 overflow:hidden")])])])]),t._v(" "),a("h2",{attrs:{id:"_4、new的实现原理。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、new的实现原理。"}},[t._v("#")]),t._v(" 4、new的实现原理。")]),t._v(" "),a("p",[t._v("解析：")]),t._v(" "),a("ol",[a("li",[t._v("创建一个对象obj，")]),t._v(" "),a("li",[t._v("将该对象的原型链__proto__指向构造函数的prototype")]),t._v(" "),a("li",[t._v("在原型链上设置构造函数constructor为要实例化的Fn")]),t._v(" "),a("li",[t._v("call改变Fn的this的指向到obj，执行")]),t._v(" "),a("li",[t._v("返回一个对象，如果Fn执行返回对象就返回该对象，否则返回obj")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n    obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("__proto__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Fn\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" obj\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"_5、commonjs模块化怎么导入导出-简单说下实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、commonjs模块化怎么导入导出-简单说下实现原理"}},[t._v("#")]),t._v(" 5、commonjs模块化怎么导入导出，简单说下实现原理?")]),t._v(" "),a("p",[t._v("解析：")]),t._v(" "),a("ul",[a("li",[t._v("https://www.cnblogs.com/chenshufang/p/9927543.html")]),t._v(" "),a("li",[t._v("模块化：将一个复杂的系统分割成多个模块\n"),a("ul",[a("li",[t._v("requireJs：AMD依赖前置")]),t._v(" "),a("li",[t._v("seaJs：CMD依赖就近")])])]),t._v(" "),a("li",[t._v("nodejs使用的是Commjs规范")]),t._v(" "),a("li",[t._v("使用\n"),a("ul",[a("li",[t._v("moudle.exports导出")]),t._v(" "),a("li",[t._v("require导入")])])]),t._v(" "),a("li",[t._v("require加载： 当node遇到 require(X),按照下面的顺序处理\n"),a("ul",[a("li",[t._v("X是内置模块")]),t._v(" "),a("li",[t._v("X是'./a'或者'../a'")]),t._v(" "),a("li",[t._v("X是一个目录：node_modules依次检索")]),t._v(" "),a("li",[t._v("not found")])])]),t._v(" "),a("li",[t._v("module对象")])])])}),[],!1,null,null,null);s.default=e.exports}}]);