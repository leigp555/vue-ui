import{_ as a}from"./SubMenu.vue_vue_type_style_index_0_lang-63ec0c5c.js";import"./Upload.vue_vue_type_style_index_0_lang-466d0855.js";import{d as e,k as l,r as i,z as t,L as s,o as n,c as u,b as o,n as p,l as c,e as g,F as d,f as r,t as v,v as h,x as m}from"./index-64f31046.js";const b={class:"ui-pageSizeIcon"},w=["data-pageSize"],S=o("span",null,"跳至",-1),z=o("span",null,"页",-1),k=o("span",null,"共",-1),_=o("span",null,"页",-1),y=e({__name:"Pagination",props:{current:{default:1},total:{default:0},pageSize:{default:10},disabled:{type:Boolean,default:!1},showQuickJumper:{type:Boolean,default:!1},showTotal:{type:Boolean,default:!1},showSizeChanger:{type:Boolean,default:!1},pageSizeOptions:{default:()=>["10","20","30","40","50"]}},emits:["update:current","update:pageSize","pageSizeChange","change"],setup(e,{emit:y}){const f=e,{current:C,total:x,pageSize:L,disabled:I,showSizeChanger:B,showQuickJumper:T,showTotal:N,pageSizeOptions:j}=l(f),J=i(null),M=t((()=>Math.ceil(x.value/L.value))),O=t((()=>M.value<=5?0:C.value>=3&&C.value+2<=M.value?C.value-3:C.value>=3&&C.value+1===M.value?C.value-4:C.value>=3&&C.value===M.value?C.value-5:0));s((()=>{C.value<=1?y("change",1):C.value>=M.value&&y("change",M.value)}));const A=()=>{C.value>1&&y("change",C.value-1)},D=()=>{C.value<M.value&&y("change",C.value+1)},P=a=>{const e=a.target,l=e.getAttribute("data-spec");"li"===e.tagName.toLowerCase()&&"pageNumber"===l&&y("change",parseInt(e.innerText,10))},Q=()=>{J.value.classList.add("list-show")},q=()=>{J.value.classList.remove("list-show")},F=a=>{const e=a.target,l=e.getAttribute("data-pageSize");"li"===e.tagName.toLowerCase()&&l&&(y("pageSizeChange",parseInt(l,10)),J.value.classList.remove("list-show"))},U=a=>{const e=a.target,l=e.value.trim();let i;try{i=parseInt(l,10),i?i>M.value?(y("change",M.value),e.value=""):i<1?(y("change",1),e.value=""):(y("change",i),e.value=""):e.value=""}catch(t){e.value=""}};return(e,l)=>(n(),u("div",{class:p(["ui-pagination-wrap",{disabled:c(I)}])},[o("ol",{class:p(["ui-pagination-ol",{disabled:c(I)}]),onClick:P},[o("li",{onClick:A,class:p(["ui-pagination-subIcon ui-pagination-item",{subDisabled:c(C)<=1}])},[g(a,{name:"back",width:"1em",height:"1em"})],2),(n(!0),u(d,null,r(c(M)<=5?c(M):5,(a=>(n(),u("li",{key:a,class:p(["ui-pagination-item",{"ui-pagination-currentPage":c(O)+a===c(C)}]),"data-spec":"pageNumber"},v(c(O)+a),3)))),128)),o("li",{onClick:D,class:p(["ui-pagination-addIcon ui-pagination-item",{addDisabled:c(C)>=c(M)}])},[g(a,{name:"back",width:"1em",height:"1em"})],2)],2),o("div",{class:p(["ui-pageSizeList-wrap",{disabled:c(I)}])},[c(B)?(n(),u("div",{key:0,class:"ui-pagination-pageSize ui-pagination-item",onClick:Q,onBlur:q,tabindex:"-1"},[h(e.$slots,"buildOptionText",{value:c(L)}),o("span",b,[g(a,{name:"back",width:"1em",height:"1em"})])],32)):m("",!0),o("ol",{class:"pageSize-list",ref_key:"pageSizeList",ref:J,onMousedown:F},[(n(!0),u(d,null,r(c(j),(a=>(n(),u("li",{key:a,class:p({selected:a===c(L).toString()}),"data-pageSize":a},v(a)+"条/页 ",11,w)))),128))],544)],2),c(T)?(n(),u("div",{key:0,class:p(["ui-quickJumper-wrap",{disabled:c(I)}])},[S,o("input",{type:"text",onChange:U},null,32),z],2)):m("",!0),c(N)?(n(),u("div",{key:1,class:p(["ui-pageTotal-wrap",{disabled:c(I)}])},[k,o("span",null,v(c(C))+"/"+v(c(M)),1),_],2)):m("",!0)],2))}});export{y as _};
