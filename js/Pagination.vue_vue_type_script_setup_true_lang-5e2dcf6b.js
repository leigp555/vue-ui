import{d as a,v as e,r as l,L as i,o as t,c as s,e as n,m as u,z as o,q as p,f as g,a0 as c,F as d,h as r,t as v,B as h,C as m}from"./index-597196db.js";const b={class:"ui-pageSizeIcon"},w=["data-pageSize"],z=u("span",null,"跳至",-1),S=u("span",null,"页",-1),k=u("span",null,"共",-1),f=u("span",null,"页",-1),y=a({__name:"Pagination",props:{current:{default:1},total:{default:0},pageSize:{default:10},disabled:{type:Boolean,default:!1},showQuickJumper:{type:Boolean,default:!1},showTotal:{type:Boolean,default:!1},showSizeChanger:{type:Boolean,default:!1},pageSizeOptions:{default:()=>["10","20","30","40","50"]}},emits:["update:current","update:pageSize","pageSizeChange","change"],setup(a,{emit:y}){const C=a,{current:L,total:x,pageSize:B,disabled:I,showSizeChanger:T,showQuickJumper:N,showTotal:_,pageSizeOptions:J}=e(C),O=l(null),q=i((()=>Math.ceil(x.value/B.value))),A=i((()=>q.value<=5?0:L.value>=3&&L.value+2<=q.value?L.value-3:L.value>=3&&L.value+1===q.value?L.value-4:L.value>=3&&L.value===q.value?L.value-5:0));t((()=>{L.value<=1?y("change",1):L.value>=q.value&&y("change",q.value)}));const D=()=>{L.value>1&&y("change",L.value-1)},M=()=>{L.value<q.value&&y("change",L.value+1)},P=a=>{const e=a.target,l=e.getAttribute("data-spec");"li"===e.tagName.toLowerCase()&&"pageNumber"===l&&y("change",parseInt(e.innerText,10))},Q=()=>{O.value.classList.add("list-show")},j=()=>{O.value.classList.remove("list-show")},F=a=>{const e=a.target,l=e.getAttribute("data-pageSize");"li"===e.tagName.toLowerCase()&&l&&(y("pageSizeChange",parseInt(l,10)),O.value.classList.remove("list-show"))},$=a=>{const e=a.target,l=e.value.trim();let i;try{i=parseInt(l,10),i?i>q.value?(y("change",q.value),e.value=""):i<1?(y("change",1),e.value=""):(y("change",i),e.value=""):e.value=""}catch(t){e.value=""}};return(a,e)=>(s(),n("div",{class:o(["ui-pagination-wrap",{disabled:p(I)}])},[u("ol",{class:o(["ui-pagination-ol",{disabled:p(I)}]),onClick:P},[u("li",{onClick:D,class:o(["ui-pagination-subIcon ui-pagination-item",{subDisabled:p(L)<=1}])},[g(p(c),{name:"back",width:"1em",height:"1em"})],2),(s(!0),n(d,null,r(p(q)<=5?p(q):5,(a=>(s(),n("li",{key:a,class:o(["ui-pagination-item",{"ui-pagination-currentPage":p(A)+a===p(L)}]),"data-spec":"pageNumber"},v(p(A)+a),3)))),128)),u("li",{onClick:M,class:o(["ui-pagination-addIcon ui-pagination-item",{addDisabled:p(L)>=p(q)}])},[g(p(c),{name:"back",width:"1em",height:"1em"})],2)],2),u("div",{class:o(["ui-pageSizeList-wrap",{disabled:p(I)}])},[p(T)?(s(),n("div",{key:0,class:"ui-pagination-pageSize ui-pagination-item",onClick:Q,onBlur:j,tabindex:"-1"},[h(a.$slots,"buildOptionText",{value:p(B)}),u("span",b,[g(p(c),{name:"back",width:"1em",height:"1em"})])],32)):m("",!0),u("ol",{class:"pageSize-list",ref_key:"pageSizeList",ref:O,onMousedown:F},[(s(!0),n(d,null,r(p(J),(a=>(s(),n("li",{key:a,class:o({selected:a===p(B).toString()}),"data-pageSize":a},v(a)+"条/页 ",11,w)))),128))],544)],2),p(N)?(s(),n("div",{key:0,class:o(["ui-quickJumper-wrap",{disabled:p(I)}])},[z,u("input",{type:"text",onChange:$},null,32),S],2)):m("",!0),p(_)?(s(),n("div",{key:1,class:o(["ui-pageTotal-wrap",{disabled:p(I)}])},[k,u("span",null,v(p(L))+"/"+v(p(q)),1),f],2)):m("",!0)],2))}});export{y as _};
