import{_ as e,P as a,T as t,g as n,D as l,a as s,b as r}from"./DemoDisplay-326921c5.js";import{_ as u}from"./Upload.vue_vue_type_style_index_0_lang-ed87ac64.js";import"./SubMenu.vue_vue_type_style_index_0_lang-e1534eb9.js";import{d as o,o as i,c,b as d,t as p,v as m,n as v,k as _,r as f,C as y,l as b,z as k,y as g,h as B,w as x,e as C,i as w,_ as S,p as I,j as z}from"./index-5f8f9faf.js";import{_ as h}from"./ApiIntro-249450a9.js";const D={class:"ui-card-title"},P={class:"card-title"},j={class:"card-action"},$={class:"ui-card-content"},L=o({__name:"Card",props:{border:{type:Boolean,default:!0},title:null,shadow:{type:Boolean,default:!1}},setup:e=>(a,t)=>(i(),c("div",{class:v(["ui-card-wrap",{bordered:e.border,shadow:e.shadow}])},[d("div",D,[d("div",P,p(e.title),1),d("div",j,[m(a.$slots,"extra")])]),d("div",$,[m(a.$slots,"default")])],2))}),E={class:"ui-slider-view"},T={class:"ui-slider-tip"},M=o({__name:"Slider",props:{value:{default:0}},emits:["update:value"],setup(e,{emit:a}){const t=e,{value:n}=_(t),l=f(null),s=f(null),r=f(null),u=f(!1),o=f(0),m=f(0),v=f(0),k=f(0),g=f(0);y((()=>{l.value&&r.value&&s.value&&(o.value=l.value.getBoundingClientRect().width-16,m.value=n.value/100*o.value,k.value=m.value,r.value.style.transform=`translate3d(${m.value}px,-50%,0)`,s.value.style.transform=`translate3d(${m.value}px,0,0)`)}));const B=e=>{if(e.stopPropagation(),e.preventDefault(),u.value&&r.value&&s.value){g.value=k.value+e.clientX-v.value;const t=m.value+g.value-k.value;t<=o.value&&t>=0?(r.value.style.transform=`translate3d(${g.value}px,-50%,0)`,s.value.style.transform=`translate3d(${g.value}px,0,0)`,a("update:value",Math.ceil(t/o.value*100))):t>o.value?(r.value.style.transform=`translate3d(${o.value}px,-50%,0)`,s.value.style.transform=`translate3d(${o.value}px,0,0)`,a("update:value",100),g.value=o.value):t<0&&(r.value.style.transform="translate3d(0px,-50%,0)",s.value.style.transform="translate3d(0px,0,0)",a("update:value",0),g.value=0)}},x=()=>{k.value=g.value,u.value=!1,document.documentElement.removeEventListener("mousemove",B),document.documentElement.removeEventListener("mouseup",x),r.value.classList.remove("ui-slider-drag")},C=e=>{u.value=!0,v.value=e.clientX,m.value=n.value/100*o.value,document.documentElement.addEventListener("mousemove",B),document.documentElement.addEventListener("mouseup",x),r.value.classList.add("ui-slider-drag")};return(e,a)=>(i(),c("div",{class:"ui-slider-wrap",ref_key:"sliderWrapRef",ref:l},[d("div",E,[d("div",{class:"ui-slider-line",ref_key:"sliderLineRef",ref:s},null,512)]),d("div",{class:"ui-slider-block",ref_key:"sliderBlockRef",ref:r,onMousedown:C,onMouseup:x},[d("span",T,p(b(n)),1)],544)],512))}}),R=o({__name:"Space",props:{direction:{default:"row"},size:{default:"5px"},alignItems:{default:"start"},justifyContent:{default:"start"}},setup(e){const a=e,t=k((()=>"string"==typeof a.size?a.size:`${a.size}px`));return(a,n)=>(i(),c("div",{class:"ui-space-wrap",style:g({flexDirection:e.direction,gap:b(t),alignItems:e.alignItems,justifyContent:e.justifyContent})},[m(a.$slots,"default")],4))}}),A=d("p",null,"设置组件之间的间距。",-1),U=d("ul",null,[d("li",null,"Space：主要组件")],-1),X=d("p",null,"避免组件紧贴在一起，拉开统一的空间。",-1),F=d("ul",null,[d("li",null,"适合行内元素的水平间距。"),d("li",null,"可以设置各种水平对齐方式。")],-1),N=o({__name:"Intro",setup:n=>(n,l)=>(i(),B(b(t),null,{default:x((()=>[C(b(e),null,{default:x((()=>[w("简介")])),_:1}),C(b(a),null,{default:x((()=>[A])),_:1}),C(b(e),null,{default:x((()=>[w("组件概述")])),_:1}),C(b(a),null,{default:x((()=>[U])),_:1}),C(b(e),null,{default:x((()=>[w("使用场景")])),_:1}),C(b(a),null,{default:x((()=>[X,F])),_:1})])),_:1}))}),O=o({__name:"Api",setup(e){const a=[],t=[{componentName:"Space",attrContent:[{rowIndex:1,"属性":"direction","说明":"分布方式","类型":"'row' | 'column'","默认值":"row"},{rowIndex:2,"属性":"size","说明":"间距大小","类型":"string|number","默认值":"false"},{rowIndex:3,"属性":"alignItems","说明":"垂直分布","类型":"'start' | 'center' | 'end' | 'baseline'","默认值":"start"},{rowIndex:4,"属性":"justifyContent","说明":"水平分布","类型":"'start' | 'center' | 'end'","默认值":"start"}]}];return(e,n)=>(i(),B(h,{"attr-content-arr":t,"event-content":a}))}});var W=e=>{e.__sourceCode='<template>\n  <Space direction="row" :size="50">\n    <Button>button</Button>\n    <Button>button</Button>\n    <Button>button</Button>\n  </Space>\n</template>\n\n<script setup lang="ts">\nimport { Space, Button } from \'ant\'\n<\/script>',e.__sourceTitle=" 基本用法 "};const q=o({__name:"DemoOne",setup:e=>(e,a)=>(i(),B(b(R),{direction:"row",size:50},{default:x((()=>[C(b(u),null,{default:x((()=>[w("button")])),_:1}),C(b(u),null,{default:x((()=>[w("button")])),_:1}),C(b(u),null,{default:x((()=>[w("button")])),_:1})])),_:1}))});W(q);var G=e=>{e.__sourceCode='<template>\n  <div>\n    <Slider v-model:value="size" />\n    <br />\n    <br />\n    <Space :size="size">\n      <Button type="primary">Primary</Button>\n      <Button>Default</Button>\n      <Button type="dashed">Dashed</Button>\n      <Button type="link">Link</Button>\n    </Space>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Space, Button, Slider } from \'@/lib\'\n\nconst size = ref<number>(8)\n<\/script>',e.__sourceTitle="自定义间距"};const H=d("br",null,null,-1),J=d("br",null,null,-1),K=o({__name:"DemoTwo",setup(e){const a=f(8);return(e,t)=>(i(),c("div",null,[C(b(M),{value:a.value,"onUpdate:value":t[0]||(t[0]=e=>a.value=e)},null,8,["value"]),H,J,C(b(R),{size:a.value},{default:x((()=>[C(b(u),{type:"primary"},{default:x((()=>[w("Primary")])),_:1}),C(b(u),null,{default:x((()=>[w("Default")])),_:1}),C(b(u),{type:"dashed"},{default:x((()=>[w("Dashed")])),_:1}),C(b(u),{type:"link"},{default:x((()=>[w("Link")])),_:1})])),_:1},8,["size"])]))}});G(K);var Q=e=>{e.__sourceCode='<template>\n  <Space direction="column" :size="20">\n    <Card title="Card" style="width: 300px">\n      <p>Card content</p>\n      <p>Card content</p>\n    </Card>\n    <Card title="Card" style="width: 300px">\n      <p>Card content</p>\n      <p>Card content</p>\n    </Card>\n  </Space>\n</template>\n\n<script setup lang="ts">\nimport { Space, Card } from \'ant\'\n<\/script>',e.__sourceTitle=" 垂直间距 "};const V=d("p",null,"Card content",-1),Y=d("p",null,"Card content",-1),Z=d("p",null,"Card content",-1),ee=d("p",null,"Card content",-1),ae=o({__name:"DemoThree",setup:e=>(e,a)=>(i(),B(b(R),{direction:"column",size:20},{default:x((()=>[C(b(L),{title:"Card",style:{width:"300px"}},{default:x((()=>[V,Y])),_:1}),C(b(L),{title:"Card",style:{width:"300px"}},{default:x((()=>[Z,ee])),_:1})])),_:1}))});Q(ae);var te=e=>{e.__sourceCode='<template>\n  <div class="space-align-container">\n    <div class="space-align-block">\n      <Space alignItems="center">\n        center\n        <Button>Primary</Button>\n        <span class="mock-block">Block</span>\n      </Space>\n    </div>\n    <div class="space-align-block">\n      <Space alignItems="start">\n        start\n        <Button type="primary">Primary</Button>\n        <span class="mock-block">Block</span>\n      </Space>\n    </div>\n    <div class="space-align-block">\n      <Space alignItems="end">\n        end\n        <Button type="primary">Primary</Button>\n        <span class="mock-block">Block</span>\n      </Space>\n    </div>\n    <div class="space-align-block">\n      <Space alignItems="baseline">\n        baseline\n        <Button type="primary">Primary</Button>\n        <span class="mock-block">Block</span>\n      </Space>\n    </div>\n  </div>\n</template>\n<script lang="ts" setup>\nimport { Space, Button } from \'ant\'\n<\/script>\n\n<style scoped>\n.space-align-container {\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.space-align-block {\n  margin: 8px 4px;\n  border: 1px solid #40a9ff;\n  padding: 4px;\n  flex: none;\n}\n.space-align-block .mock-block {\n  display: inline-block;\n  padding: 32px 8px 16px;\n  background: rgba(150, 150, 150, 0.2);\n}\n</style>',e.__sourceTitle=" 设置对齐模式 "};const ne=e=>(I("data-v-43189882"),e=e(),z(),e),le={class:"space-align-container"},se={class:"space-align-block"},re=ne((()=>d("span",{class:"mock-block"},"Block",-1))),ue={class:"space-align-block"},oe=ne((()=>d("span",{class:"mock-block"},"Block",-1))),ie={class:"space-align-block"},ce=ne((()=>d("span",{class:"mock-block"},"Block",-1))),de={class:"space-align-block"},pe=ne((()=>d("span",{class:"mock-block"},"Block",-1))),me=o({__name:"DemoFour",setup:e=>(e,a)=>(i(),c("div",le,[d("div",se,[C(b(R),{alignItems:"center"},{default:x((()=>[w(" center "),C(b(u),null,{default:x((()=>[w("Primary")])),_:1}),re])),_:1})]),d("div",ue,[C(b(R),{alignItems:"start"},{default:x((()=>[w(" start "),C(b(u),{type:"primary"},{default:x((()=>[w("Primary")])),_:1}),oe])),_:1})]),d("div",ie,[C(b(R),{alignItems:"end"},{default:x((()=>[w(" end "),C(b(u),{type:"primary"},{default:x((()=>[w("Primary")])),_:1}),ce])),_:1})]),d("div",de,[C(b(R),{alignItems:"baseline"},{default:x((()=>[w(" baseline "),C(b(u),{type:"primary"},{default:x((()=>[w("Primary")])),_:1}),pe])),_:1})])]))});te(me);var ve=S(me,[["__scopeId","data-v-43189882"]]);const _e=o({__name:"Demo",setup(e){const a=k((()=>[q,K,ae,ve].map(((e,a)=>n(e,"space",a)))));return(e,t)=>(i(),B(l,{"demo-arr":b(a)},null,8,["demo-arr"]))}}),fe=o({__name:"Index",setup(e){f(null);const a=["基本用法","自定义间距","垂直间距","设置对齐模式"],t=k((()=>r("space",a)));return(e,a)=>(i(),B(s,{"nav-arr":b(t),title:"Space 间距","component-name":"space"},{intro:x((()=>[C(N)])),demo:x((()=>[C(_e)])),api:x((()=>[C(O)])),_:1},8,["nav-arr"]))}});export{fe as default};
