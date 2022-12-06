import{_ as e,P as t,T as n,g as i,D as m,C as o,a}from"./DemoDisplay-2d0cc11b.js";import{_ as p}from"./Upload.vue_vue_type_style_index_0_lang-466d0855.js";import{_ as s}from"./SubMenu.vue_vue_type_style_index_0_lang-63ec0c5c.js";import{d as l,o as r,c as u,b as c,v as d,g as _,w as y,e as g,l as f,h as v,z as h,r as E}from"./index-64f31046.js";import{_ as b}from"./ApiIntro-ec0be594.js";const w={class:"ui-empty-wrap"},B={class:"ui-empty-icon"},I={class:"ui-empty-description"},A={class:"ui-empty-actions"},D=l({__name:"Empty",setup:e=>(e,t)=>(r(),u("div",w,[c("div",B,[d(e.$slots,"icon")]),c("div",I,[d(e.$slots,"description")]),c("div",A,[d(e.$slots,"actions")]),d(e.$slots,"default")]))}),S=c("p",null,"空状态时的展示占位图。",-1),k=c("ul",null,[c("li",null,"Empty: 主要组件")],-1),L=c("ul",null,[c("li",null,"当目前没有数据时，用于显式的用户提示。"),c("li",null,"初始化场景时的引导创建流程。")],-1),T=l({__name:"Intro",setup:i=>(i,m)=>(r(),_(f(n),null,{default:y((()=>[g(f(e),null,{default:y((()=>[v("简介")])),_:1}),g(f(t),null,{default:y((()=>[S])),_:1}),g(f(e),null,{default:y((()=>[v("组件概览")])),_:1}),g(f(t),null,{default:y((()=>[k])),_:1}),g(f(e),null,{default:y((()=>[v("使用场景")])),_:1}),g(f(t),null,{default:y((()=>[L])),_:1})])),_:1}))}),j=l({__name:"Api",setup(e){const t=[],n=[];return(e,i)=>(r(),_(b,{"attr-content-arr":n,"event-content":t}))}});var x=e=>{e.__sourceCode='<template>\n  <Empty>\n    <template #icon>\n      <SvgIcon name="empty1" width="3em" height="3em" />\n    </template>\n    <template #description>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti\n        dolores dolorum ducimus, eos, impedit\n      </p>\n    </template>\n    <template #actions>\n      <Button type="primary">back</Button>\n    </template>\n  </Empty>\n</template>\n\n<script setup lang="ts">\nimport { Empty, SvgIcon, Button } from \'ant\'\n<\/script>',e.__sourceTitle=" 基本用法 "};const C=c("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores dolorum ducimus, eos, impedit ",-1),$=l({__name:"DemoOne",setup:e=>(e,t)=>(r(),_(f(D),null,{icon:y((()=>[g(f(s),{name:"empty1",width:"3em",height:"3em"})])),description:y((()=>[C])),actions:y((()=>[g(f(p),{type:"primary"},{default:y((()=>[v("back")])),_:1})])),_:1}))});x($);var z=e=>{e.__sourceCode='<template>\n  <Empty>\n    <template #icon>\n      <SvgIcon name="empty2" width="3em" height="3em" />\n    </template>\n    <template #description>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti\n        dolores dolorum ducimus, eos, impedit\n      </p>\n    </template>\n    <template #actions>\n      <Button type="primary">back</Button>\n    </template>\n  </Empty>\n</template>\n\n<script setup lang="ts">\nimport { Empty, SvgIcon, Button } from \'ant\'\n<\/script>',e.__sourceTitle=" 自定义图片 "};const M=c("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores dolorum ducimus, eos, impedit ",-1),O=l({__name:"DemoTwo",setup:e=>(e,t)=>(r(),_(f(D),null,{icon:y((()=>[g(f(s),{name:"empty2",width:"3em",height:"3em"})])),description:y((()=>[M])),actions:y((()=>[g(f(p),{type:"primary"},{default:y((()=>[v("back")])),_:1})])),_:1}))});z(O);var P=e=>{e.__sourceCode='<template>\n  <Empty>\n    <template #icon>\n      <SvgIcon name="empty3" width="3em" height="3em" />\n    </template>\n    <template #description>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti\n        dolores dolorum ducimus, eos, impedit\n      </p>\n    </template>\n    <template #actions>\n      <Button type="primary">back</Button>\n    </template>\n  </Empty>\n</template>\n\n<script setup lang="ts">\nimport { Empty, SvgIcon, Button } from \'ant\'\n<\/script>',e.__sourceTitle=" 自定义描述 "};const U=c("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores dolorum ducimus, eos, impedit ",-1),q=l({__name:"DemoThree",setup:e=>(e,t)=>(r(),_(f(D),null,{icon:y((()=>[g(f(s),{name:"empty3",width:"3em",height:"3em"})])),description:y((()=>[U])),actions:y((()=>[g(f(p),{type:"primary"},{default:y((()=>[v("back")])),_:1})])),_:1}))});P(q);const F=l({__name:"Demo",setup(e){const t=h((()=>[$,O,q].map(((e,t)=>i(e,"empty",t)))));return(e,n)=>(r(),_(m,{"demo-arr":f(t)},null,8,["demo-arr"]))}}),G=l({__name:"Index",setup(e){E(null);const t=["基本用法","自定义图片","自定义描述"],n=h((()=>a("empty",t)));return(e,t)=>(r(),_(o,{"nav-arr":f(n),title:"Empty 空状态","component-name":"empty"},{intro:y((()=>[g(T)])),demo:y((()=>[g(F)])),api:y((()=>[g(j)])),_:1},8,["nav-arr"]))}});export{G as default};
