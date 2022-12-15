import{D as t,C as e}from"./DemoDisplay-f6ca5a4b.js";import{d as n,aa as a,an as i,ao as s,b as u,c as o,e as m,F as l,h as r,m as d,f as c,t as p,q as _,C as h,j as f,B as v,i as y,g as T,ap as q,G as A,I as k,L as g,r as b}from"./index-597196db.js";import{_ as x,P as G,T as J}from"./Paragraph-80763fd9.js";import{_ as M}from"./ApiIntro.vue_vue_type_style_index_0_lang-7bf8e844.js";import{g as D,a as j}from"./helper-2dff78a5.js";import{_ as L}from"./Avatar.vue_vue_type_script_setup_true_lang-fea31ab6.js";const C={class:"ui-comment-wrap"},w={class:"item-comment-wrap"},I={class:"avatar"},P={class:"content"},z={class:"item-comment-title"},B={class:"description"},$={key:0,style:{color:"#40a9ff",marginRight:"5px"}},N={class:"action"},S={key:0,class:"ui-comment-reply"},F=n({__name:"Comment",props:{data:null},setup:t=>(a.locale(i),a.extend(s),(e,n)=>{const i=u("Comment",!0);return o(),m("div",C,[(o(!0),m(l,null,r(t.data,(t=>(o(),m("div",{class:"ui-comment-item",key:t.id},[d("div",w,[d("div",I,[c(L,{src:t.from_avatar,style:{backgroundColor:"#fff"},size:38},null,8,["src"])]),d("div",P,[d("div",z,[d("span",null,p(t.from_auth),1),d("span",null,p(_(a)(t.createdAt).fromNow()),1)]),d("div",B,["main"!==t.type?(o(),m("span",$,p(`@${t.to_auth}:`),1)):h("",!0),f(" "+p(`${t.content}`),1)]),d("div",N,[v(e.$slots,"actions",{item:t})])])]),t.reply?(o(),m("div",S,[c(i,{data:t.reply},null,8,["data"])])):h("",!0)])))),128))])})}),O=d("p",null,"对网站内容的反馈、评价和讨论。",-1),R=d("ul",null,[d("li",null,"Comment: 主要组件")],-1),E=d("ul",null,[d("li",null,"评论组件可用于对事物的讨论，例如页面、博客文章、问题等等。")],-1),H=n({__name:"Intro",setup:t=>(t,e)=>(o(),y(_(J),null,{default:T((()=>[c(_(x),null,{default:T((()=>[f("简介")])),_:1}),c(_(G),null,{default:T((()=>[O])),_:1}),c(_(x),null,{default:T((()=>[f("组件概览")])),_:1}),c(_(G),null,{default:T((()=>[R])),_:1}),c(_(x),null,{default:T((()=>[f("使用场景")])),_:1}),c(_(G),null,{default:T((()=>[E])),_:1})])),_:1}))}),K=n({__name:"Api",setup(t){const e=[],n=[{componentName:"Comment",attrContent:[{rowIndex:1,"属性":"data","说明":"数据","类型":"CommentData[]","默认值":"[]"}]}];return(t,a)=>(o(),y(M,{"attr-content-arr":n,"event-content":e}))}}),Q={class:"ui-template-wrap"},U={class:"actions"},V={class:"kudos"},W={class:"agree"},X={class:"oppose"},Y=n({__name:"DemoOne",setup(t){const e=[{id:1,type:"main",from_avatar:"https://joeschmoe.io/api/v1/random",from_auth:"Lorem1",to_auth:"Auth",content:"Accusantium ad ducimus eos et\n      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique\n      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.",like_num:10,dislike_num:0,createdAt:"Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)",updatedAt:"Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)"},{id:2,type:"main",from_avatar:"https://joeschmoe.io/api/v1/random",from_auth:"Lorem2",to_auth:"Auth",content:"Accusantium ad ducimus eos et\n      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique\n      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.",like_num:10,dislike_num:0,createdAt:"Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)",updatedAt:"Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)",reply:[{id:3,type:"replay",from_avatar:"https://joeschmoe.io/api/v1/random",from_auth:"Lorem2-1",to_auth:"Lorem2",content:"Accusantium ad ducimus eos et\n      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique\n      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.",like_num:10,dislike_num:0,createdAt:"Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)",updatedAt:"Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)"}]},{id:4,type:"main",from_avatar:"https://joeschmoe.io/api/v1/random",from_auth:"Lorem3",to_auth:"Auth",content:"Accusantium ad ducimus eos et\n      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique\n      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.",like_num:10,dislike_num:0,createdAt:"Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)",updatedAt:"Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)",reply:[{id:5,type:"replay",from_avatar:"https://joeschmoe.io/api/v1/random",from_auth:"Lorem3-1",to_auth:"Lorem3",content:"Accusantium ad ducimus eos et\n      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique\n      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.",like_num:10,dislike_num:0,createdAt:"Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)",updatedAt:"Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)"},{id:6,type:"replay",from_avatar:"https://joeschmoe.io/api/v1/random",from_auth:"Lorem3-2",to_auth:"Lorem3-1",content:"Accusantium ad ducimus eos et\n      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique\n      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.",like_num:10,dislike_num:0,createdAt:"Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)",updatedAt:"Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)"}]}];return(t,n)=>(o(),m("div",Q,[c(_(F),{data:e},{actions:T((t=>[d("div",U,[d("div",V,[d("div",W,[d("span",null,[c(_(q),{name:"agree",width:"1em",height:"1em"})]),d("span",null,p(t.item.like_num),1)]),d("div",X,[d("span",null,[c(_(q),{name:"agree",width:"1em",height:"1em",style:A({transform:"rotate(180deg)"})},null,8,["style"])]),d("span",null,p(t.item.dislike_num),1)])]),c(_(k),{type:"link",style:{fontSize:"12px",display:"inline-block"}},{default:T((()=>[f("回复")])),_:1})])])),_:1})]))}}),Z=t=>{t.__sourceCode="<script setup lang=\"ts\">\nimport { Icon_agree } from '@hut-ui/icons-vue'\nimport { Button, Comment, CommentData } from 'hut-ui'\n\nconst data: CommentData[] = [\n  {\n    id: 1,\n    type: 'main',\n    from_avatar: 'https://joeschmoe.io/api/v1/random',\n    from_auth: 'Lorem1',\n    to_auth: 'Auth',\n    content: `Accusantium ad ducimus eos et\n      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique\n      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,\n    like_num: 10,\n    dislike_num: 0,\n    createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',\n    updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)'\n  },\n  {\n    id: 2,\n    type: 'main',\n    from_avatar: 'https://joeschmoe.io/api/v1/random',\n    from_auth: 'Lorem2',\n    to_auth: 'Auth',\n    content: `Accusantium ad ducimus eos et\n      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique\n      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,\n    like_num: 10,\n    dislike_num: 0,\n    createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',\n    updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',\n    reply: [\n      {\n        id: 3,\n        type: 'replay',\n        from_avatar: 'https://joeschmoe.io/api/v1/random',\n        from_auth: 'Lorem2-1',\n        to_auth: 'Lorem2',\n        content: `Accusantium ad ducimus eos et\n      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique\n      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,\n        like_num: 10,\n        dislike_num: 0,\n        createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',\n        updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)'\n      }\n    ]\n  },\n  {\n    id: 4,\n    type: 'main',\n    from_avatar: 'https://joeschmoe.io/api/v1/random',\n    from_auth: 'Lorem3',\n    to_auth: 'Auth',\n    content: `Accusantium ad ducimus eos et\n      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique\n      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,\n    like_num: 10,\n    dislike_num: 0,\n    createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',\n    updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',\n    reply: [\n      {\n        id: 5,\n        type: 'replay',\n        from_avatar: 'https://joeschmoe.io/api/v1/random',\n        from_auth: 'Lorem3-1',\n        to_auth: 'Lorem3',\n        content: `Accusantium ad ducimus eos et\n      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique\n      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,\n        like_num: 10,\n        dislike_num: 0,\n        createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',\n        updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)'\n      },\n      {\n        id: 6,\n        type: 'replay',\n        from_avatar: 'https://joeschmoe.io/api/v1/random',\n        from_auth: 'Lorem3-2',\n        to_auth: 'Lorem3-1',\n        content: `Accusantium ad ducimus eos et\n      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique\n      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,\n        like_num: 10,\n        dislike_num: 0,\n        createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',\n        updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)'\n      }\n    ]\n  }\n]\n<\/script>\n\n<template>\n  <div class=\"ui-template-wrap\">\n    <Comment :data=\"data\">\n      <template #actions=\"kudosProps\">\n        <div class=\"actions\">\n          <div class=\"kudos\">\n            <div class=\"agree\">\n              <span>\n                <Icon_agree name=\"agree\" width=\"1em\" height=\"1em\" />\n              </span>\n              <span>{{ kudosProps.item.like_num }}</span>\n            </div>\n            <div class=\"oppose\">\n              <span>\n                <Icon_agree\n                  name=\"agree\"\n                  width=\"1em\"\n                  height=\"1em\"\n                  :style=\"{ transform: 'rotate(180deg)' }\"\n                />\n              </span>\n              <span>{{ kudosProps.item.dislike_num }}</span>\n            </div>\n          </div>\n          <Button type=\"link\" :style=\"{ fontSize: '12px', display: 'inline-block' }\"\n            >回复</Button\n          >\n        </div>\n      </template>\n    </Comment>\n  </div>\n</template>\n\n<style lang=\"scss\">\n.ui-template-wrap {\n  display: flex;\n  align-items: center;\n  .actions {\n    display: flex;\n    align-items: center;\n    > .kudos {\n      display: flex;\n      align-items: center;\n      gap: 15px;\n      > .agree,\n      .oppose {\n        font-size: 12px;\n        display: inline-flex;\n        align-items: center;\n        gap: 5px;\n        cursor: pointer;\n        span {\n          display: flex;\n          align-items: center;\n        }\n      }\n    }\n  }\n}\n</style>",t.__sourceTitle=" 基本用法 "};Z(Y);const tt=n({__name:"Demo",setup(e){const n=g((()=>[Y].map(((t,e)=>D(t,"comment",e)))));return(e,a)=>(o(),y(t,{"demo-arr":_(n)},null,8,["demo-arr"]))}}),et=n({__name:"Index",setup(t){b(null);const n=["基本用法"],a=g((()=>j("comment",n)));return(t,n)=>(o(),y(e,{"nav-arr":_(a),title:"Comment 评论","component-name":"comment"},{intro:T((()=>[c(H)])),demo:T((()=>[c(tt)])),api:T((()=>[c(K)])),_:1},8,["nav-arr"]))}});export{et as default};
