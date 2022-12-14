import{D as e,C as a}from"./DemoDisplay-861b5945.js";import{d as l,L as n,c as t,e as s,F as i,h as o,i as d,K as u,q as r,s as p,r as c,o as h,P as y,m as f,y as m,f as v,a6 as _,t as K,A as g,g as P,j as k,I as x}from"./index-fff176c6.js";import{_ as T,P as V,T as w}from"./Paragraph-72dbc1f2.js";import{_ as C}from"./ApiIntro.vue_vue_type_style_index_0_lang-399dc91d.js";import{g as b,a as I}from"./helper-42c8e4e7.js";const A={class:"ui-collapse-wrap"},D=l({__name:"Collapse",props:{activeKey:{default:()=>[]},accordion:{type:Boolean,default:!1}},emits:["update:activeKey","change"],setup(e,{emit:a}){const l=e;let p=[];n().default&&(p=n().default());const c=e=>{if(l.accordion)l.activeKey.indexOf(e)>=0?(a("update:activeKey",[]),a("change",[])):(a("update:activeKey",[e]),a("change",[e]));else if(l.activeKey.indexOf(e)>=0){const n=l.activeKey.indexOf(e),t=[...l.activeKey];t.splice(n,1),a("update:activeKey",t),a("change",t)}else a("update:activeKey",[...l.activeKey,e]),a("change",[...l.activeKey,e])};return(a,l)=>(t(),s("div",A,[(t(!0),s(i,null,o(r(p),(a=>(t(),d(u(a),{key:a,currentKey:e.activeKey,onChange:c},null,40,["currentKey"])))),128))]))}}),O={class:"ui-panel-wrap"},j=l({__name:"Panel",props:{keyValue:null,header:null,currentKey:null,disabled:{type:Boolean,default:!1}},emits:["change"],setup(e,{emit:a}){const l=e,{keyValue:n,currentKey:i,disabled:o}=p(l),d=c(null),u=c(null),P=e=>{if(o.value)return e.stopPropagation(),void e.preventDefault();a("change",n.value)};return h((()=>{y((()=>{var e;d.value&&u.value&&(null==i?void 0:i.value)&&(null==(e=null==i?void 0:i.value)?void 0:e.indexOf(n.value))>=0?u.value.style.height=`${d.value.getBoundingClientRect().height}px`:u.value&&(u.value.style.height="0px")}))})),(a,l)=>(t(),s("div",O,[f("div",{class:m(["ui-panel-header",{disabled:r(o)}]),onClick:P},[f("span",{class:m({"icon-down":r(i).indexOf(r(n))>=0})},[v(r(_),{name:"down",width:"0.8em",height:"0.8em"})],2),f("p",null,K(e.header),1)],2),f("div",{class:m(["ui-panel-content",{"content-open":r(i).indexOf(r(n))>=0}]),ref_key:"divRef2",ref:u},[f("div",{class:"panel-content",ref_key:"divRef",ref:d},[g(a.$slots,"default")],512)],2)]))}}),B=f("p",null,"可以折叠/展开的内容区域。",-1),R=f("ul",null,[f("li",null,"Collapse: 主要组件"),f("li",null,"Panel: 子组件")],-1),N=f("ul",null,[f("li",null,"对复杂区域进行分组和隐藏，保持页面的整洁。"),f("li",null,"手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。")],-1),U=l({__name:"Intro",setup:e=>(e,a)=>(t(),d(r(w),null,{default:P((()=>[v(r(T),null,{default:P((()=>[k("简介")])),_:1}),v(r(V),null,{default:P((()=>[B])),_:1}),v(r(T),null,{default:P((()=>[k("组件概览")])),_:1}),v(r(V),null,{default:P((()=>[R])),_:1}),v(r(T),null,{default:P((()=>[k("使用场景")])),_:1}),v(r(V),null,{default:P((()=>[N])),_:1})])),_:1}))}),$=l({__name:"Api",setup(e){const a=[],l=[{componentName:"Collapse",attrContent:[{rowIndex:1,"属性":"activeKey(v-model)","说明":"当前激活 tab 面板的 key","类型":"string[]","默认值":"[]"},{rowIndex:2,"属性":"accordion","说明":"手风琴模式","类型":"boolean","默认值":"false"}]},{componentName:"Panel",attrContent:[{rowIndex:1,"属性":"keyValue","说明":"对应 activeKey","类型":"string","默认值":""},{rowIndex:2,"属性":"header","说明":"面板头内容","类型":"string","默认值":""},{rowIndex:3,"属性":"disabled","说明":"禁用","类型":"boolean","默认值":"false"}]}];return(e,n)=>(t(),d(C,{"attr-content-arr":l,"event-content":a}))}}),q=l({__name:"DemoOne",setup(e){const a="A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",l=c([]);return(e,n)=>(t(),d(r(D),{activeKey:l.value,"onUpdate:activeKey":n[0]||(n[0]=e=>l.value=e),accordion:""},{default:P((()=>[v(r(j),{keyValue:"1",header:"This is panel header 1"},{default:P((()=>[f("p",null,K(a))])),_:1}),v(r(j),{keyValue:"2",header:"This is panel header 2"},{default:P((()=>[f("p",null,K(a))])),_:1}),v(r(j),{keyValue:"3",header:"This is panel header 3"},{default:P((()=>[f("p",null,K(a))])),_:1}),v(r(j),{keyValue:"4",header:"This is panel header 4"},{default:P((()=>[f("p",null,K(a))])),_:1}),v(r(j),{keyValue:"5",header:"This is panel header 5"},{default:P((()=>[f("p",null,K(a))])),_:1}),v(r(j),{keyValue:"6",header:"This is panel header 6",disabled:""},{default:P((()=>[f("p",null,K(a))])),_:1})])),_:1},8,["activeKey"]))}}),F=e=>{e.__sourceCode='<template>\n  <Collapse v-model:activeKey="activeKey" accordion>\n    <Panel keyValue="1" header="This is panel header 1">\n      <p>{{ text }}</p>\n    </Panel>\n    <Panel keyValue="2" header="This is panel header 2">\n      <p>{{ text }}</p>\n    </Panel>\n    <Panel keyValue="3" header="This is panel header 3">\n      <p>{{ text }}</p>\n    </Panel>\n    <Panel keyValue="4" header="This is panel header 4">\n      <p>{{ text }}</p>\n    </Panel>\n    <Panel keyValue="5" header="This is panel header 5">\n      <p>{{ text }}</p>\n    </Panel>\n    <Panel keyValue="6" header="This is panel header 6" disabled>\n      <p>{{ text }}</p>\n    </Panel>\n  </Collapse>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Collapse, Panel } from \'@/lib\'\n\nconst text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`\nconst activeKey = ref<string[]>([])\n<\/script>',e.__sourceTitle="基本用法"};F(q);const L=l({__name:"DemoTwo",setup(e){const a="A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",l=c([]);return(e,n)=>(t(),d(r(D),{activeKey:l.value,"onUpdate:activeKey":n[0]||(n[0]=e=>l.value=e)},{default:P((()=>[v(r(j),{keyValue:"1",header:"This is panel header 1"},{default:P((()=>[f("p",null,K(a))])),_:1}),v(r(j),{keyValue:"2",header:"This is panel header 2"},{default:P((()=>[f("p",null,K(a))])),_:1}),v(r(j),{keyValue:"3",header:"This is panel header 3"},{default:P((()=>[f("p",null,K(a))])),_:1}),v(r(j),{keyValue:"4",header:"This is panel header 4"},{default:P((()=>[f("p",null,K(a))])),_:1}),v(r(j),{keyValue:"5",header:"This is panel header 5"},{default:P((()=>[f("p",null,K(a))])),_:1}),v(r(j),{keyValue:"6",header:"This is panel header 6"},{default:P((()=>[f("p",null,K(a))])),_:1})])),_:1},8,["activeKey"]))}}),z=e=>{e.__sourceCode='<template>\n  <Collapse v-model:activeKey="activeKey">\n    <Panel keyValue="1" header="This is panel header 1">\n      <p>{{ text }}</p>\n    </Panel>\n    <Panel keyValue="2" header="This is panel header 2">\n      <p>{{ text }}</p>\n    </Panel>\n    <Panel keyValue="3" header="This is panel header 3">\n      <p>{{ text }}</p>\n    </Panel>\n    <Panel keyValue="4" header="This is panel header 4">\n      <p>{{ text }}</p>\n    </Panel>\n    <Panel keyValue="5" header="This is panel header 5">\n      <p>{{ text }}</p>\n    </Panel>\n    <Panel keyValue="6" header="This is panel header 6">\n      <p>{{ text }}</p>\n    </Panel>\n  </Collapse>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Collapse, Panel } from \'@/lib\'\n\nconst text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`\nconst activeKey = ref<string[]>([])\n<\/script>',e.__sourceTitle="允许全部展开"};z(L);const E=l({__name:"Demo",setup(a){const l=x((()=>[q,L].map(((e,a)=>b(e,"collapse",a)))));return(a,n)=>(t(),d(e,{"demo-arr":r(l)},null,8,["demo-arr"]))}}),G=l({__name:"Index",setup(e){c(null);const l=["基本用法","允许全部展开"],n=x((()=>I("collapse",l)));return(e,l)=>(t(),d(a,{"nav-arr":r(n),title:"Collapse 折叠面板","component-name":"collapse"},{intro:P((()=>[v(U)])),demo:P((()=>[v(E)])),api:P((()=>[v($)])),_:1},8,["nav-arr"]))}});export{G as default};
