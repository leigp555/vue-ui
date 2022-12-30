import{D as t,C as e}from"./DemoDisplay-073882bc.js";import{d as n,x as r,c as s,e as o,C as a,a6 as l,G as p,m as c,q as i,f as u,a7 as d,D as m,A as _,t as f,F as g,i as v,g as h,j as S,r as x,h as w,n as y,O as k,Q as b,a3 as I,K as F,X as C,R as D}from"./index-5a408e05.js";import{_ as B,P as j,T as P}from"./Paragraph-b1131704.js";import{_ as T}from"./ApiIntro.vue_vue_type_style_index_0_lang-b0d63446.js";import{g as L,a as N}from"./helper-bad5a70b.js";const A={class:"ui-steps-wrap"},$=n({__name:"Steps",props:{current:{default:1},totalStep:null},setup(t){const e=t,{current:n,totalStep:p}=r(e);return l("ui_step_current",n),l("ui_step_totalStep",p),(t,e)=>(s(),o("div",A,[a(t.$slots,"default")]))}}),O={class:"ui-step-wrap"},q={key:0,class:"ui-step-order step-icon"},G={key:0},K={key:1},Q=n({__name:"Step",props:{title:{default:"title"},order:null},setup(t){const e=p("ui_step_current"),n=p("ui_step_totalStep");return(r,l)=>(s(),o(g,null,[c("div",O,[i(e)>t.order?(s(),o("div",q,[u(i(d),{name:"yes",width:"1em",height:"1em"})])):m("",!0),i(e)<=t.order?(s(),o("div",{key:1,class:_(["ui-step-order",{"step-pending":i(e)===t.order,"step-complete":i(e)>t.order,"step-not-complete":i(e)<t.order}])},[r.$slots.icon?(s(),o("span",G,[a(r.$slots,"icon")])):(s(),o("span",K,f(t.order),1))],2)):m("",!0),c("span",{class:_(["ui-step-title",{"step-complete":i(e)>=t.order}])},f(t.title),3)]),t.order!==i(n)?(s(),o("span",{key:0,class:_(["ui-step-line",{"step-complete":i(e)>t.order}])},null,2)):m("",!0)],64))}}),R=c("p",null,"引导用户按照流程完成任务的导航条。",-1),X=c("ul",null,[c("li",null,"steps：组件包裹"),c("li",null,"step：展示每一步")],-1),z=c("p",null,"当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。",-1),E=n({__name:"Intro",setup:t=>(t,e)=>(s(),v(i(P),null,{default:h((()=>[u(i(B),null,{default:h((()=>[S("简介")])),_:1}),u(i(j),null,{default:h((()=>[R])),_:1}),u(i(B),null,{default:h((()=>[S("组件概述")])),_:1}),u(i(j),null,{default:h((()=>[X])),_:1}),u(i(B),null,{default:h((()=>[S("使用场景")])),_:1}),u(i(j),null,{default:h((()=>[z])),_:1})])),_:1}))}),H=n({__name:"Api",setup(t){const e=[],n=[{componentName:"Step",attrContent:[{rowIndex:1,"属性":"title","说明":"步骤标题","类型":"string","默认值":"title"},{rowIndex:2,"属性":"order","说明":"步骤序号（提供为一值）","类型":"number","默认值":"null"}]},{componentName:"Steps",attrContent:[{rowIndex:1,"属性":"current","说明":"当前步骤","类型":"number","默认值":"1"},{rowIndex:1,"属性":"totalStep","说明":"步骤总数","类型":"number","默认值":"null"}]}];return(t,r)=>(s(),v(T,{"attr-content-arr":n,"event-content":e}))}}),J={class:"wrap"},M=n({__name:"DemoOne",setup(t){const e=x(1),n=[{content:"First-content",order:1},{content:"Second-content",order:2},{content:"Last-content",order:3}];return(t,r)=>(s(),o("div",J,[u(i($),{current:e.value,totalStep:n.length},{default:h((()=>[(s(),o(g,null,w(n,(t=>u(i(Q),{key:t.content,title:t.content,order:t.order},null,8,["title","order"]))),64))])),_:1},8,["current","totalStep"])]))}}),U=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <Steps :current="current" :totalStep="steps.length">\n      <Step\n        v-for="item in steps"\n        :key="item.content"\n        :title="item.content"\n        :order="item.order"\n      />\n    </Steps>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Steps, Step } from \'hut-ui\'\n\nconst current = ref<number>(1)\nconst steps = [\n  {\n    content: \'First-content\',\n    order: 1\n  },\n  {\n    content: \'Second-content\',\n    order: 2\n  },\n  {\n    content: \'Last-content\',\n    order: 3\n  }\n]\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  .steps-content {\n    margin-top: 16px;\n    border: 1px dashed #e9e9e9;\n    border-radius: 6px;\n    background-color: #fafafa;\n    min-height: 200px;\n    text-align: center;\n    padding-top: 80px;\n  }\n\n  .steps-action {\n    margin-top: 24px;\n  }\n}\n</style>',t.__sourceTitle="基本用法"};U(M);const V=y(M,[["__scopeId","data-v-544b3602"]]),W={class:"wrap"},Y=n({__name:"DemoTwo",setup(t){const e=x(1);return(t,n)=>(s(),o("div",W,[u(i($),{current:e.value,totalStep:3},{default:h((()=>[u(i(Q),{title:"First-content",order:1},{icon:h((()=>[u(i(k),{name:"weixin",width:"1em",height:"1em"})])),_:1}),u(i(Q),{title:"First-content",order:2},{icon:h((()=>[u(i(b),{name:"email",width:"1em",height:"1em"})])),_:1}),u(i(Q),{title:"First-content",order:3},{icon:h((()=>[u(i(I),{name:"setting",width:"1em",height:"1em"})])),_:1})])),_:1},8,["current"])]))}}),Z=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <Steps :current="current" :totalStep="3">\n      <Step title="First-content" :order="1">\n        <template #icon>\n          <Icon_wechat name="weixin" width="1em" height="1em" />\n        </template>\n      </Step>\n      <Step title="First-content" :order="2">\n        <template #icon>\n          <Icon_email name="email" width="1em" height="1em" />\n        </template>\n      </Step>\n      <Step title="First-content" :order="3">\n        <template #icon>\n          <Icon_setting name="setting" width="1em" height="1em" />\n        </template>\n      </Step>\n    </Steps>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Icon_email, Icon_setting, Icon_wechat } from \'@hut-ui/icons-vue\'\nimport { Steps, Step } from \'hut-ui\'\n\nconst current = ref<number>(1)\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  .steps-content {\n    margin-top: 16px;\n    border: 1px dashed #e9e9e9;\n    border-radius: 6px;\n    background-color: #fafafa;\n    min-height: 200px;\n    text-align: center;\n    padding-top: 80px;\n  }\n\n  .steps-action {\n    margin-top: 24px;\n  }\n}\n</style>',t.__sourceTitle="自定义icon"};Z(Y);const tt=y(Y,[["__scopeId","data-v-f7de5d48"]]),et={class:"wrap"},nt={class:"steps-content"},rt={class:"steps-action"},st=n({__name:"DemoThree",setup(t){const e=x(1),n=()=>{e.value+=1},r=()=>{e.value-=1},a=()=>{C.success("Processing complete!")},l=[{content:"First-content",order:1},{content:"Second-content",order:2},{content:"Last-content",order:3}];return(t,p)=>(s(),o("div",et,[u(i($),{current:e.value,totalStep:l.length},{default:h((()=>[(s(),o(g,null,w(l,(t=>u(i(Q),{key:t.content,title:t.content,order:t.order},null,8,["title","order"]))),64))])),_:1},8,["current","totalStep"]),c("div",nt,f(l[e.value-1].content),1),c("div",rt,[e.value<l.length?(s(),v(i(F),{key:0,onClick:n},{default:h((()=>[S(" Next ")])),_:1})):m("",!0),e.value===l.length?(s(),v(i(F),{key:1,onClick:a},{default:h((()=>[S(" Done ")])),_:1})):m("",!0),e.value>1?(s(),v(i(F),{key:2,style:{"margin-left":"8px"},onClick:r},{default:h((()=>[S(" Previous ")])),_:1})):m("",!0)])]))}}),ot=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <Steps :current="current" :totalStep="steps.length">\n      <Step\n        v-for="item in steps"\n        :key="item.content"\n        :title="item.content"\n        :order="item.order"\n      />\n    </Steps>\n    <div class="steps-content">\n      {{ steps[current - 1].content }}\n    </div>\n    <div class="steps-action">\n      <Button v-if="current < steps.length" @click="next"> Next </Button>\n      <Button v-if="current === steps.length" @click="done"> Done </Button>\n      <Button v-if="current > 1" style="margin-left: 8px" @click="prev">\n        Previous\n      </Button>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Steps, Step, Button, alert } from \'hut-ui\'\n\nconst current = ref<number>(1)\nconst next = () => {\n  current.value += 1\n}\nconst prev = () => {\n  current.value -= 1\n}\nconst done = () => {\n  alert.success(\'Processing complete!\')\n}\nconst steps = [\n  {\n    content: \'First-content\',\n    order: 1\n  },\n  {\n    content: \'Second-content\',\n    order: 2\n  },\n  {\n    content: \'Last-content\',\n    order: 3\n  }\n]\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  flex-direction: column;\n  .steps-content {\n    margin-top: 16px;\n    border: 1px dashed #e9e9e9;\n    border-radius: 6px;\n    background-color: #fafafa;\n    min-height: 200px;\n    text-align: center;\n    padding-top: 80px;\n  }\n\n  .steps-action {\n    margin-top: 24px;\n  }\n}\n</style>',t.__sourceTitle="步骤切换"};ot(st);const at=y(st,[["__scopeId","data-v-0d85747f"]]),lt=n({__name:"Demo",setup(e){const n=D((()=>[V,tt,at].map(((t,e)=>L(t,"steps",e)))));return(e,r)=>(s(),v(t,{"demo-arr":i(n)},null,8,["demo-arr"]))}}),pt=n({__name:"Index",setup(t){x(null);const n=["基本用法","自定义icon","步骤切换"],r=D((()=>N("steps",n)));return(t,n)=>(s(),v(e,{"nav-arr":i(r),title:"Steps 步骤条","component-name":"steps"},{intro:h((()=>[u(E)])),demo:h((()=>[u(lt)])),api:h((()=>[u(H)])),_:1},8,["nav-arr"]))}});export{pt as default};
