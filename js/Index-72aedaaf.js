import{D as e,C as n}from"./DemoDisplay-f6ca5a4b.js";import{d as t,v as o,r as l,w as a,c as s,e as u,m as i,q as p,f as c,g as r,x as v,F as m,h as d,z as g,B as h,t as x,y as f,T as _,i as C,j as y,s as S,I as w,n as T,L as A}from"./index-597196db.js";import{_ as I,P as b,T as $}from"./Paragraph-80763fd9.js";import{_ as D}from"./ApiIntro.vue_vue_type_style_index_0_lang-7bf8e844.js";import{g as V,a as k}from"./helper-2dff78a5.js";const q={class:"ui-autoComplete-wrap"},M=["placeholder","value"],F={class:"ui-autoComplete-pop"},j={key:0,class:"autoComplete-list-item-inner"},U={key:1,class:"autoComplete-list-item-inner"},B=t({__name:"AutoComplete",props:{value:{default:""},options:{default:()=>[]},placeholder:{default:""},custom:{type:Boolean,default:!1}},emits:["search","update:value","select"],setup(e,{emit:n}){const t=e,{value:C,options:y,placeholder:S}=o(t),w=l(!1),T=l(!1),A=e=>{const t=e.target;T.value=!!t.value,n("update:value",t.value)};a(C,(()=>{w.value?w.value=!1:n("search",C.value)}));const I=e=>{const t=e.target,o=t.getAttribute("data-value");"div"===t.tagName.toLowerCase()&&"list"===o&&(n("select",t.innerText),T.value=!1,t.innerText!==C.value&&(n("update:value",t.innerText),w.value=!0))},b=()=>{C.value&&(T.value=!0)},$=()=>{T.value=!1};return(n,t)=>(s(),u("div",q,[i("input",{class:"ui-autoComplete-input",type:"text",placeholder:p(S),value:p(C),onInput:A,onFocus:b,onBlur:$},null,40,M),i("div",F,[c(_,{name:"autoComplete-pop",mode:"out-in"},{default:r((()=>[v(i("div",{class:"autoComplete-pop-content ui-scroll-container",onMousedown:I,ref:"popRef"},[(s(!0),u(m,null,d(p(y),(t=>(s(),u("div",{key:t,class:g({selected:t.value===p(C),"autoComplete-list-item":!e.custom}),"data-value":"list"},[n.$slots.option?(s(),u("div",j,[h(n.$slots,"option",{value:t.value})])):(s(),u("div",U,x(t.value),1))],2)))),128))],544),[[f,T.value]])])),_:3})])]))}}),L=i("p",null,"输入框自动完成功能。",-1),Q=i("ul",null,[i("li",null,"AutoComplete: 主要组件")],-1),z=i("ul",null,[i("li",null,"需要一个输入框而不是选择器。"),i("li",null,"需要输入建议/辅助提示。")],-1),N=t({__name:"Intro",setup:e=>(e,n)=>(s(),C(p($),null,{default:r((()=>[c(p(I),null,{default:r((()=>[y("简介")])),_:1}),c(p(b),null,{default:r((()=>[L])),_:1}),c(p(I),null,{default:r((()=>[y("组件概览")])),_:1}),c(p(b),null,{default:r((()=>[Q])),_:1}),c(p(I),null,{default:r((()=>[y("使用场景")])),_:1}),c(p(b),null,{default:r((()=>[z])),_:1})])),_:1}))}),P=t({__name:"Api",setup(e){const n=[{rowIndex:1,"事件名称":"search","说明":"搜索补全项的时候调用","回调参数":"(value)=>({value:any}[])"},{rowIndex:1,"事件名称":"select","说明":"被选中时调用，参数为选中项的 value 值","回调参数":"(value)=>void"}],t=[{componentName:"AutoComplete",attrContent:[{rowIndex:1,"属性":"value","说明":"输入框文字","类型":"string","默认值":"null"},{rowIndex:2,"属性":"options","说明":"弹出框内容","类型":"{value:any}[]","默认值":"[]"},{rowIndex:3,"属性":"placeholder","说明":"输入框提示内容","类型":"string","默认值":"null"},{rowIndex:4,"属性":"custom","说明":"自定义弹出框","类型":"boolean","默认值":"false"}]}];return(e,o)=>(s(),C(D,{"attr-content-arr":t,"event-content":n}))}}),O=t({__name:"DemoOne",setup(e){const n=l(""),t=l([]),o=e=>{t.value=e?[{value:`${e}@qq.com`},{value:`${e}@google.com`},{value:`${e}@138.com`}]:[]},a=e=>{console.log("onSelect",e)};return(e,l)=>(s(),C(p(B),{value:n.value,"onUpdate:value":l[0]||(l[0]=e=>n.value=e),options:t.value,style:{width:"200px"},placeholder:"input here",onSelect:a,onSearch:o},null,8,["value","options"]))}}),R=e=>{e.__sourceCode='<template>\n  <AutoComplete\n    v-model:value="value"\n    :options="options"\n    style="width: 200px"\n    placeholder="input here"\n    @select="onSelect"\n    @search="onSearch"\n  />\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { AutoComplete } from \'hut-ui\'\n\ninterface MockVal {\n  value: string\n}\nconst value = ref(\'\')\nconst options = ref<MockVal[]>([])\nconst onSearch = (searchText: string) => {\n  options.value = !searchText\n    ? []\n    : [\n        { value: `${searchText}@qq.com` },\n        { value: `${searchText}@google.com` },\n        { value: `${searchText}@138.com` }\n      ]\n}\nconst onSelect = (text: string) => {\n  console.log(\'onSelect\', text)\n}\n<\/script>',e.__sourceTitle="基本用法"};R(O);const E={style:{color:"red"}},G=t({__name:"DemoTwo",setup(e){const n=l(""),t=l([]),o=e=>{t.value=e?[{value:`${e}@qq.com`},{value:`${e}@google.com`},{value:`${e}@138.com`},{value:`${e}@189.com`},{value:`${e}@email.com`}]:[]},a=e=>{console.log("onSelect",e)};return(e,l)=>(s(),C(p(B),{value:n.value,"onUpdate:value":l[0]||(l[0]=e=>n.value=e),options:t.value,style:{width:"200px"},placeholder:"input here",onSelect:a,onSearch:o},{option:r((e=>[i("span",E,x(e.value),1)])),_:1},8,["value","options"]))}}),H=e=>{e.__sourceCode='<template>\n  <AutoComplete\n    v-model:value="value"\n    :options="options"\n    style="width: 200px"\n    placeholder="input here"\n    @select="onSelect"\n    @search="onSearch"\n  >\n    <template #option="item">\n      <span style="color: red">{{ item.value }}</span>\n    </template>\n  </AutoComplete>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { AutoComplete } from \'hut-ui\'\n\ninterface MockVal {\n  value: string\n}\nconst value = ref(\'\')\nconst options = ref<MockVal[]>([])\nconst onSearch = (searchText: string) => {\n  options.value = !searchText\n    ? []\n    : [\n        { value: `${searchText}@qq.com` },\n        { value: `${searchText}@google.com` },\n        { value: `${searchText}@138.com` },\n        { value: `${searchText}@189.com` },\n        { value: `${searchText}@email.com` }\n      ]\n}\nconst onSelect = (text: string) => {\n  console.log(\'onSelect\', text)\n}\n<\/script>',e.__sourceTitle="自定义每条数据渲染方式"};H(G);const J={class:"wrap"},K={style:{color:"orange","margin-bottom":"10px"}},W={style:{"font-size":"12px",padding:"4px 11px"}},X=["onMousedown"],Y={class:"count"},Z=t({__name:"DemoThree",setup(e){const n=l("");l([]);const t=()=>{console.log(n.value)},o=[{value:{label:"Libraries",options:[{value:"CustomDesignVue",count:1e4},{value:"CustomDesignVue UI",count:10600}]}},{value:{label:"Solutions",options:[{value:"CustomDesignVue FQA",count:546456},{value:"CustomDesignVue UI FQA",count:534534}]}},{value:{label:"Articles",options:[{value:"CustomDesignVue Fly",count:878787}]}}];return(e,l)=>(s(),u("div",J,[c(p(B),{value:n.value,"onUpdate:value":l[0]||(l[0]=e=>n.value=e),options:o,style:{width:"200px"},placeholder:"input here",custom:""},{option:r((e=>[i("div",K,[i("span",W,x(e.value.label),1),(s(!0),u(m,null,d(e.value.options,(e=>(s(),u("div",{key:e,class:"item",onMousedown:t=>n.value=e.value},[i("span",null,x(e.value),1),i("div",Y,[i("span",null,[c(p(S),{name:"user",width:"12px",height:"12px",fill:"orange"})]),i("span",null,x(e.count),1)])],40,X)))),128))])])),_:1},8,["value"]),c(p(w),{onClick:t},{icon:r((()=>[c(p(S),{name:"search"})])),_:1})]))}}),ee=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <AutoComplete\n      v-model:value="value"\n      :options="dataSource"\n      style="width: 200px"\n      placeholder="input here"\n      custom\n    >\n      <template #option="item">\n        <div style="color: orange; margin-bottom: 10px">\n          <span style="font-size: 12px; padding: 4px 11px">{{ item.value.label }}</span>\n          <div\n            v-for="s in item.value.options"\n            :key="s"\n            class="item"\n            @mousedown="value = s.value"\n          >\n            <span>{{ s.value }}</span>\n            <div class="count">\n              <span>\n                <SvgIcon name="user" width="12px" height="12px" fill="orange" />\n              </span>\n              <span>{{ s.count }}</span>\n            </div>\n          </div>\n        </div>\n      </template>\n    </AutoComplete>\n    <Button @click="onSubmit">\n      <template #icon>\n        <SvgIcon name="search"></SvgIcon>\n      </template>\n    </Button>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { AutoComplete, SvgIcon, Button } from \'hut-ui\'\n\ninterface MockVal {\n  value: string\n}\nconst value = ref(\'\')\nconst options = ref<MockVal[]>([])\nconst onSelect = (text: string) => {\n  console.log(\'onSelect\', text)\n}\nconst onSubmit = () => {\n  console.log(value.value)\n}\nconst dataSource = [\n  {\n    value: {\n      label: \'Libraries\',\n      options: [\n        {\n          value: \'CustomDesignVue\',\n          count: 10000\n        },\n        {\n          value: \'CustomDesignVue UI\',\n          count: 10600\n        }\n      ]\n    }\n  },\n  {\n    value: {\n      label: \'Solutions\',\n      options: [\n        {\n          value: \'CustomDesignVue FQA\',\n          count: 546456\n        },\n        {\n          value: \'CustomDesignVue UI FQA\',\n          count: 534534\n        }\n      ]\n    }\n  },\n  {\n    value: {\n      label: \'Articles\',\n      options: [\n        {\n          value: \'CustomDesignVue Fly\',\n          count: 878787\n        }\n      ]\n    }\n  }\n]\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  align-items: stretch;\n  .item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 300px;\n    padding: 4px 11px;\n    line-height: 1.5em;\n    &:hover {\n      background: #1890ff;\n      cursor: pointer;\n    }\n    > .count {\n      display: flex;\n      align-items: center;\n      gap: 5px;\n      text-align: center;\n      span {\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n}\n</style>',e.__sourceTitle="更复杂的渲染"};ee(Z);const ne=T(Z,[["__scopeId","data-v-3191fa0e"]]),te=t({__name:"Demo",setup(n){const t=A((()=>[O,G,ne].map(((e,n)=>V(e,"autoComplete",n)))));return(n,o)=>(s(),C(e,{"demo-arr":p(t)},null,8,["demo-arr"]))}}),oe=t({__name:"Index",setup(e){l(null);const t=["基本用法","自定义每条数据渲染方式","更复杂的渲染"],o=A((()=>k("autoComplete",t)));return(e,t)=>(s(),C(n,{"nav-arr":p(o),title:"AutoComplete 自动完成","component-name":"autoComplete"},{intro:r((()=>[c(N)])),demo:r((()=>[c(te)])),api:r((()=>[c(P)])),_:1},8,["nav-arr"]))}});export{oe as default};
