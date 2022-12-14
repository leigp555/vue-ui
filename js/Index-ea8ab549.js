import{D as e,C as n}from"./DemoDisplay-861b5945.js";import{d as t,s,r as l,o as r,P as a,c,e as p,q as o,m as i,y as u,f as d,am as f,an as m,t as v,B as g,ao as _,F as y,h as x,i as P,g as w,j as h,n as k,G as b,p as I,l as B,I as z}from"./index-fff176c6.js";import{_ as C,P as T,T as D}from"./Paragraph-72dbc1f2.js";import{_ as j}from"./ApiIntro.vue_vue_type_style_index_0_lang-399dc91d.js";import{g as $,a as F}from"./helper-42c8e4e7.js";const A={class:"ui-progress-wrap"},M={key:0,class:"ui-progress-line"},q={key:0},G={key:1},N={key:2},O={key:1,class:"ui-progress-circle"},R={style:{width:"120px",height:"120px"}},S=i("circle",{class:"progress-circle-inner progress-circle-item",cx:"60",cy:"60",r:"50",fill:"none"},null,-1),E=["stroke-dashoffset"],H={class:"progress-circle-tip"},J={key:0},K={key:1},L={key:2},Q={class:"progress-step-wrap"},U={key:0,class:"progress-step-tip"},V={key:1,class:"progress-step-tip"},W={key:2,class:"progress-step-tip"},X=t({__name:"Progress",props:{percent:{default:0},status:null,showInfo:{type:Boolean,default:!0},size:{default:"normal"},format:null,type:{default:"line"},steps:null},setup(e){const n=e,{percent:t,type:P}=s(n),w=l(0),h=l(0),k=l(null),b=()=>{if(!(t.value>w.value+2))return w.value=t.value,void(k.value.style.transform=`translate(${t.value}%)`);{const e=setTimeout((()=>{k.value.style.transform=`translate(${w.value}%)`,w.value+=2,b(),window.clearTimeout(e)}))}};return r((()=>{a((()=>{"line"===P.value?k.value&&b():"circle"===P.value&&(()=>{if(t.value/100!=h.value/314)if(t.value/100>h.value/314){const e=setInterval((()=>{t.value/100>(h.value+10)/314?h.value+=10:(window.clearTimeout(e),h.value=314*t.value/100)}))}else if(t.value/100<h.value/314){const e=setInterval((()=>{t.value/100<(h.value-10)/314?h.value-=10:(window.clearTimeout(e),h.value=314*t.value/100)}))}})()}))})),(n,s)=>(c(),p("div",A,["line"===o(P)?(c(),p("div",M,[i("div",{class:u(["progress-line-container",{"line-container-small":"small"===e.size}])},[i("div",{class:u(["progress-line-block",{"line-block-active":"active"===e.status,"line-block-exception":"exception"===e.status,"line-block-success":100===o(t)}]),ref_key:"blockRef",ref:k},null,2)],2),i("span",{class:u(["progress-line-tip",{"line-tip-small":"small"===e.size}])},["exception"===e.status?(c(),p("span",q,[d(o(f),{name:"error",width:"14px",height:"14px",fill:"#ff4d4f"})])):o(t)>=100?(c(),p("span",G,[d(o(m),{name:"success",width:"14px",height:"14px",fill:"#52c41a"})])):e.showInfo?(c(),p("span",N,v(e.format?e.format(o(t)):o(t)+"%"),1)):g("",!0)],2)])):"circle"===o(P)?(c(),p("div",O,[(c(),p("svg",R,[S,i("circle",{class:u(["progress-circle-outer progress-circle-item",{"progress-circle-finish":o(t)>=100}]),cx:"60",cy:"60",r:"50",fill:"none","stroke-dashoffset":314-h.value},null,10,E)])),i("div",H,["exception"===e.status?(c(),p("span",J,[d(o(f),{name:"error",width:"32px",height:"32px",fill:"#ff4d4f"})])):o(t)>=100?(c(),p("span",K,[d(o(_),{name:"gouxuan",width:"32px",height:"32px",fill:"#52c41a"})])):e.showInfo?(c(),p("span",L,v(e.format?e.format(o(t)):o(t)+"%"),1)):g("",!0)])])):"step"===o(P)?(c(),p("div",{key:2,class:u(["ui-progress-step",{"progress-step-small":"small"===e.size}])},[i("ol",Q,[(c(!0),p(y,null,x(e.steps,(n=>(c(),p("li",{class:u(["progress-step-item",{"step-item-finish":o(t)>=10*Math.floor(Math.floor(100/e.steps)*n/10),"step-finished":o(t)>=100,"step-item-small":"small"===e.size}]),key:n},null,2)))),128))]),"exception"===e.status?(c(),p("span",U,[d(o(f),{name:"error",width:"14px",height:"14px",fill:"#ff4d4f"})])):o(t)>=100?(c(),p("span",V,[d(o(m),{name:"success",width:"14px",height:"14px",fill:"#52c41a"})])):e.showInfo?(c(),p("span",W,v(e.format?e.format(o(t)):o(t)+"%"),1)):g("",!0)],2)):g("",!0)]))}}),Y=i("p",null,"展示操作的当前进度。",-1),Z=i("ul",null,[i("li",null,"Progress: 主要组件")],-1),ee=i("p",null,"在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。",-1),ne=i("ul",null,[i("li",null,"当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；"),i("li",null,"当需要显示一个操作完成的百分比时。")],-1),te=t({__name:"Intro",setup:e=>(e,n)=>(c(),P(o(D),null,{default:w((()=>[d(o(C),null,{default:w((()=>[h("简介")])),_:1}),d(o(T),null,{default:w((()=>[Y])),_:1}),d(o(C),null,{default:w((()=>[h("组件概览")])),_:1}),d(o(T),null,{default:w((()=>[Z])),_:1}),d(o(C),null,{default:w((()=>[h("使用场景")])),_:1}),d(o(T),null,{default:w((()=>[ee,ne])),_:1})])),_:1}))}),se=t({__name:"Api",setup(e){const n=[],t=[{componentName:"Progress",attrContent:[{rowIndex:1,"属性":"percent","说明":"百分比","类型":"number","默认值":"0"},{rowIndex:2,"属性":"status","说明":"状态","类型":"'active' | 'exception'","默认值":""},{rowIndex:3,"属性":"showInfo","说明":"是否显示进度数值或状态图标","类型":"boolean","默认值":"true"},{rowIndex:4,"属性":"size","说明":"大小","类型":"'small' | 'normal'","默认值":"normal"},{rowIndex:5,"属性":"format","说明":"进度数值格式化","类型":"(percent: number) => string","默认值":""},{rowIndex:6,"属性":"type","说明":"类型，可选 line circle step","类型":"(percent: number) => string","默认值":"line"},{rowIndex:7,"属性":"steps","说明":"进度条总共步数","类型":"number","默认值":""}]}];return(e,s)=>(c(),P(j,{"attr-content-arr":t,"event-content":n}))}}),le={class:"wrap"},re=t({__name:"DemoOne",setup:e=>(e,n)=>(c(),p("div",le,[d(o(X),{percent:30}),d(o(X),{percent:50,status:"active"}),d(o(X),{percent:70,status:"exception"}),d(o(X),{percent:100}),d(o(X),{percent:50,"show-info":!1})]))}),ae=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Progress :percent="30" />\n    <Progress :percent="50" status="active" />\n    <Progress :percent="70" status="exception" />\n    <Progress :percent="100" />\n    <Progress :percent="50" :show-info="false" />\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Progress } from \'hut-ui\'\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n</style>',e.__sourceTitle=" 基本用法 "};ae(re);const ce=k(re,[["__scopeId","data-v-a2bf7573"]]),pe={class:"wrap"},oe=t({__name:"DemoTwo",setup:e=>(e,n)=>(c(),p("div",pe,[d(o(X),{percent:30,size:"small"}),d(o(X),{percent:50,size:"small",status:"active"}),d(o(X),{percent:70,size:"small",status:"exception"}),d(o(X),{percent:100,size:"small"})]))}),ie=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Progress :percent="30" size="small" />\n    <Progress :percent="50" size="small" status="active" />\n    <Progress :percent="70" size="small" status="exception" />\n    <Progress :percent="100" size="small" />\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Progress } from \'hut-ui\'\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n</style>',e.__sourceTitle=" 小型进度条 "};ie(oe);const ue=k(oe,[["__scopeId","data-v-8fa5355e"]]),de={class:"wrap"},fe=t({__name:"DemoThree",setup(e){const n=l(30),t=()=>{const e=n.value+10;n.value=e>100?100:e},s=()=>{const e=n.value-10;n.value=e<0?0:e};return(e,l)=>(c(),p("div",de,[d(o(X),{percent:n.value},null,8,["percent"]),i("div",null,[d(o(b),{onClick:s},{default:w((()=>[h(" - ")])),_:1}),d(o(b),{onClick:t,style:{"margin-left":"20px"}},{default:w((()=>[h(" + ")])),_:1})])]))}}),me=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Progress :percent="defaultPercent" />\n    <div>\n      <Button @click="decline"> - </Button>\n      <Button @click="increase" style="margin-left: 20px"> + </Button>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Progress, Button } from \'@/lib\'\n\nconst defaultPercent = ref<number>(30)\nconst increase = () => {\n  const percent = defaultPercent.value + 10\n  defaultPercent.value = percent > 100 ? 100 : percent\n}\n\nconst decline = () => {\n  const percent = defaultPercent.value - 10\n  defaultPercent.value = percent < 0 ? 0 : percent\n}\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n</style>',e.__sourceTitle="可以调整percent"};me(fe);const ve=k(fe,[["__scopeId","data-v-066a6f48"]]),ge={class:"wrap"},_e=t({__name:"DemoFour",setup(e){const n=l(30),t=()=>{const e=n.value+10;n.value=e>100?100:e},s=()=>{const e=n.value-10;n.value=e<0?0:e};return(e,l)=>(c(),p("div",ge,[d(o(X),{percent:n.value,format:e=>`${e}day`},null,8,["percent","format"]),i("div",null,[d(o(b),{onClick:s},{default:w((()=>[h(" - ")])),_:1}),d(o(b),{onClick:t,style:{"margin-left":"20px"}},{default:w((()=>[h(" + ")])),_:1})])]))}}),ye=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Progress :percent="defaultPercent" :format="(percent) => `${percent}day`" />\n    <div>\n      <Button @click="decline"> - </Button>\n      <Button @click="increase" style="margin-left: 20px"> + </Button>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Progress, Button } from \'@/lib\'\n\nconst defaultPercent = ref<number>(30)\nconst increase = () => {\n  const percent = defaultPercent.value + 10\n  defaultPercent.value = percent > 100 ? 100 : percent\n}\n\nconst decline = () => {\n  const percent = defaultPercent.value - 10\n  defaultPercent.value = percent < 0 ? 0 : percent\n}\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n</style>',e.__sourceTitle="格式化info"};ye(_e);const xe=k(_e,[["__scopeId","data-v-4668eec6"]]),Pe={class:"wrap"},we=t({__name:"DemoFive",setup(e){const n=l(30),t=()=>{const e=n.value+10;n.value=e>100?100:e},s=()=>{const e=n.value-10;n.value=e<0?0:e};return(e,l)=>(c(),p("div",Pe,[d(o(X),{type:"circle",percent:n.value,format:e=>`${e} Days`},null,8,["percent","format"]),d(o(X),{type:"circle",percent:n.value},null,8,["percent"]),i("div",null,[d(o(b),{onClick:s},{default:w((()=>[h(" - ")])),_:1}),d(o(b),{onClick:t,style:{"margin-left":"20px"}},{default:w((()=>[h(" + ")])),_:1})])]))}}),he=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Progress\n      type="circle"\n      :percent="defaultPercent"\n      :format="(percent) => `${percent} Days`"\n    />\n    <Progress type="circle" :percent="defaultPercent" />\n    <div>\n      <Button @click="decline"> - </Button>\n      <Button @click="increase" style="margin-left: 20px"> + </Button>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Progress, Button } from \'@/lib\'\n\nconst defaultPercent = ref<number>(30)\nconst increase = () => {\n  const percent = defaultPercent.value + 10\n  defaultPercent.value = percent > 100 ? 100 : percent\n}\n\nconst decline = () => {\n  const percent = defaultPercent.value - 10\n  defaultPercent.value = percent < 0 ? 0 : percent\n}\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n</style>',e.__sourceTitle="圆形进度条"};he(we);const ke=k(we,[["__scopeId","data-v-21bb84b6"]]),be=e=>(I("data-v-13a8b864"),e=e(),B(),e),Ie={class:"wrap"},Be=be((()=>i("br",null,null,-1))),ze=be((()=>i("br",null,null,-1))),Ce=t({__name:"DemoSix",setup(e){const n=l(30);return(e,t)=>(c(),p("div",Ie,[d(o(X),{type:"step",percent:n.value,steps:3},null,8,["percent"]),d(o(X),{type:"step",percent:60,steps:3}),Be,d(o(X),{type:"step",percent:30,steps:5}),ze,d(o(X),{type:"step",percent:100,steps:5,size:"small","stroke-color":"#52c41a"})]))}}),Te=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Progress type="step" :percent="defaultPercent" :steps="3" />\n    <Progress type="step" :percent="60" :steps="3" />\n    <br />\n    <Progress type="step" :percent="30" :steps="5" />\n    <br />\n    <Progress\n      type="step"\n      :percent="100"\n      :steps="5"\n      size="small"\n      stroke-color="#52c41a"\n    />\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Progress, Button } from \'@/lib\'\n\nconst defaultPercent = ref<number>(30)\nconst increase = () => {\n  const percent = defaultPercent.value + 10\n  defaultPercent.value = percent > 100 ? 100 : percent\n}\n\nconst decline = () => {\n  const percent = defaultPercent.value - 10\n  defaultPercent.value = percent < 0 ? 0 : percent\n}\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n</style>',e.__sourceTitle="步骤进度条"};Te(Ce);const De=k(Ce,[["__scopeId","data-v-13a8b864"]]),je=t({__name:"Demo",setup(n){const t=z((()=>[ce,ue,ve,xe,ke,De].map(((e,n)=>$(e,"progress",n)))));return(n,s)=>(c(),P(e,{"demo-arr":o(t)},null,8,["demo-arr"]))}}),$e=t({__name:"Index",setup(e){l(null);const t=["基本用法","小型进度条","可以调整percent","格式化info","圆形进度条","步骤进度条"],s=z((()=>F("progress",t)));return(e,t)=>(c(),P(n,{"nav-arr":o(s),title:"Progress 进度条","component-name":"progress"},{intro:w((()=>[d(te)])),demo:w((()=>[d(je)])),api:w((()=>[d(se)])),_:1},8,["nav-arr"]))}});export{$e as default};
