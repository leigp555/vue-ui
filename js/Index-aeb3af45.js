import{_ as e,P as a,T as n,g as t,D as l,a as r,b as o}from"./DemoDisplay-30e28096.js";import{h as s}from"./Paragraph.vue_vue_type_style_index_0_lang-de84b885.js";import{d as u,o as _,g as i,w as m,e as c,l as p,h as d,b as v,r as f,z as g}from"./index-7adc59d4.js";/* empty css                                                */import{_ as D}from"./ApiIntro-ecd1af8a.js";const P=v("p",null,"输入或选择日期的控件。",-1),h=v("ul",null,[v("li",null,"DatePicker")],-1),j=v("p",null,"当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。",-1),y=u({__name:"Intro",setup:t=>(t,l)=>(_(),i(p(n),null,{default:m((()=>[c(p(e),{level:4},{default:m((()=>[d("简介")])),_:1}),c(p(a),null,{default:m((()=>[P])),_:1}),c(p(e),{level:4},{default:m((()=>[d("组件概述")])),_:1}),c(p(a),null,{default:m((()=>[h])),_:1}),c(p(e),{level:4},{default:m((()=>[d("使用场景")])),_:1}),c(p(a),null,{default:m((()=>[j])),_:1})])),_:1}))}),k=u({__name:"Api",setup(e){const a=[{rowIndex:1,"事件名称":"change","说明":"日期改变时的回调","回调参数":"(newDate:string) => void"}],n=[{componentName:"DatePicker",attrContent:[{rowIndex:1,"属性":"value","说明":"日期设置","类型":"string","默认值":"dayjs().format('YYYY-MM-DD')"},{rowIndex:2,"属性":"placeholder","说明":"input占位","类型":"string","默认值":"请选择日期"}]}];return(e,t)=>(_(),i(D,{"attr-content-arr":n,"event-content":a}))}});var x=e=>{e.__sourceCode="<template>\n  <DatePicker v-model:value=\"value\" @change=\"onChange\" />\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { Dayjs } from 'dayjs'\nimport { DatePicker } from '@/lib'\n\nconst value = ref<Dayjs>()\n\nconst onChange = () => {\n  console.log(value.value)\n}\n<\/script>",e.__sourceTitle="基本用法"};const I=u({__name:"DemoOne",setup(e){const a=f(),n=()=>{console.log(a.value)};return(e,t)=>(_(),i(p(s),{value:a.value,"onUpdate:value":t[0]||(t[0]=e=>a.value=e),onChange:n},null,8,["value"]))}});x(I);const b=u({__name:"Demo",setup(e){const a=g((()=>[I].map(((e,a)=>t(e,"datePicker",a)))));return(e,n)=>(_(),i(l,{"demo-arr":p(a)},null,8,["demo-arr"]))}}),w=u({__name:"Index",setup(e){f(null);const a=["基本用法"],n=g((()=>o("datePicker",a)));return(e,a)=>(_(),i(r,{"nav-arr":p(n),title:"DatePicker 日期选择框","component-name":"datePicker"},{intro:m((()=>[c(y)])),demo:m((()=>[c(b)])),api:m((()=>[c(k)])),_:1},8,["nav-arr"]))}});export{w as default};
