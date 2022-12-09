import{_ as n,P as e,T as i,g as a,D as t,C as s,a as o}from"./DemoDisplay-55668b6d.js";import{_ as l,a as p}from"./Upload.vue_vue_type_style_index_0_lang-31d412f5.js";import{d as r,o as u,g as d,w as m,e as c,l as _,h as v,b as g,c as f,_ as S,r as x,z as w}from"./index-5d11ddfa.js";import{_ as b,b as y}from"./ApiIntro-cc0cc467.js";const q=g("p",null,"用于页面和区块的加载中状态。",-1),z=g("ul",null,[g("li",null,"Spin")],-1),I=g("p",null," 页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。 ",-1),h=r({__name:"Intro",setup:a=>(a,t)=>(u(),d(_(i),null,{default:m((()=>[c(_(n),{level:4},{default:m((()=>[v("简介")])),_:1}),c(_(e),null,{default:m((()=>[q])),_:1}),c(_(n),{level:4},{default:m((()=>[v("组件概述")])),_:1}),c(_(e),null,{default:m((()=>[z])),_:1}),c(_(n),{level:4},{default:m((()=>[v("使用场景")])),_:1}),c(_(e),null,{default:m((()=>[I])),_:1})])),_:1}))}),T=r({__name:"Api",setup(n){const e=[],i=[{componentName:"Spin",attrContent:[{rowIndex:1,"属性":"size","说明":"组件大小","类型":"number","默认值":"20"},{rowIndex:2,"属性":"loading","说明":"是否处于加载状态","类型":"boolean","默认值":"true"},{rowIndex:3,"属性":"tip","说明":"当作为包裹元素时，可以自定义描述文案","类型":"string","默认值":""},{rowIndex:4,"属性":"delay","说明":"延迟显示加载效果的时间（防止闪烁)","类型":"number (毫秒)","默认值":"0"}]}];return(n,a)=>(u(),d(b,{"attr-content-arr":i,"event-content":e}))}});var C=n=>{n.__sourceCode='<template>\n  <div class="wrap">\n    <Spin />\n    <Spin :size="32" />\n    <Spin :size="42" />\n    <Spin tip="loading" />\n    <Spin :size="42">\n      <template #icon>\n        <SvgIcon name="loading" width="20px" height="20px" fill="#1890ff" />\n      </template>\n    </Spin>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Spin, SvgIcon } from \'ant\'\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  gap: 100px;\n}\n</style>',n.__sourceTitle=" 基本用法 "};const D={class:"wrap"},L=r({__name:"DemoOne",setup:n=>(n,e)=>(u(),f("div",D,[c(_(y)),c(_(y),{size:32}),c(_(y),{size:42}),c(_(y),{tip:"loading"}),c(_(y),{size:42},{icon:m((()=>[c(_(l),{name:"loading",width:"20px",height:"20px",fill:"#1890ff"})])),_:1})]))});C(L);var A=S(L,[["__scopeId","data-v-31f27110"]]),B=n=>{n.__sourceCode='<template>\n  <div class="wrap">\n    <Spin />\n    <Spin :size="32" />\n    <Spin :size="42" />\n    <Spin :size="56" />\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Spin } from \'ant\'\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  gap: 100px;\n}\n</style>',n.__sourceTitle=" 不同大小 "};const j={class:"wrap"},k=r({__name:"DemoTwo",setup:n=>(n,e)=>(u(),f("div",j,[c(_(y)),c(_(y),{size:32}),c(_(y),{size:42}),c(_(y),{size:56})]))});B(k);var V=S(k,[["__scopeId","data-v-1859157a"]]),F=n=>{n.__sourceCode='<template>\n  <Spin tip="loading" />\n</template>\n\n<script setup lang="ts">\nimport { Spin } from \'ant\'\n<\/script>',n.__sourceTitle=" 自定义描述文案。 "};const N=r({__name:"DemoThree",setup:n=>(n,e)=>(u(),d(_(y),{tip:"loading"}))});F(N);var O=n=>{n.__sourceCode='<template>\n  <Spin :size="42" tip="loading">\n    <template #icon>\n      <SvgIcon name="loading" width="20px" height="20px" fill="#1890ff" />\n    </template>\n  </Spin>\n</template>\n\n<script setup lang="ts">\nimport { Spin, SvgIcon } from \'ant\'\n<\/script>',n.__sourceTitle=" 自定义icon "};const P=r({__name:"DemoFour",setup:n=>(n,e)=>(u(),d(_(y),{size:42,tip:"loading"},{icon:m((()=>[c(_(l),{name:"loading",width:"20px",height:"20px",fill:"#1890ff"})])),_:1}))});O(P);var U=n=>{n.__sourceCode='<template>\n  <div class="wrap">\n    <Spin :loading="loading">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores\n      aspernatur, beatae deserunt doloremque eaque earum ipsa ipsam molestias omnis\n      perspiciatis provident quam quia rerum temporibus, voluptatem voluptatum? Velit?\n    </Spin>\n    <div>\n      <Button @click="onLoading">loading</Button>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Spin, Button } from \'@/lib\'\n\nconst loading = ref<boolean>(false)\nconst onLoading = () => {\n  loading.value = true\n  const id = setTimeout(() => {\n    loading.value = false\n    window.clearTimeout(id)\n  }, 4000)\n}\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n}\n</style>',n.__sourceTitle="占位"};const E={class:"wrap"},G=r({__name:"DemoFive",setup(n){const e=x(!1),i=()=>{e.value=!0;const n=setTimeout((()=>{e.value=!1,window.clearTimeout(n)}),4e3)};return(n,a)=>(u(),f("div",E,[c(_(y),{loading:e.value},{default:m((()=>[v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores aspernatur, beatae deserunt doloremque eaque earum ipsa ipsam molestias omnis perspiciatis provident quam quia rerum temporibus, voluptatem voluptatum? Velit? ")])),_:1},8,["loading"]),g("div",null,[c(_(p),{onClick:i},{default:m((()=>[v("loading")])),_:1})])]))}});U(G);var H=S(G,[["__scopeId","data-v-de736b12"]]),J=n=>{n.__sourceCode='<template>\n  <div class="wrap">\n    <Spin :loading="loading" :delay="500">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores\n      aspernatur, beatae deserunt doloremque eaque earum ipsa ipsam molestias omnis\n      perspiciatis provident quam quia rerum temporibus, voluptatem voluptatum? Velit?\n    </Spin>\n    <div>\n      <Button @click="onLoading">loading</Button>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Spin, Button } from \'@/lib\'\n\nconst loading = ref<boolean>(false)\nconst onLoading = () => {\n  loading.value = !loading.value\n}\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n</style>',n.__sourceTitle="延迟加载"};const K={class:"wrap"},M=r({__name:"DemoSix",setup(n){const e=x(!1),i=()=>{e.value=!e.value};return(n,a)=>(u(),f("div",K,[c(_(y),{loading:e.value,delay:500},{default:m((()=>[v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores aspernatur, beatae deserunt doloremque eaque earum ipsa ipsam molestias omnis perspiciatis provident quam quia rerum temporibus, voluptatem voluptatum? Velit? ")])),_:1},8,["loading"]),g("div",null,[c(_(p),{onClick:i},{default:m((()=>[v("loading")])),_:1})])]))}});J(M);var Q=S(M,[["__scopeId","data-v-74007055"]]);const R=r({__name:"Demo",setup(n){const e=w((()=>[A,V,N,P,H,Q].map(((n,e)=>a(n,"spin",e)))));return(n,i)=>(u(),d(t,{"demo-arr":_(e)},null,8,["demo-arr"]))}}),W=r({__name:"Index",setup(n){x(null);const e=["基本用法","不同大小","自定义描述文案","自定义icon","占位","延迟加载"],i=w((()=>o("spin",e)));return(n,e)=>(u(),d(s,{"nav-arr":_(i),title:"Spin 加载中","component-name":"spin"},{intro:m((()=>[c(h)])),demo:m((()=>[c(R)])),api:m((()=>[c(T)])),_:1},8,["nav-arr"]))}});export{W as default};
