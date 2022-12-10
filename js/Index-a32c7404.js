import{D as e,C as n}from"./DemoDisplay-d6102924.js";import{i as a,j as t}from"./Upload.vue_vue_type_style_index_0_lang-dcc18adf.js";import{_ as l,P as o,T as r}from"./Footer-492e9d3a.js";import{d as s,c as m,i as u,g as i,f as c,m as d,j as p,l as _,r as f,x as v}from"./index-4bdb761c.js";import{_ as j}from"./ApiIntro-e7a82855.js";import{g,a as y}from"./helper-f72534c2.js";const P=_("p",null,"输入或选择时间的控件。",-1),k=_("ul",null,[_("li",null,"TimePicker: 主要组件")],-1),H=_("ul",null,[_("li",null,"当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。")],-1),x=s({__name:"Intro",setup:e=>(e,n)=>(m(),u(d(r),null,{default:i((()=>[c(d(l),null,{default:i((()=>[p("简介")])),_:1}),c(d(o),null,{default:i((()=>[P])),_:1}),c(d(l),null,{default:i((()=>[p("组件概览")])),_:1}),c(d(o),null,{default:i((()=>[k])),_:1}),c(d(l),null,{default:i((()=>[p("使用场景")])),_:1}),c(d(o),null,{default:i((()=>[H])),_:1})])),_:1}))}),T=s({__name:"Api",setup(e){const n=[{rowIndex:1,"事件名称":"change","说明":"时间发生变化的回调","回调参数":"function(time: dayjs ): void"}],a=[{componentName:"TimePicker",attrContent:[{rowIndex:1,"属性":"value","说明":"value(v-model)","类型":"dayjs(HH:mm:ss)","默认值":"dayjs().format('HH:mm:ss')"}]}];return(e,t)=>(m(),u(j,{"attr-content-arr":a,"event-content":n}))}});var h=e=>{e.__sourceCode="<template>\n  <TimePicker v-model:value=\"value\" @change=\"onChange\" />\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport dayjs from 'dayjs'\nimport { TimePicker } from '@/lib'\n\nconst value = ref<string>(dayjs().format('HH:mm:ss'))\n\nconst onChange = (time: string) => {\n  console.log(time)\n}\n<\/script>",e.__sourceTitle="基本用法"};const C=s({__name:"DemoOne",setup(e){const n=f(a().format("HH:mm:ss")),l=e=>{console.log(e)};return(e,a)=>(m(),u(d(t),{value:n.value,"onUpdate:value":a[0]||(a[0]=e=>n.value=e),onChange:l},null,8,["value"]))}});h(C);const D=s({__name:"Demo",setup(n){const a=v((()=>[C].map(((e,n)=>g(e,"timePicker",n)))));return(n,t)=>(m(),u(e,{"demo-arr":d(a)},null,8,["demo-arr"]))}}),I=s({__name:"Index",setup(e){f(null);const a=["基本用法"],t=v((()=>y("timePicker",a)));return(e,a)=>(m(),u(n,{"nav-arr":d(t),title:"TimePicker 时间选择框","component-name":"timePicker"},{intro:i((()=>[c(x)])),demo:i((()=>[c(D)])),api:i((()=>[c(T)])),_:1},8,["nav-arr"]))}});export{I as default};
