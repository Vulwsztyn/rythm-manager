(this.webpackJsonptmptmp=this.webpackJsonptmptmp||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),l=n.n(c),o=(n(74),n(14)),i=n.n(o),m=n(26),u=n(64),s=n(27),h=n(34),p=n(128),d=n(132),f=n(134),g=n(136),E=n(137),b=n(21),v=n.n(b),y=function(e){v.a.post("https://rythm-manager.herokuapp.com/",{msg:e})},w=n(138),k=n(131),j=n(130),O=n(127),F=n(133),M=n(49),x=n.n(M),A=n(50),C=n.n(A),N=n(52),B=n.n(N),R=n(54),I=n.n(R),S=n(51),L=n.n(S),P=n(53),W=n.n(P),z=n(48),J=n.n(z),T=n(58),_=n.n(T),q=n(59),D=n.n(q),G=n(60),H=n.n(G),V=n(57),$=n.n(V),K=n(56),Q=n.n(K),U=n(55),X=n.n(U);function Y(e){var t=e.children,n=e.window,a=Object(O.a)({disableHysteresis:!0,threshold:0,target:n?n():void 0});return r.a.cloneElement(t,{elevation:a?4:0})}var Z=Object(p.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),flexGrow:1,"font-size":16}},right:{marginLeft:"auto"}}}));function ee(e){var t=Z();return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null),r.a.createElement(Y,e,r.a.createElement(w.a,null,r.a.createElement(k.a,{className:t.root},r.a.createElement(d.a,{container:!0,spacing:1,direction:"row"},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(d.a,{justify:"space-between",container:!0,spacing:24},r.a.createElement(d.a,{item:!0},r.a.createElement(d.a,{container:!0,spacing:1},[{command:"!q",buttonFiller:r.a.createElement(J.a,null)},{command:"!fs",buttonFiller:r.a.createElement(x.a,null)},{command:"!shuffle",buttonFiller:r.a.createElement(C.a,null)},{command:"!pause",buttonFiller:r.a.createElement(L.a,null)},{command:"!play",buttonFiller:r.a.createElement(B.a,null)},{command:"!clean",buttonFiller:r.a.createElement(W.a,null)},{command:"!loop",buttonFiller:r.a.createElement(I.a,null)}].map((function(e){var t=e.command,n=e.buttonFiller;return r.a.createElement(d.a,{item:!0},r.a.createElement(F.a,{variant:"contained",color:"primary",onClick:function(){return y(t)}},n))})),r.a.createElement(d.a,{item:!0},r.a.createElement(F.a,{variant:"contained",color:"primary",onClick:function(){return e.playRandomN(50)}},"Random 50")),r.a.createElement(d.a,{item:!0},r.a.createElement(F.a,{variant:"contained",color:"primary",onClick:function(){return e.oneOfEverything()}},"One of Everything")))),r.a.createElement(d.a,{item:!0},r.a.createElement(d.a,{container:!0,spacing:1},["!clear","!disconnect"].map((function(e){return r.a.createElement(d.a,{item:!0},r.a.createElement(F.a,{variant:"contained",color:"secondary",className:t.right,onClick:function(){return y(e)}},e))})))))),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(d.a,{justify:"space-between",container:!0,spacing:24},r.a.createElement(d.a,{item:!0},r.a.createElement(d.a,{container:!0,spacing:1},[{command:"!rewind 30",buttonFiller:r.a.createElement(X.a,null)},{command:"!rewind 10",buttonFiller:r.a.createElement(Q.a,null)},{command:"!rewind 5",buttonFiller:r.a.createElement($.a,null)},{command:"!forward 5",buttonFiller:r.a.createElement(_.a,null)},{command:"!forward 10",buttonFiller:r.a.createElement(D.a,null)},{command:"!forward 30",buttonFiller:r.a.createElement(H.a,null)}].map((function(e){var t=e.command,n=e.buttonFiller;return r.a.createElement(d.a,{item:!0},r.a.createElement(F.a,{variant:"contained",color:"primary",onClick:function(){return y(t)}},n))})))))))))),r.a.createElement(k.a,null))}var te=n(100),ne=Object(p.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)},content:{margin:"30px 0 0 0"}}}));function ae(){function e(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}var t=ne(),n=r.a.useState([]),a=Object(h.a)(n,2),c=a[0],l=a[1],o=r.a.useState([]),p=Object(h.a)(o,2),b=p[0],w=p[1],k=r.a.useState({}),j=Object(h.a)(k,2),O=j[0],F=j[1];function M(e){var t=e.match(/watch\?v=([^&]*)/),n=e.match(/youtu\.be\/([^?]*)/);return t&&t[1]||n&&n[1]||e}r.a.useEffect((function(){function t(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(n.length<1)return e;if("-"===n[0])return t(e,n.slice(1),[].concat(Object(s.a)(a),[te.path(a,e.data).length-1,"children"]));var r=n.split(" - ");console.log({split:r});var c=r.length>1?r.slice(0,-1).join(" - "):n,l=r.length>1?r.slice(-1)[0]:"";console.log({link:l});var o=M(l.trim());return{data:te.assocPath([].concat(Object(s.a)(a),[te.pathOr([],a,e.data).length]),Object(u.a)({name:c.trim()},o.length>0?{command:o}:{}),e.data),links:[].concat(Object(s.a)(e.links),Object(s.a)(o.length>0?[o]:[])),currentArtist:a.length>0?e.currentArtist:c,linksByArtist:a.length>0&&o.length>0?te.assocPath([e.currentArtist,te.pathOr([],[e.currentArtist],e.linksByArtist).length],o,e.linksByArtist):e.linksByArtist}}function n(e){return te.reduce(t,{data:[],links:[],linksByArtist:{}},e.split("\n").filter((function(e){return!e.startsWith("#")})))}function a(){return(a=Object(m.a)(i.a.mark((function t(){var a,r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://raw.githubusercontent.com/Vulwsztyn/rythm-manager/config/config");case 2:a=t.sent,r=a.data,c=n(r),l(e(c.data)),w(c.links),F(c.linksByArtist),setInterval((function(){return v.a.get("https://rythm-manager.herokuapp.com/")}),1e4);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[]);function x(e){return A.apply(this,arguments)}function A(){return(A=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,y("!p http://www.youtube.com/watch_videos?video_ids="+t.join(","));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return e.children?e.children.map((function(e){return C(e)})).reduce((function(e,t){return e.concat(t)})):[e.command]}function N(e){return B.apply(this,arguments)}function B(){return(B=Object(m.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x((a=C(n)).length<=50?a:e(a));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,{position:"sticky",playRandomN:function(t){x(e(b).slice(0,t))},oneOfEverything:function(){x(e(Object.keys(O).map((function(e){return(t=O[e])[Math.floor(Math.random()*t.length)];var t}))))}}),r.a.createElement(d.a,{container:!0,spacing:3,className:t.content},[c.slice(0*Math.floor(c.length/4),1*Math.floor(c.length/4)),c.slice(1*Math.floor(c.length/4),2*Math.floor(c.length/4)),c.slice(2*Math.floor(c.length/4),3*Math.floor(c.length/4)),c.slice(3*Math.floor(c.length/4),Math.floor(c.length/4*4))].map((function(n){return r.a.createElement(d.a,{xs:12,sm:6,md:4,lg:3},n.map((function(n){return r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(f.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:t.root},[n].map(function t(n){return function(a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{button:!0,key:a.name,style:{paddingLeft:4*(n+1)+"em"},onClick:Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(a);case 1:case"end":return e.stop()}}),e)})))},r.a.createElement(E.a,{primary:a.name})),a.children?r.a.createElement(f.a,{component:"div",disablePadding:!0},e(a.children).map(t(n+1))):r.a.createElement(r.a.Fragment,null))}}(0))))})))}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=n(135),ce=n(62),le=Object(ce.a)({palette:{type:"dark"}}),oe=n(33),ie=n(63),me=Object(oe.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}}));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie.a,{store:me},r.a.createElement(re.a,{theme:le},r.a.createElement(ae,{style:{display:"flex",justifyContent:"center",alignItems:"center"}})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,n){e.exports=n(101)},74:function(e,t,n){}},[[69,1,2]]]);
//# sourceMappingURL=main.2536e202.chunk.js.map