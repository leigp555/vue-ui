import{D as e,C as t}from"./DemoDisplay-f6ca5a4b.js";import{d as n,O as u,E as l,c as a,e as i,m,t as o,z as p,q as s,G as d,F as y,h as r,i as I,N as c,g as M,f as _,j as g,r as k,W as V,Y as h,_ as f,Z as O,k as b,L as v}from"./index-597196db.js";import{_ as w,P as S,T as K}from"./Paragraph-80763fd9.js";import{_ as N}from"./ApiIntro.vue_vue_type_style_index_0_lang-7bf8e844.js";import{g as G,a as T}from"./helper-2dff78a5.js";import{_ as x}from"./MenuItem.vue_vue_type_script_setup_true_lang-520a6721.js";const C={class:"ui-menuGroup-content"},D=["data-setKey"],j=n({__name:"MenuItemGroup",props:{title:null,paddingLeft:null,keyValue:null,totalTitle:null},setup(e){const t=u().default(),n=l("ui_menu_selectedArr"),M=l("ui_menu_mode"),_=e=>!!(null==n?void 0:n.value)&&(null==n?void 0:n.value.indexOf(e.props.keyValue))>=0;return(u,l)=>(a(),i("div",{class:p(["ui-menuGroup-wrap",{"ui-menuGroup-wrap-column":"column"===s(M)}])},[m("div",{class:p(["ui-menuGroup-title",{"ui-menuGroup-title-selected":s(n).indexOf(e.keyValue)>=0}]),style:d({paddingLeft:"column"===s(M)?e.paddingLeft-16+"px":"8px 16px"})},o(e.title),7),m("ul",C,[(a(!0),i(y,null,r(s(t),(t=>(a(),i("li",{key:t,class:p(["ui-menuGroup-item",{"ui-menuGroup-item-selected":_(t)}]),"data-setKey":t.props.keyValue},[(a(),I(c(t),{isNested:!0,paddingLeft:e.paddingLeft,totalTitle:[...e.totalTitle,e.keyValue]},null,8,["paddingLeft","totalTitle"]))],10,D)))),128))])],2))}}),L=m("p",null,"为页面和功能提供导航的菜单列表。",-1),z=m("ul",null,[m("li",null,"Menu"),m("li",null,"MenuItem"),m("li",null,"MenuItemGroup"),m("li",null,"SubMenu")],-1),U=m("ul",null,[m("li",null,"使用导航菜单可以快速在网站的页面间跳转。"),m("li",null,"导航同级之间在逻辑上需为并列且互斥的关系。")],-1),A=n({__name:"Intro",setup:e=>(e,t)=>(a(),I(s(K),null,{default:M((()=>[_(s(w),null,{default:M((()=>[g("简介")])),_:1}),_(s(S),null,{default:M((()=>[L])),_:1}),_(s(w),null,{default:M((()=>[g("组件概览")])),_:1}),_(s(S),null,{default:M((()=>[z])),_:1}),_(s(w),null,{default:M((()=>[g("使用场景")])),_:1}),_(s(S),null,{default:M((()=>[U])),_:1})])),_:1}))}),F=n({__name:"Api",setup(e){const t=[{rowIndex:1,"事件名称":"change","说明":"点击标题时的回调","回调参数":"(string[]) => void"}],n=[{componentName:"Menu",attrContent:[{rowIndex:1,"属性":"selectedKeys","说明":"选中的标题","类型":"string[]","默认值":"[]"},{rowIndex:2,"属性":"mode","说明":"排布方式（水平|垂直）","类型":"'horizontal' | 'column'","默认值":"horizontal"}]},{componentName:"MenuItem",attrContent:[{rowIndex:1,"属性":"keyValue","说明":"应提供唯一值","类型":"string","默认值":"null"},{rowIndex:2,"属性":"disabled","说明":"禁用","类型":"boolean","默认值":"false"}]},{componentName:"MenuItemGroup",attrContent:[{rowIndex:1,"属性":"keyValue","说明":"应提供唯一值","类型":"string","默认值":"null"},{rowIndex:2,"属性":"title","说明":"标题","类型":"string","默认值":"null"}]},{componentName:"SubMenu",attrContent:[{rowIndex:1,"属性":"keyValue","说明":"应提供唯一值","类型":"string","默认值":"null"},{rowIndex:2,"属性":"collapsible","说明":"是否可折叠","类型":"boolean","默认值":"true"}]}];return(e,u)=>(a(),I(N,{"attr-content-arr":n,"event-content":t}))}}),P=n({__name:"DemoOne",setup(e){const t=k(["mail"]),n=e=>{console.log(e)};return(e,u)=>(a(),I(s(b),{selectedKeys:t.value,"onUpdate:selectedKeys":u[0]||(u[0]=e=>t.value=e),mode:"horizontal",onChange:n},{default:M((()=>[_(s(x),{keyValue:"mail"},{icon:M((()=>[_(s(V),{name:"email",width:"1em",height:"1em"})])),default:M((()=>[g(" Navigation One ")])),_:1}),_(s(x),{keyValue:"app",disabled:!0},{icon:M((()=>[_(s(h),{name:"apps",width:"1em",height:"1em"})])),default:M((()=>[g(" Navigation Two ")])),_:1}),_(s(f),{keyValue:"sub1"},{icon:M((()=>[_(s(O),{name:"setting",width:"1em",height:"1em"})])),title:M((()=>[g("Navigation Three - Submenu")])),default:M((()=>[_(s(j),{title:"Item 1",keyValue:"Item 1"},{default:M((()=>[_(s(x),{keyValue:"setting:1"},{default:M((()=>[g("Option 1")])),_:1}),_(s(x),{keyValue:"setting:2"},{default:M((()=>[g("Option 2")])),_:1})])),_:1}),_(s(j),{title:"Item 2",keyValue:"Item 2"},{default:M((()=>[_(s(x),{keyValue:"setting:3"},{default:M((()=>[g("Option 3")])),_:1}),_(s(x),{keyValue:"setting:4"},{default:M((()=>[g("Option 4")])),_:1})])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}}),q=e=>{e.__sourceCode='<template>\n  <Menu v-model:selectedKeys="selectedKeys" mode="horizontal" @change="onChange">\n    <MenuItem keyValue="mail">\n      <template #icon>\n        <Icon_email name="email" width="1em" height="1em" />\n      </template>\n      Navigation One\n    </MenuItem>\n    <MenuItem keyValue="app" :disabled="true">\n      <template #icon>\n        <Icon_apps name="apps" width="1em" height="1em" />\n      </template>\n      Navigation Two\n    </MenuItem>\n    <SubMenu keyValue="sub1">\n      <template #icon>\n        <Icon_setting name="setting" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Three - Submenu</template>\n      <MenuItemGroup title="Item 1" keyValue="Item 1">\n        <MenuItem keyValue="setting:1">Option 1</MenuItem>\n        <MenuItem keyValue="setting:2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup title="Item 2" keyValue="Item 2">\n        <MenuItem keyValue="setting:3">Option 3</MenuItem>\n        <MenuItem keyValue="setting:4">Option 4</MenuItem>\n      </MenuItemGroup>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Icon_email, Icon_setting, Icon_apps } from \'@hut-ui/icons-vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu } from \'hut-ui\'\n\nconst selectedKeys = ref<string[]>([\'mail\'])\n\nconst onChange = (selectKey: string[]) => {\n  console.log(selectKey)\n}\n<\/script>',e.__sourceTitle="横向菜单栏"};q(P);const E=n({__name:"DemoTwo",setup(e){const t=k(["sub1","g1","1"]),n=e=>{console.log(e)};return(e,u)=>(a(),I(s(b),{selectedKeys:t.value,"onUpdate:selectedKeys":u[0]||(u[0]=e=>t.value=e),style:{width:"256px"},mode:"column",onChange:n},{default:M((()=>[_(s(f),{keyValue:"sub1"},{icon:M((()=>[_(s(V),{name:"email",width:"1em",height:"1em"})])),title:M((()=>[g("Navigation One")])),default:M((()=>[_(s(j),{keyValue:"g1",title:"Item 1"},{default:M((()=>[_(s(x),{keyValue:"1"},{default:M((()=>[g("Option 1")])),_:1}),_(s(x),{keyValue:"2"},{default:M((()=>[g("Option 2")])),_:1})])),_:1}),_(s(j),{keyValue:"g2",title:"Item 2"},{default:M((()=>[_(s(x),{keyValue:"3"},{default:M((()=>[g("Option 3")])),_:1}),_(s(x),{keyValue:"4"},{default:M((()=>[g("Option 4")])),_:1})])),_:1})])),_:1}),_(s(f),{keyValue:"sub2"},{icon:M((()=>[_(s(h),{name:"apps",width:"1em",height:"1em"})])),title:M((()=>[g("Navigation Two")])),default:M((()=>[_(s(x),{keyValue:"5"},{default:M((()=>[g("Option 5")])),_:1}),_(s(x),{keyValue:"6"},{default:M((()=>[g("Option 6")])),_:1}),_(s(f),{keyValue:"sub3"},{title:M((()=>[g("Submenu")])),default:M((()=>[_(s(x),{keyValue:"7"},{default:M((()=>[g("Option 7")])),_:1}),_(s(x),{keyValue:"8"},{default:M((()=>[g("Option 8")])),_:1})])),_:1})])),_:1}),_(s(f),{keyValue:"sub4"},{icon:M((()=>[_(s(O),{name:"setting",width:"1em",height:"1em"})])),title:M((()=>[g("Navigation Three")])),default:M((()=>[_(s(x),{keyValue:"9"},{default:M((()=>[g("Option 9")])),_:1}),_(s(x),{keyValue:"10"},{default:M((()=>[g("Option 10")])),_:1}),_(s(x),{keyValue:"11"},{default:M((()=>[g("Option 11")])),_:1}),_(s(x),{keyValue:"12"},{default:M((()=>[g("Option 12")])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}}),Y=e=>{e.__sourceCode='<template>\n  <Menu\n    v-model:selectedKeys="selectedKeys"\n    style="width: 256px"\n    mode="column"\n    @change="onChange"\n  >\n    <SubMenu keyValue="sub1">\n      <template #icon>\n        <Icon_email name="email" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation One</template>\n      <MenuItemGroup keyValue="g1" title="Item 1">\n        <MenuItem keyValue="1">Option 1</MenuItem>\n        <MenuItem keyValue="2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup keyValue="g2" title="Item 2">\n        <MenuItem keyValue="3">Option 3</MenuItem>\n        <MenuItem keyValue="4">Option 4</MenuItem>\n      </MenuItemGroup>\n    </SubMenu>\n    <SubMenu keyValue="sub2">\n      <template #icon>\n        <Icon_apps name="apps" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Two</template>\n      <MenuItem keyValue="5">Option 5</MenuItem>\n      <MenuItem keyValue="6">Option 6</MenuItem>\n      <SubMenu keyValue="sub3">\n        <template #title>Submenu</template>\n        <MenuItem keyValue="7">Option 7</MenuItem>\n        <MenuItem keyValue="8">Option 8</MenuItem>\n      </SubMenu>\n    </SubMenu>\n    <SubMenu keyValue="sub4">\n      <template #icon>\n        <Icon_setting name="setting" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Three</template>\n      <MenuItem keyValue="9">Option 9</MenuItem>\n      <MenuItem keyValue="10">Option 10</MenuItem>\n      <MenuItem keyValue="11">Option 11</MenuItem>\n      <MenuItem keyValue="12">Option 12</MenuItem>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Icon_email, Icon_setting, Icon_apps } from \'@hut-ui/icons-vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu } from \'hut-ui\'\n\nconst selectedKeys = ref<string[]>([\'sub1\', \'g1\', \'1\'])\n\nconst onChange = (selectKey: string[]) => {\n  console.log(selectKey)\n}\n<\/script>',e.__sourceTitle="垂直菜单栏"};Y(E);const Z=n({__name:"DemoThree",setup(e){const t=k(["sub1","g1","1"]),n=e=>{console.log(e)};return(e,u)=>(a(),I(s(b),{selectedKeys:t.value,"onUpdate:selectedKeys":u[0]||(u[0]=e=>t.value=e),style:{width:"256px"},mode:"column",onChange:n},{default:M((()=>[_(s(f),{keyValue:"sub1",collapsible:!1},{icon:M((()=>[_(s(V),{name:"email",width:"1em",height:"1em"})])),title:M((()=>[g("Navigation One")])),default:M((()=>[_(s(j),{keyValue:"g1",title:"Item 1"},{default:M((()=>[_(s(x),{keyValue:"1"},{default:M((()=>[g("Option 1")])),_:1}),_(s(x),{keyValue:"2"},{default:M((()=>[g("Option 2")])),_:1})])),_:1}),_(s(j),{keyValue:"g2",title:"Item 2"},{default:M((()=>[_(s(x),{keyValue:"3"},{default:M((()=>[g("Option 3")])),_:1}),_(s(x),{keyValue:"4"},{default:M((()=>[g("Option 4")])),_:1})])),_:1})])),_:1}),_(s(f),{keyValue:"sub2",collapsible:!1},{icon:M((()=>[_(s(h),{name:"apps",width:"1em",height:"1em"})])),title:M((()=>[g("Navigation Two")])),default:M((()=>[_(s(x),{keyValue:"5"},{default:M((()=>[g("Option 5")])),_:1}),_(s(x),{keyValue:"6"},{default:M((()=>[g("Option 6")])),_:1}),_(s(f),{keyValue:"sub3",collapsible:!1},{title:M((()=>[g("Submenu")])),default:M((()=>[_(s(x),{keyValue:"7"},{default:M((()=>[g("Option 7")])),_:1}),_(s(x),{keyValue:"8"},{default:M((()=>[g("Option 8")])),_:1})])),_:1})])),_:1}),_(s(f),{keyValue:"sub4",collapsible:!1},{icon:M((()=>[_(s(O),{name:"setting",width:"1em",height:"1em"})])),title:M((()=>[g("Navigation Three")])),default:M((()=>[_(s(x),{keyValue:"9"},{default:M((()=>[g("Option 9")])),_:1}),_(s(x),{keyValue:"10"},{default:M((()=>[g("Option 10")])),_:1}),_(s(x),{keyValue:"11"},{default:M((()=>[g("Option 11")])),_:1}),_(s(x),{keyValue:"12"},{default:M((()=>[g("Option 12")])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}}),B=e=>{e.__sourceCode='<template>\n  <Menu\n    v-model:selectedKeys="selectedKeys"\n    style="width: 256px"\n    mode="column"\n    @change="onChange"\n  >\n    <SubMenu keyValue="sub1" :collapsible="false">\n      <template #icon>\n        <Icon_email name="email" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation One</template>\n      <MenuItemGroup keyValue="g1" title="Item 1">\n        <MenuItem keyValue="1">Option 1</MenuItem>\n        <MenuItem keyValue="2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup keyValue="g2" title="Item 2">\n        <MenuItem keyValue="3">Option 3</MenuItem>\n        <MenuItem keyValue="4">Option 4</MenuItem>\n      </MenuItemGroup>\n    </SubMenu>\n    <SubMenu keyValue="sub2" :collapsible="false">\n      <template #icon>\n        <Icon_apps name="apps" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Two</template>\n      <MenuItem keyValue="5">Option 5</MenuItem>\n      <MenuItem keyValue="6">Option 6</MenuItem>\n      <SubMenu keyValue="sub3" :collapsible="false">\n        <template #title>Submenu</template>\n        <MenuItem keyValue="7">Option 7</MenuItem>\n        <MenuItem keyValue="8">Option 8</MenuItem>\n      </SubMenu>\n    </SubMenu>\n    <SubMenu keyValue="sub4" :collapsible="false">\n      <template #icon>\n        <Icon_setting name="setting" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Three</template>\n      <MenuItem keyValue="9">Option 9</MenuItem>\n      <MenuItem keyValue="10">Option 10</MenuItem>\n      <MenuItem keyValue="11">Option 11</MenuItem>\n      <MenuItem keyValue="12">Option 12</MenuItem>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Icon_email, Icon_setting, Icon_apps } from \'@hut-ui/icons-vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu } from \'hut-ui\'\n\nconst selectedKeys = ref<string[]>([\'sub1\', \'g1\', \'1\'])\n\nconst onChange = (selectKey: string[]) => {\n  console.log(selectKey)\n}\n<\/script>',e.__sourceTitle="菜单栏不折叠"};B(Z);const H=n({__name:"DemoFour",setup(e){const t=k(["sub1","g1","1"]),n=e=>{console.log(e)};return(e,u)=>(a(),I(s(b),{selectedKeys:t.value,"onUpdate:selectedKeys":u[0]||(u[0]=e=>t.value=e),style:{width:"256px"},mode:"column",onChange:n},{default:M((()=>[_(s(f),{keyValue:"sub1"},{icon:M((()=>[_(s(V),{name:"email",width:"1em",height:"1em"})])),title:M((()=>[g("Navigation One")])),default:M((()=>[_(s(j),{keyValue:"g1",title:"Item 1"},{default:M((()=>[_(s(x),{keyValue:"1"},{default:M((()=>[g("Option 1")])),_:1}),_(s(x),{keyValue:"2"},{default:M((()=>[g("Option 2")])),_:1})])),_:1}),_(s(j),{keyValue:"g2",title:"Item 2"},{default:M((()=>[_(s(x),{keyValue:"3"},{default:M((()=>[g("Option 3")])),_:1}),_(s(x),{keyValue:"4"},{default:M((()=>[g("Option 4")])),_:1})])),_:1}),_(s(f),{keyValue:"sub5"},{icon:M((()=>[_(s(O),{name:"setting",width:"1em",height:"1em"})])),title:M((()=>[g("Navigation Three")])),default:M((()=>[_(s(x),{keyValue:"13"},{default:M((()=>[g("Option 13")])),_:1}),_(s(x),{keyValue:"14"},{default:M((()=>[g("Option 14")])),_:1}),_(s(x),{keyValue:"15"},{default:M((()=>[g("Option 15")])),_:1}),_(s(x),{keyValue:"16"},{default:M((()=>[g("Option 16")])),_:1})])),_:1})])),_:1}),_(s(f),{keyValue:"sub2"},{icon:M((()=>[_(s(h),{name:"apps",width:"1em",height:"1em"})])),title:M((()=>[g("Navigation Two")])),default:M((()=>[_(s(x),{keyValue:"5"},{default:M((()=>[g("Option 5")])),_:1}),_(s(x),{keyValue:"6"},{default:M((()=>[g("Option 6")])),_:1}),_(s(f),{keyValue:"sub3"},{title:M((()=>[g("Submenu")])),default:M((()=>[_(s(x),{keyValue:"7"},{default:M((()=>[g("Option 7")])),_:1}),_(s(x),{keyValue:"8"},{default:M((()=>[g("Option 8")])),_:1}),_(s(f),{keyValue:"sub4"},{icon:M((()=>[_(s(O),{name:"setting",width:"1em",height:"1em"})])),title:M((()=>[g("Navigation Three")])),default:M((()=>[_(s(x),{keyValue:"9"},{default:M((()=>[g("Option 9")])),_:1}),_(s(x),{keyValue:"10"},{default:M((()=>[g("Option 10")])),_:1}),_(s(x),{keyValue:"11"},{default:M((()=>[g("Option 11")])),_:1}),_(s(x),{keyValue:"12"},{default:M((()=>[g("Option 12")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}}),J=e=>{e.__sourceCode='<template>\n  <Menu\n    v-model:selectedKeys="selectedKeys"\n    style="width: 256px"\n    mode="column"\n    @change="onChange"\n  >\n    <SubMenu keyValue="sub1">\n      <template #icon>\n        <Icon_email name="email" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation One</template>\n      <MenuItemGroup keyValue="g1" title="Item 1">\n        <MenuItem keyValue="1">Option 1</MenuItem>\n        <MenuItem keyValue="2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup keyValue="g2" title="Item 2">\n        <MenuItem keyValue="3">Option 3</MenuItem>\n        <MenuItem keyValue="4">Option 4</MenuItem>\n      </MenuItemGroup>\n      <SubMenu keyValue="sub5">\n        <template #icon>\n          <Icon_setting name="setting" width="1em" height="1em" />\n        </template>\n        <template #title>Navigation Three</template>\n        <MenuItem keyValue="13">Option 13</MenuItem>\n        <MenuItem keyValue="14">Option 14</MenuItem>\n        <MenuItem keyValue="15">Option 15</MenuItem>\n        <MenuItem keyValue="16">Option 16</MenuItem>\n      </SubMenu>\n    </SubMenu>\n    <SubMenu keyValue="sub2">\n      <template #icon>\n        <Icon_apps name="apps" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Two</template>\n      <MenuItem keyValue="5">Option 5</MenuItem>\n      <MenuItem keyValue="6">Option 6</MenuItem>\n      <SubMenu keyValue="sub3">\n        <template #title>Submenu</template>\n        <MenuItem keyValue="7">Option 7</MenuItem>\n        <MenuItem keyValue="8">Option 8</MenuItem>\n        <SubMenu keyValue="sub4">\n          <template #icon>\n            <Icon_setting name="setting" width="1em" height="1em" />\n          </template>\n          <template #title>Navigation Three</template>\n          <MenuItem keyValue="9">Option 9</MenuItem>\n          <MenuItem keyValue="10">Option 10</MenuItem>\n          <MenuItem keyValue="11">Option 11</MenuItem>\n          <MenuItem keyValue="12">Option 12</MenuItem>\n        </SubMenu>\n      </SubMenu>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Icon_email, Icon_setting, Icon_apps } from \'@hut-ui/icons-vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu } from \'hut-ui\'\n\nconst selectedKeys = ref<string[]>([\'sub1\', \'g1\', \'1\'])\n\nconst onChange = (selectKey: string[]) => {\n  console.log(selectKey)\n}\n<\/script>',e.__sourceTitle="树形菜单栏(嵌套)"};J(H);const Q=n({__name:"Demo",setup(t){const n=v((()=>[P,E,Z,H].map(((e,t)=>G(e,"menu",t)))));return(t,u)=>(a(),I(e,{"demo-arr":s(n)},null,8,["demo-arr"]))}}),R=n({__name:"Index",setup(e){k(null);const n=["横向菜单栏","垂直菜单栏","菜单栏不折叠","树形菜单栏(嵌套)"],u=v((()=>T("menu",n)));return(e,n)=>(a(),I(t,{"nav-arr":s(u),title:"Menu 导航菜单","component-name":"menu"},{intro:M((()=>[_(A)])),demo:M((()=>[_(Q)])),api:M((()=>[_(F)])),_:1},8,["nav-arr"]))}});export{R as default};
