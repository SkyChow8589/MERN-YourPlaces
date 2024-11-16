"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[830],{830:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=a(43),n=a(688),l=a(244),i=a(347),r=a(837),o=a(863),d=a(626),c=a(962),u=a(789),h=a(171),p=a(886),v=(a(284),a(579));const m=()=>{const e=(0,s.useContext)(p.c),{isLoading:t,error:a,sendRequest:m,clearError:f}=(0,h.x)(),[x,y]=(0,s.useState)(),j=(0,n.g)().placeId,b=(0,n.W6)(),[A,C,N]=(0,u.m)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1);(0,s.useEffect)((()=>{(async()=>{try{const e=await m(`http://localhost:5000/api/places/${j}`);y(e.place),N({title:{value:e.place.title,isValid:!0},description:{value:e.place.description,isValid:!0}},!0)}catch(e){}})()}),[m,j,N]);return t?(0,v.jsx)("div",{className:"center",children:(0,v.jsx)(o.A,{})}):x||a?(0,v.jsxs)(s.Fragment,{children:[(0,v.jsx)(d.A,{error:a,onClear:f}),!t&&x&&(0,v.jsxs)("form",{className:"place-form",onSubmit:async t=>{t.preventDefault();try{await m(`http://localhost:5000/api/places/${j}`,"PATCH",JSON.stringify({title:A.inputs.title.value,description:A.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token}),b.push("/"+e.userId+"/places")}catch(a){}},children:[(0,v.jsx)(l.A,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,c.B_)()],errorText:"Please enter a valid title.",onInput:C,initialValue:x.title,initialValid:!0}),(0,v.jsx)(l.A,{id:"description",element:"textarea",label:"Description",validators:[(0,c.Ik)(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:C,initialValue:x.description,initialValid:!0}),(0,v.jsx)(i.A,{type:"submit",disabled:!A.isValid,children:"UPDATE PLACE"})]})]}):(0,v.jsx)("div",{className:"center",children:(0,v.jsx)(r.A,{children:(0,v.jsx)("h2",{children:"Could not find place!"})})})}},347:(e,t,a)=>{a.d(t,{A:()=>l});a(43);var s=a(582),n=a(579);const l=e=>e.href?(0,n.jsx)("a",{className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,href:e.href,children:e.children}):e.to?(0,n.jsx)(s.N_,{to:e.to,exact:e.exact,className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,children:e.children}):(0,n.jsx)("button",{className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})},244:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(43),n=a(962),l=a(579);const i=(e,t)=>{switch(t.type){case"CHANGE":return{...e,value:t.val,isValid:(0,n.tf)(t.val,t.validators)};case"TOUCH":return{...e,isTouched:!0};default:return e}},r=e=>{const[t,a]=(0,s.useReducer)(i,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),{id:n,onInput:r}=e,{value:o,isValid:d}=t;(0,s.useEffect)((()=>{r(n,o,d)}),[n,o,d,r]);const c=t=>{a({type:"CHANGE",val:t.target.value,validators:e.validators})},u=()=>{a({type:"TOUCH"})},h="input"===e.element?(0,l.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:c,onBlur:u,value:t.value}):(0,l.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:c,onBlur:u,value:t.value});return(0,l.jsxs)("div",{className:`form-control ${!t.isValid&&t.isTouched&&"form-control--invalid"}`,children:[(0,l.jsx)("label",{htmlFor:e.id,children:e.label}),h,!t.isValid&&t.isTouched&&(0,l.jsx)("p",{children:e.errorText})]})}},837:(e,t,a)=>{a.d(t,{A:()=>n});a(43);var s=a(579);const n=e=>(0,s.jsx)("div",{className:`card ${e.className}`,style:e.style,children:e.children})},626:(e,t,a)=>{a.d(t,{A:()=>i});a(43);var s=a(630),n=a(347),l=a(579);const i=e=>(0,l.jsx)(s.A,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,l.jsx)(n.A,{onClick:e.onClear,children:"Okay"}),children:(0,l.jsx)("p",{children:e.error})})},630:(e,t,a)=>{a.d(t,{A:()=>d});var s=a(43),n=a(950),l=a(336),i=a(6),r=a(579);const o=e=>{const t=(0,r.jsxs)("div",{className:`modal ${e.className}`,style:e.style,children:[(0,r.jsx)("header",{className:`modal__header ${e.headerClass}`,children:(0,r.jsx)("h2",{children:e.header})}),(0,r.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,r.jsx)("div",{className:`modal__content ${e.contentClass}`,children:e.children}),(0,r.jsx)("footer",{className:`modal__footer ${e.footerClass}`,children:e.footer})]})]});return n.createPortal(t,document.getElementById("modal-hook"))},d=e=>(0,r.jsxs)(s.Fragment,{children:[e.show&&(0,r.jsx)(i.A,{onClick:e.onCancel}),(0,r.jsx)(l.A,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,r.jsx)(o,{...e})})]})},789:(e,t,a)=>{a.d(t,{m:()=>l});var s=a(43);const n=(e,t)=>{switch(t.type){case"INPUT_CHANGE":let a=!0;for(const s in e.inputs)e.inputs[s]&&(a=s===t.inputId?a&&t.isValid:a&&e.inputs[s].isValid);return{...e,inputs:{...e.inputs,[t.inputId]:{value:t.value,isValid:t.isValid}},isValid:a};case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},l=(e,t)=>{const[a,l]=(0,s.useReducer)(n,{inputs:e,isValid:t});return[a,(0,s.useCallback)(((e,t,a)=>{l({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),(0,s.useCallback)(((e,t)=>{l({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},171:(e,t,a)=>{a.d(t,{x:()=>n});var s=a(43);const n=()=>{const[e,t]=(0,s.useState)(!1),[a,n]=(0,s.useState)(),l=(0,s.useRef)([]),i=(0,s.useCallback)((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0);const r=new AbortController;l.current.push(r);try{const n=await fetch(e,{method:a,body:s,headers:i,signal:r.signal}),o=await n.json();if(l.current=l.current.filter((e=>e!==r)),!n.ok)throw new Error(o.message);return t(!1),o}catch(o){throw n(o.message),t(!1),o}}),[]);return(0,s.useEffect)((()=>()=>{l.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:a,sendRequest:i,clearError:()=>{n(null)}}}},962:(e,t,a)=>{a.d(t,{B_:()=>r,Ik:()=>o,i$:()=>d,tf:()=>c});const s="REQUIRE",n="MINLENGTH",l="MAXLENGTH",i="EMAIL",r=()=>({type:s}),o=e=>({type:n,val:e}),d=()=>({type:i}),c=(e,t)=>{let a=!0;for(const r of t)r.type===s&&(a=a&&e.trim().length>0),r.type===n&&(a=a&&e.trim().length>=r.val),r.type===l&&(a=a&&e.trim().length<=r.val),"MIN"===r.type&&(a=a&&+e>=r.val),"MAX"===r.type&&(a=a&&+e<=r.val),r.type===i&&(a=a&&/^\S+@\S+\.\S+$/.test(e));return a}},284:()=>{}}]);
//# sourceMappingURL=830.3a40a2ea.chunk.js.map