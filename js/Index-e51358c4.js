import{_ as e,P as t,T as n,g as l,D as i,C as m,a}from"./DemoDisplay-2d0cc11b.js";import"./Upload.vue_vue_type_style_index_0_lang-466d0855.js";import{_ as o}from"./SubMenu.vue_vue_type_style_index_0_lang-63ec0c5c.js";import{d as s,o as r,c as u,b as d,v as c,n as T,y as p,g as _,w as I,e as f,l as g,h as v,z as h,r as w}from"./index-64f31046.js";import{_ as b}from"./ApiIntro-ec0be594.js";const k=s({__name:"Timeline",props:{mode:{default:"left"}},setup:e=>(t,n)=>(r(),u("div",{class:T(["ui-timeline-wrap",{[`timeLine-wrap-${e.mode}`]:!0}])},[d("div",{class:T(["ui-timeline-content",{[`timeLine-content-${e.mode}`]:!0}])},[c(t.$slots,"default")],2)],2))}),x={class:"ui-timelineItem-wrap"},S={key:0,class:"ui-timelineItem-dot"},C={class:"ui-timelineItem-content"},N=s({__name:"TimelineItem",props:{color:{default:"#1890ff"}},setup:e=>(t,n)=>(r(),u("div",x,[t.$slots.dot?(r(),u("div",S,[c(t.$slots,"dot")])):(r(),u("span",{key:1,style:p({border:`2px solid ${e.color}`,width:"10px",height:"10px"}),class:"ui-timelineItem-dot"},null,4)),d("div",C,[c(t.$slots,"default")])]))}),y=d("p",null,"垂直展示的时间流信息。",-1),D=d("ul",null,[d("li",null,"Timeline: 主要组件"),d("li",null,"TimeItem: 子组件。")],-1),$=d("ul",null,[d("li",null,"当有一系列信息需按时间排列时，可正序和倒序。"),d("li",null,"需要有一条时间轴进行视觉上的串联时。")],-1),j=s({__name:"Intro",setup:l=>(l,i)=>(r(),_(g(n),null,{default:I((()=>[f(g(e),null,{default:I((()=>[v("简介")])),_:1}),f(g(t),null,{default:I((()=>[y])),_:1}),f(g(e),null,{default:I((()=>[v("组件概览")])),_:1}),f(g(t),null,{default:I((()=>[D])),_:1}),f(g(e),null,{default:I((()=>[v("使用场景")])),_:1}),f(g(t),null,{default:I((()=>[$])),_:1})])),_:1}))}),A=s({__name:"Api",setup(e){const t=[],n=[{componentName:"Timeline",attrContent:[{rowIndex:1,"属性":"mode","说明":"位置","类型":"'left' | 'right' | 'alternate'","默认值":"left"}]},{componentName:"TimelineItem",attrContent:[{rowIndex:1,"属性":"color","说明":"圆圈颜色","类型":"string","默认值":"#1890ff"}]}];return(e,l)=>(r(),_(b,{"attr-content-arr":n,"event-content":t}))}});var L=e=>{e.__sourceCode='<template>\n  <Timeline mode="left">\n    <TimelineItem>Create a services site 2015-09-01</TimelineItem>\n    <TimelineItem>Solve initial network problems 2015-09-01</TimelineItem>\n    <TimelineItem>Technical testing 2015-09-01</TimelineItem>\n    <TimelineItem>Network problems being solved 2015-09-01</TimelineItem>\n    <TimelineItem>Technical testing 2015-09-01 </TimelineItem>\n  </Timeline>\n</template>\n\n<script setup lang="ts">\nimport { Timeline, TimelineItem, SvgIcon } from \'ant\'\n<\/script>',e.__sourceTitle=" 靠左对齐 "};const z=s({__name:"DemoOne",setup:e=>(e,t)=>(r(),_(g(k),{mode:"left"},{default:I((()=>[f(g(N),null,{default:I((()=>[v("Create a services site 2015-09-01")])),_:1}),f(g(N),null,{default:I((()=>[v("Solve initial network problems 2015-09-01")])),_:1}),f(g(N),null,{default:I((()=>[v("Technical testing 2015-09-01")])),_:1}),f(g(N),null,{default:I((()=>[v("Network problems being solved 2015-09-01")])),_:1}),f(g(N),null,{default:I((()=>[v("Technical testing 2015-09-01 ")])),_:1})])),_:1}))});L(z);var F=e=>{e.__sourceCode='<template>\n  <Timeline mode="alternate">\n    <TimelineItem color="green">Create a services site 2015-09-01</TimelineItem>\n    <TimelineItem>Solve initial network problems 2015-09-01</TimelineItem>\n    <TimelineItem>Technical testing 2015-09-01</TimelineItem>\n    <TimelineItem>Network problems being solved 2015-09-01</TimelineItem>\n    <TimelineItem>\n      <template #dot>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="#75d048" />\n      </template>\n      Technical testing 2015-09-01\n    </TimelineItem>\n  </Timeline>\n</template>\n\n<script setup lang="ts">\nimport { Timeline, TimelineItem, SvgIcon } from \'ant\'\n<\/script>',e.__sourceTitle=" 居中对齐 "};const M=s({__name:"DemoTwo",setup:e=>(e,t)=>(r(),_(g(k),{mode:"alternate"},{default:I((()=>[f(g(N),{color:"green"},{default:I((()=>[v("Create a services site 2015-09-01")])),_:1}),f(g(N),null,{default:I((()=>[v("Solve initial network problems 2015-09-01")])),_:1}),f(g(N),null,{default:I((()=>[v("Technical testing 2015-09-01")])),_:1}),f(g(N),null,{default:I((()=>[v("Network problems being solved 2015-09-01")])),_:1}),f(g(N),null,{dot:I((()=>[f(g(o),{name:"weixin",width:"1em",height:"1em",fill:"#75d048"})])),default:I((()=>[v(" Technical testing 2015-09-01 ")])),_:1})])),_:1}))});F(M);var O=e=>{e.__sourceCode='<template>\n  <Timeline mode="right">\n    <TimelineItem color="green">Create a services site 2015-09-01</TimelineItem>\n    <TimelineItem>Solve initial network problems 2015-09-01</TimelineItem>\n    <TimelineItem>Technical testing 2015-09-01</TimelineItem>\n    <TimelineItem>Network problems being solved 2015-09-01</TimelineItem>\n    <TimelineItem>\n      <template #dot>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="#75d048" />\n      </template>\n      Technical testing 2015-09-01\n    </TimelineItem>\n  </Timeline>\n</template>\n\n<script setup lang="ts">\nimport { Timeline, TimelineItem, SvgIcon } from \'ant\'\n<\/script>',e.__sourceTitle=" 靠右对齐 "};const P=s({__name:"DemoThree",setup:e=>(e,t)=>(r(),_(g(k),{mode:"right"},{default:I((()=>[f(g(N),{color:"green"},{default:I((()=>[v("Create a services site 2015-09-01")])),_:1}),f(g(N),null,{default:I((()=>[v("Solve initial network problems 2015-09-01")])),_:1}),f(g(N),null,{default:I((()=>[v("Technical testing 2015-09-01")])),_:1}),f(g(N),null,{default:I((()=>[v("Network problems being solved 2015-09-01")])),_:1}),f(g(N),null,{dot:I((()=>[f(g(o),{name:"weixin",width:"1em",height:"1em",fill:"#75d048"})])),default:I((()=>[v(" Technical testing 2015-09-01 ")])),_:1})])),_:1}))});O(P);var U=e=>{e.__sourceCode='<template>\n  <Timeline mode="alternate">\n    <TimelineItem color="green">Create a services site 2015-09-01</TimelineItem>\n    <TimelineItem>Solve initial network problems 2015-09-01</TimelineItem>\n    <TimelineItem>Technical testing 2015-09-01</TimelineItem>\n    <TimelineItem>Network problems being solved 2015-09-01</TimelineItem>\n    <TimelineItem>\n      <template #dot>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="#75d048" />\n      </template>\n      Technical testing 2015-09-01\n    </TimelineItem>\n  </Timeline>\n</template>\n\n<script setup lang="ts">\nimport { Timeline, TimelineItem, SvgIcon } from \'ant\'\n<\/script>',e.__sourceTitle=" 自定义圆圈 "};const q=s({__name:"DemoFour",setup:e=>(e,t)=>(r(),_(g(k),{mode:"alternate"},{default:I((()=>[f(g(N),{color:"green"},{default:I((()=>[v("Create a services site 2015-09-01")])),_:1}),f(g(N),null,{default:I((()=>[v("Solve initial network problems 2015-09-01")])),_:1}),f(g(N),null,{default:I((()=>[v("Technical testing 2015-09-01")])),_:1}),f(g(N),null,{default:I((()=>[v("Network problems being solved 2015-09-01")])),_:1}),f(g(N),null,{dot:I((()=>[f(g(o),{name:"weixin",width:"1em",height:"1em",fill:"#75d048"})])),default:I((()=>[v(" Technical testing 2015-09-01 ")])),_:1})])),_:1}))});U(q);const B=s({__name:"Demo",setup(e){const t=h((()=>[z,M,P,q].map(((e,t)=>l(e,"timeline",t)))));return(e,n)=>(r(),_(i,{"demo-arr":g(t)},null,8,["demo-arr"]))}}),E=s({__name:"Index",setup(e){w(null);const t=["靠左对齐","居中对齐","靠右对齐","自定义圆圈"],n=h((()=>a("timeline",t)));return(e,t)=>(r(),_(m,{"nav-arr":g(n),title:"Timeline 时间轴","component-name":"timeline"},{intro:I((()=>[f(j)])),demo:I((()=>[f(B)])),api:I((()=>[f(A)])),_:1},8,["nav-arr"]))}});export{E as default};
