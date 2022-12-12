import{D as e,C as i}from"./DemoDisplay-53a9c10a.js";import{d as t,c as a,j as o,g as n,f as s,q as r,k as u,n as l,e as d,_ as m,J as p,r as c}from"./index-6bb449f3.js";import{_ as f,P as g,T as v}from"./Paragraph-138135f0.js";import{_ as q}from"./ApiIntro-fdf4ccdf.js";import{g as h,a as _}from"./helper-7416cab9.js";import{_ as x}from"./Text-d7096c7d.js";const b=l("p",null,"对文章内容进行排版，统一文章样式",-1),T=l("ul",null,[l("li",null,"Typography：组件包裹"),l("li",null,"Paragraph：段落"),l("li",null,"Text：用于加粗，标记"),l("li",null,"Title：标题可设置h1-h6")],-1),L=l("ul",null,[l("li",null,"当需要展示标题、段落、列表内容时使用，如文章/博客/日志的文本样式。"),l("li",null,"当需要一列基于文本的基础操作时，如拷贝/省略/可编辑。")],-1),y=t({__name:"Intro",setup:e=>(e,i)=>(a(),o(r(v),null,{default:n((()=>[s(r(f),{level:4},{default:n((()=>[u("简介")])),_:1}),s(r(g),null,{default:n((()=>[b])),_:1}),s(r(f),{level:4},{default:n((()=>[u("组件概述")])),_:1}),s(r(g),null,{default:n((()=>[T])),_:1}),s(r(f),{level:4},{default:n((()=>[u("使用场景")])),_:1}),s(r(g),null,{default:n((()=>[L])),_:1})])),_:1}))}),A=t({__name:"Api",setup(e){const i=[],t=[{componentName:"Text",attrContent:[{rowIndex:1,"属性":"strong","说明":"加粗文字","类型":"boolean","默认值":"false"},{rowIndex:2,"属性":"code","说明":"代码标记","类型":"boolean","默认值":"false"},{rowIndex:3,"属性":"keyboard","说明":"键盘标记","类型":"boolean","默认值":"false"},{rowIndex:4,"属性":"mark","说明":"文字标记","类型":"boolean","默认值":"false"}]},{componentName:"Title",attrContent:[{rowIndex:1,"属性":"level","说明":"标题等级","类型":"string(1-6)|number(1-6)","默认值":"4"}]}];return(e,n)=>(a(),o(q,{"attr-content-arr":t,"event-content":i}))}});var P=e=>{e.__sourceCode='<template>\n  <Typography>\n    <Title level="2">Introduction</Title>\n    <Paragraph>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis dignissimos\n      dolore, doloribus enim eveniet, explicabo fugiat id impedit iure laboriosam\n      laborum nobis officia praesentium quasi sed sequi tempora, unde.\n    </Paragraph>\n    <Paragraph>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore\n      dolorem ducimus facilis hic possimus praesentium totam unde? Ipsa nam, soluta? Ad\n      et quasi, ratione repudiandae sunt tempora temporibus veritatis.\n      <Text strong>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, et, natus? Ad\n        delectus deserunt doloribus, error explicabo id illum incidunt laborum minima,\n        officiis, pariatur quasi reprehenderit sint? Dolores, tempora, vitae.\n      </Text>\n    </Paragraph>\n    <Title level="2"> Lorem ipsum dolor sit amet,</Title>\n    <Paragraph>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur commodi\n      corporis debitis, doloribus ducimus error excepturi exercitationem facilis id iure\n      maxime modi nostrum optio quas recusandae repellendus sed suscipit? (<Text code\n        >Lorem</Text\n      >\n      and <Text code>Lorem</Text>), Lorem ipsum dolor sit amet, consectetur adipisicing\n      elit. Aliquid, aspernatur consequuntur deserunt dolorum ex inventore ipsa ipsam\n      magnam magni minus molestias nam natus numquam optio perspiciatis quos temporibus\n      vel veniam?\n    </Paragraph>\n\n    <Paragraph>\n      <ul>\n        <li>\n          <a href="/docs/spec/proximity">Principles</a>\n        </li>\n        <li>\n          <a href="/docs/spec/overview">Patterns</a>\n        </li>\n        <li>\n          <a href="/docs/resources">Resource Download</a>\n        </li>\n      </ul>\n    </Paragraph>\n\n    <Paragraph> Press <Text keyboard>Esc</Text> to exit... </Paragraph>\n  </Typography>\n</template>\n\n<script setup lang="ts">\nimport { Paragraph, Typography, Title, Text } from \'hut-ui\'\n<\/script>',e.__sourceTitle=" 示例一 "};const I=l("ul",null,[l("li",null,[l("a",{href:"/docs/spec/proximity"},"Principles")]),l("li",null,[l("a",{href:"/docs/spec/overview"},"Patterns")]),l("li",null,[l("a",{href:"/docs/resources"},"Resource Download")])],-1),w=t({__name:"DemoOne",setup:e=>(e,i)=>(a(),o(r(v),null,{default:n((()=>[s(r(f),{level:"2"},{default:n((()=>[u("Introduction")])),_:1}),s(r(g),null,{default:n((()=>[u(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis dignissimos dolore, doloribus enim eveniet, explicabo fugiat id impedit iure laboriosam laborum nobis officia praesentium quasi sed sequi tempora, unde. ")])),_:1}),s(r(g),null,{default:n((()=>[u(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore dolorem ducimus facilis hic possimus praesentium totam unde? Ipsa nam, soluta? Ad et quasi, ratione repudiandae sunt tempora temporibus veritatis. "),s(r(x),{strong:""},{default:n((()=>[u(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, et, natus? Ad delectus deserunt doloribus, error explicabo id illum incidunt laborum minima, officiis, pariatur quasi reprehenderit sint? Dolores, tempora, vitae. ")])),_:1})])),_:1}),s(r(f),{level:"2"},{default:n((()=>[u(" Lorem ipsum dolor sit amet,")])),_:1}),s(r(g),null,{default:n((()=>[u(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur commodi corporis debitis, doloribus ducimus error excepturi exercitationem facilis id iure maxime modi nostrum optio quas recusandae repellendus sed suscipit? ("),s(r(x),{code:""},{default:n((()=>[u("Lorem")])),_:1}),u(" and "),s(r(x),{code:""},{default:n((()=>[u("Lorem")])),_:1}),u("), Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aspernatur consequuntur deserunt dolorum ex inventore ipsa ipsam magnam magni minus molestias nam natus numquam optio perspiciatis quos temporibus vel veniam? ")])),_:1}),s(r(g),null,{default:n((()=>[I])),_:1}),s(r(g),null,{default:n((()=>[u(" Press "),s(r(x),{keyboard:""},{default:n((()=>[u("Esc")])),_:1}),u(" to exit... ")])),_:1})])),_:1}))});P(w);var k=e=>{e.__sourceCode='<template>\n  <Typography>\n    <Title level="2">Introduction</Title>\n    <Paragraph>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, animi aut\n      deserunt exercitationem ipsa ut. Ab, amet aut consequatur doloribus excepturi id\n      labore maiores perspiciatis quidem suscipit totam unde voluptatibus.\n    </Paragraph>\n    <Paragraph>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim molestias\n      perferendis sed vel. Deleniti distinctio facilis fugiat officiis quo! Est fugit\n      magnam officia provident quidem, vitae. In pariatur, tempore.\n      <Text mark>『amet』和『dolor』</Text>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit\n      <Text strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>。\n    </Paragraph>\n    <Title level="2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</Title>\n    <Paragraph>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at cum\n      distinctio ea eveniet exercitationem facilis iusto maiores minus mollitia nostrum,\n      nulla placeat rem repellendus rerum, sed veniam vero voluptatibus?（<Text code\n        >Sketch</Text\n      >\n      和 <Text code>Axure</Text>），Lorem ipsum dolor sit amet, consectetur adipisicing\n      elit. Adipisci amet blanditiis consectetur consequatur ducimus, earum, error fugit\n      in mollitia quam quibusdam quod reiciendis rem reprehenderit, rerum sed ullam\n      voluptates voluptatum.。\n    </Paragraph>\n\n    <Paragraph>\n      <ul>\n        <li>\n          <a href="/docs/spec/proximity-cn">reprehenderit</a>\n        </li>\n        <li>\n          <a href="/docs/spec/overview-cn">reprehenderit</a>\n        </li>\n        <li>\n          <a href="/docs/resources-cn">reprehenderit</a>\n        </li>\n      </ul>\n    </Paragraph>\n\n    <Paragraph>\n      <blockquote>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam\n        aliquid doloribus, ducimus enim explicabo fugiat, harum nulla praesentium quia\n        quis repellendus temporibus unde velit voluptatem voluptatibus! Fugit, saepe?\n      </blockquote>\n    </Paragraph>\n    <Paragraph>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque\n      error illum laboriosam odit, provident quaerat reiciendis rem velit voluptatibus!\n      Cupiditate dignissimos est illum impedit natus neque reiciendis unde voluptatibus?\n    </Paragraph>\n    <Paragraph> press<Text keyboard>Esc</Text>out </Paragraph>\n  </Typography>\n</template>\n\n<script setup lang="ts">\nimport { Paragraph, Typography, Title, Text } from \'hut-ui\'\n<\/script>',e.__sourceTitle=" 示例二 "};const C=l("ul",null,[l("li",null,[l("a",{href:"/docs/spec/proximity-cn"},"reprehenderit")]),l("li",null,[l("a",{href:"/docs/spec/overview-cn"},"reprehenderit")]),l("li",null,[l("a",{href:"/docs/resources-cn"},"reprehenderit")])],-1),D=l("blockquote",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam aliquid doloribus, ducimus enim explicabo fugiat, harum nulla praesentium quia quis repellendus temporibus unde velit voluptatem voluptatibus! Fugit, saepe? ",-1),j=t({__name:"DemoTwo",setup:e=>(e,i)=>(a(),o(r(v),null,{default:n((()=>[s(r(f),{level:"2"},{default:n((()=>[u("Introduction")])),_:1}),s(r(g),null,{default:n((()=>[u(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, animi aut deserunt exercitationem ipsa ut. Ab, amet aut consequatur doloribus excepturi id labore maiores perspiciatis quidem suscipit totam unde voluptatibus. ")])),_:1}),s(r(g),null,{default:n((()=>[u(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim molestias perferendis sed vel. Deleniti distinctio facilis fugiat officiis quo! Est fugit magnam officia provident quidem, vitae. In pariatur, tempore. "),s(r(x),{mark:""},{default:n((()=>[u("『amet』和『dolor』")])),_:1}),u(" Lorem ipsum dolor sit amet, consectetur adipisicing elit "),s(r(x),{strong:""},{default:n((()=>[u("Lorem ipsum dolor sit amet, consectetur adipisicing elit")])),_:1}),u("。 ")])),_:1}),s(r(f),{level:"2"},{default:n((()=>[u("Lorem ipsum dolor sit amet, consectetur adipisicing elit")])),_:1}),s(r(g),null,{default:n((()=>[u(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at cum distinctio ea eveniet exercitationem facilis iusto maiores minus mollitia nostrum, nulla placeat rem repellendus rerum, sed veniam vero voluptatibus?（"),s(r(x),{code:""},{default:n((()=>[u("Sketch")])),_:1}),u(" 和 "),s(r(x),{code:""},{default:n((()=>[u("Axure")])),_:1}),u("），Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet blanditiis consectetur consequatur ducimus, earum, error fugit in mollitia quam quibusdam quod reiciendis rem reprehenderit, rerum sed ullam voluptates voluptatum.。 ")])),_:1}),s(r(g),null,{default:n((()=>[C])),_:1}),s(r(g),null,{default:n((()=>[D])),_:1}),s(r(g),null,{default:n((()=>[u(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque error illum laboriosam odit, provident quaerat reiciendis rem velit voluptatibus! Cupiditate dignissimos est illum impedit natus neque reiciendis unde voluptatibus? ")])),_:1}),s(r(g),null,{default:n((()=>[u(" press"),s(r(x),{keyboard:""},{default:n((()=>[u("Esc")])),_:1}),u("out ")])),_:1})])),_:1}))});k(j);var E=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Title level="1">h1.Introduction</Title>\n    <Title level="2">h2.Introduction</Title>\n    <Title level="3">h3.Introduction</Title>\n    <Title level="4">h4.Introduction</Title>\n    <Title level="5">h5.Introduction</Title>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Title } from \'hut-ui\'\n<\/script>',e.__sourceTitle=" 标题组件 "};const F={class:"wrap"},B=t({__name:"DemoThree",setup:e=>(e,i)=>(a(),d("div",F,[s(r(f),{level:"1"},{default:n((()=>[u("h1.Introduction")])),_:1}),s(r(f),{level:"2"},{default:n((()=>[u("h2.Introduction")])),_:1}),s(r(f),{level:"3"},{default:n((()=>[u("h3.Introduction")])),_:1}),s(r(f),{level:"4"},{default:n((()=>[u("h4.Introduction")])),_:1}),s(r(f),{level:"5"},{default:n((()=>[u("h5.Introduction")])),_:1})]))});E(B);var N=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Text strong\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea\n      ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa\n      cupiditate dolor laudantium perferendis reiciendis?</Text\n    >\n    <Text code\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea\n      ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa\n      cupiditate dolor laudantium perferendis reiciendis?</Text\n    >\n    <Text keyboard\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea\n      ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa\n      cupiditate dolor laudantium perferendis reiciendis?</Text\n    >\n    <Text mark\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea\n      ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa\n      cupiditate dolor laudantium perferendis reiciendis?</Text\n    >\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Text } from \'hut-ui\'\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  align-items: center;\n}\n</style>',e.__sourceTitle=" 文字标记 "};const R={class:"wrap"},S=t({__name:"DemoFour",setup:e=>(e,i)=>(a(),d("div",R,[s(r(x),{strong:""},{default:n((()=>[u("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa cupiditate dolor laudantium perferendis reiciendis?")])),_:1}),s(r(x),{code:""},{default:n((()=>[u("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa cupiditate dolor laudantium perferendis reiciendis?")])),_:1}),s(r(x),{keyboard:""},{default:n((()=>[u("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa cupiditate dolor laudantium perferendis reiciendis?")])),_:1}),s(r(x),{mark:""},{default:n((()=>[u("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa cupiditate dolor laudantium perferendis reiciendis?")])),_:1})]))});N(S);var J=m(S,[["__scopeId","data-v-5e99eb76"]]);const O=t({__name:"Demo",setup(i){const t=p((()=>[w,j,B,J].map(((e,i)=>h(e,"typography",i)))));return(i,n)=>(a(),o(e,{"demo-arr":r(t)},null,8,["demo-arr"]))}}),z=t({__name:"Index",setup(e){c(null);const t=["示例一","示例二","标题组件","文字标记"],u=p((()=>_("typography",t)));return(e,t)=>(a(),o(i,{"nav-arr":r(u),title:"Typography 排版","component-name":"typography"},{intro:n((()=>[s(y)])),demo:n((()=>[s(O)])),api:n((()=>[s(A)])),_:1},8,["nav-arr"]))}});export{z as default};
