(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[8009],{62002:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>A});var n=t(67294),i=t(18790),r=t(16550),o=t(95999),d=t(3905),p=t(67748),c=t(68612),s=t(6023),l=t(16963),u=t(71900),b=t(4972),m=t(86010);const f={apiPage:"apiPage_KQrU",apiMainContainer:"apiMainContainer_L2xG",apiSidebarContainer:"apiSidebarContainer_Korj",apiMainContainerEnhanced:"apiMainContainerEnhanced_KekW",apiSidebarContainerHidden:"apiSidebarContainerHidden_KLHn",collapsedApiSidebar:"collapsedApiSidebar_Ic1j",expandSidebarButtonIcon:"expandSidebarButtonIcon_Z2po",apiItemWrapperEnhanced:"apiItemWrapperEnhanced_aX4w"};function h(e){let{currentApiRoute:a,apiMetadata:t}=e;const n=a.sidebar;return n?t.apiSidebars[n]:void 0}function E(e){let a=[];for(let t of e)switch(t.type){case"link":a.push(t.href);break;case"category":a.push(...E(t.items))}return a}function C(e){let{currentApiRoute:a,apiMetadata:t}=e;const n=h({currentApiRoute:a,apiMetadata:t});return n?E(n):[]}function S(e){let{currentApiRoute:a,apiMetadata:t,children:i}=e;const r=h({currentApiRoute:a,apiMetadata:t}),[b,E]=(0,n.useState)(!1),[C,S]=(0,n.useState)(!1),A=(0,n.useCallback)((()=>{C&&S(!1),E((e=>!e))}),[C]);return n.createElement(l.Z,{wrapperClassName:"api-wrapper"},n.createElement("div",{className:f.apiPage},n.createElement(p.Z,null),r&&n.createElement("aside",{className:(0,m.Z)(f.apiSidebarContainer,{[f.apiSidebarContainerHidden]:b}),onTransitionEnd:e=>{e.currentTarget.classList.contains(f.apiSidebarContainer)&&b&&S(!0)}},n.createElement(c.Z,{key:a.sidebar,sidebar:r,path:a.path,onCollapse:A,isHidden:C}),C&&n.createElement("div",{className:f.collapsedApiSidebar,title:(0,o.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,o.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:A,onClick:A},n.createElement(s.Z,{className:f.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,m.Z)(f.apiMainContainer,{[f.apiMainContainerEnhanced]:b||!r})},n.createElement("div",{className:(0,m.Z)("container padding-top--md padding-bottom--lg",{[f.apiItemWrapperEnhanced]:b})},n.createElement(d.Zo,{components:u.Z},i)))))}const A=function(e){const{route:{routes:a},apiMetadata:t,location:o}=e;let d=a.find((e=>(0,r.LX)(o.pathname,e)));if(!d)return n.createElement(b.default,null);const p=C({currentApiRoute:d,apiMetadata:t});return p.find((e=>(0,r.LX)(o.pathname,e)))||(d={...d,path:p[0]}),n.createElement(n.Fragment,null,n.createElement(S,{currentApiRoute:d,apiMetadata:t},(0,i.H)(a)))}},11748:(e,a,t)=>{var n={"./locale":89234,"./locale.js":89234};function i(e){var a=r(e);return t(a)}function r(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=11748}}]);