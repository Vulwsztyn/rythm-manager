(this.webpackJsonptmptmp=this.webpackJsonptmptmp||[]).push([[0],{108:function(e,t,n){e.exports=n(142)},113:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),o=(n(113),n(22)),i=n.n(o),u=n(40),m=n(43),s=n(41),f=n(42),d=n(177),p=n(188),h=n(192),E=n(190),g=n(191),b=n(36),v=n.n(b),y=n(186),O=n(187),w=n(185),x=n(184),j=n(189),C=n(180),k=n(182),_=n(183),S=n(194),P=n(26),A=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"row"},horizontal:{display:"flex",flexDirection:"row"}}}));var N=Object(P.b)((function(e){return{command:e.command}}),(function(e){return{setCommand:function(t){return e({type:"CHANGE_COMMAND",value:t})}}}))((function(e){var t=e.command,n=e.setCommand,a=A(),c=function(e){n(e.target.name)};return r.a.createElement("div",{className:a.root},r.a.createElement(C.a,{component:"fieldset",className:a.formControl},r.a.createElement(k.a,{className:a.horizontal},["p","pt","ps"].map((function(e){return r.a.createElement(_.a,{control:r.a.createElement(S.a,{checked:t===e,onChange:c,name:e,key:e}),label:e})})))))})),R=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"row"},horizontal:{display:"flex",flexDirection:"row"}}}));var F=Object(P.b)((function(e){return{prefix:e.prefix}}),(function(e){return{setPrefix:function(t){return e({type:"CHANGE_PREFIX",value:t})}}}))((function(e){var t=e.prefix,n=e.setPrefix,a=R(),c=function(e){n(e.target.name)};return r.a.createElement("div",{className:a.root},r.a.createElement(C.a,{component:"fieldset",className:a.formControl},r.a.createElement(k.a,{className:a.horizontal},["!","*"].map((function(e){return r.a.createElement(_.a,{control:r.a.createElement(S.a,{checked:t===e,onChange:c,name:e,key:e}),label:e})})))))})),T=n(82),W=n.n(T),M=n(83),D=n.n(M),L=n(85),H=n.n(L),I=n(87),z=n.n(I),B=n(84),K=n.n(B),U=n(86),V=n.n(U),G=n(81),J=n.n(G),X=n(91),q=n.n(X),$=n(92),Q=n.n($),Y=n(93),Z=n.n(Y),ee=n(90),te=n.n(ee),ne=n(89),ae=n.n(ne),re=n(88),ce=n.n(re);function le(e){var t=e.children,n=Object(x.a)({disableHysteresis:!0,threshold:0});return r.a.cloneElement(t,{elevation:n?8:0})}var oe=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),flexGrow:1,"font-size":16}},right:{marginLeft:"auto"}}}));function ie(e){var t=e.sendWithPrefix,n=oe();return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement(le,e,r.a.createElement(y.a,null,r.a.createElement(O.a,{className:n.root},r.a.createElement(p.a,{container:!0,spacing:1,direction:"row"},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(p.a,{justify:"space-between",container:!0,spacing:24},r.a.createElement(p.a,{item:!0},r.a.createElement(p.a,{container:!0,spacing:1},[{command:"q",buttonFiller:r.a.createElement(J.a,null)},{command:"fs",buttonFiller:r.a.createElement(W.a,null)},{command:"shuffle",buttonFiller:r.a.createElement(D.a,null)},{command:"pause",buttonFiller:r.a.createElement(K.a,null)},{command:"play",buttonFiller:r.a.createElement(H.a,null)},{command:"clean",buttonFiller:r.a.createElement(V.a,null)},{command:"loop",buttonFiller:r.a.createElement(z.a,null)}].map((function(e){var n=e.command,a=e.buttonFiller;return r.a.createElement(p.a,{item:!0},r.a.createElement(j.a,{variant:"contained",color:"primary",onClick:function(){return t(n)}},a))})),r.a.createElement(p.a,{item:!0},r.a.createElement(j.a,{variant:"contained",color:"primary",onClick:function(){return e.playRandomN(50)}},"Random 50")),r.a.createElement(p.a,{item:!0},r.a.createElement(j.a,{variant:"contained",color:"primary",onClick:function(){return e.oneOfEverything()}},"One of Everything")))),r.a.createElement(p.a,{item:!0},r.a.createElement(p.a,{container:!0,spacing:1},["clear","disconnect"].map((function(e){return r.a.createElement(p.a,{item:!0},r.a.createElement(j.a,{variant:"contained",color:"secondary",className:n.right,onClick:function(){return t(e)}},e))})))))),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(p.a,{justify:"space-between",container:!0,spacing:24},r.a.createElement(p.a,{item:!0},r.a.createElement(p.a,{container:!0,spacing:1},[{command:"rewind 30",buttonFiller:r.a.createElement(ce.a,null)},{command:"rewind 10",buttonFiller:r.a.createElement(ae.a,null)},{command:"rewind 5",buttonFiller:r.a.createElement(te.a,null)},{command:"forward 5",buttonFiller:r.a.createElement(q.a,null)},{command:"forward 10",buttonFiller:r.a.createElement(Q.a,null)},{command:"forward 30",buttonFiller:r.a.createElement(Z.a,null)}].map((function(e){var n=e.command,a=e.buttonFiller;return r.a.createElement(p.a,{item:!0},r.a.createElement(j.a,{variant:"contained",color:"primary",onClick:function(){return t(n)}},a))})))),r.a.createElement(p.a,{item:!0},r.a.createElement(F,null)),r.a.createElement(p.a,{item:!0},r.a.createElement(N,null)),r.a.createElement(p.a,{item:!0}))))))),r.a.createElement(O.a,null))}var ue=function(e){v.a.post(Object({NODE_ENV:"production",PUBLIC_URL:"https://vulwsztyn.github.io/rythm-manager",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_SERVER_URL,{msg:e})},me=r.a.forwardRef,se=r.a.useImperativeHandle,fe=me((function(e,t){var n=e.command,a=e.prefix;return se(t,(function(){return{sendWithPrefixAndCommand:function(e){ue("".concat(a).concat(n," ").concat(e))},sendWithPrefix:function(e){ue("".concat(a," ").concat(e))}}})),r.a.createElement(r.a.Fragment,null)})),de=Object(P.b)((function(e){return{command:e.command,prefix:e.prefix}}),(function(e){return{}}),null,{forwardRef:!0})(fe),pe=n(141),he=r.a.useRef,Ee=Object(d.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)},content:{margin:"35px 0 0 0"}}}));var ge=Object(P.b)((function(e){return{}}),(function(e){return{}}))((function(){function e(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}var t=Ee(),n=r.a.useState([]),a=Object(f.a)(n,2),c=a[0],l=a[1],o=r.a.useState([]),d=Object(f.a)(o,2),b=d[0],y=d[1],O=r.a.useState({}),w=Object(f.a)(O,2),x=w[0],j=w[1];function C(e){var t=e.match(/watch\?v=([^&]*)/),n=e.match(/youtu\.be\/([^?]*)/);return t&&t[1]||n&&n[1]||e}function k(e){return e.children?e.children.map((function(e){return k(e)})).reduce((function(e,t){return e.concat(t)})):[e.command]}function _(e){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:A(e(k(n)));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r.a.useEffect((function(){function t(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(n.length<1)return e;if("-"===n[0])return t(e,n.slice(1),[].concat(Object(s.a)(a),[pe.path(a,e.data).length-1,"children"]));var r=n.split(" - "),c=r.length>1?r.slice(0,-1).join(" - "):n,l=r.length>1?r.slice(-1)[0]:"",o=C(l.trim());return{data:pe.assocPath([].concat(Object(s.a)(a),[pe.pathOr([],a,e.data).length]),Object(m.a)({name:c.trim()},o.length>0?{command:o}:{}),e.data),links:[].concat(Object(s.a)(e.links),Object(s.a)(o.length>0?[o]:[])),currentArtist:a.length>0?e.currentArtist:c,linksByArtist:a.length>0&&o.length>0?pe.assocPath([e.currentArtist,pe.pathOr([],[e.currentArtist],e.linksByArtist).length],o,e.linksByArtist):e.linksByArtist}}function n(e){return pe.reduce(t,{data:[],links:[],linksByArtist:{}},e.split("\n").filter((function(e){return!e.startsWith("#")})))}function a(){return(a=Object(u.a)(i.a.mark((function t(){var a,r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("effect"),t.next=3,v.a.get("https://raw.githubusercontent.com/Vulwsztyn/rythm-manager/config/config");case 3:a=t.sent,r=a.data,c=n(r),l(e(c.data)),y(c.links),j(c.linksByArtist),setInterval((function(){return v.a.get(Object({NODE_ENV:"production",PUBLIC_URL:"https://vulwsztyn.github.io/rythm-manager",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_SERVER_URL)}),1e4);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}console.log("useEffect"),function(){a.apply(this,arguments)}()}),[]);var P=he();function A(e){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,P.current.sendWithPrefixAndCommand("http://www.youtube.com/watch_videos?video_ids="+t.join(","));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(de,{ref:P}),r.a.createElement(ie,{position:"sticky",playRandomN:function(t){A(e(b).slice(0,t))},oneOfEverything:function(){A(e(Object.keys(x).map((function(e){return(t=x[e])[Math.floor(Math.random()*t.length)];var t}))))},sendWithPrefix:function(e){return P.current.sendWithPrefix(e)}}),r.a.createElement(p.a,{container:!0,spacing:3,className:t.content},[c.slice(0*Math.floor(c.length/4),1*Math.floor(c.length/4)),c.slice(1*Math.floor(c.length/4),2*Math.floor(c.length/4)),c.slice(2*Math.floor(c.length/4),3*Math.floor(c.length/4)),c.slice(3*Math.floor(c.length/4),Math.floor(c.length/4*4))].map((function(e){return r.a.createElement(p.a,{xs:12,sm:6,md:4,lg:3},e.map((function(e){return r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(h.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:t.root},[e].map(function e(t){return function(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{button:!0,key:n.name,style:{paddingLeft:4*(t+1)+"em"},onClick:Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(n);case 1:case"end":return e.stop()}}),e)})))},r.a.createElement(g.a,{primary:n.name})),n.children?r.a.createElement(h.a,{component:"div",disablePadding:!0},n.children.map(e(t+1))):r.a.createElement(r.a.Fragment,null))}}(0))))})))}))))})),be=n(193),ve=Object(d.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"70%"}},root2:{width:"100%",display:"flex"}}}));function ye(){var e=ve(),t=r.a.useState({data:{}}),n=Object(f.a)(t,2),a=n[0],c=n[1],l=r.a.useState(1),o=Object(f.a)(l,2),m=o[0],d=o[1],p=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"https://vulwsztyn.github.io/rythm-manager",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_SERVER_URL,"playlistItems"),{listId:t.target.value});case 2:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},r.a.createElement("div",{className:e.root2},r.a.createElement(be.a,{id:"filled-multiline-flexible",multiline:!0,rowsMax:4,onChange:p,variant:"filled",fullWidth:!0,placeholder:"link",label:"Link"}),r.a.createElement(be.a,{id:"filled-multiline-flexible2",variant:"filled",value:m,fullWidth:!0,type:"number",label:"Liczba my\u015blnik\xf3w",onChange:function(e){d(e.target.value)}}),r.a.createElement(be.a,{id:"filled-multiline-static",multiline:!0,value:[a.data.title].concat(Object(s.a)(a.data.items?a.data.items.map((function(e){var t=e.title,n=e.link;return"".concat(t," - ").concat(n)})):[])).join("\n"+"-".repeat(m)+" "),rows:40,defaultValue:"",variant:"filled",fullWidth:!0})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe={command:"p",prefix:"!"},we=n(58),xe=n(94),je=n(11),Ce=Object(we.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_COMMAND":return Object(m.a)(Object(m.a)({},e),{},{command:t.value});case"CHANGE_PREFIX":return Object(m.a)(Object(m.a)({},e),{},{prefix:t.value});default:return e}}));n(137).config(),l.a.render(r.a.createElement(P.a,{store:Ce},r.a.createElement(r.a.StrictMode,null,r.a.createElement(xe.a,{basename:"https://vulwsztyn.github.io/rythm-manager"},r.a.createElement(je.c,null,r.a.createElement(je.a,{path:"/links",children:r.a.createElement(ye,null)}),r.a.createElement(je.a,{path:"/",children:r.a.createElement(ge,{style:{display:"flex",justifyContent:"center",alignItems:"center"}})}),r.a.createElement(je.a,{path:"",children:r.a.createElement(ge,{style:{display:"flex",justifyContent:"center",alignItems:"center"}})}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[108,1,2]]]);
//# sourceMappingURL=main.296adc53.chunk.js.map