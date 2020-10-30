(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{561:function(v,_,t){v.exports=t.p+"assets/img/browser.50ecb193.jpg"},562:function(v,_,t){v.exports=t.p+"assets/img/eventloop.da078fa3.png"},563:function(v,_,t){v.exports=t.p+"assets/img/nodesystem.20c8ec0e.png"},631:function(v,_,t){"use strict";t.r(_);var e=t(2),i=Object(e.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[e("img",{attrs:{src:"http://ww1.sinaimg.cn/mw690/6b31d030ly1fvgesyykovj20en07i3yh.jpg",alt:""}})]),v._v(" "),e("h2",{attrs:{id:"_1-node能够解决什么问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-node能够解决什么问题"}},[v._v("#")]),v._v(" 1. Node能够解决什么问题?")]),v._v(" "),e("ol",[e("li",[v._v("Node的首要目标是提供一种简单的，用于创建高性能服务器的开发工具")]),v._v(" "),e("li",[v._v("Web服务器的瓶颈在于并发的用户量，对比Java和Php的实现方式")])]),v._v(" "),e("h2",{attrs:{id:"_2-node是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-node是什么"}},[v._v("#")]),v._v(" 2. Node是什么?")]),v._v(" "),e("ol",[e("li",[v._v("Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境,让JavaScript的执行效率与低端的C语言的相近的执行效率。。")]),v._v(" "),e("li",[v._v("Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。")]),v._v(" "),e("li",[v._v("Node.js 的包管理器 npm，是全球最大的开源库生态系统")])]),v._v(" "),e("h2",{attrs:{id:"_3-node特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-node特点"}},[v._v("#")]),v._v(" 3. Node特点")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("为什么JavaScript是单线程？")]),v._v(" "),e("ul",[e("li",[v._v("这是由 Javascript 这门脚本语言的用途决定的。")]),v._v(" "),e("li",[v._v("Web Worker并没有改变 JavaScript 单线程的本质。")])])]),v._v(" "),e("li",[e("p",[v._v("浏览器模型")]),v._v(" "),e("ul",[e("li",[v._v("用户界面-包括地址栏、前进/后退按钮、书签菜单等")]),v._v(" "),e("li",[v._v("浏览器引擎-在用户界面和呈现引擎之间传送指令")]),v._v(" "),e("li",[v._v("呈现引擎-又称渲染引擎，也被称为浏览器内核，在线程方面又称为UI线程")]),v._v(" "),e("li",[v._v("网络-用于网络调用，比如 HTTP 请求")]),v._v(" "),e("li",[v._v("用户界面后端-用于绘制基本的窗口小部件,UI线程和JS共用一个线程")]),v._v(" "),e("li",[v._v("JavaScript解释器-用于解析和执行 JavaScript 代码")]),v._v(" "),e("li",[v._v("数据存储-这是持久层。浏览器需要在硬盘上保存各种数据，例如 Cookie"),e("br"),v._v(" "),e("img",{attrs:{src:t(561),alt:""}})])])]),v._v(" "),e("li",[e("p",[v._v("除JS线程和UI线程之外的其它线程")]),v._v(" "),e("ul",[e("li",[v._v("浏览器事件触发线程")]),v._v(" "),e("li",[v._v("定时触发器线程")]),v._v(" "),e("li",[v._v("异步HTTP请求线程")])])]),v._v(" "),e("li",[e("p",[v._v("任务队列")]),v._v(" "),e("ul",[e("li",[v._v("所有同步任务都在主线程上执行，形成一个执行栈")]),v._v(" "),e("li",[v._v("主线程之外，还存在一个任务队列。只要异步任务有了运行结果，就在任务队列之中放置一个事件。")]),v._v(" "),e("li",[v._v("一旦执行栈中的所有同步任务执行完毕，系统就会读取任务队列，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。")]),v._v(" "),e("li",[v._v("主线程不断重复上面的第三步。")])])]),v._v(" "),e("li",[e("p",[v._v("Event Loop"),e("br"),v._v("\n主线程从任务队列中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop(事件循环)"),e("br"),v._v(" "),e("img",{attrs:{src:t(562),alt:""}})])]),v._v(" "),e("li",[e("p",[v._v("Node.js的Event Loop"),e("br"),v._v(" "),e("img",{attrs:{src:t(563),alt:""}})]),v._v(" "),e("ul",[e("li",[v._v("V8引擎解析JavaScript脚本。")]),v._v(" "),e("li",[v._v("解析后的代码，调用Node API。")]),v._v(" "),e("li",[v._v("libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎。")]),v._v(" "),e("li",[v._v("V8引擎再将结果返回给用户。")])])]),v._v(" "),e("li",[e("p",[v._v("同步与异步")]),v._v(" "),e("p",[v._v("同步和异步关注的是消息通知机制")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("同步就是发出调用后，没有得到结果之前，该调用不返回，一旦调用返回，就得到返回值了。 简而言之就是调用者主动等待这个调用的结果")])]),v._v(" "),e("li",[e("p",[v._v("而异步则相反，调用者在发出调用后这个调用就直接返回了，所以没有返回结果。换句话说当一个异步过程调用发出后，调用者不会立刻得到结果，而是调用发出后，被调用者通过状态、通知或回调函数处理这个调用。")])])])]),v._v(" "),e("li",[e("p",[v._v("阻塞与非阻塞")]),v._v(" "),e("p",[v._v("阻塞和非阻塞关注的是程序在等待调用结果（消息，返回值）时的状态.")]),v._v(" "),e("ul",[e("li",[v._v("阻塞调用是指调用结果返回之前，当前线程会被挂起。调用线程只有在得到结果之后才会返回。")]),v._v(" "),e("li",[v._v("非阻塞调用指在不能立刻得到结果之前，该调用不会阻塞当前线程。")])])]),v._v(" "),e("li",[e("p",[v._v("组合")]),v._v(" "),e("p",[v._v("同步异步取决于被调用者，阻塞非阻塞取决于调用者")]),v._v(" "),e("ul",[e("li",[v._v("同步阻塞")]),v._v(" "),e("li",[v._v("异步阻塞")]),v._v(" "),e("li",[v._v("同步非阻塞")]),v._v(" "),e("li",[v._v("异步非阻塞")])])])]),v._v(" "),e("h2",{attrs:{id:"_4-什么场合下应该考虑使用node框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-什么场合下应该考虑使用node框架"}},[v._v("#")]),v._v(" 4. 什么场合下应该考虑使用Node框架")]),v._v(" "),e("p",[v._v("当应用程序需要处理大量并发的输入输出，而在向客户端响应之前，应用程序并不需要进行非常复杂的处理。")]),v._v(" "),e("ul",[e("li",[v._v("聊天服务器")]),v._v(" "),e("li",[v._v("电子商务网站")])]),v._v(" "),e("h2",{attrs:{id:"_5-node的架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-node的架构"}},[v._v("#")]),v._v(" 5. Node的架构")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/yjhjstz/deep-into-node",target:"_blank",rel:"noopener noreferrer"}},[v._v("深入理解Node.js：核心思想于源码解析"),e("OutboundLink")],1),e("br"),v._v(" "),e("a",{attrs:{href:"https://www.jianshu.com/p/a8f5a8cdc6ab",target:"_blank",rel:"noopener noreferrer"}},[v._v("node源码解析"),e("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=i.exports}}]);