import{_ as e,P as l,T as a,g as n,D as u,C as o,a as t}from"./DemoDisplay-2d0cc11b.js";import{c as i}from"./Upload.vue_vue_type_style_index_0_lang-466d0855.js";import{_ as r}from"./SubMenu.vue_vue_type_style_index_0_lang-63ec0c5c.js";import{d as s,s as c,r as v,z as d,i as b,o as p,g as h,c as g,F as m,f as _,b as f,t as C,x,n as k,l as y,M as w,e as T,k as j,L as z,w as P,P as D,A as S,B,T as I,q as N,h as M}from"./index-64f31046.js";import{_ as O}from"./ApiIntro-ec0be594.js";const L={key:0,class:"ui-cascader-pop ui-scroll-container",ref:"popRef"},V=["onClick"],X={class:"item-label-value"},A=s({__name:"CascaderPop",props:{options:{default:null},toEl:null},setup(e){const l=c("popVisibility"),a=c("changeValue"),n=v(""),u=c("initValue"),o=d((()=>null==u?void 0:u.value.split("/")));return(u,t)=>{const i=b("CascaderPop",!0);return p(),h(w,{to:e.toEl},[e.options?(p(),g("div",L,[(p(!0),g(m,null,_(e.options,(u=>(p(),g("div",{key:u.label,class:"cascader-list-item"},[f("div",{class:k(["cascader-label",{selected:y(o).indexOf(u.value)>=0}]),onClick:e=>(e=>{e.children&&(n.value=e.children[0].value),!e.children&&l&&(l.value=!1),e.parent&&a&&a(e.parent)})(u)},[f("span",X,C(u.label),1),u.children?(p(),h(r,{key:0,name:"back",width:"1em",height:"1em",class:"item-label-icon"})):x("",!0)],10,V),(p(),h(w,{to:e.toEl},[u.children&&n.value===u.children[0].value?(p(),g("div",{key:0,class:k(["cascader-loop",{open:n.value===u.children[0].value}])},[T(i,{options:u.children,"to-el":e.toEl},null,8,["options","to-el"])],2)):x("",!0)],8,["to"]))])))),128))],512)):x("",!0)],8,["to"])}}}),E={class:"ui-cascader-wrap"},F=["title"],Z={class:"cascader-pop-content"},R=s({__name:"Cascader",props:{value:{default:""},options:{default:()=>[]},placeholder:{default:""}},emits:["update:value","change"],setup(e,{emit:l}){var a;const n=e,u=v(!1),o=v(!1),{value:t,options:s}=j(n),c=()=>{u.value=!0},b=()=>{const e=setTimeout((()=>{o.value||(u.value=!1,window.clearTimeout(e))}),100)},h=()=>{o.value=!0,u.value=!0},m=()=>{o.value=!1,u.value=!1},_=e=>{for(let l=0;l<e.length;l++)if(e[l].show=!1,e[l].parent||(e[l].parent=e[l].value),e[l].children){for(let a=0;a<e[l].children.length;a++)e[l].children[a].show=!1,e[l].parent?e[l].children[a].parent=`${e[l].parent}/${e[l].children[a].value}`:e[l].children[a].parent=`${e[l].value}/${e[l].children[a].value}`;_(e[l].children)}return e},C=d((()=>_(s.value))),x=v(),k=v();k.value=document.createElement("div"),null==(a=k.value)||a.classList.add("ui-cascader-pop-item"),z((()=>{var e;null==(e=x.value)||e.appendChild(k.value)})),N("popVisibility",u),N("changeValue",(e=>{l("update:value",e),l("change",e)})),N("initValue",t);const w=()=>{l("update:value",""),l("change","")};return(l,a)=>(p(),g("div",E,[f("div",{title:y(t)},[T(y(i),{class:"ui-cascader-input",type:"text",placeholder:e.placeholder,onFocus:c,onBlur:b,value:y(t),autofocus:!1,readonly:""},{suffix:P((()=>[T(y(r),{name:"error_radius",width:"1em",height:"1em",fill:"#d9d9d9",onClick:D(w,["stop","prevent"])},null,8,["onClick"])])),_:1},8,["placeholder","value"])],8,F),f("div",{class:"ui-cascader-pop-wrap",onFocus:h,onBlur:m,tabindex:"-1"},[T(I,{name:"cascader"},{default:P((()=>[S(f("div",{class:"ui-cascader-pop-list",ref_key:"cascaderWrap",ref:x},null,512),[[B,u.value]])])),_:1})],32),f("div",Z,[T(A,{options:y(C),toEl:k.value},null,8,["options","toEl"])])]))}}),U=f("p",null,"级联选择框。",-1),H=f("ul",null,[f("li",null,"Cascader")],-1),$=f("ul",null,[f("li",null,"需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。"),f("li",null,"从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。"),f("li",null,"比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。")],-1),W=s({__name:"Intro",setup:n=>(n,u)=>(p(),h(y(a),null,{default:P((()=>[T(y(e),{level:4},{default:P((()=>[M("简介")])),_:1}),T(y(l),null,{default:P((()=>[U])),_:1}),T(y(e),{level:4},{default:P((()=>[M("组件概述")])),_:1}),T(y(l),null,{default:P((()=>[H])),_:1}),T(y(e),{level:4},{default:P((()=>[M("使用场景")])),_:1}),T(y(l),null,{default:P((()=>[$])),_:1})])),_:1}))}),J=s({__name:"Api",setup(e){const l=[{rowIndex:1,"事件名称":"change","说明":"选中内容改变时的回调","回调参数":"(value:string) => void"}],a=[{componentName:"Cascader",attrContent:[{rowIndex:1,"属性":"value","说明":"指定选中项","类型":"string","默认值":""},{rowIndex:2,"属性":"options","说明":"数据源","类型":"CascaderOptions[]","默认值":"[]"},{rowIndex:3,"属性":"placeholder","说明":"输入框占位文本","类型":"string","默认值":""}]}];return(e,n)=>(p(),h(O,{"attr-content-arr":a,"event-content":l}))}});var q=e=>{e.__sourceCode="<template>\n  <div class=\"wrap\">\n    <Cascader v-model:value=\"value\" :options=\"options\" placeholder=\"Please select\" />\n  </div>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\n\nimport { Cascader, CascaderOptions } from '@/lib'\n\nconst value = ref<string>('')\n\nconst options: CascaderOptions[] = [\n  {\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [\n      {\n        value: 'hangzhou',\n        label: 'Hangzhou',\n        children: [\n          {\n            value: 'xihu',\n            label: 'West Lake'\n          }\n        ]\n      }\n    ]\n  },\n  {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    children: [\n      {\n        value: 'nanjing',\n        label: 'Nanjing',\n        children: [\n          {\n            value: 'zhonghuamen',\n            label: 'Zhong Hua Men'\n          }\n        ]\n      },\n      {\n        value: 'suzhou',\n        label: 'SuZhou',\n        children: [\n          {\n            value: 'xishan',\n            label: 'XiShan',\n            children: [{ value: 'xxx', label: 'XXX' }]\n          }\n        ]\n      }\n    ]\n  }\n]\n<\/script>\n\n<style lang=\"scss\">\n.wrap {\n}\n</style>",e.__sourceTitle="基本用法"};const G={class:"wrap"},K=s({__name:"DemoOne",setup(e){const l=v(""),a=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]},{value:"suzhou",label:"SuZhou",children:[{value:"xishan",label:"XiShan",children:[{value:"xxx",label:"XXX"}]}]}]}];return(e,n)=>(p(),g("div",G,[T(y(R),{value:l.value,"onUpdate:value":n[0]||(n[0]=e=>l.value=e),options:a,placeholder:"Please select"},null,8,["value"])]))}});q(K);var Q=e=>{e.__sourceCode="<template>\n  <div class=\"wrap\">\n    <Cascader\n      v-model:value=\"value\"\n      :options=\"options\"\n      placeholder=\"Please select\"\n      @change=\"onChange\"\n    />\n  </div>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\n\nimport { Cascader, CascaderOptions } from '@/lib'\n\nconst value = ref<string>('')\n\nconst onChange = (newValue: string) => {\n  console.log(newValue)\n}\nconst options: CascaderOptions[] = [\n  {\n    value: 'zhinan',\n    label: '指南',\n    children: [\n      {\n        value: 'shejiyuanze',\n        label: '设计原则',\n        children: [\n          {\n            value: 'yizhi',\n            label: '一致'\n          },\n          {\n            value: 'fankui',\n            label: '反馈'\n          },\n          {\n            value: 'xiaolv',\n            label: '效率'\n          },\n          {\n            value: 'kekong',\n            label: '可控'\n          }\n        ]\n      },\n      {\n        value: 'daohang',\n        label: '导航',\n        children: [\n          {\n            value: 'cexiangdaohang',\n            label: '侧向导航'\n          },\n          {\n            value: 'dingbudaohang',\n            label: '顶部导航'\n          }\n        ]\n      }\n    ]\n  },\n  {\n    value: 'zujian',\n    label: '组件',\n    children: [\n      {\n        value: 'basic',\n        label: 'Basic',\n        children: [\n          {\n            value: 'layout',\n            label: 'Layout 布局'\n          },\n          {\n            value: 'color',\n            label: 'Color 色彩'\n          },\n          {\n            value: 'typography',\n            label: 'Typography 字体'\n          },\n          {\n            value: 'icon',\n            label: 'Icon 图标'\n          },\n          {\n            value: 'button',\n            label: 'Button 按钮'\n          }\n        ]\n      },\n      {\n        value: 'form',\n        label: 'Form',\n        children: [\n          {\n            value: 'radio',\n            label: 'Radio 单选框'\n          },\n          {\n            value: 'checkbox',\n            label: 'Checkbox 多选框'\n          },\n          {\n            value: 'input',\n            label: 'Input 输入框'\n          },\n          {\n            value: 'input-number',\n            label: 'InputNumber 计数器'\n          },\n          {\n            value: 'select',\n            label: 'Select 选择器'\n          },\n          {\n            value: 'cascader',\n            label: 'Cascader 级联选择器'\n          },\n          {\n            value: 'switch',\n            label: 'Switch 开关'\n          },\n          {\n            value: 'slider',\n            label: 'Slider 滑块'\n          },\n          {\n            value: 'time-picker',\n            label: 'TimePicker 时间选择器'\n          },\n          {\n            value: 'date-picker',\n            label: 'DatePicker 日期选择器'\n          },\n          {\n            value: 'datetime-picker',\n            label: 'DateTimePicker 日期时间选择器'\n          },\n          {\n            value: 'upload',\n            label: 'Upload 上传'\n          },\n          {\n            value: 'rate',\n            label: 'Rate 评分'\n          },\n          {\n            value: 'form',\n            label: 'Form 表单'\n          }\n        ]\n      },\n      {\n        value: 'data',\n        label: 'Data',\n        children: [\n          {\n            value: 'table',\n            label: 'Table 表格'\n          },\n          {\n            value: 'tag',\n            label: 'Tag 标签'\n          },\n          {\n            value: 'progress',\n            label: 'Progress 进度条'\n          },\n          {\n            value: 'tree',\n            label: 'Tree 树形控件'\n          },\n          {\n            value: 'pagination',\n            label: 'Pagination 分页'\n          },\n          {\n            value: 'badge',\n            label: 'Badge 标记'\n          }\n        ]\n      },\n      {\n        value: 'notice',\n        label: 'Notice',\n        children: [\n          {\n            value: 'alert',\n            label: 'Alert 警告'\n          },\n          {\n            value: 'loading',\n            label: 'Loading 加载'\n          },\n          {\n            value: 'message',\n            label: 'Message 消息提示'\n          },\n          {\n            value: 'message-box',\n            label: 'MessageBox 弹框'\n          },\n          {\n            value: 'notification',\n            label: 'Notification 通知'\n          }\n        ]\n      },\n      {\n        value: 'navigation',\n        label: 'Navigation',\n        children: [\n          {\n            value: 'menu',\n            label: 'NavMenu 导航菜单'\n          },\n          {\n            value: 'tabs',\n            label: 'Tabs 标签页'\n          },\n          {\n            value: 'breadcrumb',\n            label: 'Breadcrumb 面包屑'\n          },\n          {\n            value: 'dropdown',\n            label: 'Dropdown 下拉菜单'\n          },\n          {\n            value: 'steps',\n            label: 'Steps 步骤条'\n          }\n        ]\n      },\n      {\n        value: 'others',\n        label: 'Others',\n        children: [\n          {\n            value: 'dialog',\n            label: 'Dialog 对话框'\n          },\n          {\n            value: 'tooltip',\n            label: 'Tooltip 文字提示'\n          },\n          {\n            value: 'popover',\n            label: 'Popover 弹出框'\n          },\n          {\n            value: 'card',\n            label: 'Card 卡片'\n          },\n          {\n            value: 'carousel',\n            label: 'Carousel 走马灯'\n          },\n          {\n            value: 'collapse',\n            label: 'Collapse 折叠面板'\n          }\n        ]\n      }\n    ]\n  },\n  {\n    value: 'ziyuan',\n    label: '资源',\n    children: [\n      {\n        value: 'axure',\n        label: 'Axure Components'\n      },\n      {\n        value: 'sketch',\n        label: 'Sketch Templates'\n      },\n      {\n        value: 'jiaohu',\n        label: '组件交互文档'\n      }\n    ]\n  }\n]\n<\/script>\n\n<style lang=\"scss\">\n.wrap {\n}\n</style>",e.__sourceTitle="更复杂的数据"};const Y={class:"wrap"},ee=s({__name:"DemoTwo",setup(e){const l=v(""),a=e=>{console.log(e)},n=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}];return(e,u)=>(p(),g("div",Y,[T(y(R),{value:l.value,"onUpdate:value":u[0]||(u[0]=e=>l.value=e),options:n,placeholder:"Please select",onChange:a},null,8,["value"])]))}});Q(ee);const le=s({__name:"Demo",setup(e){const l=d((()=>[K,ee].map(((e,l)=>n(e,"cascader",l)))));return(e,a)=>(p(),h(u,{"demo-arr":y(l)},null,8,["demo-arr"]))}}),ae=s({__name:"Index",setup(e){v(null);const l=["基本用法","更复杂的数据"],a=d((()=>t("cascader",l)));return(e,l)=>(p(),h(o,{"nav-arr":y(a),title:"Cascader 级联选择","component-name":"cascader"},{intro:P((()=>[T(W)])),demo:P((()=>[T(le)])),api:P((()=>[T(J)])),_:1},8,["nav-arr"]))}});export{ae as default};
