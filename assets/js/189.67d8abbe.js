(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{600:function(t,a,v){"use strict";v.r(a);var _=v(2),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"一、基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、基本概念"}},[t._v("#")]),t._v(" 一、基本概念")]),t._v(" "),v("ul",[v("li",[v("ol",[v("li",[t._v("进程和线程")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"2"}},[v("li",[t._v("异步和同步")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"3"}},[v("li",[t._v("阻塞和非阻塞")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"4"}},[v("li",[t._v("堆和栈")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"5"}},[v("li",[t._v("微任务，宏任务")])])])]),t._v(" "),v("h2",{attrs:{id:"二、一个栗子简单理解-阻塞和非阻塞-异步和同步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、一个栗子简单理解-阻塞和非阻塞-异步和同步"}},[t._v("#")]),t._v(" 二、一个栗子简单理解 阻塞和非阻塞，异步和同步")]),t._v(" "),v("blockquote",[v("p",[t._v("简单来说一个完整的事件由事件源（调用者）、事件目标（被调用者）、事件处理程序（事件回调函数）三部分组成。\n阻塞和非阻塞表现在调用者的状态；异步和同步由被调用者的反馈决定。")])]),t._v(" "),v("p",[t._v("简单由一个小故事说明下：我给一个女孩打电话表白，电话打通了，我说我喜欢你，会出现以下几种情况：")]),t._v(" "),v("ul",[v("li",[v("ol",[v("li",[t._v("女孩沉默不语，也没挂断电话，这叫同步；我在这干等着这叫阻塞。整个过程就叫同步阻塞；")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"2"}},[v("li",[t._v("女孩沉默不语，也没挂掉电话；我拿起另一个电话给另一个女孩继续表白，这叫非阻塞。整个过程叫做同步非阻塞；")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"3"}},[v("li",[t._v("女孩回复说想想，让我等回复，然后挂了电话，这叫异步；我在这干等着。整个过程叫异步阻塞；")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"4"}},[v("li",[t._v("女孩回复说想想，让我等回复，然后挂掉电话；我拿起电话给另一个女孩继续表白。整个过程叫异步非阻塞。")])])])]),t._v(" "),v("p",[t._v("NodeJs的事件机制使用的是异步非阻塞。")]),t._v(" "),v("h2",{attrs:{id:"三、javascript是单线程的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、javascript是单线程的"}},[t._v("#")]),t._v(" 三、Javascript是单线程的")]),t._v(" "),v("p",[t._v("JavaScript单线程主要为了避免多线程同时操作相同DOM时出现的冲突。比如一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，浏览器如何选择呢？")]),t._v(" "),v("h2",{attrs:{id:"四、任务队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、任务队列"}},[t._v("#")]),t._v(" 四、任务队列")]),t._v(" "),v("p",[t._v("单线程意味着，所有任务都要排队，前一个任务结束后才能往下执行。如果碰到i/o操作，比如读取文件，ajax等，过程会很慢，等待的事件也会很长，造成阻塞。\n实际上Javascript主线程是不管这种i/o操作的，现将i/o操作任务挂起处于等待的任务，等i/o触发并返回结果后，再回头将挂起的任务继续执行")]),t._v(" "),v("blockquote",[v("p",[t._v("所有的任务都分为同步任务和异步任务\n1、形成执行栈：所有同步任务都在主程序上执行，形成一个"),v("code",[t._v("执行栈")]),t._v("。\n2、形成任务队列：主线程之外还存在一个"),v("code",[t._v("任务队列”")]),t._v("异步任务有了运行结果会在任务队列中放置一个事件\n3、执行栈中的同步任务执行完毕，系统就会读取"),v("code",[t._v("任务队列")]),t._v("，看看有哪些事件。那些对应等异步任务，于是结束等待状态，进入执行栈，才开始执行。\n4、主程序不断重复上面的三步")])]),t._v(" "),v("h2",{attrs:{id:"五、浏览器的事件环机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五、浏览器的事件环机制"}},[t._v("#")]),t._v(" 五、浏览器的事件环机制")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://ww1.sinaimg.cn/large/6b31d030gy1fudndn1n44j20q80hxdig.jpg",alt:"浏览器"}})]),t._v(" "),v("ol",[v("li",[t._v("所有同步任务都在主线程上执行，形成一个执行栈")]),t._v(" "),v("li",[t._v("主线程之外，会有一个线程池执行异步任务，还存在一个任务队列。只要异步任务有了运行结果，就在任务队列之中放置一个事件。")]),t._v(" "),v("li",[t._v("一旦执行栈中的所有同步任务执行完毕，系统就会读取任务队列,将队列中的事件放到执行栈中依次执行，执行异步任务时，先清空微任务，再清空宏任务")]),t._v(" "),v("li",[t._v("主线程从任务队列中读取事件，这个过程是循环不断的")])]),t._v(" "),v("h2",{attrs:{id:"六、node的事件环机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#六、node的事件环机制"}},[t._v("#")]),t._v(" 六、node的事件环机制")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://ww1.sinaimg.cn/large/6b31d030gy1fudney5n6ij20xv0lh78d.jpg",alt:"node"}})]),t._v(" "),v("ol",[v("li",[t._v("node启动时，从主程序执行栈进入时间队列之前（宏任务）会先把微任务清空；")]),t._v(" "),v("li",[t._v("node中的event loop分为6个阶段，不同于浏览器的是，这里每一个阶段都对应一个事件队列，node会在当前阶段中的全部任务执行完，清空NextTick Queue（nextTick先于其他微任务），清空微任务Microtask Queue，再执行下一阶段。")]),t._v(" "),v("li",[t._v("如果执行过程中会碰到io操作，如果有io操作会接着会进入 check阶段 如果没有check会一直返回事件队列，形成循环，直到check函数出现；有 check会往下执行 形成事件环")]),t._v(" "),v("li",[t._v("微任务会在每次执行队列切换的时候执行")])])])}),[],!1,null,null,null);a.default=s.exports}}]);