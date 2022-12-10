import{D as C,C as F}from"./DemoDisplay-d6102924.js";import{b as e}from"./Upload.vue_vue_type_style_index_0_lang-dcc18adf.js";import{_ as l,P as t,T as o}from"./Footer-492e9d3a.js";import{d as n,c as s,e as i,F as r,h as a,l as c,t as u,L as p,f as d,m,i as _,g as f,j as k,x as g,r as y}from"./index-4bdb761c.js";import{g as v}from"./helper-f72534c2.js";const w=n({__name:"ColorUtil",props:{colors:null},setup(C){const F=async C=>{const F=C.target;if("div"===F.tagName.toLowerCase())try{await navigator.clipboard.writeText(F.innerText),e.success("复制成功")}catch(l){e.error("复制失败")}};return(e,l)=>(s(),i("div",{class:"ui-colorUtil-wrap",onClick:F},[(s(),i(r,null,a(15,(F=>c("div",{class:"ui-colorUtil-item",key:`${F}${C.colors[F-1]}`,style:p({backgroundColor:C.colors[F-1]})},u(C.colors[F-1]),5))),64))]))}}),x={red:["#FFFFCC","#CCFFFF","#FFCCCC","#99CCCC","#FFCC99","#FFCCCC","#FF9999","#996699","#FFCCCC","#CC9999","#FFFFCC","#CCCC99","#FFCCCC","#FFFF99","#CCCCFF","#0099CC","#CCCCCC","#FF6666","#FF9966","#FF6666","#FFCCCC","#CC9966","#666666","#CC9999","#FF6666","#FFFF66","#99CC66","#CC3333","#CCCCCC","#003366","#993333","#CCCC00","#663366","#CCCC99","#666666","#CC9999","#FF6666","#FFFF00","#0066CC","#CC0033","#333333","#CCCC00","#336633","#990033","#FFCC99","#993333","#CC9966","#003300","#FF0033","#333399","#CCCC00","#CC0033","#000000","#003399","#000000","#99CC00","#CC0033","#999933","#993333","#333300"],orange:["#FFCC99","#FFFF99","#99CC99","#FFCC99","#CCFF99","#CCCCCC","#FFCC99","#FFFFCC","#99CCFF","#FF9966","#FFFFCC","#99CC99","#FF9900","#FFFFCC","#336699","#CCCC33","#FFFF99","#CC9933","#996600","#FFCC33","#FFFFCC","#FFFFCC","#CC9933","#336666","#FF9900","#FFFF00","#0099CC","#99CC33","#FF9900","#FFCC00","#FF9933","#99CC33","#CC6699","#FF9933","#FFFF00","#3366CC","#FF9933","#FFFFCC","#009966","#FF6600","#FFFF66","#009966","#990033","#CCFF66","#FF9900","#FF9966","#996600","#CCCC00","#CC6600","#999999","#CCCC33","#CC6600","#CCCC33","#336699","#000000","#FF9933","#999966","#663300","#FF9933","#FFFF66"],yellow:["#FFFFCC","#CCFFFF","#FFCCCC","#FFFF00","#FFFFFF","#CCCC00","#99CCFF","#FFCC33","#FFFFCC","#FFFF33","#99CCFF","#CCCCCC","#FFFF00","#FFFFFF","#9933FF","#99CCFF","#FFCC33","#FFFF33","#FFCC00","#66CC00","#FFFF99","#FF9900","#FFFF00","#0099CC","#FFCC00","#0000CC","#FFFF99","#CC9999","#FFFFCC","#6666CC","#999933","#FFFFCC","#CC99CC","#CCCC00","#666600","#FFFF66","#FF9966","#FFFFCC","#99CC99","#FFCC33","#FFFFCC","#999966","#FFCC99","#FF6666","#FFFF66","#FFCC99","#999966","#FFFF00","#FFFF99","#99CC99","#666600","#999966","#FFFF99","#333333","#006633","#333300","#CCCC99","#006633","#663300","#CCCC66"],Yellow_green:["#33CC33","#6666CC","#FFFFFF","#CCCC33","#FFFFFF","#CCFFCC","#FFCC99","#CCFF99","#CCCCCC","#CCCC00","#999966","#FFFFCC","#CCCC33","#FFFFFF","#336699","#CCCC33","#999999","#CCFFFF","#00CC00","#0066CC","#99CCCC","#99CC33","#FF9900","#FFCC00","#99CC33","#CCCCFF","#663300","#CCCC33","#993399","#000000","#CC6600","#999999","#CCCC33","#CC9933","#FFFF99","#99CC99","#669933","#CCCC33","#663300","#99CC33","#CCCCCC","#000000","#CC6600","#CCCC33","#336699","#666600","#CCCC66","#CCFFCC","#333366","#99CC33","#336699","#666666","#99CC33","#003366","#003333","#99CC33","#999999","#996633","#FFFF99","#99CC66"],green:["#009966","#FFFFFF","#FFFF00","#339933","#FFFFFF","#9933CC","#339933","#FFFFFF","#000000","#339933","#99CC00","#FFFFCC","#FFFFCC","#CCCC66","#336666","#99CC33","#FFFF66","#336600","#339933","#CC9900","#666666","#339966","#CCCCCC","#003366","#669933","#CCCCCC","#000000","#339933","#CCCCCC","#6699CC","#006633","#CCCC33","#CC9933","#339933","#666633","#CCCC66","#339933","#FFCC33","#336699","#006633","#669933","#99CC99","#336666","#996633","#CCCC33","#003300","#669933","#CCCC99","#006633","#990033","#FF9900","#006633","#333300","#CCCC99","#006633","#663300","#CCCC66","#993333","#CC9966","#003300"],turquoise:["#CCFF99","#FFFFFF","#66CCCC","#339999","#FFFFFF","#99CCFF","#66CC99","#FFFFFF","#666699","#009999","#66CCCC","#CCFFFF","#66CCCC","#CCFF66","#FF99CC","#339999","#FFFF00","#336699","#CC9933","#339999","#FFCC33","#FFCC00","#009999","#CC3333","#669999","#CCCCCC","#CC99CC","#339999","#CCCCCC","#000000","#339999","#666699","#CCCCCC","#003333","#99CC99","#FFFFCC","#669999","#CCFFCC","#996699","#996699","#CCCC99","#669999","#999966","#CCCC99","#339999","#336666","#669999","#CCCC99","#999999","#003366","#669999","#663333","#339999","#CCCC66","#333333","#339999","#CCFFCC","#336666","#3399CC","#666666"],blue:["#FFFFCC","#CCFFFF","#FFCCCC","#99CCCC","#FFFFFF","#3399CC","#CCFFCC","#99CCCC","#FFFFCC","#CCCCFF","#FFFFFF","#99CCFF","#FFCC99","#FFFFCC","#99CCFF","#336699","#FFFFFF","#99CCCC","#99CCCC","#FFFFFF","#CCFF99","#CCCCFF","#FFFFCC","#CCFFFF","#99CCCC","#FFFFFF","#336699","#99CCFF","#CCFFFF","#6699CC","#99CC33","#FFFFFF","#3399CC","#0099CC","#FFFFCC","#666699","#CCCCCC","#003366","#99CCFF","#0099CC","#FFFFFF","#666666","#CCCCCC","#6699CC","#666666","#336699","#CCCC99","#003366","#3399CC","#003366","#CCCCCC","#6699CC","#006699","#000000","#003366","#CCCCCC","#006699","#999933","#336699","#333333"],Blue_purple:["#CCFFFF","#FFFFFF","#CCCCFF","#CCCCCC","#FFFFFF","#666699","#99CCFF","#FFFFFF","#333399","#6666CC","#FFFFFF","#FF9999","#9999FF","#FFCC33","#FFFFCC","#0099CC","#FFFFCC","#666699","#0000FF","#6699FF","#CCFFFF","#6666FF","#66CCFF","#CCFF66","#669999","#FFFFCC","#6666CC","#9999CC","#FF9999","#666699","#003399","#FFCCCC","#6699CC","#CC6666","#333399","#CCCC00","#000066","#6666FF","#CCCCCC","#003399","#CCFF99","#333333","#333366","#CC0033","#CCCCCC","#336699","#CCCC66","#333300","#003399","#FFFF99","#000000","#990066","#CCCC33","#003399","#CC3333","#000000","#003399","#333366","#999966","#333333"],purple:["#FFFFCC","#FFFF99","#CCCCFF","#9999CC","#99CC99","#FFFFFF","#FFCCCC","#CCCCFF","#CCCC99","#9999CC","#FFFFCC","#FFCCCC","#FFCCCC","#FF99CC","#CCCCFF","#660066","#FFFFFF","#663333","#CCCC99","#333333","#9966CC","#CCCC00","#FF9966","#663399","#996699","#FFCCCC","#CC99CC","#996666","#CC99CC","#FFCCCC","#FFCC99","#FF9933","#663366","#333399","#CCCCFF","#CC99CC","#663366","#CCCCCC","#CC99CC","#996699","#9999CC","#CCCCFF","#CC9966","#999999","#663366","#330033","#666666","#669999","#CCCCCC","#999999","#663366","#FF33CC","#CCCC99","#663366","#663366","#999999","#CCCCFF","#999966","#993333","#330033"],amaranth:["#FFCCCC","#FFFFFF","#99CC00","#FF99CC","#FFFFFF","#993366","#66CC99","#FFFFFF","#CC6699","#CC9999","#FFCCCC","#CC99CC","#FFCCCC","#FFFF99","#CCCCFF","#FFFF99","#993399","#FF99CC","#66CCCC","#CCFF66","#FF99CC","#FF99CC","#003399","#CCCC00","#FFCCCC","#FF99CC","#CCCCFF","#FF9999","#FFCCCC","#FF99CC","#669966","#CC6699","#FFCCFF","#CCCCCC","#CC99CC","#CC3399","#CC3399","#FFCC99","#FF6666","#FF3399","#CCCC99","#663366","#663366","#FFFFCC","#FFCCCC","#663366","#CCCCCC","#CC99CC","#990066","#FFCC00","#CC0033","#990066","#CCCCCC","#006699","#999900","#990033","#000000","#990066","#000000","#009966"]},b={class:"ui-colorGroup-wrap"},h={style:{color:"#56688a",fontWeight:700}},j={style:{color:"#666696",fontSize:"14px"}},D={class:"ui-colorGroup-content"},P=n({__name:"ColorGroup",props:{title:null,description:null,kind:null},setup:C=>(F,e)=>(s(),i("div",b,[c("p",h,u(C.title),1),c("p",j,u(C.description),1),c("div",D,[d(w,{colors:m(x)[C.kind].slice(0,15)},null,8,["colors"]),d(w,{colors:m(x)[C.kind].slice(15,30)},null,8,["colors"]),d(w,{colors:m(x)[C.kind].slice(30,45)},null,8,["colors"]),d(w,{colors:m(x)[C.kind].slice(45,60)},null,8,["colors"])])]))}),T={class:"ui-palette-wrap"},U=n({__name:"Palette",setup:C=>(C,F)=>(s(),i("div",T,[c("section",null,[d(P,{kind:"red",title:"红色",description:"是一种激奋的色彩。刺激效果，能使人产生冲动，愤怒，热情，活力的感觉。"})]),c("section",null,[d(P,{kind:"orange",title:"橙色",description:"也是一种激奋的色彩，具有轻快，欢欣，热烈，温馨，时尚的效果。"})]),c("section",null,[d(P,{kind:"yellow",title:"黄色",description:"具有快乐，希望，智慧和轻快的个性，它的明度最高。"})]),c("section",null,[d(P,{kind:"Yellow_green",title:"黄绿色",description:"具有快乐，希望，智慧和轻快的个性，它的明度最高。"})]),c("section",null,[d(P,{kind:"green",title:"绿色",description:"介于冷暖两中色彩的中间，显得和睦，宁静，健康，安全的感觉。 它和金黄，淡白搭配，可以产生优雅，舒适的气氛。"})]),c("section",null,[d(P,{kind:"turquoise",title:"青绿色",description:"介于冷暖两中色彩的中间，显得和睦，宁静，健康，安全的感觉。 它和金黄，淡白搭配，可以产生优雅，舒适的气氛。"})]),c("section",null,[d(P,{kind:"blue",title:"蓝色",description:"是最具凉爽，清新，专业的色彩。它和白色混合，能体现柔顺，淡雅，浪漫的气氛(象天空的色彩:) 白色---具有洁白，明快，纯真，清洁的感受。"})]),c("section",null,[d(P,{kind:"Blue_purple",title:"蓝紫色",description:"是最具凉爽，清新，专业的色彩。它和白色混合，能体现柔顺，淡雅，浪漫的气氛(象天空的色彩:) 白色---具有洁白，明快，纯真，清洁的感受。"})]),c("section",null,[d(P,{kind:"purple",title:"紫色"})]),c("section",null,[d(P,{kind:"amaranth",title:"蓝紫色"})])]))}),G=c("p",null,"本组件收集了网站的常用颜色",-1),q=c("p",null,"网站颜色选取",-1),B=n({__name:"Intro",setup:C=>(C,F)=>(s(),_(m(o),null,{default:f((()=>[d(m(l),null,{default:f((()=>[k("简介")])),_:1}),d(m(t),null,{default:f((()=>[G])),_:1}),d(m(l),null,{default:f((()=>[k("使用场景")])),_:1}),d(m(t),null,{default:f((()=>[q])),_:1})])),_:1}))});var I=C=>{C.__sourceCode="<template>\n  <Palette />\n</template>\n\n<script setup lang=\"ts\">\nimport { Palette } from 'ant'\n<\/script>",C.__sourceTitle=" 示例一 "};const L=n({__name:"DemoOne",setup:C=>(C,F)=>(s(),_(m(U)))});I(L);const Y=n({__name:"Demo",setup(F){const e=g((()=>[L].map(((C,F)=>v(C,"palette",F)))));return(F,l)=>(s(),_(C,{"demo-arr":m(e)},null,8,["demo-arr"]))}}),$=n({__name:"Index",setup:C=>(y(null),(C,e)=>(s(),_(F,{title:"Palette 调色板","component-name":"palette"},{intro:f((()=>[d(B)])),demo:f((()=>[d(Y)])),_:1})))});export{$ as default};
