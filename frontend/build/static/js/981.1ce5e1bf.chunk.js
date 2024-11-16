"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[981],{981:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=a(43),r=a(688),n=a(244),l=a(347),i=a(626),o=a(863),d=a(356),c=a(962),u=a(789),p=a(171),h=a(886),v=(a(284),a(579));const m=()=>{const e=(0,s.useContext)(h.c),{isLoading:t,error:a,sendRequest:m,clearError:x}=(0,p.x)(),[f,g]=(0,u.m)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),j=(0,r.W6)();return(0,v.jsxs)(s.Fragment,{children:[(0,v.jsx)(i.A,{error:a,onClear:x}),(0,v.jsxs)("form",{className:"place-form",onSubmit:async t=>{t.preventDefault();try{const t=new FormData;t.append("title",f.inputs.title.value),t.append("description",f.inputs.description.value),t.append("address",f.inputs.address.value),t.append("image",f.inputs.image.value),await m("http://localhost:5000/api/places","POST",t,{Authorization:"Bearer "+e.token}),j.push("/")}catch(a){}},children:[t&&(0,v.jsx)(o.A,{asOverlay:!0}),(0,v.jsx)(n.A,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,c.B_)()],errorText:"Please enter a valid title.",onInput:g}),(0,v.jsx)(n.A,{id:"description",element:"textarea",label:"Description",validators:[(0,c.Ik)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:g}),(0,v.jsx)(n.A,{id:"address",element:"input",label:"Address",validators:[(0,c.B_)()],errorText:"Please enter a valid address.",onInput:g}),(0,v.jsx)(d.A,{id:"image",onInput:g,errorText:"Please provide an image."}),(0,v.jsx)(l.A,{type:"submit",disabled:!f.isValid,children:"ADD PLACE"})]})]})}},347:(e,t,a)=>{a.d(t,{A:()=>n});a(43);var s=a(582),r=a(579);const n=e=>e.href?(0,r.jsx)("a",{className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,href:e.href,children:e.children}):e.to?(0,r.jsx)(s.N_,{to:e.to,exact:e.exact,className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,children:e.children}):(0,r.jsx)("button",{className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})},356:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(43),r=a(347),n=a(579);const l=e=>{const[t,a]=(0,s.useState)(),[l,i]=(0,s.useState)(),[o,d]=(0,s.useState)(!1),c=(0,s.useRef)();(0,s.useEffect)((()=>{if(!t)return;const e=new FileReader;e.onload=()=>{i(e.result)},e.readAsDataURL(t)}),[t]);return(0,n.jsxs)("div",{className:"form-control",children:[(0,n.jsx)("input",{id:e.id,ref:c,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:t=>{let s,r=o;t.target.files&&1===t.target.files.length?(s=t.target.files[0],a(s),d(!0),r=!0):(d(!1),r=!1),e.onInput(e.id,s,r)}}),(0,n.jsxs)("div",{className:`image-upload ${e.center&&"center"}`,children:[(0,n.jsxs)("div",{className:"image-upload__preview",children:[l&&(0,n.jsx)("img",{src:l,alt:"Preview"}),!l&&(0,n.jsx)("p",{children:"Please pick an image."})]}),(0,n.jsx)(r.A,{type:"button",onClick:()=>{c.current.click()},children:"PICK IMAGE"})]}),!o&&(0,n.jsx)("p",{children:e.errorText})]})}},244:(e,t,a)=>{a.d(t,{A:()=>i});var s=a(43),r=a(962),n=a(579);const l=(e,t)=>{switch(t.type){case"CHANGE":return{...e,value:t.val,isValid:(0,r.tf)(t.val,t.validators)};case"TOUCH":return{...e,isTouched:!0};default:return e}},i=e=>{const[t,a]=(0,s.useReducer)(l,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),{id:r,onInput:i}=e,{value:o,isValid:d}=t;(0,s.useEffect)((()=>{i(r,o,d)}),[r,o,d,i]);const c=t=>{a({type:"CHANGE",val:t.target.value,validators:e.validators})},u=()=>{a({type:"TOUCH"})},p="input"===e.element?(0,n.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:c,onBlur:u,value:t.value}):(0,n.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:c,onBlur:u,value:t.value});return(0,n.jsxs)("div",{className:`form-control ${!t.isValid&&t.isTouched&&"form-control--invalid"}`,children:[(0,n.jsx)("label",{htmlFor:e.id,children:e.label}),p,!t.isValid&&t.isTouched&&(0,n.jsx)("p",{children:e.errorText})]})}},626:(e,t,a)=>{a.d(t,{A:()=>l});a(43);var s=a(630),r=a(347),n=a(579);const l=e=>(0,n.jsx)(s.A,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,n.jsx)(r.A,{onClick:e.onClear,children:"Okay"}),children:(0,n.jsx)("p",{children:e.error})})},630:(e,t,a)=>{a.d(t,{A:()=>d});var s=a(43),r=a(950),n=a(336),l=a(6),i=a(579);const o=e=>{const t=(0,i.jsxs)("div",{className:`modal ${e.className}`,style:e.style,children:[(0,i.jsx)("header",{className:`modal__header ${e.headerClass}`,children:(0,i.jsx)("h2",{children:e.header})}),(0,i.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,i.jsx)("div",{className:`modal__content ${e.contentClass}`,children:e.children}),(0,i.jsx)("footer",{className:`modal__footer ${e.footerClass}`,children:e.footer})]})]});return r.createPortal(t,document.getElementById("modal-hook"))},d=e=>(0,i.jsxs)(s.Fragment,{children:[e.show&&(0,i.jsx)(l.A,{onClick:e.onCancel}),(0,i.jsx)(n.A,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,i.jsx)(o,{...e})})]})},789:(e,t,a)=>{a.d(t,{m:()=>n});var s=a(43);const r=(e,t)=>{switch(t.type){case"INPUT_CHANGE":let a=!0;for(const s in e.inputs)e.inputs[s]&&(a=s===t.inputId?a&&t.isValid:a&&e.inputs[s].isValid);return{...e,inputs:{...e.inputs,[t.inputId]:{value:t.value,isValid:t.isValid}},isValid:a};case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},n=(e,t)=>{const[a,n]=(0,s.useReducer)(r,{inputs:e,isValid:t});return[a,(0,s.useCallback)(((e,t,a)=>{n({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),(0,s.useCallback)(((e,t)=>{n({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},171:(e,t,a)=>{a.d(t,{x:()=>r});var s=a(43);const r=()=>{const[e,t]=(0,s.useState)(!1),[a,r]=(0,s.useState)(),n=(0,s.useRef)([]),l=(0,s.useCallback)((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0);const i=new AbortController;n.current.push(i);try{const r=await fetch(e,{method:a,body:s,headers:l,signal:i.signal}),o=await r.json();if(n.current=n.current.filter((e=>e!==i)),!r.ok)throw new Error(o.message);return t(!1),o}catch(o){throw r(o.message),t(!1),o}}),[]);return(0,s.useEffect)((()=>()=>{n.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:a,sendRequest:l,clearError:()=>{r(null)}}}},962:(e,t,a)=>{a.d(t,{B_:()=>i,Ik:()=>o,i$:()=>d,tf:()=>c});const s="REQUIRE",r="MINLENGTH",n="MAXLENGTH",l="EMAIL",i=()=>({type:s}),o=e=>({type:r,val:e}),d=()=>({type:l}),c=(e,t)=>{let a=!0;for(const i of t)i.type===s&&(a=a&&e.trim().length>0),i.type===r&&(a=a&&e.trim().length>=i.val),i.type===n&&(a=a&&e.trim().length<=i.val),"MIN"===i.type&&(a=a&&+e>=i.val),"MAX"===i.type&&(a=a&&+e<=i.val),i.type===l&&(a=a&&/^\S+@\S+\.\S+$/.test(e));return a}},284:()=>{}}]);
//# sourceMappingURL=981.1ce5e1bf.chunk.js.map