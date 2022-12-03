import{_ as t,P as e,T as n,g as r,D as s,a as o,b as a}from"./DemoDisplay-30e28096.js";import{_ as l,a as p}from"./Paragraph.vue_vue_type_style_index_0_lang-de84b885.js";import{d as c,k as i,o as u,c as d,v as m,q as _,s as v,b as g,l as f,e as S,A as h,x,n as w,t as y,F as b,g as k,w as F,h as I,r as D,f as C,z as B}from"./index-7adc59d4.js";/* empty css                                                */import{_ as P}from"./ApiIntro-ecd1af8a.js";const T={class:"ui-steps-wrap"},j=c({__name:"Steps",props:{current:{default:1},totalStep:null},setup(t){const e=t,{current:n,totalStep:r}=i(e);return _("ui_step_current",n),_("ui_step_totalStep",r),(t,e)=>(u(),d("div",T,[m(t.$slots,"default")]))}}),L={class:"ui-step-wrap"},N={key:0,class:"ui-step-order step-icon"},A={key:0},$={key:1},q=c({__name:"Step",props:{title:{default:"title"},order:null},setup(t){const e=v("ui_step_current"),n=v("ui_step_totalStep");return(r,s)=>(u(),d(b,null,[g("div",L,[f(e)>t.order?(u(),d("div",N,[S(h,{name:"yes",width:"1em",height:"1em"})])):x("",!0),f(e)<=t.order?(u(),d("div",{key:1,class:w(["ui-step-order",{"step-pending":f(e)===t.order,"step-complete":f(e)>t.order,"step-not-complete":f(e)<t.order}])},[r.$slots.icon?(u(),d("span",A,[m(r.$slots,"icon")])):(u(),d("span",$,y(t.order),1))],2)):x("",!0),g("span",{class:w(["ui-step-title",{"step-complete":f(e)>=t.order}])},y(t.title),3)]),t.order!==f(n)?(u(),d("span",{key:0,class:w(["ui-step-line",{"step-complete":f(e)>t.order}])},null,2)):x("",!0)],64))}}),z=g("p",null,"引导用户按照流程完成任务的导航条。",-1),M=g("ul",null,[g("li",null,"steps：组件包裹"),g("li",null,"step：展示每一步")],-1),O=g("p",null,"当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。",-1),E=c({__name:"Intro",setup:r=>(r,s)=>(u(),k(f(n),null,{default:F((()=>[S(f(t),null,{default:F((()=>[I("简介")])),_:1}),S(f(e),null,{default:F((()=>[z])),_:1}),S(f(t),null,{default:F((()=>[I("组件概述")])),_:1}),S(f(e),null,{default:F((()=>[M])),_:1}),S(f(t),null,{default:F((()=>[I("使用场景")])),_:1}),S(f(e),null,{default:F((()=>[O])),_:1})])),_:1}))}),G=c({__name:"Api",setup(t){const e=[],n=[{componentName:"Step",attrContent:[{rowIndex:1,"属性":"title","说明":"步骤标题","类型":"string","默认值":"title"},{rowIndex:2,"属性":"order","说明":"步骤序号（提供为一值）","类型":"number","默认值":"null"}]},{componentName:"Steps",attrContent:[{rowIndex:1,"属性":"current","说明":"当前步骤","类型":"number","默认值":"1"},{rowIndex:1,"属性":"totalStep","说明":"步骤总数","类型":"number","默认值":"null"}]}];return(t,r)=>(u(),k(P,{"attr-content-arr":n,"event-content":e}))}});var H=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <Steps :current="current" :totalStep="steps.length">\n      <Step\n        v-for="item in steps"\n        :key="item.content"\n        :title="item.content"\n        :order="item.order"\n      />\n    </Steps>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Steps, Step } from \'@/lib\'\n\nconst current = ref<number>(1)\nconst steps = [\n  {\n    content: \'First-content\',\n    order: 1\n  },\n  {\n    content: \'Second-content\',\n    order: 2\n  },\n  {\n    content: \'Last-content\',\n    order: 3\n  }\n]\n<\/script>\n\n<style lang="scss">\n.wrap {\n  .steps-content {\n    margin-top: 16px;\n    border: 1px dashed #e9e9e9;\n    border-radius: 6px;\n    background-color: #fafafa;\n    min-height: 200px;\n    text-align: center;\n    padding-top: 80px;\n  }\n\n  .steps-action {\n    margin-top: 24px;\n  }\n}\n</style>',t.__sourceTitle="基本用法"};const J={class:"wrap"},K=c({__name:"DemoOne",setup(t){const e=D(1),n=[{content:"First-content",order:1},{content:"Second-content",order:2},{content:"Last-content",order:3}];return(t,r)=>(u(),d("div",J,[S(f(j),{current:e.value,totalStep:n.length},{default:F((()=>[(u(),d(b,null,C(n,(t=>S(f(q),{key:t.content,title:t.content,order:t.order},null,8,["title","order"]))),64))])),_:1},8,["current","totalStep"])]))}});H(K);var Q=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <Steps :current="current" :totalStep="3">\n      <Step title="First-content" :order="1">\n        <template #icon>\n          <SvgIcon name="weixin" width="1em" height="1em" />\n        </template>\n      </Step>\n      <Step title="First-content" :order="2">\n        <template #icon>\n          <SvgIcon name="email" width="1em" height="1em" />\n        </template>\n      </Step>\n      <Step title="First-content" :order="3">\n        <template #icon>\n          <SvgIcon name="setting" width="1em" height="1em" />\n        </template>\n      </Step>\n    </Steps>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Steps, Step, SvgIcon } from \'@/lib\'\n\nconst current = ref<number>(1)\n<\/script>\n\n<style lang="scss">\n.wrap {\n  .steps-content {\n    margin-top: 16px;\n    border: 1px dashed #e9e9e9;\n    border-radius: 6px;\n    background-color: #fafafa;\n    min-height: 200px;\n    text-align: center;\n    padding-top: 80px;\n  }\n\n  .steps-action {\n    margin-top: 24px;\n  }\n}\n</style>',t.__sourceTitle="自定义icon"};const R={class:"wrap"},U=c({__name:"DemoTwo",setup(t){const e=D(1);return(t,n)=>(u(),d("div",R,[S(f(j),{current:e.value,totalStep:3},{default:F((()=>[S(f(q),{title:"First-content",order:1},{icon:F((()=>[S(f(h),{name:"weixin",width:"1em",height:"1em"})])),_:1}),S(f(q),{title:"First-content",order:2},{icon:F((()=>[S(f(h),{name:"email",width:"1em",height:"1em"})])),_:1}),S(f(q),{title:"First-content",order:3},{icon:F((()=>[S(f(h),{name:"setting",width:"1em",height:"1em"})])),_:1})])),_:1},8,["current"])]))}});Q(U);var V=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <Steps :current="current" :totalStep="steps.length">\n      <Step\n        v-for="item in steps"\n        :key="item.content"\n        :title="item.content"\n        :order="item.order"\n      />\n    </Steps>\n    <div class="steps-content">\n      {{ steps[current - 1].content }}\n    </div>\n    <div class="steps-action">\n      <Button v-if="current < steps.length" @click="next"> Next </Button>\n      <Button v-if="current === steps.length" @click="done"> Done </Button>\n      <Button v-if="current > 1" style="margin-left: 8px" @click="prev">\n        Previous\n      </Button>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Steps, Step, Button, alert } from \'@/lib\'\n\nconst current = ref<number>(1)\nconst next = () => {\n  current.value += 1\n}\nconst prev = () => {\n  current.value -= 1\n}\nconst done = () => {\n  alert.success(\'Processing complete!\')\n}\nconst steps = [\n  {\n    content: \'First-content\',\n    order: 1\n  },\n  {\n    content: \'Second-content\',\n    order: 2\n  },\n  {\n    content: \'Last-content\',\n    order: 3\n  }\n]\n<\/script>\n\n<style lang="scss">\n.wrap {\n  .steps-content {\n    margin-top: 16px;\n    border: 1px dashed #e9e9e9;\n    border-radius: 6px;\n    background-color: #fafafa;\n    min-height: 200px;\n    text-align: center;\n    padding-top: 80px;\n  }\n\n  .steps-action {\n    margin-top: 24px;\n  }\n}\n</style>',t.__sourceTitle="步骤切换"};const W={class:"wrap"},X={class:"steps-content"},Y={class:"steps-action"},Z=c({__name:"DemoThree",setup(t){const e=D(1),n=()=>{e.value+=1},r=()=>{e.value-=1},s=()=>{p.success("Processing complete!")},o=[{content:"First-content",order:1},{content:"Second-content",order:2},{content:"Last-content",order:3}];return(t,a)=>(u(),d("div",W,[S(f(j),{current:e.value,totalStep:o.length},{default:F((()=>[(u(),d(b,null,C(o,(t=>S(f(q),{key:t.content,title:t.content,order:t.order},null,8,["title","order"]))),64))])),_:1},8,["current","totalStep"]),g("div",X,y(o[e.value-1].content),1),g("div",Y,[e.value<o.length?(u(),k(f(l),{key:0,onClick:n},{default:F((()=>[I(" Next ")])),_:1})):x("",!0),e.value===o.length?(u(),k(f(l),{key:1,onClick:s},{default:F((()=>[I(" Done ")])),_:1})):x("",!0),e.value>1?(u(),k(f(l),{key:2,style:{"margin-left":"8px"},onClick:r},{default:F((()=>[I(" Previous ")])),_:1})):x("",!0)])]))}});V(Z);const tt=c({__name:"Demo",setup(t){const e=B((()=>[K,U,Z].map(((t,e)=>r(t,"steps",e)))));return(t,n)=>(u(),k(s,{"demo-arr":f(e)},null,8,["demo-arr"]))}}),et=c({__name:"Index",setup(t){D(null);const e=["基本用法","自定义icon","步骤切换"],n=B((()=>a("steps",e)));return(t,e)=>(u(),k(o,{"nav-arr":f(n),title:"Steps 步骤条","component-name":"steps"},{intro:F((()=>[S(E)])),demo:F((()=>[S(tt)])),api:F((()=>[S(G)])),_:1},8,["nav-arr"]))}});export{et as default};
