(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{1956:(e,t,l)=>{Promise.resolve().then(l.bind(l,5167))},5167:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>j});var n=l(5155),i=l(2115),s=l(9276);l(9203);let{DirectoryTree:o}=l(2324).A,r=e=>{let{pages:t,onSelectPage:l}=e,i=t.map(e=>({title:e.title,key:e.key}));return(0,n.jsx)(o,{multiple:!1,onSelect:e=>{l(e[0])},treeData:i,showIcon:!1,switcherIcon:null,className:"custom-tree",rootStyle:{borderRadius:"8px",padding:"5px 0"}})};var c=l(4189),a=l.n(c);let d=e=>{let{content:t}=e,l=t.replace(/<blockquote>/g,'<blockquote class="'.concat(a().blockquote,'">')).replace(/<ul>/g,'<ul class="'.concat(a().list,'">')).replace(/<li>/g,'<li class="'.concat(a().listItem,'">'));return(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:l},className:a().content})};var u=l(110),h=l(1812),p=l(5712),x=l(3747),f=l(396);let g=e=>Array.from(new DOMParser().parseFromString(e,"text/html").querySelectorAll("h1, h2, h3")).map(e=>({href:"#".concat(e.id),title:e.textContent||"",level:e.tagName.toLowerCase()})),w=e=>{let{content:t,isOutlineVisible:l,toggleOutlineVisibility:s}=e,[o,r]=(0,i.useState)(g(t)),[c,a]=(0,i.useState)(""),d=(0,i.useRef)(null);(0,i.useEffect)(()=>{let e=()=>{let e=window.scrollY;o.forEach(t=>{let l=document.getElementById(t.href.replace("#",""));if(l){let n=l.getBoundingClientRect().top+window.scrollY,i=n+l.offsetHeight;e>=n&&e<i&&a(t.href)}})},t=()=>{let e=document.documentElement.scrollHeight-window.innerHeight,t=window.scrollY/e;if(d.current){let e=d.current.scrollHeight-d.current.clientHeight;d.current.scrollTo({top:e*t})}};return window.addEventListener("scroll",e),window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",e),window.removeEventListener("scroll",t)}},[o]);let w=e=>{switch(e){case"h1":default:return 0;case"h2":return 20;case"h3":return 40}};return(0,n.jsxs)("div",{ref:d,style:{position:"fixed",width:250,top:70,right:f.t3,maxHeight:"calc(100vh - 70px)",overflowY:"auto",padding:"10px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)"},children:[l&&(0,n.jsx)(u.A,{affix:!1,offsetTop:70,children:o.map(e=>(0,n.jsx)("div",{style:{paddingLeft:"".concat(w(e.level),"px")},children:(0,n.jsx)(u.A.Link,{href:e.href,title:e.title})},e.href))}),(0,n.jsx)("div",{ref:d,style:{position:"fixed",top:70,right:f.t3+(l?250:0),overflowY:"auto",padding:"10px"},children:(0,n.jsx)(h.A,{type:"default",icon:l?(0,n.jsx)(p.A,{style:{color:"white"}}):(0,n.jsx)(x.A,{style:{color:"white"}}),style:{display:"flex",alignItems:"center",position:"static"},onClick:s})})]})},{Sider:m,Content:y}=s.A,v=e=>{var t;let{pages:l}=e,[o,c]=(0,i.useState)((null===(t=l[0])||void 0===t?void 0:t.key)||""),[a,u]=(0,i.useState)(!0),h=()=>{u(e=>!e)};(0,i.useEffect)(()=>{window.innerWidth<768&&u(!1)},[]);let p=l.find(e=>e.key===o);return(0,n.jsxs)(s.A,{style:{minHeight:"100vh"},children:[l.length>1&&(0,n.jsx)(m,{width:300,style:{backgroundColor:"transparent"},children:(0,n.jsx)(r,{pages:l,onSelectPage:e=>{c(e)}})}),(0,n.jsx)(s.A,{style:{display:"flex",flexDirection:"column"},children:(0,n.jsxs)(s.A,{style:{flex:1},children:[(0,n.jsx)(y,{style:{padding:"0 16px",overflow:"visible"},children:p&&(0,n.jsx)(d,{content:p.content})}),a?(0,n.jsx)(m,{width:250,style:{backgroundColor:"transparent"},children:p&&(0,n.jsx)(w,{content:p.content,isOutlineVisible:a,toggleOutlineVisibility:h})}):p&&(0,n.jsx)(w,{content:p.content,isOutlineVisible:a,toggleOutlineVisibility:h})]})})]})},j=()=>{let[e,t]=(0,i.useState)("");return((0,i.useEffect)(()=>{(async()=>{let e=await fetch("/community_guidelines/content.html");e.ok?t(await e.text()):console.error("Failed to load content:",e.status)})()},[]),e)?(0,n.jsx)(v,{pages:[{key:"page1",title:"Community Guidelines",content:e}]}):(0,n.jsx)("div",{children:"Loading..."})}},396:(e,t,l)=>{"use strict";l.d(t,{DI:()=>i,Kp:()=>n,eq:()=>s,t3:()=>o});let n="https://github.com/jappe-studios",i="https://discord.gg/JccKRMADHV",s="#8437cc",o=25},9203:()=>{},4189:e=>{e.exports={blockquote:"content_blockquote__trBdI",list:"content_list__Hfnzt",listItem:"content_listItem__EFSh6"}}},e=>{var t=t=>e(e.s=t);e.O(0,[469,321,838,265,441,517,120],()=>t(1956)),_N_E=e.O()}]);