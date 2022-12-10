import{H as e}from"./Header-c99d9718.js";import{_ as t,d as l,r as a,u as s,o as u,w as i,a as o,b as n,c as r,e as c,f as y,g as k,F as p,h as d,i as V,j as m,t as b,p as f,k as g,l as _,m as h}from"./index-4bdb761c.js";import{_ as v,a as w,b as C}from"./SubMenu-8b51ef02.js";import{_ as T}from"./Upload.vue_vue_type_style_index_0_lang-dcc18adf.js";import{_ as x}from"./Drawer-9d419fae.js";import"./Dropdown-e012c60f.js";import"./bodyAddClass-5e3cef3b.js";const I=e=>(f("data-v-d49bbb22"),e=e(),g(),e),P={class:"components-Menu scroll-container"},S=I((()=>_("span",{style:{"font-weight":"600"}},"通用",-1))),j=I((()=>_("span",{style:{"font-weight":"600"}},"布局",-1))),D=I((()=>_("span",{style:{"font-weight":"600"}},"导航",-1))),M=I((()=>_("span",{style:{"font-weight":"600"}},"数据录入",-1))),$=I((()=>_("span",{style:{"font-weight":"600"}},"数据展示",-1))),A=I((()=>_("span",{style:{"font-weight":"600"}},"反馈",-1))),H=I((()=>_("span",{style:{"font-weight":"600"}},"其他",-1)));var B=t(l({__name:"ComponentsMenu",emits:["change"],setup(e,{emit:t}){const l=a(["sub1","button"]),f=s(),g=()=>{t("change")},_={sub1:{button:!0,typography:!0,palette:!0},sub2:{divider:!0,grid:!0,layout:!0,space:!0},sub3:{affix:!0,anchor:!0,breadcrumb:!0,dropdown:!0,menu:!0,pageHeader:!0,pagination:!0,steps:!0},sub4:{autoComplete:!0,cascader:!0,checkbox:!0,datePicker:!0,form:!0,input:!0,inputNumber:!0,mentions:!0,radio:!0,rate:!0,select:!0,slider:!0,switch:!0,timePicker:!0,transfer:!0,treeSelect:!0,upload:!0},sub5:{avatar:!0,badge:!0,calendar:!0,card:!0,carousel:!0,collapse:!0,comment:!0,descriptions:!0,empty:!0,image:!0,list:!0,popover:!0,statistic:!0,table:!0,tabs:!0,tag:!0,timeline:!0,tooltip:!0,tree:!0},sub6:{alert:!0,drawer:!0,message:!0,modal:!0,notification:!0,popconfirm:!0,progress:!0,result:!0,skeleton:!0,spin:!0},sub7:{backTop:!0}},h=()=>{const e=f.path.split("/"),t=e[e.length-1],a=Object.keys(_);for(let s=0;s<a.length;s++){const e=a[s];_[e][t]&&(l.value=[e,t])}};u((()=>{h()})),i((()=>f.path),(()=>{h()}));const T=o([{keyValue:"button",title:" Button 按钮"},{keyValue:"typography",title:" Typography 排版"},{keyValue:"palette",title:" Palette 调色板"}]),x=o([{keyValue:"divider",title:" Divider 分割线"},{keyValue:"grid",title:" Grid 栅格"},{keyValue:"layout",title:" Layout 布局"},{keyValue:"space",title:" Space 间距"}]),I=o([{keyValue:"affix",title:" Affix 固钉"},{keyValue:"anchor",title:" Anchor 锚点"},{keyValue:"breadcrumb",title:" Breadcrumb 面包屑"},{keyValue:"dropdown",title:" Dropdown 下拉菜单"},{keyValue:"menu",title:" Menu 导航菜单"},{keyValue:"pageHeader",title:" PageHeader 页头"},{keyValue:"pagination",title:" Pagination 分页"},{keyValue:"steps",title:" Steps 步骤条"}]),B=o([{keyValue:"autoComplete",title:" AutoComplete 自动完成"},{keyValue:"cascader",title:" Cascader 级联选择"},{keyValue:"checkbox",title:" Checkbox 多选框"},{keyValue:"datePicker",title:" DatePicker 日期选择框"},{keyValue:"form",title:" Form 表单"},{keyValue:"input",title:" Input 输入框"},{keyValue:"inputNumber",title:" InputNumber 数字输入框"},{keyValue:"mentions",title:" Mentions 提及"},{keyValue:"radio",title:" Radio 单选框"},{keyValue:"rate",title:" Rate 评分"},{keyValue:"select",title:" Select 选择器"},{keyValue:"slider",title:" Slider 滑动输入条"},{keyValue:"switch",title:" Switch 开关"},{keyValue:"timePicker",title:" TimePicker 时间选择框"},{keyValue:"transfer",title:" Transfer 穿梭框"},{keyValue:"treeSelect",title:" TreeSelect 树选择"},{keyValue:"upload",title:" Upload 上传"}]),N=o([{keyValue:"avatar",title:" Avatar 头像"},{keyValue:"badge",title:" Badge 徽标数"},{keyValue:"calendar",title:" Calendar 日历"},{keyValue:"card",title:" Card 卡片"},{keyValue:"carousel",title:" Carousel 走马灯"},{keyValue:"collapse",title:" Collapse 折叠面板"},{keyValue:"comment",title:"Comment 评论"},{keyValue:"descriptions",title:" Descriptions 描述列表"},{keyValue:"empty",title:" Empty 空状态"},{keyValue:"image",title:" Image 图片"},{keyValue:"list",title:" List 列表"},{keyValue:"popover",title:" Popover 气泡卡片"},{keyValue:"statistic",title:" Statistic 统计数值"},{keyValue:"table",title:" Table 表格"},{keyValue:"tabs",title:" Tabs 标签页"},{keyValue:"tag",title:" Tag 标签"},{keyValue:"timeline",title:" Timeline 时间轴"},{keyValue:"tooltip",title:" Tooltip 文字提示"},{keyValue:"tree",title:" Tree 树形控件"}]),U=o([{keyValue:"alert",title:" Alert 警告提示"},{keyValue:"drawer",title:" Drawer 抽屉"},{keyValue:"message",title:" Message 全局提示"},{keyValue:"modal",title:" Modal 对话框"},{keyValue:"notification",title:" Notification 通知提醒框"},{keyValue:"popconfirm",title:" Popconfirm 气泡确认框"},{keyValue:"progress",title:" Progress 进度条"},{keyValue:"result",title:" Result 结果"},{keyValue:"skeleton",title:" Skeleton 骨架屏"},{keyValue:"spin",title:" Spin 加载中"}]),K=o([{keyValue:"backTop",title:" BackTop 回到顶部"}]);return(e,t)=>{const a=n("router-link");return r(),c("section",P,[y(C,{selectedKeys:l.value,"onUpdate:selectedKeys":t[0]||(t[0]=e=>l.value=e),mode:"column",onChange:g},{default:k((()=>[y(v,{keyValue:"sub1",collapsible:!1},{title:k((()=>[S])),default:k((()=>[(r(!0),c(p,null,d(T,(e=>(r(),V(w,{keyValue:e.keyValue,key:e.keyValue,class:"menuItem"},{default:k((()=>[y(a,{to:`/components/${e.keyValue}`,class:"router-link"},{default:k((()=>[m(b(e.title),1)])),_:2},1032,["to"])])),_:2},1032,["keyValue"])))),128))])),_:1}),y(v,{keyValue:"sub2",collapsible:!1},{title:k((()=>[j])),default:k((()=>[(r(!0),c(p,null,d(x,(e=>(r(),V(w,{keyValue:e.keyValue,key:e.keyValue,class:"menuItem"},{default:k((()=>[y(a,{to:`/components/${e.keyValue}`,class:"router-link"},{default:k((()=>[m(b(e.title),1)])),_:2},1032,["to"])])),_:2},1032,["keyValue"])))),128))])),_:1}),y(v,{keyValue:"sub3",collapsible:!1},{title:k((()=>[D])),default:k((()=>[(r(!0),c(p,null,d(I,(e=>(r(),V(w,{keyValue:e.keyValue,key:e.keyValue,class:"menuItem"},{default:k((()=>[y(a,{to:`/components/${e.keyValue}`,class:"router-link"},{default:k((()=>[m(b(e.title),1)])),_:2},1032,["to"])])),_:2},1032,["keyValue"])))),128))])),_:1}),y(v,{keyValue:"sub4",collapsible:!1},{title:k((()=>[M])),default:k((()=>[(r(!0),c(p,null,d(B,(e=>(r(),V(w,{keyValue:e.keyValue,key:e.keyValue,class:"menuItem"},{default:k((()=>[y(a,{to:`/components/${e.keyValue}`,class:"router-link"},{default:k((()=>[m(b(e.title),1)])),_:2},1032,["to"])])),_:2},1032,["keyValue"])))),128))])),_:1}),y(v,{keyValue:"sub5",collapsible:!1},{title:k((()=>[$])),default:k((()=>[(r(!0),c(p,null,d(N,(e=>(r(),V(w,{keyValue:e.keyValue,key:e.keyValue,class:"menuItem"},{default:k((()=>[y(a,{to:`/components/${e.keyValue}`,class:"router-link"},{default:k((()=>[m(b(e.title),1)])),_:2},1032,["to"])])),_:2},1032,["keyValue"])))),128))])),_:1}),y(v,{keyValue:"sub6",collapsible:!1},{title:k((()=>[A])),default:k((()=>[(r(!0),c(p,null,d(U,(e=>(r(),V(w,{keyValue:e.keyValue,key:e.keyValue,class:"menuItem"},{default:k((()=>[y(a,{to:`/components/${e.keyValue}`,class:"router-link"},{default:k((()=>[m(b(e.title),1)])),_:2},1032,["to"])])),_:2},1032,["keyValue"])))),128))])),_:1}),y(v,{keyValue:"sub7",collapsible:!1},{title:k((()=>[H])),default:k((()=>[(r(!0),c(p,null,d(K,(e=>(r(),V(w,{keyValue:e.keyValue,key:e.keyValue,class:"menuItem",style:{"margin-bottom":"80px"}},{default:k((()=>[y(a,{to:`/components/${e.keyValue}`,class:"router-link"},{default:k((()=>[m(b(e.title),1)])),_:2},1032,["to"])])),_:2},1032,["keyValue"])))),128))])),_:1})])),_:1},8,["selectedKeys"])])}}}),[["__scopeId","data-v-d49bbb22"]]);const N={class:"components--wrap"},U={class:"components-Head"},K={class:"components-Body"},R={class:"display-menu scroll-container"},F={class:"display-content scroll-container"},L={class:"display-pop-menu scroll-container"};var E=t(l({__name:"Components",setup(t){const l=a(!1),s=()=>{l.value=!0},u=()=>{l.value=!1};return(t,a)=>{const i=n("router-view");return r(),c(p,null,[_("div",N,[_("section",U,[y(e)]),_("section",K,[_("span",{class:"menu-pop-button",onClick:s},[y(h(T),{name:"menu_outline",width:"20px",height:"20px",fill:"#262626"})]),_("section",R,[y(B)]),_("section",F,[y(i)])])]),y(h(x),{visible:l.value,"onUpdate:visible":a[0]||(a[0]=e=>l.value=e),placement:"left",classname:"custom"},{content:k((()=>[_("section",L,[y(B,{onChange:u})])])),_:1},8,["visible"])],64)}}}),[["__scopeId","data-v-0ddaab5b"]]);export{E as default};
