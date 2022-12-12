import{D as e,C as a}from"./DemoDisplay-53a9c10a.js";import{d as n,c as t,j as s,g as r,f as i,q as m,k as o,n as l,e as p,s as h,_ as c,G as u,J as d,r as v}from"./index-6bb449f3.js";import{_ as g,P as f,T as _}from"./Paragraph-138135f0.js";import{_ as w}from"./ApiIntro-fdf4ccdf.js";import{r as A,g as y,a as z}from"./helper-7416cab9.js";import{_ as I}from"./Avatar-34d046bf.js";const b=l("p",null,"用来代表用户或事物，支持图片、图标或字符展示。",-1),q=l("ul",null,[l("li",null,"Avatar: 主要组件")],-1),S=l("ul",null,[l("li",null,"需要展示头像时")],-1),k=n({__name:"Intro",setup:e=>(e,a)=>(t(),s(m(_),null,{default:r((()=>[i(m(g),null,{default:r((()=>[o("简介")])),_:1}),i(m(f),null,{default:r((()=>[b])),_:1}),i(m(g),null,{default:r((()=>[o("组件概览")])),_:1}),i(m(f),null,{default:r((()=>[q])),_:1}),i(m(g),null,{default:r((()=>[o("使用场景")])),_:1}),i(m(f),null,{default:r((()=>[S])),_:1})])),_:1}))}),C=n({__name:"Api",setup(e){const a=[],n=[{componentName:"Avatar",attrContent:[{rowIndex:1,"属性":"size","说明":"头像大小","类型":"number","默认值":"40"},{rowIndex:2,"属性":"shape","说明":"头像形状","类型":"'square' | 'round'","默认值":"round"},{rowIndex:3,"属性":"src","说明":"头像链接","类型":"Url","默认值":"null"}]}];return(e,r)=>(t(),s(w,{"attr-content-arr":n,"event-content":a}))}});var x=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Avatar>\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" />\n      </template>\n    </Avatar>\n    <Avatar :size="48">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" />\n      </template>\n    </Avatar>\n    <Avatar :size="48" shape="square">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" />\n      </template>\n    </Avatar>\n    <Avatar :size="56" shape="square" :style="{ background: \'#1890ff\' }">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" fill="#fff" />\n      </template>\n    </Avatar>\n    <Avatar :size="64" shape="square" src="https://joeschmoe.io/api/v1/random">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" />\n      </template>\n    </Avatar>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Avatar, SvgIcon } from \'hut-ui\'\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  gap: 20px;\n}\n</style>',e.__sourceTitle=" 基本用法 "};const j={class:"wrap"},D=n({__name:"DemoOne",setup:e=>(e,a)=>(t(),p("div",j,[i(m(I),null,{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em"})])),_:1}),i(m(I),{size:48},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em"})])),_:1}),i(m(I),{size:48,shape:"square"},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em"})])),_:1}),i(m(I),{size:56,shape:"square",style:{background:"#1890ff"}},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em",fill:"#fff"})])),_:1}),i(m(I),{size:64,shape:"square",src:"https://joeschmoe.io/api/v1/random"},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em"})])),_:1})]))});x(D);var T=c(D,[["__scopeId","data-v-57ad362c"]]),F=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Avatar :size="32">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" />\n      </template>\n    </Avatar>\n    <Avatar :size="38">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" />\n      </template>\n    </Avatar>\n    <Avatar :size="42">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" />\n      </template>\n    </Avatar>\n    <Avatar :size="48">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" />\n      </template>\n    </Avatar>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Avatar, SvgIcon } from \'hut-ui\'\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  gap: 20px;\n}\n</style>',e.__sourceTitle=" 设置大小 "};const P={class:"wrap"},G=n({__name:"DemoTwo",setup:e=>(e,a)=>(t(),p("div",P,[i(m(I),{size:32},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em"})])),_:1}),i(m(I),{size:38},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em"})])),_:1}),i(m(I),{size:42},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em"})])),_:1}),i(m(I),{size:48},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em"})])),_:1})]))});F(G);var J=c(G,[["__scopeId","data-v-3b8eb4bd"]]),N=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Avatar :size="32">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" />\n      </template>\n    </Avatar>\n    <Avatar :size="38" shape="square">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" />\n      </template>\n    </Avatar>\n    <Avatar :size="42">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" />\n      </template>\n    </Avatar>\n    <Avatar :size="48" shape="square">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" />\n      </template>\n    </Avatar>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Avatar, SvgIcon } from \'hut-ui\'\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  gap: 20px;\n}\n</style>',e.__sourceTitle=" 设置形状 "};const O={class:"wrap"},U=n({__name:"DemoThree",setup:e=>(e,a)=>(t(),p("div",O,[i(m(I),{size:32},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em"})])),_:1}),i(m(I),{size:38,shape:"square"},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em"})])),_:1}),i(m(I),{size:42},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em"})])),_:1}),i(m(I),{size:48,shape:"square"},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em"})])),_:1})]))});N(U);var B=c(U,[["__scopeId","data-v-43822b4a"]]),E=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Avatar :size="42" shape="square" :style="{ background: randomColor() }">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" fill="#fff" />\n      </template>\n    </Avatar>\n    <Avatar :size="42" shape="square" :style="{ background: randomColor() }">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" fill="#fff" />\n      </template>\n    </Avatar>\n    <Avatar :size="42" shape="square" :style="{ background: randomColor() }">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" fill="#fff" />\n      </template>\n    </Avatar>\n    <Avatar :size="42" shape="square" :style="{ background: randomColor() }">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" fill="#fff" />\n      </template>\n    </Avatar>\n    <Avatar :size="42" shape="square" :style="{ background: randomColor() }">\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" fill="#fff" />\n      </template>\n    </Avatar>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Avatar, SvgIcon } from \'hut-ui\'\nimport { randomColor } from \'@/eg/helper\'\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  gap: 20px;\n}\n</style>',e.__sourceTitle=" 设置背景颜色 "};const H={class:"wrap"},K=n({__name:"DemoFour",setup:e=>(e,a)=>(t(),p("div",H,[i(m(I),{size:42,shape:"square",style:u({background:m(A)()})},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em",fill:"#fff"})])),_:1},8,["style"]),i(m(I),{size:42,shape:"square",style:u({background:m(A)()})},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em",fill:"#fff"})])),_:1},8,["style"]),i(m(I),{size:42,shape:"square",style:u({background:m(A)()})},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em",fill:"#fff"})])),_:1},8,["style"]),i(m(I),{size:42,shape:"square",style:u({background:m(A)()})},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em",fill:"#fff"})])),_:1},8,["style"]),i(m(I),{size:42,shape:"square",style:u({background:m(A)()})},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em",fill:"#fff"})])),_:1},8,["style"])]))});E(K);var L=c(K,[["__scopeId","data-v-009dc4f4"]]),M=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Avatar\n      :size="42"\n      shape="square"\n      src="https://joeschmoe.io/api/v1/random"\n      :style="{ background: randomColor() }"\n    >\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" />\n      </template>\n    </Avatar>\n    <Avatar\n      :size="42"\n      shape="round"\n      src="https://joeschmoe.io/api/v1/random"\n      :style="{ background: randomColor() }"\n    >\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" />\n      </template>\n    </Avatar>\n    <Avatar\n      :size="42"\n      shape="square"\n      src="https://joeschmoe.io/api/v1/random"\n      :style="{ background: randomColor() }"\n    >\n      <template #icon>\n        <SvgIcon name="user" width="2em" height="2em" />\n      </template>\n    </Avatar>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Avatar, SvgIcon } from \'hut-ui\'\nimport { randomColor } from \'@/eg/helper\'\n<\/script>\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  gap: 20px;\n}\n</style>',e.__sourceTitle=" 设置头像链接 "};const Q={class:"wrap"},R=n({__name:"DemoFive",setup:e=>(e,a)=>(t(),p("div",Q,[i(m(I),{size:42,shape:"square",src:"https://joeschmoe.io/api/v1/random",style:u({background:m(A)()})},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em"})])),_:1},8,["style"]),i(m(I),{size:42,shape:"round",src:"https://joeschmoe.io/api/v1/random",style:u({background:m(A)()})},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em"})])),_:1},8,["style"]),i(m(I),{size:42,shape:"square",src:"https://joeschmoe.io/api/v1/random",style:u({background:m(A)()})},{icon:r((()=>[i(m(h),{name:"user",width:"2em",height:"2em"})])),_:1},8,["style"])]))});M(R);var V=c(R,[["__scopeId","data-v-65086a76"]]);const W=n({__name:"Demo",setup(a){const n=d((()=>[T,J,B,L,V].map(((e,a)=>y(e,"avatar",a)))));return(a,r)=>(t(),s(e,{"demo-arr":m(n)},null,8,["demo-arr"]))}}),X=n({__name:"Index",setup(e){v(null);const n=["基本用法","设置大小","设置形状","设置背景颜色","设置头像链接"],o=d((()=>z("avatar",n)));return(e,n)=>(t(),s(a,{"nav-arr":m(o),title:"Avatar 头像","component-name":"avatar"},{intro:r((()=>[i(k)])),demo:r((()=>[i(W)])),api:r((()=>[i(C)])),_:1},8,["nav-arr"]))}});export{X as default};
