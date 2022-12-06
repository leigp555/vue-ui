import{_ as e,P as t,T as n,g as u,D as l,C as a,a as i}from"./DemoDisplay-56944e08.js";import"./Upload.vue_vue_type_style_index_0_lang-ee73dc16.js";import{_ as m}from"./SubMenu.vue_vue_type_style_index_0_lang-b3c2de52.js";import{d as o,u as p,s,o as d,c as y,b as M,t as I,n as r,l as c,y as g,F as k,f as V,g as _,m as h,w as f,e as b,h as O,r as v,z as S}from"./index-e0119140.js";import{_ as w}from"./ApiIntro-5ccae423.js";import{a as K,_ as N,b as G}from"./SubMenu-91822b2e.js";const T={class:"ui-menuGroup-content"},x=["data-setKey"],C=o({__name:"MenuItemGroup",props:{title:null,paddingLeft:null,keyValue:null,totalTitle:null},setup(e){const t=p().default(),n=s("ui_menu_selectedArr"),u=s("ui_menu_mode"),l=e=>!!(null==n?void 0:n.value)&&(null==n?void 0:n.value.indexOf(e.props.keyValue))>=0;return(a,i)=>(d(),y("div",{class:r(["ui-menuGroup-wrap",{"ui-menuGroup-wrap-column":"column"===c(u)}])},[M("div",{class:r(["ui-menuGroup-title",{"ui-menuGroup-title-selected":c(n).indexOf(e.keyValue)>=0}]),style:g({paddingLeft:"column"===c(u)?e.paddingLeft-16+"px":"8px 16px"})},I(e.title),7),M("ul",T,[(d(!0),y(k,null,V(c(t),(t=>(d(),y("li",{key:t,class:r(["ui-menuGroup-item",{"ui-menuGroup-item-selected":l(t)}]),"data-setKey":t.props.keyValue},[(d(),_(h(t),{isNested:!0,paddingLeft:e.paddingLeft,totalTitle:[...e.totalTitle,e.keyValue]},null,8,["paddingLeft","totalTitle"]))],10,x)))),128))])],2))}}),D=M("p",null,"为页面和功能提供导航的菜单列表。",-1),j=M("ul",null,[M("li",null,"Menu"),M("li",null,"MenuItem"),M("li",null,"MenuItemGroup"),M("li",null,"SubMenu")],-1),L=M("ul",null,[M("li",null,"使用导航菜单可以快速在网站的页面间跳转。"),M("li",null,"导航同级之间在逻辑上需为并列且互斥的关系。")],-1),z=o({__name:"Intro",setup:u=>(u,l)=>(d(),_(c(n),null,{default:f((()=>[b(c(e),null,{default:f((()=>[O("简介")])),_:1}),b(c(t),null,{default:f((()=>[D])),_:1}),b(c(e),null,{default:f((()=>[O("组件概览")])),_:1}),b(c(t),null,{default:f((()=>[j])),_:1}),b(c(e),null,{default:f((()=>[O("使用场景")])),_:1}),b(c(t),null,{default:f((()=>[L])),_:1})])),_:1}))}),U=o({__name:"Api",setup(e){const t=[{rowIndex:1,"事件名称":"change","说明":"点击标题时的回调","回调参数":"(string[]) => void"}],n=[{componentName:"Menu",attrContent:[{rowIndex:1,"属性":"selectedKeys","说明":"选中的标题","类型":"string[]","默认值":"[]"},{rowIndex:2,"属性":"mode","说明":"排布方式（水平|垂直）","类型":"'horizontal' | 'column'","默认值":"horizontal"}]},{componentName:"MenuItem",attrContent:[{rowIndex:1,"属性":"keyValue","说明":"应提供唯一值","类型":"string","默认值":"null"},{rowIndex:2,"属性":"disabled","说明":"禁用","类型":"boolean","默认值":"false"}]},{componentName:"MenuItemGroup",attrContent:[{rowIndex:1,"属性":"keyValue","说明":"应提供唯一值","类型":"string","默认值":"null"},{rowIndex:2,"属性":"title","说明":"标题","类型":"string","默认值":"null"}]},{componentName:"SubMenu",attrContent:[{rowIndex:1,"属性":"keyValue","说明":"应提供唯一值","类型":"string","默认值":"null"},{rowIndex:2,"属性":"collapsible","说明":"是否可折叠","类型":"boolean","默认值":"true"}]}];return(e,u)=>(d(),_(w,{"attr-content-arr":n,"event-content":t}))}});var A=e=>{e.__sourceCode='<template>\n  <Menu v-model:selectedKeys="selectedKeys" mode="horizontal" @change="onChange">\n    <MenuItem keyValue="mail">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" />\n      </template>\n      Navigation One\n    </MenuItem>\n    <MenuItem keyValue="app" :disabled="true">\n      <template #icon>\n        <SvgIcon name="apps" width="1em" height="1em" />\n      </template>\n      Navigation Two\n    </MenuItem>\n    <SubMenu keyValue="sub1">\n      <template #icon>\n        <SvgIcon name="setting" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Three - Submenu</template>\n      <MenuItemGroup title="Item 1" keyValue="Item 1">\n        <MenuItem keyValue="setting:1">Option 1</MenuItem>\n        <MenuItem keyValue="setting:2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup title="Item 2" keyValue="Item 2">\n        <MenuItem keyValue="setting:3">Option 3</MenuItem>\n        <MenuItem keyValue="setting:4">Option 4</MenuItem>\n      </MenuItemGroup>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from \'@/lib\'\n\nconst selectedKeys = ref<string[]>([\'mail\'])\n\nconst onChange = (selectKey: string[]) => {\n  console.log(selectKey)\n}\n<\/script>',e.__sourceTitle="横向菜单栏"};const F=o({__name:"DemoOne",setup(e){const t=v(["mail"]),n=e=>{console.log(e)};return(e,u)=>(d(),_(c(G),{selectedKeys:t.value,"onUpdate:selectedKeys":u[0]||(u[0]=e=>t.value=e),mode:"horizontal",onChange:n},{default:f((()=>[b(c(K),{keyValue:"mail"},{icon:f((()=>[b(c(m),{name:"email",width:"1em",height:"1em"})])),default:f((()=>[O(" Navigation One ")])),_:1}),b(c(K),{keyValue:"app",disabled:!0},{icon:f((()=>[b(c(m),{name:"apps",width:"1em",height:"1em"})])),default:f((()=>[O(" Navigation Two ")])),_:1}),b(c(N),{keyValue:"sub1"},{icon:f((()=>[b(c(m),{name:"setting",width:"1em",height:"1em"})])),title:f((()=>[O("Navigation Three - Submenu")])),default:f((()=>[b(c(C),{title:"Item 1",keyValue:"Item 1"},{default:f((()=>[b(c(K),{keyValue:"setting:1"},{default:f((()=>[O("Option 1")])),_:1}),b(c(K),{keyValue:"setting:2"},{default:f((()=>[O("Option 2")])),_:1})])),_:1}),b(c(C),{title:"Item 2",keyValue:"Item 2"},{default:f((()=>[b(c(K),{keyValue:"setting:3"},{default:f((()=>[O("Option 3")])),_:1}),b(c(K),{keyValue:"setting:4"},{default:f((()=>[O("Option 4")])),_:1})])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}});A(F);var P=e=>{e.__sourceCode='<template>\n  <Menu\n    v-model:selectedKeys="selectedKeys"\n    style="width: 256px"\n    mode="column"\n    @change="onChange"\n  >\n    <SubMenu keyValue="sub1">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation One</template>\n      <MenuItemGroup keyValue="g1" title="Item 1">\n        <MenuItem keyValue="1">Option 1</MenuItem>\n        <MenuItem keyValue="2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup keyValue="g2" title="Item 2">\n        <MenuItem keyValue="3">Option 3</MenuItem>\n        <MenuItem keyValue="4">Option 4</MenuItem>\n      </MenuItemGroup>\n    </SubMenu>\n    <SubMenu keyValue="sub2">\n      <template #icon>\n        <SvgIcon name="apps" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Two</template>\n      <MenuItem keyValue="5">Option 5</MenuItem>\n      <MenuItem keyValue="6">Option 6</MenuItem>\n      <SubMenu keyValue="sub3">\n        <template #title>Submenu</template>\n        <MenuItem keyValue="7">Option 7</MenuItem>\n        <MenuItem keyValue="8">Option 8</MenuItem>\n      </SubMenu>\n    </SubMenu>\n    <SubMenu keyValue="sub4">\n      <template #icon>\n        <SvgIcon name="setting" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Three</template>\n      <MenuItem keyValue="9">Option 9</MenuItem>\n      <MenuItem keyValue="10">Option 10</MenuItem>\n      <MenuItem keyValue="11">Option 11</MenuItem>\n      <MenuItem keyValue="12">Option 12</MenuItem>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from \'@/lib\'\n\nconst selectedKeys = ref<string[]>([\'sub1\', \'g1\', \'1\'])\n\nconst onChange = (selectKey: string[]) => {\n  console.log(selectKey)\n}\n<\/script>',e.__sourceTitle="垂直菜单栏"};const q=o({__name:"DemoTwo",setup(e){const t=v(["sub1","g1","1"]),n=e=>{console.log(e)};return(e,u)=>(d(),_(c(G),{selectedKeys:t.value,"onUpdate:selectedKeys":u[0]||(u[0]=e=>t.value=e),style:{width:"256px"},mode:"column",onChange:n},{default:f((()=>[b(c(N),{keyValue:"sub1"},{icon:f((()=>[b(c(m),{name:"email",width:"1em",height:"1em"})])),title:f((()=>[O("Navigation One")])),default:f((()=>[b(c(C),{keyValue:"g1",title:"Item 1"},{default:f((()=>[b(c(K),{keyValue:"1"},{default:f((()=>[O("Option 1")])),_:1}),b(c(K),{keyValue:"2"},{default:f((()=>[O("Option 2")])),_:1})])),_:1}),b(c(C),{keyValue:"g2",title:"Item 2"},{default:f((()=>[b(c(K),{keyValue:"3"},{default:f((()=>[O("Option 3")])),_:1}),b(c(K),{keyValue:"4"},{default:f((()=>[O("Option 4")])),_:1})])),_:1})])),_:1}),b(c(N),{keyValue:"sub2"},{icon:f((()=>[b(c(m),{name:"apps",width:"1em",height:"1em"})])),title:f((()=>[O("Navigation Two")])),default:f((()=>[b(c(K),{keyValue:"5"},{default:f((()=>[O("Option 5")])),_:1}),b(c(K),{keyValue:"6"},{default:f((()=>[O("Option 6")])),_:1}),b(c(N),{keyValue:"sub3"},{title:f((()=>[O("Submenu")])),default:f((()=>[b(c(K),{keyValue:"7"},{default:f((()=>[O("Option 7")])),_:1}),b(c(K),{keyValue:"8"},{default:f((()=>[O("Option 8")])),_:1})])),_:1})])),_:1}),b(c(N),{keyValue:"sub4"},{icon:f((()=>[b(c(m),{name:"setting",width:"1em",height:"1em"})])),title:f((()=>[O("Navigation Three")])),default:f((()=>[b(c(K),{keyValue:"9"},{default:f((()=>[O("Option 9")])),_:1}),b(c(K),{keyValue:"10"},{default:f((()=>[O("Option 10")])),_:1}),b(c(K),{keyValue:"11"},{default:f((()=>[O("Option 11")])),_:1}),b(c(K),{keyValue:"12"},{default:f((()=>[O("Option 12")])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}});P(q);var B=e=>{e.__sourceCode='<template>\n  <Menu\n    v-model:selectedKeys="selectedKeys"\n    style="width: 256px"\n    mode="column"\n    @change="onChange"\n  >\n    <SubMenu keyValue="sub1" :collapsible="false">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation One</template>\n      <MenuItemGroup keyValue="g1" title="Item 1">\n        <MenuItem keyValue="1">Option 1</MenuItem>\n        <MenuItem keyValue="2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup keyValue="g2" title="Item 2">\n        <MenuItem keyValue="3">Option 3</MenuItem>\n        <MenuItem keyValue="4">Option 4</MenuItem>\n      </MenuItemGroup>\n    </SubMenu>\n    <SubMenu keyValue="sub2" :collapsible="false">\n      <template #icon>\n        <SvgIcon name="apps" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Two</template>\n      <MenuItem keyValue="5">Option 5</MenuItem>\n      <MenuItem keyValue="6">Option 6</MenuItem>\n      <SubMenu keyValue="sub3" :collapsible="false">\n        <template #title>Submenu</template>\n        <MenuItem keyValue="7">Option 7</MenuItem>\n        <MenuItem keyValue="8">Option 8</MenuItem>\n      </SubMenu>\n    </SubMenu>\n    <SubMenu keyValue="sub4" :collapsible="false">\n      <template #icon>\n        <SvgIcon name="setting" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Three</template>\n      <MenuItem keyValue="9">Option 9</MenuItem>\n      <MenuItem keyValue="10">Option 10</MenuItem>\n      <MenuItem keyValue="11">Option 11</MenuItem>\n      <MenuItem keyValue="12">Option 12</MenuItem>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from \'@/lib\'\n\nconst selectedKeys = ref<string[]>([\'sub1\', \'g1\', \'1\'])\n\nconst onChange = (selectKey: string[]) => {\n  console.log(selectKey)\n}\n<\/script>',e.__sourceTitle="菜单栏不折叠"};const E=o({__name:"DemoThree",setup(e){const t=v(["sub1","g1","1"]),n=e=>{console.log(e)};return(e,u)=>(d(),_(c(G),{selectedKeys:t.value,"onUpdate:selectedKeys":u[0]||(u[0]=e=>t.value=e),style:{width:"256px"},mode:"column",onChange:n},{default:f((()=>[b(c(N),{keyValue:"sub1",collapsible:!1},{icon:f((()=>[b(c(m),{name:"email",width:"1em",height:"1em"})])),title:f((()=>[O("Navigation One")])),default:f((()=>[b(c(C),{keyValue:"g1",title:"Item 1"},{default:f((()=>[b(c(K),{keyValue:"1"},{default:f((()=>[O("Option 1")])),_:1}),b(c(K),{keyValue:"2"},{default:f((()=>[O("Option 2")])),_:1})])),_:1}),b(c(C),{keyValue:"g2",title:"Item 2"},{default:f((()=>[b(c(K),{keyValue:"3"},{default:f((()=>[O("Option 3")])),_:1}),b(c(K),{keyValue:"4"},{default:f((()=>[O("Option 4")])),_:1})])),_:1})])),_:1}),b(c(N),{keyValue:"sub2",collapsible:!1},{icon:f((()=>[b(c(m),{name:"apps",width:"1em",height:"1em"})])),title:f((()=>[O("Navigation Two")])),default:f((()=>[b(c(K),{keyValue:"5"},{default:f((()=>[O("Option 5")])),_:1}),b(c(K),{keyValue:"6"},{default:f((()=>[O("Option 6")])),_:1}),b(c(N),{keyValue:"sub3",collapsible:!1},{title:f((()=>[O("Submenu")])),default:f((()=>[b(c(K),{keyValue:"7"},{default:f((()=>[O("Option 7")])),_:1}),b(c(K),{keyValue:"8"},{default:f((()=>[O("Option 8")])),_:1})])),_:1})])),_:1}),b(c(N),{keyValue:"sub4",collapsible:!1},{icon:f((()=>[b(c(m),{name:"setting",width:"1em",height:"1em"})])),title:f((()=>[O("Navigation Three")])),default:f((()=>[b(c(K),{keyValue:"9"},{default:f((()=>[O("Option 9")])),_:1}),b(c(K),{keyValue:"10"},{default:f((()=>[O("Option 10")])),_:1}),b(c(K),{keyValue:"11"},{default:f((()=>[O("Option 11")])),_:1}),b(c(K),{keyValue:"12"},{default:f((()=>[O("Option 12")])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}});B(E);var H=e=>{e.__sourceCode='<template>\n  <Menu\n    v-model:selectedKeys="selectedKeys"\n    style="width: 256px"\n    mode="column"\n    @change="onChange"\n  >\n    <SubMenu keyValue="sub1">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation One</template>\n      <MenuItemGroup keyValue="g1" title="Item 1">\n        <MenuItem keyValue="1">Option 1</MenuItem>\n        <MenuItem keyValue="2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup keyValue="g2" title="Item 2">\n        <MenuItem keyValue="3">Option 3</MenuItem>\n        <MenuItem keyValue="4">Option 4</MenuItem>\n      </MenuItemGroup>\n      <SubMenu keyValue="sub5">\n        <template #icon>\n          <SvgIcon name="setting" width="1em" height="1em" />\n        </template>\n        <template #title>Navigation Three</template>\n        <MenuItem keyValue="13">Option 13</MenuItem>\n        <MenuItem keyValue="14">Option 14</MenuItem>\n        <MenuItem keyValue="15">Option 15</MenuItem>\n        <MenuItem keyValue="16">Option 16</MenuItem>\n      </SubMenu>\n    </SubMenu>\n    <SubMenu keyValue="sub2">\n      <template #icon>\n        <SvgIcon name="apps" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Two</template>\n      <MenuItem keyValue="5">Option 5</MenuItem>\n      <MenuItem keyValue="6">Option 6</MenuItem>\n      <SubMenu keyValue="sub3">\n        <template #title>Submenu</template>\n        <MenuItem keyValue="7">Option 7</MenuItem>\n        <MenuItem keyValue="8">Option 8</MenuItem>\n        <SubMenu keyValue="sub4">\n          <template #icon>\n            <SvgIcon name="setting" width="1em" height="1em" />\n          </template>\n          <template #title>Navigation Three</template>\n          <MenuItem keyValue="9">Option 9</MenuItem>\n          <MenuItem keyValue="10">Option 10</MenuItem>\n          <MenuItem keyValue="11">Option 11</MenuItem>\n          <MenuItem keyValue="12">Option 12</MenuItem>\n        </SubMenu>\n      </SubMenu>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from \'@/lib\'\n\nconst selectedKeys = ref<string[]>([\'sub1\', \'g1\', \'1\'])\n\nconst onChange = (selectKey: string[]) => {\n  console.log(selectKey)\n}\n<\/script>',e.__sourceTitle="树形菜单栏(嵌套)"};const J=o({__name:"DemoFour",setup(e){const t=v(["sub1","g1","1"]),n=e=>{console.log(e)};return(e,u)=>(d(),_(c(G),{selectedKeys:t.value,"onUpdate:selectedKeys":u[0]||(u[0]=e=>t.value=e),style:{width:"256px"},mode:"column",onChange:n},{default:f((()=>[b(c(N),{keyValue:"sub1"},{icon:f((()=>[b(c(m),{name:"email",width:"1em",height:"1em"})])),title:f((()=>[O("Navigation One")])),default:f((()=>[b(c(C),{keyValue:"g1",title:"Item 1"},{default:f((()=>[b(c(K),{keyValue:"1"},{default:f((()=>[O("Option 1")])),_:1}),b(c(K),{keyValue:"2"},{default:f((()=>[O("Option 2")])),_:1})])),_:1}),b(c(C),{keyValue:"g2",title:"Item 2"},{default:f((()=>[b(c(K),{keyValue:"3"},{default:f((()=>[O("Option 3")])),_:1}),b(c(K),{keyValue:"4"},{default:f((()=>[O("Option 4")])),_:1})])),_:1}),b(c(N),{keyValue:"sub5"},{icon:f((()=>[b(c(m),{name:"setting",width:"1em",height:"1em"})])),title:f((()=>[O("Navigation Three")])),default:f((()=>[b(c(K),{keyValue:"13"},{default:f((()=>[O("Option 13")])),_:1}),b(c(K),{keyValue:"14"},{default:f((()=>[O("Option 14")])),_:1}),b(c(K),{keyValue:"15"},{default:f((()=>[O("Option 15")])),_:1}),b(c(K),{keyValue:"16"},{default:f((()=>[O("Option 16")])),_:1})])),_:1})])),_:1}),b(c(N),{keyValue:"sub2"},{icon:f((()=>[b(c(m),{name:"apps",width:"1em",height:"1em"})])),title:f((()=>[O("Navigation Two")])),default:f((()=>[b(c(K),{keyValue:"5"},{default:f((()=>[O("Option 5")])),_:1}),b(c(K),{keyValue:"6"},{default:f((()=>[O("Option 6")])),_:1}),b(c(N),{keyValue:"sub3"},{title:f((()=>[O("Submenu")])),default:f((()=>[b(c(K),{keyValue:"7"},{default:f((()=>[O("Option 7")])),_:1}),b(c(K),{keyValue:"8"},{default:f((()=>[O("Option 8")])),_:1}),b(c(N),{keyValue:"sub4"},{icon:f((()=>[b(c(m),{name:"setting",width:"1em",height:"1em"})])),title:f((()=>[O("Navigation Three")])),default:f((()=>[b(c(K),{keyValue:"9"},{default:f((()=>[O("Option 9")])),_:1}),b(c(K),{keyValue:"10"},{default:f((()=>[O("Option 10")])),_:1}),b(c(K),{keyValue:"11"},{default:f((()=>[O("Option 11")])),_:1}),b(c(K),{keyValue:"12"},{default:f((()=>[O("Option 12")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}});H(J);const Q=o({__name:"Demo",setup(e){const t=S((()=>[F,q,E,J].map(((e,t)=>u(e,"menu",t)))));return(e,n)=>(d(),_(l,{"demo-arr":c(t)},null,8,["demo-arr"]))}}),R=o({__name:"Index",setup(e){v(null);const t=["横向菜单栏","垂直菜单栏","菜单栏不折叠","树形菜单栏(嵌套)"],n=S((()=>i("menu",t)));return(e,t)=>(d(),_(a,{"nav-arr":c(n),title:"Menu 导航菜单","component-name":"menu"},{intro:f((()=>[b(z)])),demo:f((()=>[b(Q)])),api:f((()=>[b(U)])),_:1},8,["nav-arr"]))}});export{R as default};
