import{D as e,C as a}from"./DemoDisplay-861b5945.js";import{d as n,s as l,r as o,c as t,e as u,m as d,q as r,y as s,A as i,L as c,F as p,h as m,i as v,K as _,g as f,f as h,j as R,I as k}from"./index-fff176c6.js";import{_ as b,P as g,T as y}from"./Paragraph-72dbc1f2.js";import{_ as C}from"./ApiIntro.vue_vue_type_style_index_0_lang-399dc91d.js";import{g as x,a as I}from"./helper-42c8e4e7.js";const w=["disabled","checked","value","name"],G={class:"ui-radio-title"},D=n({__name:"Radio",props:{checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},value:null,name:null},emits:["update:checked","select","change"],setup(e,{emit:a}){const n=e,{disabled:c,checked:p}=l(n),m=o(null),v=()=>{var e;a("update:checked",!p.value),a("change",!p.value),a("select",null==(e=m.value)?void 0:e.value)},_=()=>{var e;null==(e=m.value)||e.classList.add("ui-radio-blur")};return(a,n)=>(t(),u("label",{class:s(["ui-radio-label",{"ui-radio-label-disabled":r(c)}])},[d("input",{disabled:r(c),class:s(["ui-radio",{checked:r(p),disabled:r(c)}]),type:"radio",onClick:v,onBlur:_,checked:r(p),ref_key:"inputRef",ref:m,value:e.value,name:e.name},null,42,w),d("span",G,[i(a.$slots,"default")])],2))}}),O={class:"ui-radioGroup-wrap"},j=n({__name:"RadioGroup",props:{value:null,name:null},emits:["update:value","change"],setup(e,{emit:a}){const n=e;let o=[];c().default&&(o=c().default());const{value:d,name:s}=l(n);return(e,n)=>(t(),u("div",O,[(t(!0),u(p,null,m(r(o),(e=>(t(),u("div",{key:e},[(t(),v(_(e),{name:r(s),checked:e.props.value===r(d),onSelect:n[0]||(n[0]=e=>{return a("update:value",n=e),void a("change",n);var n})},null,40,["name","checked"]))])))),128))]))}}),T=d("p",null,"单选框。",-1),A=d("ul",null,[d("li",null,"Radio"),d("li",null,"RadioGroup")],-1),B=d("ul",null,[d("li",null,"用于在多个备选项中选中单个状态。"),d("li",null," 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。 ")],-1),U=n({__name:"Intro",setup:e=>(e,a)=>(t(),v(r(y),null,{default:f((()=>[h(r(b),null,{default:f((()=>[R("简介")])),_:1}),h(r(g),null,{default:f((()=>[T])),_:1}),h(r(b),null,{default:f((()=>[R("组件概览")])),_:1}),h(r(g),null,{default:f((()=>[A])),_:1}),h(r(b),null,{default:f((()=>[R("使用场景")])),_:1}),h(r(g),null,{default:f((()=>[B])),_:1})])),_:1}))}),F=n({__name:"Api",setup(e){const a=[{rowIndex:1,"事件名称":"change","说明":"选项变化时的回调函数","回调参数":"Function(checked:boolean)"}],n=[{componentName:"Radio",attrContent:[{rowIndex:1,"属性":"checked","说明":"选中状态","类型":"boolean","默认值":"false"},{rowIndex:2,"属性":"disabled","说明":"禁用选项","类型":"boolean","默认值":"false"},{rowIndex:3,"属性":"value","说明":"根据 value 进行比较，判断是否选中","类型":"any","默认值":""},{rowIndex:4,"属性":"name","说明":'input[type="radio"] 的 name 属性',"类型":"string","默认值":""}]},{componentName:"RadioGroup",attrContent:[{rowIndex:1,"属性":"value","说明":"用于设置当前选中的值","类型":"any","默认值":""},{rowIndex:2,"属性":"name","说明":'RadioGroup 下所有 input[type="radio"] 的 name 属性',"类型":"string","默认值":""}]}];return(e,l)=>(t(),v(C,{"attr-content-arr":n,"event-content":a}))}}),L=n({__name:"DemoOne",setup(e){const a=o(!1);return(e,n)=>(t(),v(r(D),{checked:a.value,"onUpdate:checked":n[0]||(n[0]=e=>a.value=e)},{default:f((()=>[R("Radio")])),_:1},8,["checked"]))}}),N=e=>{e.__sourceCode="<template>\n  <Radio v-model:checked=\"checked\">Radio</Radio>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { Radio } from '@/lib'\n\nconst checked = ref<boolean>(false)\n<\/script>",e.__sourceTitle="基本用法"};N(L);const P=n({__name:"DemoTwo",setup(e){const a=o(!1);return(e,n)=>(t(),v(r(D),{checked:a.value,"onUpdate:checked":n[0]||(n[0]=e=>a.value=e),disabled:""},{default:f((()=>[R("Radio")])),_:1},8,["checked"]))}}),S=e=>{e.__sourceCode="<template>\n  <Radio v-model:checked=\"checked\" disabled>Radio</Radio>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { Radio } from '@/lib'\n\nconst checked = ref<boolean>(false)\n<\/script>",e.__sourceTitle="禁用"};S(P);const q=n({__name:"DemoThree",setup(e){const a=o(1),n=e=>{console.log(e)};return(e,l)=>(t(),v(r(j),{value:a.value,"onUpdate:value":l[0]||(l[0]=e=>a.value=e),name:"test",onChange:n},{default:f((()=>[h(r(D),{value:1},{default:f((()=>[R("Option A")])),_:1}),h(r(D),{value:2},{default:f((()=>[R("Option B")])),_:1}),h(r(D),{value:3},{default:f((()=>[R("Option C")])),_:1})])),_:1},8,["value"]))}}),K=e=>{e.__sourceCode='<template>\n  <RadioGroup v-model:value="value" name="test" @change="onChange">\n    <Radio :value="1">Option A</Radio>\n    <Radio :value="2">Option B</Radio>\n    <Radio :value="3">Option C</Radio>\n  </RadioGroup>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { RadioGroup, Radio } from \'@/lib\'\n\nconst value = ref<number>(1)\n\nconst onChange = (current: number) => {\n  console.log(current)\n}\n<\/script>',e.__sourceTitle="单选组"};K(q);const $=n({__name:"Demo",setup(a){const n=k((()=>[L,P,q].map(((e,a)=>x(e,"radio",a)))));return(a,l)=>(t(),v(e,{"demo-arr":r(n)},null,8,["demo-arr"]))}}),z=n({__name:"Index",setup(e){o(null);const n=["基本用法","禁用","单选组"],l=k((()=>I("radio",n)));return(e,n)=>(t(),v(a,{"nav-arr":r(l),title:"Radio 单选框","component-name":"radio"},{intro:f((()=>[h(U)])),demo:f((()=>[h($)])),api:f((()=>[h(F)])),_:1},8,["nav-arr"]))}});export{z as default};
