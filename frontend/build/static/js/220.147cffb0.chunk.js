"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[220],{347:(e,t,a)=>{a.d(t,{A:()=>r});a(43);var s=a(582),n=a(579);const r=e=>e.href?(0,n.jsx)("a",{className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,href:e.href,children:e.children}):e.to?(0,n.jsx)(s.N_,{to:e.to,exact:e.exact,className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,children:e.children}):(0,n.jsx)("button",{className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})},356:(e,t,a)=>{a.d(t,{A:()=>i});var s=a(43),n=a(347),r=a(579);const i=e=>{const[t,a]=(0,s.useState)(),[i,l]=(0,s.useState)(),[o,d]=(0,s.useState)(!1),u=(0,s.useRef)();(0,s.useEffect)((()=>{if(!t)return;const e=new FileReader;e.onload=()=>{l(e.result)},e.readAsDataURL(t)}),[t]);return(0,r.jsxs)("div",{className:"form-control",children:[(0,r.jsx)("input",{id:e.id,ref:u,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:t=>{let s,n=o;t.target.files&&1===t.target.files.length?(s=t.target.files[0],a(s),d(!0),n=!0):(d(!1),n=!1),e.onInput(e.id,s,n)}}),(0,r.jsxs)("div",{className:`image-upload ${e.center&&"center"}`,children:[(0,r.jsxs)("div",{className:"image-upload__preview",children:[i&&(0,r.jsx)("img",{src:i,alt:"Preview"}),!i&&(0,r.jsx)("p",{children:"Please pick an image."})]}),(0,r.jsx)(n.A,{type:"button",onClick:()=>{u.current.click()},children:"PICK IMAGE"})]}),!o&&(0,r.jsx)("p",{children:e.errorText})]})}},244:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(43),n=a(962),r=a(579);const i=(e,t)=>{switch(t.type){case"CHANGE":return{...e,value:t.val,isValid:(0,n.tf)(t.val,t.validators)};case"TOUCH":return{...e,isTouched:!0};default:return e}},l=e=>{const[t,a]=(0,s.useReducer)(i,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),{id:n,onInput:l}=e,{value:o,isValid:d}=t;(0,s.useEffect)((()=>{l(n,o,d)}),[n,o,d,l]);const u=t=>{a({type:"CHANGE",val:t.target.value,validators:e.validators})},c=()=>{a({type:"TOUCH"})},p="input"===e.element?(0,r.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:u,onBlur:c,value:t.value}):(0,r.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:u,onBlur:c,value:t.value});return(0,r.jsxs)("div",{className:`form-control ${!t.isValid&&t.isTouched&&"form-control--invalid"}`,children:[(0,r.jsx)("label",{htmlFor:e.id,children:e.label}),p,!t.isValid&&t.isTouched&&(0,r.jsx)("p",{children:e.errorText})]})}},837:(e,t,a)=>{a.d(t,{A:()=>n});a(43);var s=a(579);const n=e=>(0,s.jsx)("div",{className:`card ${e.className}`,style:e.style,children:e.children})},626:(e,t,a)=>{a.d(t,{A:()=>i});a(43);var s=a(630),n=a(347),r=a(579);const i=e=>(0,r.jsx)(s.A,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,r.jsx)(n.A,{onClick:e.onClear,children:"Okay"}),children:(0,r.jsx)("p",{children:e.error})})},630:(e,t,a)=>{a.d(t,{A:()=>d});var s=a(43),n=a(950),r=a(336),i=a(6),l=a(579);const o=e=>{const t=(0,l.jsxs)("div",{className:`modal ${e.className}`,style:e.style,children:[(0,l.jsx)("header",{className:`modal__header ${e.headerClass}`,children:(0,l.jsx)("h2",{children:e.header})}),(0,l.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,l.jsx)("div",{className:`modal__content ${e.contentClass}`,children:e.children}),(0,l.jsx)("footer",{className:`modal__footer ${e.footerClass}`,children:e.footer})]})]});return n.createPortal(t,document.getElementById("modal-hook"))},d=e=>(0,l.jsxs)(s.Fragment,{children:[e.show&&(0,l.jsx)(i.A,{onClick:e.onCancel}),(0,l.jsx)(r.A,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,l.jsx)(o,{...e})})]})},789:(e,t,a)=>{a.d(t,{m:()=>r});var s=a(43);const n=(e,t)=>{switch(t.type){case"INPUT_CHANGE":let a=!0;for(const s in e.inputs)e.inputs[s]&&(a=s===t.inputId?a&&t.isValid:a&&e.inputs[s].isValid);return{...e,inputs:{...e.inputs,[t.inputId]:{value:t.value,isValid:t.isValid}},isValid:a};case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},r=(e,t)=>{const[a,r]=(0,s.useReducer)(n,{inputs:e,isValid:t});return[a,(0,s.useCallback)(((e,t,a)=>{r({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),(0,s.useCallback)(((e,t)=>{r({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},171:(e,t,a)=>{a.d(t,{x:()=>n});var s=a(43);const n=()=>{const[e,t]=(0,s.useState)(!1),[a,n]=(0,s.useState)(),r=(0,s.useRef)([]),i=(0,s.useCallback)((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0);const l=new AbortController;r.current.push(l);try{const n=await fetch(e,{method:a,body:s,headers:i,signal:l.signal}),o=await n.json();if(r.current=r.current.filter((e=>e!==l)),!n.ok)throw new Error(o.message);return t(!1),o}catch(o){throw n(o.message),t(!1),o}}),[]);return(0,s.useEffect)((()=>()=>{r.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:a,sendRequest:i,clearError:()=>{n(null)}}}},962:(e,t,a)=>{a.d(t,{B_:()=>l,Ik:()=>o,i$:()=>d,tf:()=>u});const s="REQUIRE",n="MINLENGTH",r="MAXLENGTH",i="EMAIL",l=()=>({type:s}),o=e=>({type:n,val:e}),d=()=>({type:i}),u=(e,t)=>{let a=!0;for(const l of t)l.type===s&&(a=a&&e.trim().length>0),l.type===n&&(a=a&&e.trim().length>=l.val),l.type===r&&(a=a&&e.trim().length<=l.val),"MIN"===l.type&&(a=a&&+e>=l.val),"MAX"===l.type&&(a=a&&+e<=l.val),l.type===i&&(a=a&&/^\S+@\S+\.\S+$/.test(e));return a}},220:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var s=a(43),n=a(837),r=a(244),i=a(347),l=a(626),o=a(863),d=a(356),u=a(962),c=a(789),p=a(171),h=a(886),m=a(579);const v=()=>{const e=(0,s.useContext)(h.c),[t,a]=(0,s.useState)(!0),{isLoading:v,error:x,sendRequest:f,clearError:g}=(0,p.x)(),[j,y,b]=(0,c.m)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1);return(0,m.jsxs)(s.Fragment,{children:[(0,m.jsx)(l.A,{error:x,onClear:g}),(0,m.jsxs)(n.A,{className:"authentication",children:[v&&(0,m.jsx)(o.A,{asOverlay:!0}),(0,m.jsx)("h2",{children:"Login Required"}),(0,m.jsx)("hr",{}),(0,m.jsxs)("form",{onSubmit:async a=>{if(a.preventDefault(),t)try{const t=await f("http://localhost:5000/api/users/login","POST",JSON.stringify({email:j.inputs.email.value,password:j.inputs.password.value}),{"Content-Type":"application/json"});e.login(t.userId,t.token)}catch(s){}else try{const t=new FormData;t.append("email",j.inputs.email.value),t.append("name",j.inputs.name.value),t.append("password",j.inputs.password.value),t.append("image",j.inputs.image.value);const a=await f("http://localhost:5000/api/users/signup","POST",t);e.login(a.userId,a.token)}catch(s){}},children:[!t&&(0,m.jsx)(r.A,{element:"input",id:"name",type:"text",label:"Your Name",validators:[(0,u.B_)()],errorText:"Please enter a name.",onInput:y}),!t&&(0,m.jsx)(d.A,{center:!0,id:"image",onInput:y,errorText:"Please provide an image."}),(0,m.jsx)(r.A,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[(0,u.i$)()],errorText:"Please enter a valid email address.",onInput:y}),(0,m.jsx)(r.A,{element:"input",id:"password",type:"password",label:"Password",validators:[(0,u.Ik)(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:y}),(0,m.jsx)(i.A,{type:"submit",disabled:!j.isValid,children:t?"LOGIN":"SIGNUP"})]}),(0,m.jsxs)(i.A,{inverse:!0,onClick:()=>{t?b({...j.inputs,name:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1):b({...j.inputs,name:void 0,image:void 0},j.inputs.email.isValid&&j.inputs.password.isValid),a((e=>!e))},children:["SWITCH TO ",t?"SIGNUP":"LOGIN"]})]})]})}}}]);
//# sourceMappingURL=220.147cffb0.chunk.js.map