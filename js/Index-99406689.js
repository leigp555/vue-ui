import{_ as e,P as n,T as t,g as o,D as l,a,b as s}from"./DemoDisplay-30e28096.js";import{d as u,_ as c}from"./Paragraph.vue_vue_type_style_index_0_lang-de84b885.js";import{d as r,o as i,g as p,w as m,e as v,l as d,h as g,b as h,r as x,t as _,c as f,F as y,f as C,A as S,z as b}from"./index-7adc59d4.js";/* empty css                                                */import{_ as w}from"./ApiIntro-ecd1af8a.js";const A=h("p",null,"输入框自动完成功能。",-1),T=h("ul",null,[h("li",null,"AutoComplete: 主要组件")],-1),D=h("ul",null,[h("li",null,"需要一个输入框而不是选择器。"),h("li",null,"需要输入建议/辅助提示。")],-1),I=r({__name:"Intro",setup:o=>(o,l)=>(i(),p(d(t),null,{default:m((()=>[v(d(e),null,{default:m((()=>[g("简介")])),_:1}),v(d(n),null,{default:m((()=>[A])),_:1}),v(d(e),null,{default:m((()=>[g("组件概览")])),_:1}),v(d(n),null,{default:m((()=>[T])),_:1}),v(d(e),null,{default:m((()=>[g("使用场景")])),_:1}),v(d(n),null,{default:m((()=>[D])),_:1})])),_:1}))}),V=r({__name:"Api",setup(e){const n=[{rowIndex:1,"事件名称":"search","说明":"搜索补全项的时候调用","回调参数":"(value)=>({value:any}[])"},{rowIndex:1,"事件名称":"select","说明":"被选中时调用，参数为选中项的 value 值","回调参数":"(value)=>void"}],t=[{componentName:"AutoComplete",attrContent:[{rowIndex:1,"属性":"value","说明":"输入框文字","类型":"string","默认值":"null"},{rowIndex:2,"属性":"options","说明":"弹出框内容","类型":"{value:any}[]","默认值":"[]"},{rowIndex:3,"属性":"placeholder","说明":"输入框提示内容","类型":"string","默认值":"null"},{rowIndex:4,"属性":"custom","说明":"自定义弹出框","类型":"boolean","默认值":"false"}]}];return(e,o)=>(i(),p(w,{"attr-content-arr":t,"event-content":n}))}});var $=e=>{e.__sourceCode='<template>\n  <AutoComplete\n    v-model:value="value"\n    :options="options"\n    style="width: 200px"\n    placeholder="input here"\n    @select="onSelect"\n    @search="onSearch"\n  />\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { AutoComplete } from \'@/lib\'\n\ninterface MockVal {\n  value: string\n}\nconst value = ref(\'\')\nconst options = ref<MockVal[]>([])\nconst onSearch = (searchText: string) => {\n  options.value = !searchText\n    ? []\n    : [\n        { value: `${searchText}@qq.com` },\n        { value: `${searchText}@google.com` },\n        { value: `${searchText}@138.com` }\n      ]\n}\nconst onSelect = (text: string) => {\n  console.log(\'onSelect\', text)\n}\n<\/script>',e.__sourceTitle="基本用法"};const k=r({__name:"DemoOne",setup(e){const n=x(""),t=x([]),o=e=>{t.value=e?[{value:`${e}@qq.com`},{value:`${e}@google.com`},{value:`${e}@138.com`}]:[]},l=e=>{console.log("onSelect",e)};return(e,a)=>(i(),p(d(u),{value:n.value,"onUpdate:value":a[0]||(a[0]=e=>n.value=e),options:t.value,style:{width:"200px"},placeholder:"input here",onSelect:l,onSearch:o},null,8,["value","options"]))}});$(k);var M=e=>{e.__sourceCode='<template>\n  <AutoComplete\n    v-model:value="value"\n    :options="options"\n    style="width: 200px"\n    placeholder="input here"\n    @select="onSelect"\n    @search="onSearch"\n  >\n    <template #option="item">\n      <span style="color: red">{{ item.value }}</span>\n    </template>\n  </AutoComplete>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { AutoComplete } from \'@/lib\'\n\ninterface MockVal {\n  value: string\n}\nconst value = ref(\'\')\nconst options = ref<MockVal[]>([])\nconst onSearch = (searchText: string) => {\n  options.value = !searchText\n    ? []\n    : [\n        { value: `${searchText}@qq.com` },\n        { value: `${searchText}@google.com` },\n        { value: `${searchText}@138.com` },\n        { value: `${searchText}@189.com` },\n        { value: `${searchText}@email.com` }\n      ]\n}\nconst onSelect = (text: string) => {\n  console.log(\'onSelect\', text)\n}\n<\/script>',e.__sourceTitle="自定义每条数据渲染方式"};const q={style:{color:"red"}},F=r({__name:"DemoTwo",setup(e){const n=x(""),t=x([]),o=e=>{t.value=e?[{value:`${e}@qq.com`},{value:`${e}@google.com`},{value:`${e}@138.com`},{value:`${e}@189.com`},{value:`${e}@email.com`}]:[]},l=e=>{console.log("onSelect",e)};return(e,a)=>(i(),p(d(u),{value:n.value,"onUpdate:value":a[0]||(a[0]=e=>n.value=e),options:t.value,style:{width:"200px"},placeholder:"input here",onSelect:l,onSearch:o},{option:m((e=>[h("span",q,_(e.value),1)])),_:1},8,["value","options"]))}});M(F);var U=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <AutoComplete\n      v-model:value="value"\n      :options="dataSource"\n      style="width: 200px"\n      placeholder="input here"\n      custom\n    >\n      <template #option="item">\n        <div style="color: orange; margin-bottom: 10px">\n          <span style="font-size: 12px; padding: 4px 11px">{{ item.value.label }}</span>\n          <div\n            v-for="s in item.value.options"\n            :key="s"\n            class="item"\n            @mousedown="value = s.value"\n          >\n            <span>{{ s.value }}</span>\n            <div class="count">\n              <span>\n                <SvgIcon name="user" width="12px" height="12px" fill="orange" />\n              </span>\n              <span>{{ s.count }}</span>\n            </div>\n          </div>\n        </div>\n      </template>\n    </AutoComplete>\n    <Button @click="onSubmit">\n      <template #icon>\n        <SvgIcon name="search"></SvgIcon>\n      </template>\n    </Button>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { AutoComplete, SvgIcon, Button } from \'@/lib\'\n\ninterface MockVal {\n  value: string\n}\nconst value = ref(\'\')\nconst options = ref<MockVal[]>([])\nconst onSelect = (text: string) => {\n  console.log(\'onSelect\', text)\n}\nconst onSubmit = () => {\n  console.log(value.value)\n}\nconst dataSource = [\n  {\n    value: {\n      label: \'Libraries\',\n      options: [\n        {\n          value: \'CustomDesignVue\',\n          count: 10000\n        },\n        {\n          value: \'CustomDesignVue UI\',\n          count: 10600\n        }\n      ]\n    }\n  },\n  {\n    value: {\n      label: \'Solutions\',\n      options: [\n        {\n          value: \'CustomDesignVue FQA\',\n          count: 546456\n        },\n        {\n          value: \'CustomDesignVue UI FQA\',\n          count: 534534\n        }\n      ]\n    }\n  },\n  {\n    value: {\n      label: \'Articles\',\n      options: [\n        {\n          value: \'CustomDesignVue Fly\',\n          count: 878787\n        }\n      ]\n    }\n  }\n]\n<\/script>\n\n<style lang="scss">\n.wrap {\n  display: flex;\n  align-items: stretch;\n  .item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 300px;\n    padding: 4px 11px;\n    line-height: 1.5em;\n    &:hover {\n      background: #1890ff;\n      cursor: pointer;\n    }\n    > .count {\n      display: flex;\n      align-items: center;\n      gap: 5px;\n      text-align: center;\n      span {\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n}\n</style>',e.__sourceTitle="更复杂的渲染"};const j={class:"wrap"},Q={style:{color:"orange","margin-bottom":"10px"}},z={style:{"font-size":"12px",padding:"4px 11px"}},B=["onMousedown"],L={class:"count"},P=r({__name:"DemoThree",setup(e){const n=x("");x([]);const t=()=>{console.log(n.value)},o=[{value:{label:"Libraries",options:[{value:"CustomDesignVue",count:1e4},{value:"CustomDesignVue UI",count:10600}]}},{value:{label:"Solutions",options:[{value:"CustomDesignVue FQA",count:546456},{value:"CustomDesignVue UI FQA",count:534534}]}},{value:{label:"Articles",options:[{value:"CustomDesignVue Fly",count:878787}]}}];return(e,l)=>(i(),f("div",j,[v(d(u),{value:n.value,"onUpdate:value":l[0]||(l[0]=e=>n.value=e),options:o,style:{width:"200px"},placeholder:"input here",custom:""},{option:m((e=>[h("div",Q,[h("span",z,_(e.value.label),1),(i(!0),f(y,null,C(e.value.options,(e=>(i(),f("div",{key:e,class:"item",onMousedown:t=>n.value=e.value},[h("span",null,_(e.value),1),h("div",L,[h("span",null,[v(d(S),{name:"user",width:"12px",height:"12px",fill:"orange"})]),h("span",null,_(e.count),1)])],40,B)))),128))])])),_:1},8,["value"]),v(d(c),{onClick:t},{icon:m((()=>[v(d(S),{name:"search"})])),_:1})]))}});U(P);const N=r({__name:"Demo",setup(e){const n=b((()=>[k,F,P].map(((e,n)=>o(e,"autoComplete",n)))));return(e,t)=>(i(),p(l,{"demo-arr":d(n)},null,8,["demo-arr"]))}}),O=r({__name:"Index",setup(e){x(null);const n=["基本用法","自定义每条数据渲染方式","更复杂的渲染"],t=b((()=>s("autoComplete",n)));return(e,n)=>(i(),p(a,{"nav-arr":d(t),title:"AutoComplete 自动完成","component-name":"autoComplete"},{intro:m((()=>[v(I)])),demo:m((()=>[v(N)])),api:m((()=>[v(V)])),_:1},8,["nav-arr"]))}});export{O as default};
