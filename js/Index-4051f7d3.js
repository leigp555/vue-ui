import{D as e,C as r}from"./DemoDisplay-9caf88b3.js";import{d as t,M as a,c as n,e as m,F as l,i as u,n as c,t as d,j as i,L as o,q as s,B as p,g as b,f as _,k as f,s as B,J as I,r as h}from"./index-8d3b1deb.js";import{_ as g,P as w,T as v}from"./Paragraph-24a019c8.js";import{_ as x}from"./ApiIntro-05f1c3da.js";import{g as C,a as j}from"./helper-a6849624.js";const A={class:"ui-Breadcrumb-wrap"},S={class:"ui-Breadcrumb-separator"},T=t({__name:"Breadcrumb",props:{separator:{default:"/"}},setup(e){const r=a().default();return(t,a)=>(n(),m("div",A,[(n(!0),m(l,null,u(s(r),((r,t)=>(n(),m("div",{class:"breadcrumb-item",key:t},[c("span",S,d(0!==t?e.separator:""),1),(n(),i(o(r)))])))),128))]))}}),k=["href"],D={class:"ui-BreadcrumbItem-name"},y=t({__name:"BreadcrumbItem",props:{href:{default:"javascript:;"}},setup:e=>(r,t)=>(n(),m("a",{class:"ui-BreadcrumbItem-wrap",href:e.href},[c("span",null,[p(r.$slots,"icon")]),c("span",D,[p(r.$slots,"default")])],8,k))}),W=c("p",null,"显示当前页面在系统层级结构中的位置，并能向上返回。",-1),L=c("ul",null,[c("li",null,"Breadcrumb: 主要组件"),c("li",null,"BreadcrumbItem:子组件。")],-1),F=c("ul",null,[c("li",null,"当系统拥有超过两级以上的层级结构时；"),c("li",null,"当需要告知用户『你在哪里』时；"),c("li",null,"当需要向上导航的功能时。")],-1),H=t({__name:"Intro",setup:e=>(e,r)=>(n(),i(s(v),null,{default:b((()=>[_(s(g),null,{default:b((()=>[f("简介")])),_:1}),_(s(w),null,{default:b((()=>[W])),_:1}),_(s(g),null,{default:b((()=>[f("组件概览")])),_:1}),_(s(w),null,{default:b((()=>[L])),_:1}),_(s(g),null,{default:b((()=>[f("使用场景")])),_:1}),_(s(w),null,{default:b((()=>[F])),_:1})])),_:1}))}),N=t({__name:"Api",setup(e){const r=[],t=[{componentName:"Text",attrContent:[{rowIndex:1,"属性":"separator","说明":"分隔符","类型":"string","默认值":"/"}]},{componentName:"Title",attrContent:[{rowIndex:1,"属性":"href","说明":"跳转链接","类型":"string","默认值":"javascript:;"}]}];return(e,a)=>(n(),i(x,{"attr-content-arr":t,"event-content":r}))}});var P=e=>{e.__sourceCode="<template>\n  <Breadcrumb>\n    <BreadcrumbItem>C:</BreadcrumbItem>\n    <BreadcrumbItem>Windows</BreadcrumbItem>\n    <BreadcrumbItem>System32</BreadcrumbItem>\n    <BreadcrumbItem>drivers</BreadcrumbItem>\n    <BreadcrumbItem>etc</BreadcrumbItem>\n  </Breadcrumb>\n</template>\n<script setup lang=\"ts\">\nimport { Breadcrumb, BreadcrumbItem } from 'ant'\n<\/script>",e.__sourceTitle=" 常规用法 "};const $=t({__name:"DemoOne",setup:e=>(e,r)=>(n(),i(s(T),null,{default:b((()=>[_(s(y),null,{default:b((()=>[f("C:")])),_:1}),_(s(y),null,{default:b((()=>[f("Windows")])),_:1}),_(s(y),null,{default:b((()=>[f("System32")])),_:1}),_(s(y),null,{default:b((()=>[f("drivers")])),_:1}),_(s(y),null,{default:b((()=>[f("etc")])),_:1})])),_:1}))});P($);var q=e=>{e.__sourceCode='<template>\n  <Breadcrumb separator="~">\n    <BreadcrumbItem>C:</BreadcrumbItem>\n    <BreadcrumbItem>Windows</BreadcrumbItem>\n    <BreadcrumbItem>System32</BreadcrumbItem>\n    <BreadcrumbItem>drivers</BreadcrumbItem>\n    <BreadcrumbItem>etc</BreadcrumbItem>\n  </Breadcrumb>\n</template>\n<script setup lang="ts">\nimport { Breadcrumb, BreadcrumbItem } from \'ant\'\n<\/script>',e.__sourceTitle=" 自定义分隔符 "};const J=t({__name:"DemoTwo",setup:e=>(e,r)=>(n(),i(s(T),{separator:"~"},{default:b((()=>[_(s(y),null,{default:b((()=>[f("C:")])),_:1}),_(s(y),null,{default:b((()=>[f("Windows")])),_:1}),_(s(y),null,{default:b((()=>[f("System32")])),_:1}),_(s(y),null,{default:b((()=>[f("drivers")])),_:1}),_(s(y),null,{default:b((()=>[f("etc")])),_:1})])),_:1}))});q(J);var M=e=>{e.__sourceCode='<template>\n  <Breadcrumb separator="~">\n    <BreadcrumbItem>\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" />\n      </template>\n      black\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="pink" />\n      </template>\n      pink\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="blue" />\n      </template>\n      blue\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="green" />\n      </template>\n      green\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="red" />\n      </template>\n      red\n    </BreadcrumbItem>\n  </Breadcrumb>\n</template>\n\n<script setup lang="ts">\nimport { Breadcrumb, BreadcrumbItem, SvgIcon } from \'ant\'\n<\/script>',e.__sourceTitle=" 嵌入icon "};const O=t({__name:"DemoThree",setup:e=>(e,r)=>(n(),i(s(T),{separator:"~"},{default:b((()=>[_(s(y),null,{icon:b((()=>[_(s(B),{name:"weixin",width:"1em",height:"1em"})])),default:b((()=>[f(" black ")])),_:1}),_(s(y),null,{icon:b((()=>[_(s(B),{name:"weixin",width:"1em",height:"1em",fill:"pink"})])),default:b((()=>[f(" pink ")])),_:1}),_(s(y),null,{icon:b((()=>[_(s(B),{name:"weixin",width:"1em",height:"1em",fill:"blue"})])),default:b((()=>[f(" blue ")])),_:1}),_(s(y),null,{icon:b((()=>[_(s(B),{name:"weixin",width:"1em",height:"1em",fill:"green"})])),default:b((()=>[f(" green ")])),_:1}),_(s(y),null,{icon:b((()=>[_(s(B),{name:"weixin",width:"1em",height:"1em",fill:"red"})])),default:b((()=>[f(" red ")])),_:1})])),_:1}))});M(O);var z=e=>{e.__sourceCode='<template>\n  <Breadcrumb separator=">>">\n    <BreadcrumbItem>Home</BreadcrumbItem>\n    <BreadcrumbItem href="//google.com">Application Center</BreadcrumbItem>\n    <BreadcrumbItem href="//taobao.com">Application List</BreadcrumbItem>\n    <BreadcrumbItem href="//jingdong.com">An Application</BreadcrumbItem>\n  </Breadcrumb>\n</template>\n\n<script setup lang="ts">\nimport { Breadcrumb, BreadcrumbItem } from \'ant\'\n<\/script>',e.__sourceTitle=" 支持链接 "};const E=t({__name:"DemoFour",setup:e=>(e,r)=>(n(),i(s(T),{separator:">>"},{default:b((()=>[_(s(y),null,{default:b((()=>[f("Home")])),_:1}),_(s(y),{href:"//google.com"},{default:b((()=>[f("Application Center")])),_:1}),_(s(y),{href:"//taobao.com"},{default:b((()=>[f("Application List")])),_:1}),_(s(y),{href:"//jingdong.com"},{default:b((()=>[f("An Application")])),_:1})])),_:1}))});z(E);const G=t({__name:"Demo",setup(r){const t=I((()=>[$,J,O,E].map(((e,r)=>C(e,"breadcrumb",r)))));return(r,a)=>(n(),i(e,{"demo-arr":s(t)},null,8,["demo-arr"]))}}),K=t({__name:"Index",setup(e){h(null);const t=["常规用法","自定义分隔符","嵌入icon","支持链接"],a=I((()=>j("breadcrumb",t)));return(e,t)=>(n(),i(r,{"nav-arr":s(a),title:"Breadcrumb 面包屑","component-name":"breadcrumb"},{intro:b((()=>[_(H)])),demo:b((()=>[_(G)])),api:b((()=>[_(N)])),_:1},8,["nav-arr"]))}});export{K as default};
