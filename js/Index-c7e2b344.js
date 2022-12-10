import{D as n,C as t}from"./DemoDisplay-d6102924.js";import{n as o,a as e,_ as i}from"./Upload.vue_vue_type_style_index_0_lang-dcc18adf.js";import{_ as s,P as c,T as a}from"./Footer-492e9d3a.js";import{d as r,v as l,r as u,o as f,c as p,i as m,g as d,e as h,L as _,f as g,R as T,E as y,t as v,j as k,y as w,T as x,J as C,K as N,m as B,l as I,_ as b,x as W}from"./index-4bdb761c.js";import{_ as j}from"./ApiIntro-e7a82855.js";import{g as D,a as O}from"./helper-f72534c2.js";const E={key:1},S={key:0,class:"ui-notification-footer",style:{padding:"10px 16px","border-top":"none","margin-bottom":"4px"}},A=r({__name:"Notification",props:{message:null,description:null,icon:null,okText:null,type:null,ok:{type:Boolean},cancel:{type:Boolean},width:{default:400},unMount:null,duration:{default:3e3}},emits:["ok","close"],setup(n,{emit:t}){const i=n,{unMount:s,duration:c}=l(i),a=u(!1),r=()=>{t("ok");const n=setTimeout((()=>{a.value=!1;const t=setTimeout((()=>{s.value(),window.clearTimeout(t)}),300);window.clearTimeout(n)}),400)},C=()=>{t("close"),a.value=!1,s.value()};return f((()=>{if(a.value=!0,"infinite"!==c.value){const n=setTimeout((()=>{a.value=!1;const t=setTimeout((()=>{s.value(),window.clearTimeout(t)}),300);window.clearTimeout(n)}),c.value)}})),(t,i)=>(p(),m(x,{name:"notification"},{default:d((()=>[a.value?(p(),h("div",{key:0,class:"ui-notification-content",style:_({maxWidth:`${n.width}px`,width:"100%"})},[g(o,{message:"string"==typeof n.message?n.message:"",type:n.type,showIcon:"",banner:"",closable:"",style:{backgroundColor:"#fff"},onClose:C},T({description:d((()=>["string"!=typeof n.description?(p(),m(y(n.description),{key:0})):(p(),h("div",E,v(n.description),1))])),_:2},["string"!=typeof n.message?{name:"title",fn:d((()=>[(p(),m(y(n.message)))])),key:"0"}:void 0,n.icon?{name:"icon",fn:d((()=>[(p(),m(y(n.icon)))])),key:"1"}:void 0]),1032,["message","type"]),n.ok?(p(),h("div",S,[g(e,{type:"primary",onClick:r},{default:d((()=>[k(v(n.okText?n.okText:"确定"),1)])),_:1})])):w("",!0)],4)):w("",!0)])),_:1}))}}),M=()=>{let n=document.getElementById("ui-notification-pop");n||(n=document.createElement("div"),n.setAttribute("id","ui-notification-pop"),document.body.appendChild(n));const t=document.createElement("div");return n.appendChild(t),t},V=(n,t,o)=>N(A,{...n,ok:!!n.onOk,cancel:!!n.onClose,type:t,unMount:()=>{o.remove()}}),F={info:n=>{const t=M();return C(V(n,"info",t)).mount(t),()=>{t.remove()}},success:n=>{const t=M();return C(V(n,"success",t)).mount(t),()=>{t.remove()}},error:n=>{const t=M();return C(V(n,"error",t)).mount(t),()=>{t.remove()}},warning:n=>{const t=M();return C(V(n,"warning",t)).mount(t),()=>{t.remove()}},custom:n=>{const t=M();return C(V(n,"open",t)).mount(t),()=>{t.remove()}},open:n=>{const t=M();return C(V(n,"open",t)).mount(t),()=>{t.remove()}}},J=I("p",null,"全局展示通知提醒信息。",-1),K=I("ul",null,[I("li",null,"Notification"),I("li",null,"notification")],-1),L=I("p",null,"在系统四个角显示通知提醒信息。经常用于以下情况：",-1),P=I("ul",null,[I("li",null,"较为复杂的通知内容。"),I("li",null,"带有交互的通知，给出用户下一步的行动点。"),I("li",null,"系统主动推送。")],-1),R=r({__name:"Intro",setup:n=>(n,t)=>(p(),m(B(a),null,{default:d((()=>[g(B(s),null,{default:d((()=>[k("简介")])),_:1}),g(B(c),null,{default:d((()=>[J])),_:1}),g(B(s),null,{default:d((()=>[k("组件概览")])),_:1}),g(B(c),null,{default:d((()=>[K])),_:1}),g(B(s),null,{default:d((()=>[k("使用场景")])),_:1}),L,g(B(c),null,{default:d((()=>[P])),_:1})])),_:1}))}),U=r({__name:"Api",setup(n){const t=[],o=[{componentName:"Text",attrContent:[{rowIndex:1,"属性":"type","说明":"打开类型","类型":"'info'|'success'|'error'|'warning'|'custom'|'open'","默认值":""},{rowIndex:2,"属性":"option","说明":"option的类型","类型":"{\n  message: VNode | string,\n  description: VNode | string,\n  icon?: VNode,\n  onOk?: () => void,\n  onClose?: () => void,\n  onClick?: () => void,\n  okText?: string,\n  width?: number,\n  duration?: number | 'infinite',\n}","默认值":""}]}];return(n,e)=>(p(),m(j,{"attr-content-arr":o,"event-content":t}))}});var $=n=>{n.__sourceCode="<template>\n  <Button type=\"primary\" @click=\"openNotification\">Open the notification box</Button>\n</template>\n\n<script setup lang=\"ts\">\nimport { Button } from 'ant'\nimport { notification } from '@/lib/notification/notification'\n\nconst openNotification = () => {\n  // 可以异步\n  const x = notification.open({\n    duration: 'infinite',\n    message: 'Notification Title',\n    description:\n      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',\n    onClick: () => {\n      console.log('Notification Clicked!')\n    }\n  })\n  // 调用notification.open返回的函数将提示隐藏\n  setTimeout(x, 3000)\n}\n<\/script>",n.__sourceTitle=" 基本用法 "};const q=r({__name:"DemoOne",setup(n){const t=()=>{const n=F.open({duration:"infinite",message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",onClick:()=>{console.log("Notification Clicked!")}});setTimeout(n,3e3)};return(n,o)=>(p(),m(B(e),{type:"primary",onClick:t},{default:d((()=>[k("Open the notification box")])),_:1}))}});$(q);var z=n=>{n.__sourceCode="<template>\n  <div class=\"wrap\">\n    <Button @click=\"() => openNotificationWithIcon('success')\">Success</Button>\n    <Button @click=\"() => openNotificationWithIcon('info')\">Info</Button>\n    <Button @click=\"() => openNotificationWithIcon('warning')\">Warning</Button>\n    <Button @click=\"() => openNotificationWithIcon('error')\">Error</Button>\n  </div>\n</template>\n\n<script setup lang=\"ts\">\nimport { notification, Button } from 'ant'\n\nconst openNotificationWithIcon = (type: 'success' | 'info' | 'warning' | 'error') => {\n  notification[type]({\n    message: 'Notification Title',\n    description:\n      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'\n  })\n}\n<\/script>\n\n<style scoped lang=\"scss\">\n.wrap {\n  display: flex;\n  gap: 20px;\n}\n</style>",n.__sourceTitle=" 带有图标的通知提醒框 "};const G={class:"wrap"},H=r({__name:"DemoTwo",setup(n){const t=n=>{F[n]({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})};return(n,o)=>(p(),h("div",G,[g(B(e),{onClick:o[0]||(o[0]=()=>t("success"))},{default:d((()=>[k("Success")])),_:1}),g(B(e),{onClick:o[1]||(o[1]=()=>t("info"))},{default:d((()=>[k("Info")])),_:1}),g(B(e),{onClick:o[2]||(o[2]=()=>t("warning"))},{default:d((()=>[k("Warning")])),_:1}),g(B(e),{onClick:o[3]||(o[3]=()=>t("error"))},{default:d((()=>[k("Error")])),_:1})]))}});z(H);var Q=b(H,[["__scopeId","data-v-84567226"]]),X=n=>{n.__sourceCode="<template>\n  <Button type=\"primary\" @click=\"openNotification\">Custom</Button>\n</template>\n\n<script setup lang=\"ts\">\nimport { h } from 'vue'\nimport { SvgIcon, notification, Button } from 'ant'\n\nconst openNotification = () => {\n  notification.custom({\n    message: h('p', { style: { color: 'red' } }, 'Notification Title'),\n    description: h(\n      'p',\n      { style: { color: 'orange' } },\n      \" 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'\"\n    ),\n    icon: h(SvgIcon, { name: 'weixin', width: '1em', height: '1em' }),\n    onOk: () => {\n      console.log('ok')\n    },\n    onClose: () => {\n      console.log('close')\n    },\n    okText: 'custom',\n    width: 500,\n    duration: 4000\n  })\n}\n<\/script>",n.__sourceTitle=" 自定义提示内容 "};const Y=r({__name:"DemoThree",setup(n){const t=()=>{F.custom({message:N("p",{style:{color:"red"}},"Notification Title"),description:N("p",{style:{color:"orange"}}," 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'"),icon:N(i,{name:"weixin",width:"1em",height:"1em"}),onOk:()=>{console.log("ok")},onClose:()=>{console.log("close")},okText:"custom",width:500,duration:4e3})};return(n,o)=>(p(),m(B(e),{type:"primary",onClick:t},{default:d((()=>[k("Custom")])),_:1}))}});X(Y);const Z=r({__name:"Demo",setup(t){const o=W((()=>[q,Q,Y].map(((n,t)=>D(n,"notification",t)))));return(t,e)=>(p(),m(n,{"demo-arr":B(o)},null,8,["demo-arr"]))}}),nn=r({__name:"Index",setup(n){u(null);const o=["基本用法","带有图标的通知提醒框","自定义提示内容"],e=W((()=>O("notification",o)));return(n,o)=>(p(),m(t,{"nav-arr":B(e),title:"Notification 通知提醒框","component-name":"notification"},{intro:d((()=>[g(R)])),demo:d((()=>[g(Z)])),api:d((()=>[g(U)])),_:1},8,["nav-arr"]))}});export{nn as default};
