import{D as e,C as t}from"./DemoDisplay-861b5945.js";import{d as a,c as n,e as i,m as l,F as s,h as r,B as o,t as u,f as c,q as d,V as p,A as m,i as b,g as _,j as g,G as h,I as f,r as k}from"./index-fff176c6.js";import{_ as v,P as T,T as P}from"./Paragraph-72dbc1f2.js";import{_ as H}from"./ApiIntro.vue_vue_type_style_index_0_lang-399dc91d.js";import{g as D,a as B}from"./helper-42c8e4e7.js";const x={class:"ui-PageHeader-wrap"},y={class:"ui-PageHeader-Breadcrumb"},N={class:"breadcrumb"},C=["href"],M={key:0,class:"separator"},I={class:"linkName"},w={class:"ui-PageHeader-content"},O={class:"ui-PageHeader-title"},j={class:"title-item title-titleItem"},S={class:"title-item title-subtitleItem"},A={class:"ui-PageHeader-actions"},F={class:"ui-PageHeader-descriptions"},L=a({__name:"PageHeader",props:{title:{default:"Title"},subtitle:{default:"Subtitle"},breadcrumb:{default:()=>[]}},emits:["back"],setup(e,{emit:t}){const a=()=>{t("back")};return(t,b)=>(n(),i("div",x,[l("div",y,[l("div",N,[(n(!0),i(s,null,r(e.breadcrumb,((e,t)=>(n(),i("a",{key:e.path,href:e.path,class:"link"},[0!==t?(n(),i("span",M,"/")):o("",!0),l("span",I,u(e.breadcrumbName),1)],8,C)))),128))])]),l("div",w,[l("div",O,[l("span",{class:"title-icon",onClick:a},[c(d(p),{name:"left",width:"1.2em",height:"1.2em"})]),l("span",j,u(e.title),1),l("span",S,u(e.subtitle),1)]),l("div",A,[m(t.$slots,"actions")])]),l("div",F,[m(t.$slots,"descriptions")])]))}}),R={class:"ui-description-wrap"},G={class:"ui-description-label"},$={class:"ui-description-item"},z=a({__name:"Description",props:{label:{default:"Label"}},setup:e=>(t,a)=>(n(),i("div",R,[l("span",G,u(e.label)+": ",1),l("div",$,[m(t.$slots,"default")])]))}),E=l("p",null," 页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作等、页面级导航组成。 ",-1),Q=l("ul",null,[l("li",null,"PageHeader"),l("li",null,"Description")],-1),X=l("p",null," 当需要使用户快速理解当前页是什么以及方便用户使用页面功能时使用，通常也可被用作页面间导航。 ",-1),Z=a({__name:"Intro",setup:e=>(e,t)=>(n(),b(d(P),null,{default:_((()=>[c(d(v),{level:4},{default:_((()=>[g("简介")])),_:1}),c(d(T),null,{default:_((()=>[E])),_:1}),c(d(v),{level:4},{default:_((()=>[g("组件概述")])),_:1}),c(d(T),null,{default:_((()=>[Q])),_:1}),c(d(v),{level:4},{default:_((()=>[g("使用场景")])),_:1}),c(d(T),null,{default:_((()=>[X])),_:1})])),_:1}))}),q=a({__name:"Api",setup(e){const t=[{rowIndex:1,"事件名称":"back","说明":"点击返回icon时的回调","回调参数":"() => void"}],a=[{componentName:"PageHeader",attrContent:[{rowIndex:1,"属性":"title","说明":"标题名称","类型":"string","默认值":"Title"},{rowIndex:2,"属性":"subtitle","说明":"副标题名称","类型":"string","默认值":"Subtitle"},{rowIndex:3,"属性":"breadcrumb","说明":"面包屑数据","类型":"{path:string,breadcrumbName:string}[]","默认值":"[]"}]},{componentName:"Description",attrContent:[{rowIndex:1,"属性":"label","说明":"标签名","类型":"string","默认值":"Label"}]}];return(e,i)=>(n(),b(H,{"attr-content-arr":a,"event-content":t}))}}),V=a({__name:"DemoOne",setup(e){const t=()=>{console.log("back")};return(e,a)=>(n(),b(d(L),{title:"Title",subtitle:"This is a subtitle",onBack:t}))}}),J=e=>{e.__sourceCode='<template>\n  <PageHeader title="Title" subtitle="This is a subtitle" @back="back"></PageHeader>\n</template>\n\n<script setup lang="ts">\nimport { PageHeader } from \'hut-ui\'\n\nconst back = () => {\n  console.log(\'back\')\n}\n<\/script>',e.__sourceTitle=" 基本用法 "};J(V);const K=a({__name:"DemoTwo",setup(e){const t=()=>{console.log("back")},a=[{path:"index",breadcrumbName:"First-level Menu"},{path:"first",breadcrumbName:"Second-level Menu"},{path:"second",breadcrumbName:"Third-level Menu"}];return(e,i)=>(n(),b(d(L),{title:"Title",subtitle:"This is a subtitle",onBack:t,breadcrumb:a},{actions:_((()=>[c(d(h),{type:"text"},{default:_((()=>[g("Operation")])),_:1}),c(d(h),{type:"link"},{default:_((()=>[g("Operation")])),_:1}),c(d(h),null,{default:_((()=>[g("Primary")])),_:1})])),_:1}))}}),U=e=>{e.__sourceCode="<template>\n  <PageHeader\n    title=\"Title\"\n    subtitle=\"This is a subtitle\"\n    @back=\"back\"\n    :breadcrumb=\"routes\"\n  >\n    <template #actions>\n      <Button type=\"text\">Operation</Button>\n      <Button type=\"link\">Operation</Button>\n      <Button>Primary</Button>\n    </template>\n  </PageHeader>\n</template>\n\n<script setup lang=\"ts\">\nimport { PageHeader, Button } from 'hut-ui'\n\nconst back = () => {\n  console.log('back')\n}\nconst routes = [\n  {\n    path: 'index',\n    breadcrumbName: 'First-level Menu'\n  },\n  {\n    path: 'first',\n    breadcrumbName: 'Second-level Menu'\n  },\n  {\n    path: 'second',\n    breadcrumbName: 'Third-level Menu'\n  }\n]\n<\/script>",e.__sourceTitle=" 带面包屑页头 "};U(K);const W=a({__name:"DemoThree",setup(e){const t=()=>{console.log("back")},a=[{path:"index",breadcrumbName:"First-level Menu"},{path:"first",breadcrumbName:"Second-level Menu"},{path:"second",breadcrumbName:"Third-level Menu"}];return(e,i)=>(n(),b(d(L),{title:"Title",subtitle:"This is a subtitle",onBack:t,breadcrumb:a},{actions:_((()=>[c(d(h),{type:"text"},{default:_((()=>[g("Operation")])),_:1}),c(d(h),{type:"link"},{default:_((()=>[g("Operation")])),_:1}),c(d(h),null,{default:_((()=>[g("Primary")])),_:1})])),descriptions:_((()=>[c(d(z),{label:"Created"},{default:_((()=>[g("Lili Qu")])),_:1}),c(d(z),{label:"Association"},{default:_((()=>[g("421421")])),_:1}),c(d(z),{label:"Creation Time"},{default:_((()=>[g("2017-01-10")])),_:1}),c(d(z),{label:"Effective Time"},{default:_((()=>[g("2017-01-10")])),_:1}),c(d(z),{label:"Remarks"},{default:_((()=>[g(" Gonghu Road, Xihu District, Hangzhou, Zhejiang, China")])),_:1})])),_:1}))}}),Y=e=>{e.__sourceCode='<template>\n  <PageHeader\n    title="Title"\n    subtitle="This is a subtitle"\n    @back="back"\n    :breadcrumb="routes"\n  >\n    <template #actions>\n      <Button type="text">Operation</Button>\n      <Button type="link">Operation</Button>\n      <Button>Primary</Button>\n    </template>\n    <template #descriptions>\n      <Description label="Created">Lili Qu</Description>\n      <Description label="Association">421421</Description>\n      <Description label="Creation Time">2017-01-10</Description>\n      <Description label="Effective Time">2017-01-10</Description>\n      <Description label="Remarks">\n        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China</Description\n      >\n    </template>\n  </PageHeader>\n</template>\n\n<script setup lang="ts">\nimport { PageHeader, Description, Button } from \'hut-ui\'\n\nconst back = () => {\n  console.log(\'back\')\n}\nconst routes = [\n  {\n    path: \'index\',\n    breadcrumbName: \'First-level Menu\'\n  },\n  {\n    path: \'first\',\n    breadcrumbName: \'Second-level Menu\'\n  },\n  {\n    path: \'second\',\n    breadcrumbName: \'Third-level Menu\'\n  }\n]\n<\/script>',e.__sourceTitle=" 多种形态的 PageHeader "};Y(W);const ee=a({__name:"Demo",setup(t){const a=f((()=>[V,K,W].map(((e,t)=>D(e,"pageHeader",t)))));return(t,i)=>(n(),b(e,{"demo-arr":d(a)},null,8,["demo-arr"]))}}),te=a({__name:"Index",setup(e){k(null);const a=["基本用法","带面包屑页头","多种形态的 PageHeader"],i=f((()=>B("pageHeader",a)));return(e,a)=>(n(),b(t,{"nav-arr":d(i),title:"PageHeader 页头","component-name":"pageHeader"},{intro:_((()=>[c(Z)])),demo:_((()=>[c(ee)])),api:_((()=>[c(q)])),_:1},8,["nav-arr"]))}});export{te as default};
