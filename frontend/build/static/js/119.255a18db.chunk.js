"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[119],{347:(e,s,t)=>{t.d(s,{A:()=>a});t(43);var n=t(582),r=t(579);const a=e=>e.href?(0,r.jsx)("a",{className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,href:e.href,children:e.children}):e.to?(0,r.jsx)(n.N_,{to:e.to,exact:e.exact,className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,children:e.children}):(0,r.jsx)("button",{className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})},837:(e,s,t)=>{t.d(s,{A:()=>r});t(43);var n=t(579);const r=e=>(0,n.jsx)("div",{className:`card ${e.className}`,style:e.style,children:e.children})},626:(e,s,t)=>{t.d(s,{A:()=>l});t(43);var n=t(630),r=t(347),a=t(579);const l=e=>(0,a.jsx)(n.A,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,a.jsx)(r.A,{onClick:e.onClear,children:"Okay"}),children:(0,a.jsx)("p",{children:e.error})})},630:(e,s,t)=>{t.d(s,{A:()=>i});var n=t(43),r=t(950),a=t(336),l=t(6),c=t(579);const o=e=>{const s=(0,c.jsxs)("div",{className:`modal ${e.className}`,style:e.style,children:[(0,c.jsx)("header",{className:`modal__header ${e.headerClass}`,children:(0,c.jsx)("h2",{children:e.header})}),(0,c.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,c.jsx)("div",{className:`modal__content ${e.contentClass}`,children:e.children}),(0,c.jsx)("footer",{className:`modal__footer ${e.footerClass}`,children:e.footer})]})]});return r.createPortal(s,document.getElementById("modal-hook"))},i=e=>(0,c.jsxs)(n.Fragment,{children:[e.show&&(0,c.jsx)(l.A,{onClick:e.onCancel}),(0,c.jsx)(a.A,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,c.jsx)(o,{...e})})]})},171:(e,s,t)=>{t.d(s,{x:()=>r});var n=t(43);const r=()=>{const[e,s]=(0,n.useState)(!1),[t,r]=(0,n.useState)(),a=(0,n.useRef)([]),l=(0,n.useCallback)((async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};s(!0);const c=new AbortController;a.current.push(c);try{const r=await fetch(e,{method:t,body:n,headers:l,signal:c.signal}),o=await r.json();if(a.current=a.current.filter((e=>e!==c)),!r.ok)throw new Error(o.message);return s(!1),o}catch(o){throw r(o.message),s(!1),o}}),[]);return(0,n.useEffect)((()=>()=>{a.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:t,sendRequest:l,clearError:()=>{r(null)}}}},119:(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var n=t(43),r=t(582),a=t(579);const l=e=>(0,a.jsx)("div",{className:`avatar ${e.className}`,style:e.style,children:(0,a.jsx)("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}})});var c=t(837);const o=e=>(0,a.jsx)("li",{className:"user-item",children:(0,a.jsx)(c.A,{className:"user-item__content",children:(0,a.jsxs)(r.N_,{to:`/${e.id}/places`,children:[(0,a.jsx)("div",{className:"user-item__image",children:(0,a.jsx)(l,{image:`http://localhost:5000/${e.image}`,alt:e.name})}),(0,a.jsxs)("div",{className:"user-item__info",children:[(0,a.jsx)("h2",{children:e.name}),(0,a.jsxs)("h3",{children:[e.placeCount," ",1===e.placeCount?"Place":"Places"]})]})]})})}),i=e=>0===e.items.length?(0,a.jsx)("div",{className:"center",children:(0,a.jsx)(c.A,{children:(0,a.jsx)("h2",{children:"No users found."})})}):(0,a.jsx)("ul",{className:"users-list",children:e.items.map((e=>(0,a.jsx)(o,{id:e.id,image:e.image,name:e.name,placeCount:e.places.length},e.id)))});var d=t(626),h=t(863),u=t(171);const m=()=>{const{isLoading:e,error:s,sendRequest:t,clearError:r}=(0,u.x)(),[l,c]=(0,n.useState)();return(0,n.useEffect)((()=>{(async()=>{try{const e=await t("http://localhost:5000/api/users");c(e.users)}catch(e){}})()}),[t]),(0,a.jsxs)(n.Fragment,{children:[(0,a.jsx)(d.A,{error:s,onClear:r}),e&&(0,a.jsx)("div",{className:"center",children:(0,a.jsx)(h.A,{})}),!e&&l&&(0,a.jsx)(i,{items:l})]})}}}]);
//# sourceMappingURL=119.255a18db.chunk.js.map