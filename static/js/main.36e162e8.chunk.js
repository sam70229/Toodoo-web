(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{18:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,n){e.exports=n(32)},24:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),c=n.n(l),s=(n(24),n(6)),o=n(7),u=n(9),m=n(8),i=n(5),p=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={open:!1},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.item;return t.url?r.a.createElement("li",{className:"nav-text"},r.a.createElement(i.b,{to:t.url},t.name)):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-text"},r.a.createElement("label",{onClick:function(){e.setState({open:!e.state.open})}},t.name)),this.state.open&&t.items&&r.a.createElement("ul",null,t.items.map((function(e,t){}))))}}]),n}(a.Component);n(30);var b=function(e){var t=e.items;return r.a.createElement("nav",{className:"pro-sidebar"},r.a.createElement("ul",{className:"nav-menu-items"},function(e){return e.map((function(e,t){return function(e,t){return e.items,r.a.createElement(p,{item:e,key:t})}(e,t)}))}(t.navs)))},E=n(1),f=n(18),h=n.n(f),v=(n(31),{navs:[{name:"home",label:"Home",url:"/"},{name:"test2",label:"Test 2",items:[{name:"test2 sub1",label:"test2 sub1",url:"/test1"},{name:"test2 sub2",label:"test2 sub2",items:[{name:"test2 sub2 sub2",label:"test2 sub2 sub2",url:"/test2"}]}]}]});var d=[{name:"test2 sub1",url:"/test1",component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"This is test2 sub1"))}},{name:"test2 sub2 sub2",url:"/test2",component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"This is test2 sub2 sub2"))}}];function g(e){var t=e.children;return r.a.createElement("main",{id:"primary-content",tabIndex:"-1",role:"main"},t)}var k=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,{items:v}),r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),r.a.createElement(g,null,r.a.createElement(E.c,null,d.map((function(e,t){return r.a.createElement(E.a,{path:e.url,render:function(){return r.a.createElement(e.component,null)},key:t})})))))}}]),n}(a.Component);var j=function(){return r.a.createElement(i.a,null,r.a.createElement(E.c,null,r.a.createElement(E.a,{component:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.36e162e8.chunk.js.map