(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{5567:(e,t,l)=>{Promise.resolve().then(l.bind(l,1119))},396:(e,t,l)=>{"use strict";l.d(t,{DI:()=>i,Kp:()=>n,eq:()=>s,t3:()=>r});let n="https://github.com/jappe-studios",i="https://discord.gg/JccKRMADHV",s="#8437cc",r=25},1119:(e,t,l)=>{"use strict";l.d(t,{default:()=>E});var n=l(5155);l(1642);var i=l(2115),s=l(9276),r=l(2314),o=l(2957),c=l(5403),d=l(9202),a=l(9365),h=l(4810),x=l(5137),u=l(7396),p=l(8536),y=l(3071),f=l(568),j=l(318),m=l(8034),g=l(6262),b=l(396),A=l(6046),k=l(5973),w=l(5088);let{Header:v,Footer:C,Content:I}=s.A,E=e=>{let{children:t}=e,[l,E]=(0,i.useState)(!1),S=(0,A.usePathname)(),[_,z]=(0,i.useState)(null),[F,H]=(0,i.useState)([]),[L,D]=(0,i.useState)([]),K=(0,i.useRef)(null),[N,W]=(0,i.useState)(0),G="/"===S,J=(0,i.useMemo)(()=>[{key:"1",label:(0,n.jsx)(u.default,{href:"/",children:"Home"})},{key:"5",label:(0,n.jsx)(u.default,{href:"/about",children:"About"})},{key:"6",label:(0,n.jsx)(u.default,{href:"/contact",children:"Contact"})}],[]);return(0,i.useEffect)(()=>{let e=()=>{E(window.scrollY>5)},t=()=>{K.current&&W(K.current.offsetWidth)},l=new k.A(()=>{t()});return K.current&&l.observe(K.current),window.addEventListener("scroll",e),window.addEventListener("resize",t),t(),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",t),l.disconnect()}},[]),(0,i.useEffect)(()=>{"/"===S?z("1"):S.startsWith("/about")?z("5"):S.startsWith("/contact")?z("6"):z(null),H([])},[S]),(0,i.useEffect)(()=>{let e=Math.floor(Math.max(N-156.35,0)/100);D(e<J.length?J.slice(e):[])},[N,J]),(0,n.jsx)("html",{lang:"en",children:(0,n.jsx)("body",{children:(0,n.jsx)(m.Z,{children:(0,n.jsx)(r.Ay,{theme:{algorithm:o.A.darkAlgorithm,token:{colorPrimary:b.eq,colorBgContainer:"rgba(255, 255, 255, 0.033)",colorFillContent:"#101010FF5",colorBgLayout:"#000000FF5"}},children:(0,n.jsxs)(s.A,{style:{minHeight:"100vh"},children:[(0,n.jsxs)(v,{className:"header ".concat(l?"scrolled":""),style:{position:"fixed",zIndex:10,width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 ".concat(b.t3,"px"),transition:"background-color 0.3s, backdrop-filter 0.3s",backgroundColor:"transparent"},children:[(0,n.jsx)("div",{style:{fontSize:"24px",fontWeight:"bold",lineHeight:"27px"},children:(0,n.jsx)(u.default,{href:"/",style:{color:b.eq,margin:0},children:"Jappe Studios"})}),(0,n.jsxs)("div",{ref:K,style:{flexGrow:1,display:"flex",justifyContent:"flex-end",alignItems:"center"},children:[(0,n.jsx)(c.A,{className:"custom-menu",theme:"dark",mode:"horizontal",selectedKeys:[_||""],openKeys:F,onOpenChange:e=>{H(e)},style:{flex:1,justifyContent:"flex-end",backgroundColor:"transparent"},children:J.slice(0,J.length-L.length).map(e=>e.children?(0,n.jsx)(g.A,{title:e.label,children:e.children.map(e=>(0,n.jsx)(c.A.Item,{children:e.label},e.key))},e.key):(0,n.jsx)(c.A.Item,{children:e.label},e.key))}),L.length>0&&(0,n.jsx)(d.A,{overlay:(0,n.jsx)(c.A,{children:L.map(e=>e.children?(0,n.jsx)(g.A,{title:e.label,children:e.children.map(e=>(0,n.jsx)(c.A.Item,{children:e.label},e.key))},e.key):(0,n.jsx)(c.A.Item,{children:e.label},e.key))}),children:(0,n.jsx)(p.A,{style:{fontSize:24,color:"white",paddingLeft:10,cursor:"pointer"}})}),(0,n.jsx)(a.A,{type:"vertical",style:{backgroundColor:"white",height:"30px",margin:"0 10px"}}),(0,n.jsx)(h.A,{title:"Check the Community Guidelines",children:(0,n.jsx)(u.default,{href:"/community_guidelines",children:(0,n.jsx)(x.Ay,{type:"text",icon:(0,n.jsx)(y.A,{style:{color:"white"}}),style:{display:"flex",alignItems:"center"}})})}),(0,n.jsx)(a.A,{type:"vertical",style:{backgroundColor:"white",height:"30px",margin:"0 10px"}}),(0,n.jsx)(h.A,{title:"Visit GitHub Repository",children:(0,n.jsx)(x.Ay,{type:"text",icon:(0,n.jsx)(f.A,{style:{color:"white"}}),onClick:()=>window.open(b.Kp,"_blank"),style:{display:"flex",alignItems:"center"}})}),(0,n.jsx)(h.A,{title:"Join Discord Server",children:(0,n.jsx)(x.Ay,{type:"text",icon:(0,n.jsx)(j.A,{style:{color:"white"}}),onClick:()=>window.open(b.DI,"_blank"),style:{display:"flex",alignItems:"center"}})})]})]}),(0,n.jsx)("center",{children:(0,n.jsx)(I,{style:{marginTop:G?"0":"64px",padding:G?"0":"0 ".concat(b.t3,"px"),display:"flex",flexDirection:"column",maxWidth:G?void 0:"1500px",height:"100%",textAlign:"left"},children:(0,n.jsx)("div",{id:"root",style:{flexGrow:1},children:t})})}),(0,n.jsxs)(C,{style:{textAlign:"center"},children:[(0,n.jsx)(w.A,{children:"Jappe Studios \xa92019-2024"}),G&&(0,n.jsxs)(w.A,{style:{color:"rgba(255, 255, 255, 0.5)"},children:["Home page background by ",(0,n.jsx)(u.default,{href:"https://freepik.com",children:"Freepik"})]})]})]})})})})})}},1642:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[313,321,707,137,266,441,517,120],()=>t(5567)),_N_E=e.O()}]);