import{_ as e,P as s,T as n,g as t,D as o,C as r,a}from"./DemoDisplay-2d0cc11b.js";import{m as i}from"./Upload.vue_vue_type_style_index_0_lang-466d0855.js";import{_ as c}from"./SubMenu.vue_vue_type_style_index_0_lang-63ec0c5c.js";import{d as l,o as m,g as p,w as u,e as d,l as g,h as x,b as _,c as w,F as I,z as f,r as h}from"./index-64f31046.js";import{_ as y}from"./ApiIntro-ec0be594.js";const T=_("p",null,"警告提示，展现需要关注的信息。",-1),b=_("ul",null,[_("li",null,"Alert")],-1),A=_("ul",null,[_("li",null,"当某个页面需要向用户显示警告的信息时。"),_("li",null,"非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。")],-1),v=l({__name:"Intro",setup:t=>(t,o)=>(m(),p(g(n),null,{default:u((()=>[d(g(e),{level:4},{default:u((()=>[x("简介")])),_:1}),d(g(s),null,{default:u((()=>[T])),_:1}),d(g(e),{level:4},{default:u((()=>[x("组件概述")])),_:1}),d(g(s),null,{default:u((()=>[b])),_:1}),d(g(e),{level:4},{default:u((()=>[x("使用场景")])),_:1}),d(g(s),null,{default:u((()=>[A])),_:1})])),_:1}))}),D=l({__name:"Api",setup(e){const s=[{rowIndex:1,"事件名称":"close","说明":"关闭时触发的回调函数","回调参数":"(message:string) => void"}],n=[{componentName:"Alert",attrContent:[{rowIndex:1,"属性":"message","说明":"警告提示内容","类型":"string","默认值":""},{rowIndex:2,"属性":"type","说明":"指定警告提示的样式，有四种选择 success、info、warning、error","类型":"string","默认值":"success"},{rowIndex:3,"属性":"closable","说明":"可关闭的","类型":"boolean","默认值":"false"},{rowIndex:4,"属性":"description","说明":"警告提示的辅助性文字介绍","类型":"string","默认值":""},{rowIndex:5,"属性":"showIcon","说明":"是否显示辅助图标","类型":"boolean","默认值":"false"},{rowIndex:6,"属性":"banner","说明":"是否用作顶部公告","类型":"boolean","默认值":"false"}]}];return(e,t)=>(m(),p(y,{"attr-content-arr":n,"event-content":s}))}});var S=e=>{e.__sourceCode='<template>\n  <Alert message="Success Text" type="success" showIcon />\n  <Alert message="Info Text" type="info" showIcon />\n  <Alert message="Warning Text" type="warning" showIcon />\n  <Alert message="Error Text" type="error" showIcon />\n</template>\n\n<script setup lang="ts">\nimport { Alert } from \'ant\'\n<\/script>',e.__sourceTitle=" 基本用法 "};const q=l({__name:"DemoOne",setup:e=>(e,s)=>(m(),w(I,null,[d(g(i),{message:"Success Text",type:"success",showIcon:""}),d(g(i),{message:"Info Text",type:"info",showIcon:""}),d(g(i),{message:"Warning Text",type:"warning",showIcon:""}),d(g(i),{message:"Error Text",type:"error",showIcon:""})],64))});S(q);var E=e=>{e.__sourceCode='<template>\n  <Alert message="Success Text" type="success" showIcon closable @close="onClose" />\n  <Alert message="Info Text" type="info" showIcon closable />\n  <Alert message="Warning Text" type="warning" showIcon closable />\n  <Alert message="Error Text" type="error" showIcon closable />\n</template>\n\n<script setup lang="ts">\nimport { Alert } from \'ant\'\n\nconst onClose = (message: string) => {\n  console.log(message)\n}\n<\/script>',e.__sourceTitle=" 可关闭的 "};const C=l({__name:"DemoTwo",setup(e){const s=e=>{console.log(e)};return(e,n)=>(m(),w(I,null,[d(g(i),{message:"Success Text",type:"success",showIcon:"",closable:"",onClose:s}),d(g(i),{message:"Info Text",type:"info",showIcon:"",closable:""}),d(g(i),{message:"Warning Text",type:"warning",showIcon:"",closable:""}),d(g(i),{message:"Error Text",type:"error",showIcon:"",closable:""})],64))}});E(C);var W=e=>{e.__sourceCode='<template>\n  <Alert message="Success Text" type="success" :description="description" showIcon />\n  <Alert message="Info Text" type="info" :description="description" showIcon />\n  <Alert message="Warning Text" type="warning" :description="description" showIcon />\n  <Alert message="Error Text" type="error" :description="description" showIcon />\n</template>\n\n<script setup lang="ts">\nimport { Alert } from \'ant\'\n\nconst description =\n  \'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.\'\n<\/script>',e.__sourceTitle=" 可添加描述 "};const L=l({__name:"DemoThree",setup(e){const s="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.";return(e,n)=>(m(),w(I,null,[d(g(i),{message:"Success Text",type:"success",description:s,showIcon:""}),d(g(i),{message:"Info Text",type:"info",description:s,showIcon:""}),d(g(i),{message:"Warning Text",type:"warning",description:s,showIcon:""}),d(g(i),{message:"Error Text",type:"error",description:s,showIcon:""})],64))}});W(L);var j=e=>{e.__sourceCode='<template>\n  <Alert\n    message="Success Text"\n    type="success"\n    :description="description"\n    showIcon\n    closable\n  />\n  <Alert message="Info Text" type="info" :description="description" showIcon closable />\n  <Alert\n    message="Warning Text"\n    type="warning"\n    :description="description"\n    showIcon\n    closable\n  />\n  <Alert\n    message="Error Text"\n    type="error"\n    :description="description"\n    showIcon\n    closable\n  />\n</template>\n\n<script setup lang="ts">\nimport { Alert } from \'ant\'\n\nconst description =\n  \'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.\'\n<\/script>',e.__sourceTitle=" 可关闭 "};const F=l({__name:"DemoFour",setup(e){const s="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.";return(e,n)=>(m(),w(I,null,[d(g(i),{message:"Success Text",type:"success",description:s,showIcon:"",closable:""}),d(g(i),{message:"Info Text",type:"info",description:s,showIcon:"",closable:""}),d(g(i),{message:"Warning Text",type:"warning",description:s,showIcon:"",closable:""}),d(g(i),{message:"Error Text",type:"error",description:s,showIcon:"",closable:""})],64))}});j(F);var z=e=>{e.__sourceCode='<template>\n  <Alert message="Success Text" type="error" closable showIcon>\n    <template #description>\n      <p style="display: flex; align-items: center">\n        Success Description\n        <span style="color: red">Success</span>\n        Description Success Description\n      </p>\n    </template>\n  </Alert>\n</template>\n\n<script setup lang="ts">\nimport { Alert } from \'ant\'\n\nconst description =\n  \'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.\'\n<\/script>',e.__sourceTitle=" 自定义描述内容 "};const M=_("p",{style:{display:"flex","align-items":"center"}},[x(" Success Description "),_("span",{style:{color:"red"}},"Success"),x(" Description Success Description ")],-1),N=l({__name:"DemoFive",setup:e=>(e,s)=>(m(),p(g(i),{message:"Success Text",type:"error",closable:"",showIcon:""},{description:u((()=>[M])),_:1}))});z(N);var O=e=>{e.__sourceCode='<template>\n  <Alert message="Error Text" type="error" showIcon banner />\n  <Alert message="Error Text" type="error" showIcon banner :description="description" />\n  <Alert message="Error Text" type="error" showIcon banner>\n    <template #icon>\n      <SvgIcon name="weixin" width="1em" height="1em" fill="#52c41a" />\n    </template>\n  </Alert>\n  <Alert message="Error Text" type="success" showIcon banner :description="description">\n    <template #icon>\n      <SvgIcon name="weixin" width="1em" height="1em" fill="#52c41a" />\n    </template>\n  </Alert>\n</template>\n\n<script setup lang="ts">\nimport { Alert, SvgIcon } from \'ant\'\n\nconst description =\n  \'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.\'\n<\/script>',e.__sourceTitle=" 自定义icon "};const P=l({__name:"DemoSix",setup(e){const s="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.";return(e,n)=>(m(),w(I,null,[d(g(i),{message:"Error Text",type:"error",showIcon:"",banner:""}),d(g(i),{message:"Error Text",type:"error",showIcon:"",banner:"",description:s}),d(g(i),{message:"Error Text",type:"error",showIcon:"",banner:""},{icon:u((()=>[d(g(c),{name:"weixin",width:"1em",height:"1em",fill:"#52c41a"})])),_:1}),d(g(i),{message:"Error Text",type:"success",showIcon:"",banner:"",description:s},{icon:u((()=>[d(g(c),{name:"weixin",width:"1em",height:"1em",fill:"#52c41a"})])),_:1})],64))}});O(P);var U=e=>{e.__sourceCode='<template>\n  <Alert message="Success Text" type="success" />\n  <Alert message="Info Text" type="info" />\n  <Alert message="Warning Text" type="warning" />\n  <Alert message="Error Text" type="error" />\n</template>\n\n<script setup lang="ts">\nimport { Alert } from \'ant\'\n<\/script>',e.__sourceTitle=" 没有icon "};const k=l({__name:"DemoSeven",setup:e=>(e,s)=>(m(),w(I,null,[d(g(i),{message:"Success Text",type:"success"}),d(g(i),{message:"Info Text",type:"info"}),d(g(i),{message:"Warning Text",type:"warning"}),d(g(i),{message:"Error Text",type:"error"})],64))});U(k);const B=l({__name:"Demo",setup(e){const s=f((()=>[q,C,L,F,N,P,k].map(((e,s)=>t(e,"alert",s)))));return(e,n)=>(m(),p(o,{"demo-arr":g(s)},null,8,["demo-arr"]))}}),G=l({__name:"Index",setup(e){h(null);const s=["基本用法","可关闭的","可添加描述","可关闭","自定义描述内容","自定义icon","没有icon"],n=f((()=>a("alert",s)));return(e,s)=>(m(),p(r,{"nav-arr":g(n),title:"Alert 警告提示","component-name":"alert"},{intro:u((()=>[d(v)])),demo:u((()=>[d(B)])),api:u((()=>[d(D)])),_:1},8,["nav-arr"]))}});export{G as default};
