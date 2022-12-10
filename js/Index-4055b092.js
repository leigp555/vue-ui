import{D as e,C as n}from"./DemoDisplay-9caf88b3.js";import{d as a,c as t,j as o,g as i,f as r,q as p,k as s,n as l,r as u,e as g,t as m,C as c,J as v}from"./index-8d3b1deb.js";import{_ as d,P as z,T as S}from"./Paragraph-24a019c8.js";import{_ as f}from"./ApiIntro-05f1c3da.js";import{g as h,a as _}from"./helper-a6849624.js";import{_ as b}from"./Pagination-df744237.js";const O=l("p",null,"采用分页的形式分隔长列表，每次只加载一个页面。",-1),w=l("ul",null,[l("li",null,"Pagination：主要组件")],-1),C=l("ul",null,[l("li",null,"当加载/渲染所有数据将花费很多时间时；"),l("li",null,"可切换页码浏览数据。")],-1),P=a({__name:"Intro",setup:e=>(e,n)=>(t(),o(p(S),null,{default:i((()=>[r(p(d),null,{default:i((()=>[s("简介")])),_:1}),r(p(z),null,{default:i((()=>[O])),_:1}),r(p(d),null,{default:i((()=>[s("组件概述")])),_:1}),r(p(z),null,{default:i((()=>[w])),_:1}),r(p(d),null,{default:i((()=>[s("使用场景")])),_:1}),r(p(z),null,{default:i((()=>[C])),_:1})])),_:1}))}),T=a({__name:"Api",setup(e){const n=[{rowIndex:1,"事件名称":"change","说明":"改变当前页","回调参数":"(newPage:number) => void"},{rowIndex:2,"事件名称":"pageSizeChange","说明":"改变页面大小","回调参数":"(newSize:number) => void"}],a=[{componentName:"Pagination",attrContent:[{rowIndex:1,"属性":"current","说明":"当前页页码","类型":"number","默认值":"1"},{rowIndex:2,"属性":"total","说明":"总页数","类型":"number","默认值":"0"},{rowIndex:3,"属性":"pageSize","说明":"每页数据条数","类型":"number","默认值":"10"},{rowIndex:4,"属性":"disabled","说明":"禁用","类型":"boolean","默认值":"false"},{rowIndex:5,"属性":"showQuickJumper","说明":"显示快速跳转","类型":"boolean","默认值":"false"},{rowIndex:6,"属性":"showTotal","说明":"显示总页数","类型":"boolean","默认值":"false"},{rowIndex:7,"属性":"showSizeChanger","说明":"显示改变页面大小的选项","类型":"boolean","默认值":"false"},{rowIndex:8,"属性":"pageSizeOptions","说明":"改变页面大小的选项","类型":"string[]","默认值":"['10', '20', '30', '40', '50']"}]}];return(e,i)=>(t(),o(f,{"attr-content-arr":a,"event-content":n}))}});var x=e=>{e.__sourceCode='<template>\n  <Pagination\n    v-model:current="current"\n    :total="1000"\n    v-model:pageSize="pageSize"\n    @pageSizeChange="pageSize = $event"\n    :disabled="false"\n    :pageSizeOptions="pageSizeOptions"\n    @change="current = $event"\n  >\n    <template #buildOptionText="props">\n      <span v-if="props.value !== \'50\'">{{ props.value }}条/页</span>\n    </template>\n  </Pagination>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Pagination } from \'@/lib\'\n\nconst current = ref<number>(5)\nconst pageSize = ref<number>(10)\nconst pageSizeOptions = ref<string[]>([\'10\', \'20\', \'30\', \'40\', \'50\'])\n<\/script>',e.__sourceTitle="基本用法"};const I={key:0},k=a({__name:"DemoOne",setup(e){const n=u(5),a=u(10),r=u(["10","20","30","40","50"]);return(e,s)=>(t(),o(p(b),{current:n.value,"onUpdate:current":s[0]||(s[0]=e=>n.value=e),total:1e3,pageSize:a.value,"onUpdate:pageSize":s[1]||(s[1]=e=>a.value=e),onPageSizeChange:s[2]||(s[2]=e=>a.value=e),disabled:!1,pageSizeOptions:r.value,onChange:s[3]||(s[3]=e=>n.value=e)},{buildOptionText:i((e=>["50"!==e.value?(t(),g("span",I,m(e.value)+"条/页",1)):c("",!0)])),_:1},8,["current","pageSize","pageSizeOptions"]))}});x(k);var U=e=>{e.__sourceCode='<template>\n  <Pagination\n    v-model:current="current"\n    :total="1000"\n    v-model:pageSize="pageSize"\n    @pageSizeChange="pageSize = $event"\n    :disabled="false"\n    :pageSizeOptions="pageSizeOptions"\n    showSizeChanger\n    @change="current = $event"\n  >\n    <template #buildOptionText="props">\n      <span v-if="props.value !== \'50\'">{{ props.value }}条/页</span>\n    </template>\n  </Pagination>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Pagination } from \'@/lib\'\n\nconst current = ref<number>(5)\nconst pageSize = ref<number>(10)\nconst pageSizeOptions = ref<string[]>([\'10\', \'20\', \'30\', \'40\', \'50\'])\n<\/script>',e.__sourceTitle="改变每页显示条目数"};const $={key:0},D=a({__name:"DemoTwo",setup(e){const n=u(5),a=u(10),r=u(["10","20","30","40","50"]);return(e,s)=>(t(),o(p(b),{current:n.value,"onUpdate:current":s[0]||(s[0]=e=>n.value=e),total:1e3,pageSize:a.value,"onUpdate:pageSize":s[1]||(s[1]=e=>a.value=e),onPageSizeChange:s[2]||(s[2]=e=>a.value=e),disabled:!1,pageSizeOptions:r.value,showSizeChanger:"",onChange:s[3]||(s[3]=e=>n.value=e)},{buildOptionText:i((e=>["50"!==e.value?(t(),g("span",$,m(e.value)+"条/页",1)):c("",!0)])),_:1},8,["current","pageSize","pageSizeOptions"]))}});U(D);var j=e=>{e.__sourceCode='<template>\n  <Pagination\n    v-model:current="current"\n    :total="1000"\n    v-model:pageSize="pageSize"\n    @pageSizeChange="pageSize = $event"\n    :disabled="false"\n    :pageSizeOptions="pageSizeOptions"\n    showSizeChanger\n    showTotal\n    @change="current = $event"\n  >\n    <template #buildOptionText="props">\n      <span v-if="props.value !== \'50\'">{{ props.value }}条/页</span>\n    </template>\n  </Pagination>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Pagination } from \'@/lib\'\n\nconst current = ref<number>(5)\nconst pageSize = ref<number>(10)\nconst pageSizeOptions = ref<string[]>([\'10\', \'20\', \'30\', \'40\', \'50\'])\n<\/script>',e.__sourceTitle="显示总页数"};const y={key:0},J=a({__name:"DemoThree",setup(e){const n=u(5),a=u(10),r=u(["10","20","30","40","50"]);return(e,s)=>(t(),o(p(b),{current:n.value,"onUpdate:current":s[0]||(s[0]=e=>n.value=e),total:1e3,pageSize:a.value,"onUpdate:pageSize":s[1]||(s[1]=e=>a.value=e),onPageSizeChange:s[2]||(s[2]=e=>a.value=e),disabled:!1,pageSizeOptions:r.value,showSizeChanger:"",showTotal:"",onChange:s[3]||(s[3]=e=>n.value=e)},{buildOptionText:i((e=>["50"!==e.value?(t(),g("span",y,m(e.value)+"条/页",1)):c("",!0)])),_:1},8,["current","pageSize","pageSizeOptions"]))}});j(J);var Q=e=>{e.__sourceCode='<template>\n  <Pagination\n    v-model:current="current"\n    :total="1000"\n    v-model:pageSize="pageSize"\n    @pageSizeChange="pageSize = $event"\n    :disabled="false"\n    :pageSizeOptions="pageSizeOptions"\n    showQuickJumper\n    showSizeChanger\n    showTotal\n    @change="current = $event"\n  >\n    <template #buildOptionText="props">\n      <span v-if="props.value !== \'50\'">{{ props.value }}条/页</span>\n    </template>\n  </Pagination>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Pagination } from \'@/lib\'\n\nconst current = ref<number>(5)\nconst pageSize = ref<number>(10)\nconst pageSizeOptions = ref<string[]>([\'10\', \'20\', \'30\', \'40\', \'50\'])\n<\/script>',e.__sourceTitle="增加跳转功能"};const A={key:0},F=a({__name:"DemoFour",setup(e){const n=u(5),a=u(10),r=u(["10","20","30","40","50"]);return(e,s)=>(t(),o(p(b),{current:n.value,"onUpdate:current":s[0]||(s[0]=e=>n.value=e),total:1e3,pageSize:a.value,"onUpdate:pageSize":s[1]||(s[1]=e=>a.value=e),onPageSizeChange:s[2]||(s[2]=e=>a.value=e),disabled:!1,pageSizeOptions:r.value,showQuickJumper:"",showSizeChanger:"",showTotal:"",onChange:s[3]||(s[3]=e=>n.value=e)},{buildOptionText:i((e=>["50"!==e.value?(t(),g("span",A,m(e.value)+"条/页",1)):c("",!0)])),_:1},8,["current","pageSize","pageSizeOptions"]))}});Q(F);var q=e=>{e.__sourceCode='<template>\n  <Pagination\n    v-model:current="current"\n    :total="1000"\n    v-model:pageSize="pageSize"\n    @pageSizeChange="pageSize = $event"\n    :disabled="true"\n    :pageSizeOptions="pageSizeOptions"\n    showQuickJumper\n    showSizeChanger\n    showTotal\n    @change="current = $event"\n  >\n    <template #buildOptionText="props">\n      <span v-if="props.value !== \'50\'">{{ props.value }}条/页</span>\n    </template>\n  </Pagination>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Pagination } from \'@/lib\'\n\nconst current = ref<number>(5)\nconst pageSize = ref<number>(10)\nconst pageSizeOptions = ref<string[]>([\'10\', \'20\', \'30\', \'40\', \'50\'])\n<\/script>',e.__sourceTitle="禁用"};const N={key:0},B=a({__name:"DemoFive",setup(e){const n=u(5),a=u(10),r=u(["10","20","30","40","50"]);return(e,s)=>(t(),o(p(b),{current:n.value,"onUpdate:current":s[0]||(s[0]=e=>n.value=e),total:1e3,pageSize:a.value,"onUpdate:pageSize":s[1]||(s[1]=e=>a.value=e),onPageSizeChange:s[2]||(s[2]=e=>a.value=e),disabled:!0,pageSizeOptions:r.value,showQuickJumper:"",showSizeChanger:"",showTotal:"",onChange:s[3]||(s[3]=e=>n.value=e)},{buildOptionText:i((e=>["50"!==e.value?(t(),g("span",N,m(e.value)+"条/页",1)):c("",!0)])),_:1},8,["current","pageSize","pageSizeOptions"]))}});q(B);const E=a({__name:"Demo",setup(n){const a=v((()=>[k,D,J,F,B].map(((e,n)=>h(e,"pagination",n)))));return(n,i)=>(t(),o(e,{"demo-arr":p(a)},null,8,["demo-arr"]))}}),G=a({__name:"Index",setup(e){u(null);const a=["基本用法","改变每页显示条目数","显示总页数","增加跳转功能","禁用"],s=v((()=>_("pagination",a)));return(e,a)=>(t(),o(n,{"nav-arr":p(s),title:"Pagination 分页","component-name":"pagination"},{intro:i((()=>[r(P)])),demo:i((()=>[r(E)])),api:i((()=>[r(T)])),_:1},8,["nav-arr"]))}});export{G as default};
