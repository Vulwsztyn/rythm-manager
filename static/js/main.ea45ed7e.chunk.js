(this.webpackJsonptmptmp=this.webpackJsonptmptmp||[]).push([[0],{46:function(e,t,n){e.exports=n(75)},51:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=(n(51),n(18)),s=n.n(i),l=n(26),m=n(43),u=n(40),p=n(28),d=n(44),h=n(93),f=n(96),g=n(98),b=n(99),v=n(27),w=n.n(v),y=n(74),k=Object(h.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}}}));function j(){var e=k(),t=r.a.useState([]),n=Object(d.a)(t,2),a=n[0],c=n[1];r.a.useEffect((function(){function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(n.length<1)return t;if("-"===n[0])return e(t,n.slice(1),[].concat(Object(p.a)(a),[y.path(a,t).length-1,"children"]));var r=n.split("-"),c=Object(u.a)(r),o=c[0],i=c.slice(1),s=i.join("-").trim();return y.assocPath([].concat(Object(p.a)(a),[y.pathOr([],a,t).length]),Object(m.a)({name:o.trim()},s.length>0?{command:s}:{}),t)}function t(t){return y.reduce(e,[],t.split("\n"))}function n(){return(n=Object(l.a)(s.a.mark((function e(){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://raw.githubusercontent.com/Vulwsztyn/rythm-manager/config/config");case 2:n=e.sent,a=n.data,console.log(t(a)),c(t(a));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);return r.a.createElement(f.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:e.root},a.map(function e(t){return function(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{button:n.command,key:n.name,style:{paddingLeft:4*(t+1)+"em"},onClick:Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.command||!n.command){e.next=3;break}return e.next=3,w.a.post("https://rythm-manager.herokuapp.com/",{msg:n.command});case 3:case"end":return e.stop()}}),e)})))},r.a.createElement(b.a,{primary:n.name})),n.children?r.a.createElement(f.a,{component:"div",disablePadding:!0},n.children.map(e(t+1))):r.a.createElement(r.a.Fragment,null))}}(0)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=n(97),O=n(42),x=Object(O.a)({palette:{type:"dark"}});o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,{theme:x},r.a.createElement(j,{style:{display:"flex",justifyContent:"center",alignItems:"center"}}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.ea45ed7e.chunk.js.map