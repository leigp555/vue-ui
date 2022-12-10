import{D as e,C as i}from"./DemoDisplay-d6102924.js";import"./Upload.vue_vue_type_style_index_0_lang-dcc18adf.js";import{_ as t,P as a,T as o}from"./Footer-492e9d3a.js";import{d as n,c as s,i as r,g as u,f as l,m as d,j as m,l as p,e as c,_ as f,x as g,r as v}from"./index-4bdb761c.js";import{_}from"./ApiIntro-e7a82855.js";import{g as q,a as x}from"./helper-f72534c2.js";import{_ as h}from"./Text-551581d2.js";const b=p("p",null,"对文章内容进行排版，统一文章样式",-1),T=p("ul",null,[p("li",null,"Typography：组件包裹"),p("li",null,"Paragraph：段落"),p("li",null,"Text：用于加粗，标记"),p("li",null,"Title：标题可设置h1-h6")],-1),L=p("ul",null,[p("li",null,"当需要展示标题、段落、列表内容时使用，如文章/博客/日志的文本样式。"),p("li",null,"当需要一列基于文本的基础操作时，如拷贝/省略/可编辑。")],-1),y=n({__name:"Intro",setup:e=>(e,i)=>(s(),r(d(o),null,{default:u((()=>[l(d(t),{level:4},{default:u((()=>[m("简介")])),_:1}),l(d(a),null,{default:u((()=>[b])),_:1}),l(d(t),{level:4},{default:u((()=>[m("组件概述")])),_:1}),l(d(a),null,{default:u((()=>[T])),_:1}),l(d(t),{level:4},{default:u((()=>[m("使用场景")])),_:1}),l(d(a),null,{default:u((()=>[L])),_:1})])),_:1}))}),A=n({__name:"Api",setup(e){const i=[],t=[{componentName:"Text",attrContent:[{rowIndex:1,"属性":"strong","说明":"加粗文字","类型":"boolean","默认值":"false"},{rowIndex:2,"属性":"code","说明":"代码标记","类型":"boolean","默认值":"false"},{rowIndex:3,"属性":"keyboard","说明":"键盘标记","类型":"boolean","默认值":"false"},{rowIndex:4,"属性":"mark","说明":"文字标记","类型":"boolean","默认值":"false"}]},{componentName:"Title",attrContent:[{rowIndex:1,"属性":"level","说明":"标题等级","类型":"string(1-6)|number(1-6)","默认值":"4"}]}];return(e,a)=>(s(),r(_,{"attr-content-arr":t,"event-content":i}))}});var P=e=>{e.__sourceCode='<template>\n  <Typography>\n    <Title level="2">Introduction</Title>\n    <Paragraph>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis dignissimos\n      dolore, doloribus enim eveniet, explicabo fugiat id impedit iure laboriosam\n      laborum nobis officia praesentium quasi sed sequi tempora, unde.\n    </Paragraph>\n    <Paragraph>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore\n      dolorem ducimus facilis hic possimus praesentium totam unde? Ipsa nam, soluta? Ad\n      et quasi, ratione repudiandae sunt tempora temporibus veritatis.\n      <Text strong>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, et, natus? Ad\n        delectus deserunt doloribus, error explicabo id illum incidunt laborum minima,\n        officiis, pariatur quasi reprehenderit sint? Dolores, tempora, vitae.\n      </Text>\n    </Paragraph>\n    <Title level="2"> Lorem ipsum dolor sit amet,</Title>\n    <Paragraph>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur commodi\n      corporis debitis, doloribus ducimus error excepturi exercitationem facilis id iure\n      maxime modi nostrum optio quas recusandae repellendus sed suscipit? (<Text code\n        >Lorem</Text\n      >\n      and <Text code>Lorem</Text>), Lorem ipsum dolor sit amet, consectetur adipisicing\n      elit. Aliquid, aspernatur consequuntur deserunt dolorum ex inventore ipsa ipsam\n      magnam magni minus molestias nam natus numquam optio perspiciatis quos temporibus\n      vel veniam?\n    </Paragraph>\n\n    <Paragraph>\n      <ul>\n        <li>\n          <a href="/docs/spec/proximity">Principles</a>\n        </li>\n        <li>\n          <a href="/docs/spec/overview">Patterns</a>\n        </li>\n        <li>\n          <a href="/docs/resources">Resource Download</a>\n        </li>\n      </ul>\n    </Paragraph>\n\n    <Paragraph> Press <Text keyboard>Esc</Text> to exit... </Paragraph>\n  </Typography>\n</template>\n\n<script setup lang="ts">\nimport { Paragraph, Typography, Title, Text } from \'ant\'\n<\/script>',e.__sourceTitle=" 示例一 "};const I=p("ul",null,[p("li",null,[p("a",{href:"/docs/spec/proximity"},"Principles")]),p("li",null,[p("a",{href:"/docs/spec/overview"},"Patterns")]),p("li",null,[p("a",{href:"/docs/resources"},"Resource Download")])],-1),w=n({__name:"DemoOne",setup:e=>(e,i)=>(s(),r(d(o),null,{default:u((()=>[l(d(t),{level:"2"},{default:u((()=>[m("Introduction")])),_:1}),l(d(a),null,{default:u((()=>[m(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis dignissimos dolore, doloribus enim eveniet, explicabo fugiat id impedit iure laboriosam laborum nobis officia praesentium quasi sed sequi tempora, unde. ")])),_:1}),l(d(a),null,{default:u((()=>[m(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore dolorem ducimus facilis hic possimus praesentium totam unde? Ipsa nam, soluta? Ad et quasi, ratione repudiandae sunt tempora temporibus veritatis. "),l(d(h),{strong:""},{default:u((()=>[m(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, et, natus? Ad delectus deserunt doloribus, error explicabo id illum incidunt laborum minima, officiis, pariatur quasi reprehenderit sint? Dolores, tempora, vitae. ")])),_:1})])),_:1}),l(d(t),{level:"2"},{default:u((()=>[m(" Lorem ipsum dolor sit amet,")])),_:1}),l(d(a),null,{default:u((()=>[m(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur commodi corporis debitis, doloribus ducimus error excepturi exercitationem facilis id iure maxime modi nostrum optio quas recusandae repellendus sed suscipit? ("),l(d(h),{code:""},{default:u((()=>[m("Lorem")])),_:1}),m(" and "),l(d(h),{code:""},{default:u((()=>[m("Lorem")])),_:1}),m("), Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aspernatur consequuntur deserunt dolorum ex inventore ipsa ipsam magnam magni minus molestias nam natus numquam optio perspiciatis quos temporibus vel veniam? ")])),_:1}),l(d(a),null,{default:u((()=>[I])),_:1}),l(d(a),null,{default:u((()=>[m(" Press "),l(d(h),{keyboard:""},{default:u((()=>[m("Esc")])),_:1}),m(" to exit... ")])),_:1})])),_:1}))});P(w);var k=e=>{e.__sourceCode='<template>\n  <Typography>\n    <Title level="2">Introduction</Title>\n    <Paragraph>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, animi aut\n      deserunt exercitationem ipsa ut. Ab, amet aut consequatur doloribus excepturi id\n      labore maiores perspiciatis quidem suscipit totam unde voluptatibus.\n    </Paragraph>\n    <Paragraph>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim molestias\n      perferendis sed vel. Deleniti distinctio facilis fugiat officiis quo! Est fugit\n      magnam officia provident quidem, vitae. In pariatur, tempore.\n      <Text mark>『amet』和『dolor』</Text>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit\n      <Text strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>。\n    </Paragraph>\n    <Title level="2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</Title>\n    <Paragraph>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at cum\n      distinctio ea eveniet exercitationem facilis iusto maiores minus mollitia nostrum,\n      nulla placeat rem repellendus rerum, sed veniam vero voluptatibus?（<Text code\n        >Sketch</Text\n      >\n      和 <Text code>Axure</Text>），Lorem ipsum dolor sit amet, consectetur adipisicing\n      elit. Adipisci amet blanditiis consectetur consequatur ducimus, earum, error fugit\n      in mollitia quam quibusdam quod reiciendis rem reprehenderit, rerum sed ullam\n      voluptates voluptatum.。\n    </Paragraph>\n\n    <Paragraph>\n      <ul>\n        <li>\n          <a href="/docs/spec/proximity-cn">reprehenderit</a>\n        </li>\n        <li>\n          <a href="/docs/spec/overview-cn">reprehenderit</a>\n        </li>\n        <li>\n          <a href="/docs/resources-cn">reprehenderit</a>\n        </li>\n      </ul>\n    </Paragraph>\n\n    <Paragraph>\n      <blockquote>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam\n        aliquid doloribus, ducimus enim explicabo fugiat, harum nulla praesentium quia\n        quis repellendus temporibus unde velit voluptatem voluptatibus! Fugit, saepe?\n      </blockquote>\n    </Paragraph>\n    <Paragraph>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque\n      error illum laboriosam odit, provident quaerat reiciendis rem velit voluptatibus!\n      Cupiditate dignissimos est illum impedit natus neque reiciendis unde voluptatibus?\n    </Paragraph>\n    <Paragraph> press<Text keyboard>Esc</Text>out </Paragraph>\n  </Typography>\n</template>\n\n<script setup lang="ts">\nimport { Paragraph, Typography, Title, Text } from \'ant\'\n<\/script>',e.__sourceTitle=" 示例二 "};const C=p("ul",null,[p("li",null,[p("a",{href:"/docs/spec/proximity-cn"},"reprehenderit")]),p("li",null,[p("a",{href:"/docs/spec/overview-cn"},"reprehenderit")]),p("li",null,[p("a",{href:"/docs/resources-cn"},"reprehenderit")])],-1),D=p("blockquote",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam aliquid doloribus, ducimus enim explicabo fugiat, harum nulla praesentium quia quis repellendus temporibus unde velit voluptatem voluptatibus! Fugit, saepe? ",-1),j=n({__name:"DemoTwo",setup:e=>(e,i)=>(s(),r(d(o),null,{default:u((()=>[l(d(t),{level:"2"},{default:u((()=>[m("Introduction")])),_:1}),l(d(a),null,{default:u((()=>[m(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, animi aut deserunt exercitationem ipsa ut. Ab, amet aut consequatur doloribus excepturi id labore maiores perspiciatis quidem suscipit totam unde voluptatibus. ")])),_:1}),l(d(a),null,{default:u((()=>[m(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim molestias perferendis sed vel. Deleniti distinctio facilis fugiat officiis quo! Est fugit magnam officia provident quidem, vitae. In pariatur, tempore. "),l(d(h),{mark:""},{default:u((()=>[m("『amet』和『dolor』")])),_:1}),m(" Lorem ipsum dolor sit amet, consectetur adipisicing elit "),l(d(h),{strong:""},{default:u((()=>[m("Lorem ipsum dolor sit amet, consectetur adipisicing elit")])),_:1}),m("。 ")])),_:1}),l(d(t),{level:"2"},{default:u((()=>[m("Lorem ipsum dolor sit amet, consectetur adipisicing elit")])),_:1}),l(d(a),null,{default:u((()=>[m(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at cum distinctio ea eveniet exercitationem facilis iusto maiores minus mollitia nostrum, nulla placeat rem repellendus rerum, sed veniam vero voluptatibus?（"),l(d(h),{code:""},{default:u((()=>[m("Sketch")])),_:1}),m(" 和 "),l(d(h),{code:""},{default:u((()=>[m("Axure")])),_:1}),m("），Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet blanditiis consectetur consequatur ducimus, earum, error fugit in mollitia quam quibusdam quod reiciendis rem reprehenderit, rerum sed ullam voluptates voluptatum.。 ")])),_:1}),l(d(a),null,{default:u((()=>[C])),_:1}),l(d(a),null,{default:u((()=>[D])),_:1}),l(d(a),null,{default:u((()=>[m(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque error illum laboriosam odit, provident quaerat reiciendis rem velit voluptatibus! Cupiditate dignissimos est illum impedit natus neque reiciendis unde voluptatibus? ")])),_:1}),l(d(a),null,{default:u((()=>[m(" press"),l(d(h),{keyboard:""},{default:u((()=>[m("Esc")])),_:1}),m("out ")])),_:1})])),_:1}))});k(j);var E=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Title level="1">h1.Introduction</Title>\n    <Title level="2">h2.Introduction</Title>\n    <Title level="3">h3.Introduction</Title>\n    <Title level="4">h4.Introduction</Title>\n    <Title level="5">h5.Introduction</Title>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Title } from \'ant\'\n<\/script>',e.__sourceTitle=" 标题组件 "};const F={class:"wrap"},B=n({__name:"DemoThree",setup:e=>(e,i)=>(s(),c("div",F,[l(d(t),{level:"1"},{default:u((()=>[m("h1.Introduction")])),_:1}),l(d(t),{level:"2"},{default:u((()=>[m("h2.Introduction")])),_:1}),l(d(t),{level:"3"},{default:u((()=>[m("h3.Introduction")])),_:1}),l(d(t),{level:"4"},{default:u((()=>[m("h4.Introduction")])),_:1}),l(d(t),{level:"5"},{default:u((()=>[m("h5.Introduction")])),_:1})]))});E(B);var N=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Text strong\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea\n      ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa\n      cupiditate dolor laudantium perferendis reiciendis?</Text\n    >\n    <Text code\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea\n      ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa\n      cupiditate dolor laudantium perferendis reiciendis?</Text\n    >\n    <Text keyboard\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea\n      ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa\n      cupiditate dolor laudantium perferendis reiciendis?</Text\n    >\n    <Text mark\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea\n      ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa\n      cupiditate dolor laudantium perferendis reiciendis?</Text\n    >\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Text } from \'ant\'\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  align-items: center;\n}\n</style>',e.__sourceTitle=" 文字标记 "};const R={class:"wrap"},S=n({__name:"DemoFour",setup:e=>(e,i)=>(s(),c("div",R,[l(d(h),{strong:""},{default:u((()=>[m("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa cupiditate dolor laudantium perferendis reiciendis?")])),_:1}),l(d(h),{code:""},{default:u((()=>[m("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa cupiditate dolor laudantium perferendis reiciendis?")])),_:1}),l(d(h),{keyboard:""},{default:u((()=>[m("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa cupiditate dolor laudantium perferendis reiciendis?")])),_:1}),l(d(h),{mark:""},{default:u((()=>[m("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa cupiditate dolor laudantium perferendis reiciendis?")])),_:1})]))});N(S);var O=f(S,[["__scopeId","data-v-5e99eb76"]]);const U=n({__name:"Demo",setup(i){const t=g((()=>[w,j,B,O].map(((e,i)=>q(e,"typography",i)))));return(i,a)=>(s(),r(e,{"demo-arr":d(t)},null,8,["demo-arr"]))}}),z=n({__name:"Index",setup(e){v(null);const t=["示例一","示例二","标题组件","文字标记"],a=g((()=>x("typography",t)));return(e,t)=>(s(),r(i,{"nav-arr":d(a),title:"Typography 排版","component-name":"typography"},{intro:u((()=>[l(y)])),demo:u((()=>[l(U)])),api:u((()=>[l(A)])),_:1},8,["nav-arr"]))}});export{z as default};
