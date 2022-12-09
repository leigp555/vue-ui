import{_ as e,P as l,T as n,g as t,D as a,C as i,a as r}from"./DemoDisplay-55668b6d.js";import{m as o}from"./Upload.vue_vue_type_style_index_0_lang-31d412f5.js";import{d as s,k as u,z as c,o as v,c as d,e as x,l as h,q as f,g as p,w as m,h as w,b as _,r as g}from"./index-5d11ddfa.js";import{_ as T}from"./ApiIntro-cc0cc467.js";const V={class:"ui-tree-wrap"},j=s({__name:"Tree",props:{options:{default:()=>[]},selectedValues:{default:()=>[]},checkable:{type:Boolean,default:!1}},emits:["select","update:selectedValues","change"],setup(e,{emit:l}){const n=e,{options:t,selectedValues:a,checkable:i}=u(n),r=e=>{for(let l=0;l<e.length;l++)if(e[l].checked=!1,e[l].parent||(e[l].parent=e[l].value),e[l].children){for(let n=0;n<e[l].children.length;n++)e[l].parent?e[l].children[n].parent=`${e[l].parent}/${e[l].children[n].value}`:e[l].children[n].parent=`${e[l].value}/${e[l].children[n].value}`;r(e[l].children)}return e},s=c((()=>r(t.value)));return f("ui-tree-position",(e=>{l("select",e)})),f("ui-tree-select-arr",a),f("ui-tree-select-arrFn",(e=>{const n=e.split("/");l("update:selectedValues",n),l("change",n)})),f("ui-tree-select-checkable",i),f("ui-tree-origin-source",s),(e,l)=>(v(),d("div",V,[x(o,{options:h(s)},null,8,["options"])]))}}),b=_("p",null,"多层次的结构列表。",-1),D=_("ul",null,[_("li",null,"Tree: 主要组件")],-1),k=_("ul",null,[_("li",null," 文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用 树控件 可以完整展现其中的层级关系，并具有展开收起选择等交互功能。 ")],-1),I=s({__name:"Intro",setup:t=>(t,a)=>(v(),p(h(n),null,{default:m((()=>[x(h(e),null,{default:m((()=>[w("简介")])),_:1}),x(h(l),null,{default:m((()=>[b])),_:1}),x(h(e),null,{default:m((()=>[w("组件概览")])),_:1}),x(h(l),null,{default:m((()=>[D])),_:1}),x(h(e),null,{default:m((()=>[w("使用场景")])),_:1}),x(h(l),null,{default:m((()=>[k])),_:1})])),_:1}))}),C=s({__name:"Api",setup(e){const l=[{rowIndex:1,"事件名称":"select","说明":"点击树节点触发","回调参数":"(notes:string) => void"},{rowIndex:2,"事件名称":"change","说明":"点击树节点触发","回调参数":"(noteArr:string[]) => void"}],n=[{componentName:"Tree",attrContent:[{rowIndex:1,"属性":"options","说明":"源数据","类型":"TreeOptions[]","默认值":"[]"},{rowIndex:2,"属性":"selectedValues","说明":"选中的title","类型":"string[]","默认值":"[]"},{rowIndex:3,"属性":"checkable","说明":"允许勾选","类型":"boolean","默认值":"false"}]}];return(e,t)=>(v(),p(T,{"attr-content-arr":n,"event-content":l}))}});var O=e=>{e.__sourceCode="<template>\n  <Tree\n    :options=\"treeData\"\n    v-model:selectedValues=\"selectedValues\"\n    checkable\n    @change=\"onChange\"\n  />\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { Tree, TreeOptions } from '@/lib'\n\nconst selectedValues = ref<string[]>([])\nconst treeData = ref<TreeOptions[]>([\n  {\n    title: '0-0',\n    value: '0-0x',\n    show: false,\n    children: [\n      {\n        title: '0-0-0',\n        value: '0-0-0x',\n        show: false,\n        children: [\n          { title: '0-0-0-0', value: '0-0-0-0x', color: 'red' },\n          { title: '0-0-0-1', value: '0-0-0-1x', color: 'red' },\n          { title: '0-0-0-2', value: '0-0-0-2x', color: 'red' }\n        ]\n      },\n      {\n        title: '0-0-1',\n        value: '0-0-1x',\n        show: false,\n        children: [\n          { title: '0-0-1-0', value: '0-0-1-0x' },\n          { title: '0-0-1-1', value: '0-0-1-1x' },\n          { title: '0-0-1-2', value: '0-0-1-2x' }\n        ]\n      }\n    ]\n  },\n  {\n    title: '1-0',\n    value: '1-0x',\n    show: false,\n    children: [\n      {\n        title: '1-0-0',\n        value: '1-0-0x',\n        show: false,\n        children: [\n          {\n            title: '1-0-0-0',\n            value: '1-0-0-0x',\n            href: 'javascript:;',\n            color: '#1890ff'\n          },\n          {\n            title: '1-0-0-1',\n            value: '1-0-0-1x',\n            href: 'javascript:;',\n            color: '#1890ff'\n          },\n          {\n            title: '1-0-0-2',\n            value: '1-0-0-2x',\n            href: 'javascript:;',\n            color: '#1890ff'\n          }\n        ]\n      },\n      {\n        title: '1-0-1',\n        value: '1-0-1x',\n        show: false,\n        children: [\n          { title: '1-0-1-0', value: '1-0-1-0x' },\n          { title: '1-0-1-1', value: '1-0-1-1x' },\n          {\n            title: '1-0-1-2',\n            value: '1-0-1-2x',\n            show: false,\n            children: [\n              {\n                title: '3-0-0',\n                value: '3-0-0x',\n                show: false,\n                children: [\n                  { title: '3-0-0-0', value: '3-0-0-0x' },\n                  { title: '3-0-0-1', value: '3-0-0-1x' },\n                  { title: '3-0-0-2', value: '3-0-0-2x' }\n                ]\n              },\n              {\n                title: '3-0-1',\n                value: '3-0-1x',\n                show: false,\n                children: [\n                  { title: '3-0-1-0', value: '3-0-1-0x' },\n                  { title: '3-0-1-1', value: '3-0-1-1x' },\n                  { title: '3-0-1-2', value: '3-0-1-2x' }\n                ]\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n])\nconst onChange = (selectArr: string[]) => {\n  console.log(selectArr)\n}\n<\/script>",e.__sourceTitle="可勾选"};const A=s({__name:"DemoOne",setup(e){const l=g([]),n=g([{title:"0-0",value:"0-0x",show:!1,children:[{title:"0-0-0",value:"0-0-0x",show:!1,children:[{title:"0-0-0-0",value:"0-0-0-0x",color:"red"},{title:"0-0-0-1",value:"0-0-0-1x",color:"red"},{title:"0-0-0-2",value:"0-0-0-2x",color:"red"}]},{title:"0-0-1",value:"0-0-1x",show:!1,children:[{title:"0-0-1-0",value:"0-0-1-0x"},{title:"0-0-1-1",value:"0-0-1-1x"},{title:"0-0-1-2",value:"0-0-1-2x"}]}]},{title:"1-0",value:"1-0x",show:!1,children:[{title:"1-0-0",value:"1-0-0x",show:!1,children:[{title:"1-0-0-0",value:"1-0-0-0x",href:"javascript:;",color:"#1890ff"},{title:"1-0-0-1",value:"1-0-0-1x",href:"javascript:;",color:"#1890ff"},{title:"1-0-0-2",value:"1-0-0-2x",href:"javascript:;",color:"#1890ff"}]},{title:"1-0-1",value:"1-0-1x",show:!1,children:[{title:"1-0-1-0",value:"1-0-1-0x"},{title:"1-0-1-1",value:"1-0-1-1x"},{title:"1-0-1-2",value:"1-0-1-2x",show:!1,children:[{title:"3-0-0",value:"3-0-0x",show:!1,children:[{title:"3-0-0-0",value:"3-0-0-0x"},{title:"3-0-0-1",value:"3-0-0-1x"},{title:"3-0-0-2",value:"3-0-0-2x"}]},{title:"3-0-1",value:"3-0-1x",show:!1,children:[{title:"3-0-1-0",value:"3-0-1-0x"},{title:"3-0-1-1",value:"3-0-1-1x"},{title:"3-0-1-2",value:"3-0-1-2x"}]}]}]}]}]),t=e=>{console.log(e)};return(e,a)=>(v(),p(h(j),{options:n.value,selectedValues:l.value,"onUpdate:selectedValues":a[0]||(a[0]=e=>l.value=e),checkable:"",onChange:t},null,8,["options","selectedValues"]))}});O(A);var y=e=>{e.__sourceCode="<template>\n  <Tree\n    :options=\"treeData\"\n    @select=\"onSelect\"\n    v-model:selectedValues=\"selectedValues\"\n  />\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { Tree, TreeOptions } from '@/lib'\n\nconst selectedValues = ref<string[]>([])\nconst treeData = ref<TreeOptions[]>([\n  {\n    title: '0-0',\n    value: '0-0x',\n    show: false,\n    children: [\n      {\n        title: '0-0-0',\n        value: '0-0-0x',\n        show: false,\n        children: [\n          { title: '0-0-0-0', value: '0-0-0-0x', color: 'red' },\n          { title: '0-0-0-1', value: '0-0-0-1x', color: 'red' },\n          { title: '0-0-0-2', value: '0-0-0-2x', color: 'red' }\n        ]\n      },\n      {\n        title: '0-0-1',\n        value: '0-0-1x',\n        show: false,\n        children: [\n          { title: '0-0-1-0', value: '0-0-1-0x' },\n          { title: '0-0-1-1', value: '0-0-1-1x' },\n          { title: '0-0-1-2', value: '0-0-1-2x' }\n        ]\n      }\n    ]\n  },\n  {\n    title: '1-0',\n    value: '1-0x',\n    show: false,\n    children: [\n      {\n        title: '1-0-0',\n        value: '1-0-0x',\n        show: false,\n        children: [\n          {\n            title: '1-0-0-0',\n            value: '1-0-0-0x',\n            href: 'javascript:;',\n            color: '#1890ff'\n          },\n          {\n            title: '1-0-0-1',\n            value: '1-0-0-1x',\n            href: 'javascript:;',\n            color: '#1890ff'\n          },\n          {\n            title: '1-0-0-2',\n            value: '1-0-0-2x',\n            href: 'javascript:;',\n            color: '#1890ff'\n          }\n        ]\n      },\n      {\n        title: '1-0-1',\n        value: '1-0-1x',\n        show: false,\n        children: [\n          { title: '1-0-1-0', value: '1-0-1-0x' },\n          { title: '1-0-1-1', value: '1-0-1-1x' },\n          {\n            title: '1-0-1-2',\n            value: '1-0-1-2x',\n            show: false,\n            children: [\n              {\n                title: '3-0-0',\n                value: '3-0-0x',\n                show: false,\n                children: [\n                  { title: '3-0-0-0', value: '3-0-0-0x' },\n                  { title: '3-0-0-1', value: '3-0-0-1x' },\n                  { title: '3-0-0-2', value: '3-0-0-2x' }\n                ]\n              },\n              {\n                title: '3-0-1',\n                value: '3-0-1x',\n                show: false,\n                children: [\n                  { title: '3-0-1-0', value: '3-0-1-0x' },\n                  { title: '3-0-1-1', value: '3-0-1-1x' },\n                  { title: '3-0-1-2', value: '3-0-1-2x' }\n                ]\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n])\nconst onSelect = (position: string) => {\n  console.log(position)\n}\n<\/script>",e.__sourceTitle="基本用法"};const $=s({__name:"DemoTwo",setup(e){const l=g([]),n=g([{title:"0-0",value:"0-0x",show:!1,children:[{title:"0-0-0",value:"0-0-0x",show:!1,children:[{title:"0-0-0-0",value:"0-0-0-0x",color:"red"},{title:"0-0-0-1",value:"0-0-0-1x",color:"red"},{title:"0-0-0-2",value:"0-0-0-2x",color:"red"}]},{title:"0-0-1",value:"0-0-1x",show:!1,children:[{title:"0-0-1-0",value:"0-0-1-0x"},{title:"0-0-1-1",value:"0-0-1-1x"},{title:"0-0-1-2",value:"0-0-1-2x"}]}]},{title:"1-0",value:"1-0x",show:!1,children:[{title:"1-0-0",value:"1-0-0x",show:!1,children:[{title:"1-0-0-0",value:"1-0-0-0x",href:"javascript:;",color:"#1890ff"},{title:"1-0-0-1",value:"1-0-0-1x",href:"javascript:;",color:"#1890ff"},{title:"1-0-0-2",value:"1-0-0-2x",href:"javascript:;",color:"#1890ff"}]},{title:"1-0-1",value:"1-0-1x",show:!1,children:[{title:"1-0-1-0",value:"1-0-1-0x"},{title:"1-0-1-1",value:"1-0-1-1x"},{title:"1-0-1-2",value:"1-0-1-2x",show:!1,children:[{title:"3-0-0",value:"3-0-0x",show:!1,children:[{title:"3-0-0-0",value:"3-0-0-0x"},{title:"3-0-0-1",value:"3-0-0-1x"},{title:"3-0-0-2",value:"3-0-0-2x"}]},{title:"3-0-1",value:"3-0-1x",show:!1,children:[{title:"3-0-1-0",value:"3-0-1-0x"},{title:"3-0-1-1",value:"3-0-1-1x"},{title:"3-0-1-2",value:"3-0-1-2x"}]}]}]}]}]),t=e=>{console.log(e)};return(e,a)=>(v(),p(h(j),{options:n.value,onSelect:t,selectedValues:l.value,"onUpdate:selectedValues":a[0]||(a[0]=e=>l.value=e)},null,8,["options","selectedValues"]))}});y($);const S=s({__name:"Demo",setup(e){const l=c((()=>[$,A].map(((e,l)=>t(e,"tree",l)))));return(e,n)=>(v(),p(a,{"demo-arr":h(l)},null,8,["demo-arr"]))}}),U=s({__name:"Index",setup(e){g(null);const l=["基本用法","可勾选"],n=c((()=>r("tree",l)));return(e,l)=>(v(),p(i,{"nav-arr":h(n),title:"Tree 树形控件","component-name":"tree"},{intro:m((()=>[x(I)])),demo:m((()=>[x(S)])),api:m((()=>[x(C)])),_:1},8,["nav-arr"]))}});export{U as default};
