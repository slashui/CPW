import{m as S,K as A,l as Q,N as L,O as R,P as T,Q as N,x as W}from"./el-icon-0b34a678.js";import{w as C,r as y}from"./index-55fae696.js";function O(e){var t;const n=A(e);return(t=n==null?void 0:n.$el)!=null?t:n}const b=Q?window:void 0,j=Q?window.document:void 0;function v(...e){let t,n,r,u;if(T(e[0])||Array.isArray(e[0])?([n,r,u]=e,t=b):[t,n,r,u]=e,!t)return N;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const d=[],i=()=>{d.forEach(a=>a()),d.length=0},l=(a,f,s,o)=>(a.addEventListener(f,s,o),()=>a.removeEventListener(f,s,o)),p=C(()=>[O(t),A(u)],([a,f])=>{i(),a&&d.push(...n.flatMap(s=>r.map(o=>l(a,s,o,f))))},{immediate:!0,flush:"post"}),m=()=>{p(),i()};return S(m),m}let _=!1;function K(e,t,n={}){const{window:r=b,ignore:u=[],capture:d=!0,detectIframe:i=!1}=n;if(!r)return;W&&!_&&(_=!0,Array.from(r.document.body.children).forEach(s=>s.addEventListener("click",N)));let l=!0;const p=s=>u.some(o=>{if(typeof o=="string")return Array.from(r.document.querySelectorAll(o)).some(c=>c===s.target||s.composedPath().includes(c));{const c=O(o);return c&&(s.target===c||s.composedPath().includes(c))}}),a=[v(r,"click",s=>{const o=O(e);if(!(!o||o===s.target||s.composedPath().includes(o))){if(s.detail===0&&(l=!p(s)),!l){l=!0;return}t(s)}},{passive:!0,capture:d}),v(r,"pointerdown",s=>{const o=O(e);o&&(l=!s.composedPath().includes(o)&&!p(s))},{passive:!0}),i&&v(r,"blur",s=>{var o;const c=O(e);((o=r.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(c!=null&&c.contains(r.document.activeElement))&&t(s)})].filter(Boolean);return()=>a.forEach(s=>s())}function x(e,t=!1){const n=y(),r=()=>n.value=!!e();return r(),L(r,t),n}const I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},h="__vueuse_ssr_handlers__";I[h]=I[h]||{};function V({document:e=j}={}){if(!e)return y("visible");const t=y(e.visibilityState);return v(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var E=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,F=(e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&E)for(var r of E(e))t.indexOf(r)<0&&B.call(e,r)&&(n[r]=e[r]);return n};function q(e,t,n={}){const r=n,{window:u=b}=r,d=F(r,["window"]);let i;const l=x(()=>u&&"ResizeObserver"in u),p=()=>{i&&(i.disconnect(),i=void 0)},m=C(()=>O(e),f=>{p(),l.value&&u&&f&&(i=new ResizeObserver(t),i.observe(f,d))},{immediate:!0,flush:"post"}),a=()=>{p(),m()};return S(a),{isSupported:l,stop:a}}var g;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(g||(g={}));var $=Object.defineProperty,w=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,P=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,U=(e,t)=>{for(var n in t||(t={}))z.call(t,n)&&P(e,n,t[n]);if(w)for(var n of w(t))M.call(t,n)&&P(e,n,t[n]);return e};const D={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};U({linear:R},D);function J({window:e=b}={}){if(!e)return y(!1);const t=y(e.document.hasFocus());return v(e,"blur",()=>{t.value=!1}),v(e,"focus",()=>{t.value=!0}),t}export{V as a,J as b,v as c,O as d,K as o,q as u};
