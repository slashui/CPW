import{e as f}from"./base-f4ae2aba.js";import{a as v,E as x}from"./el-col-d437b903.js";import{d as b,I as k,r as y,h as C,o,c as l,H as t,F as d,K as u,O as m,J as c,k as B,M as E,L as n}from"./index-55fae696.js";import{g as w}from"./getModelList-c2a2e147.js";const D={class:"algorithm"},N={class:"container"},V={class:"item_container"},$={class:"sub_title"},F=["src"],I={class:"sub_title_text"},L={class:"more_button"},M=["onClick"],R=b({__name:"list",setup(H){const p=k(),g=(e,r)=>{p.push(`/model/algorithm/details/${e}/${r}`)},_=y([]);return C(()=>{w().then(e=>{_.value=e}).catch(e=>{console.log(e)})}),(e,r)=>{const i=v,h=x;return o(),l("div",D,[t("div",N,[(o(!0),l(d,null,u(_.value,a=>(o(),m(h,{gutter:30,key:a.id},{default:c(()=>[B(i,{class:"title",xs:24,sm:24,md:24,lg:24,xl:24},{default:c(()=>[E(n(a.label),1)]),_:2},1024),(o(!0),l(d,null,u(a.childs,s=>(o(),m(i,{class:"algorithm_item",xs:24,sm:8,md:8,lg:8,xl:8,key:s.id},{default:c(()=>[t("div",V,[t("div",$,[t("img",{src:s.logo,alt:"logo",class:"logo_img_icon",srcset:""},null,8,F),t("div",I,n(s.title),1)]),t("p",null,n(s.description),1),t("div",L,[t("span",{onClick:J=>g(a.id,s.id)},"了解更多 →",8,M)])])]),_:2},1024))),128))]),_:2},1024))),128))])])}}});const j=f(R,[["__scopeId","data-v-be70cbbe"]]);export{j as default};
