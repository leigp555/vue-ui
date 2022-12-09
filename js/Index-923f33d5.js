import{_ as n,P as a,T as o,g as e,D as l,C as t,a as s}from"./DemoDisplay-55668b6d.js";import{_ as r,a as p}from"./Upload.vue_vue_type_style_index_0_lang-31d412f5.js";import{d as i,r as u,o as d,c,v as m,b as g,g as f,w as _,e as h,l as b,h as v,_ as x,p as y,j as C,z as S}from"./index-5d11ddfa.js";import{_ as w}from"./ApiIntro-cc0cc467.js";const P={class:"ui-upload-wrap"},U=i({__name:"Upload",emits:["change","drop"],setup(n,{emit:a}){const o=n=>new Promise(((a,o)=>{const e=new FileReader;e.readAsDataURL(n),e.onerror=n=>{o(n)},e.onload=()=>{a(e.result)}})),e=u(!1),l=n=>{if(!e.value){const e=n.target,l=Array.from(e.files?e.files:[]),t=l.map((n=>o(n)));a("change",{blobs:l,urlPromises:t})}e.value=!1},t=n=>{if(n.dataTransfer){e.value=!0;const l=Array.from(n.dataTransfer.files),t=l.map((n=>o(n)));a("change",{blobs:l,urlPromises:t})}};return(n,a)=>(d(),c("div",P,[m(n.$slots,"default"),g("input",{class:"ui-upload-input",type:"file",accept:"image/*",onChange:l,onDrop:t,multiple:""},null,32)]))}}),B=g("p",null,"文件选择上传和拖拽上传控件。",-1),I=g("ul",null,[g("li",null,"Upload: 主要组件")],-1),D=g("ul",null,[g("li",null,"当需要上传一个或一些文件时。"),g("li",null,"当需要展现上传的进度时。"),g("li",null,"当需要使用拖拽交互时。")],-1),j=i({__name:"Intro",setup:e=>(e,l)=>(d(),f(b(o),null,{default:_((()=>[h(b(n),null,{default:_((()=>[v("简介")])),_:1}),h(b(a),null,{default:_((()=>[B])),_:1}),h(b(n),null,{default:_((()=>[v("组件概览")])),_:1}),h(b(a),null,{default:_((()=>[I])),_:1}),h(b(n),null,{default:_((()=>[v("使用场景")])),_:1}),h(b(a),null,{default:_((()=>[D])),_:1})])),_:1}))}),k=i({__name:"Api",setup(n){const a=[{rowIndex:1,"事件名称":"change","说明":"上传时的文件回调","回调参数":"Function(data: { blobs: File[]; urlPromises: string[] })"}],o=[];return(n,e)=>(d(),f(w,{"attr-content-arr":o,"event-content":a}))}});var T=n=>{n.__sourceCode='<template>\n  <Upload @change="onChange">\n    <Button>\n      <template #icon>\n        <SvgIcon name="upload" fill="#fff" />\n      </template>\n      upload\n    </Button>\n  </Upload>\n</template>\n\n<script setup lang="ts">\nimport { Upload, SvgIcon, Button } from \'ant\'\n\nconst onChange = (data: { blobs: File[]; urlPromises: string[] }) => {\n  console.log(data.blobs)\n  console.log(data.urlPromises)\n}\n<\/script>',n.__sourceTitle=" 基本用法 "};const z=i({__name:"DemoOne",setup(n){const a=n=>{console.log(n.blobs),console.log(n.urlPromises)};return(n,o)=>(d(),f(b(U),{onChange:a},{default:_((()=>[h(b(p),null,{icon:_((()=>[h(b(r),{name:"upload",fill:"#fff"})])),default:_((()=>[v(" upload ")])),_:1})])),_:1}))}});T(z);var A=n=>{n.__sourceCode='<template>\n  <Upload @change="onChange" class="upload">\n    <div class="wrap">\n      <div class="content">\n        <p :style="{ marginBottom: \'10px\' }">\n          <SvgIcon name="img_push" width="2.5em" height="2.5em" />\n        </p>\n        <p :style="{ marginBottom: \'4px\', fontSize: \'16px\' }">\n          Click or drag file to this area to upload\n        </p>\n        <p :style="{ marginBottom: \'4px\', fontSize: \'14px\' }">\n          Support for a single or bulk upload. Strictly prohibit from uploading company\n          data or other band files\n        </p>\n      </div>\n    </div>\n  </Upload>\n</template>\n\n<script setup lang="ts">\nimport { Upload, SvgIcon, Button } from \'ant\'\n\nconst onChange = (data: { blobs: File[]; urlPromises: string[] }) => {\n  console.log(data.blobs)\n  console.log(data.urlPromises)\n}\n<\/script>\n\n<style lang="scss" scoped>\n.upload {\n  display: block;\n  .wrap {\n    border: 1px dashed #d9d9d9;\n    display: flex;\n    min-height: 200px;\n    align-items: center;\n    justify-content: center;\n    background-color: #fafafa;\n    > .content {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      gap: 10px;\n      padding: 16px 10px;\n      text-align: center;\n    }\n  }\n}\n</style>',n.__sourceTitle=" 拖拽上传 "};const F=n=>(y("data-v-2a99e7e4"),n=n(),C(),n),R={class:"wrap"},L={class:"content"},O={style:{marginBottom:"10px"}},$=F((()=>g("p",{style:{marginBottom:"4px",fontSize:"16px"}}," Click or drag file to this area to upload ",-1))),q=F((()=>g("p",{style:{marginBottom:"4px",fontSize:"14px"}}," Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files ",-1))),E=i({__name:"DemoTwo",setup(n){const a=n=>{console.log(n.blobs),console.log(n.urlPromises)};return(n,o)=>(d(),f(b(U),{onChange:a,class:"upload"},{default:_((()=>[g("div",R,[g("div",L,[g("p",O,[h(b(r),{name:"img_push",width:"2.5em",height:"2.5em"})]),$,q])])])),_:1}))}});A(E);var G=x(E,[["__scopeId","data-v-2a99e7e4"]]);const H=i({__name:"Demo",setup(n){const a=S((()=>[z,G].map(((n,a)=>e(n,"upload",a)))));return(n,o)=>(d(),f(l,{"demo-arr":b(a)},null,8,["demo-arr"]))}}),J=i({__name:"Index",setup(n){u(null);const a=["基本用法","拖拽上传"],o=S((()=>s("upload",a)));return(n,a)=>(d(),f(t,{"nav-arr":b(o),title:"Upload 上传","component-name":"upload"},{intro:_((()=>[h(j)])),demo:_((()=>[h(H)])),api:_((()=>[h(k)])),_:1},8,["nav-arr"]))}});export{J as default};
