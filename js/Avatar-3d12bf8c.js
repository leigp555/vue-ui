import"./Upload.vue_vue_type_style_index_0_lang-466d0855.js";import{d as a,r as s,L as e,o as l,c as r,v as u,x as t,b as o,n as i,y as n}from"./index-64f31046.js";const v=["src"],p=a({__name:"Avatar",props:{size:{default:40},shape:{default:"round"},src:{default:null}},setup(a){const p=s(null),d=s(!1);return e((()=>{p.value&&(p.value.onload=()=>{d.value=!0},p.value.onerror=()=>{d.value=!1})})),(s,e)=>(l(),r("div",{class:i(["ui-avatar-wrap",{"ui-avatar-square":"square"===a.shape}]),style:n({width:`${a.size}px`,height:`${a.size}px`})},[d.value?t("",!0):u(s.$slots,"icon",{key:0}),o("img",{src:a.src,alt:"头像",ref_key:"imgRef",ref:p,class:i({"avatar-img-show":d.value})},null,10,v)],6))}});export{p as _};
