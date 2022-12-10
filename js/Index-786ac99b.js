import{D as t,C as n}from"./DemoDisplay-9caf88b3.js";import{d as e,v as l,r as p,c as o,e as a,f as i,g as u,x as r,n as c,z as s,B as m,y as d,T as v,j as f,q as C,k as T,I as g,_,p as B,m as P,J as L}from"./index-8d3b1deb.js";import{_ as h,P as k,T as x}from"./Paragraph-24a019c8.js";import{_ as b}from"./ApiIntro-05f1c3da.js";import{g as y,a as j}from"./helper-a6849624.js";const w={class:"ui-popover-title"},I={class:"ui-popover-content"},R={style:{"pointer-events":"none"}},D=e({__name:"Popover",props:{placement:{default:"topCenter"},trigger:{default:"hover"}},setup(t){const n=t,{trigger:e}=l(n),f=p(!1),C=()=>{"click"===e.value&&(f.value=!f.value)},T=()=>{"click"===e.value&&(f.value=!1)},g=()=>{"hover"===e.value&&(f.value=!0)},_=()=>{"hover"===e.value&&(f.value=!1)};return(n,e)=>(o(),a("div",{class:"ui-popover-wrap",tabindex:"-1",onClick:C,onMouseover:g,onMouseleave:_,onBlur:T},[i(v,{name:"fade"},{default:u((()=>[r(c("div",{class:s(["ui-popover-tip",{[t.placement]:!0}])},[c("p",w,[m(n.$slots,"title")]),c("div",I,[m(n.$slots,"content")])],2),[[d,f.value]])])),_:3}),c("div",R,[m(n.$slots,"default")])],32))}}),$=c("p",null,"点击/鼠标移入元素，弹出气泡式的卡片浮层。",-1),A=c("ul",null,[c("li",null,"Popover: 主要组件")],-1),M=c("ul",null,[c("li",null," 当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。 ")],-1),q=e({__name:"Intro",setup:t=>(t,n)=>(o(),f(C(x),null,{default:u((()=>[i(C(h),null,{default:u((()=>[T("简介")])),_:1}),i(C(k),null,{default:u((()=>[$])),_:1}),i(C(h),null,{default:u((()=>[T("组件概览")])),_:1}),i(C(k),null,{default:u((()=>[A])),_:1}),i(C(h),null,{default:u((()=>[T("使用场景")])),_:1}),i(C(k),null,{default:u((()=>[M])),_:1})])),_:1}))}),z=e({__name:"Api",setup(t){const n=[],e=[{componentName:"Popover",attrContent:[{rowIndex:1,"属性":"placement","说明":"弹出框位置","类型":"Placement","默认值":"topCenter"},{rowIndex:2,"属性":"trigger","说明":"触发方式","类型":"'hover' | 'click'","默认值":"hover"}]}];return(t,l)=>(o(),f(b,{"attr-content-arr":e,"event-content":n}))}});var J=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <div class="top">\n      <Popover placement="topLeft">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="topCenter">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="topRight">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n    </div>\n    <div class="left-right">\n      <div class="left">\n        <Popover placement="leftTop">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n        <Popover placement="leftCenter">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n        <Popover placement="leftBottom">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n      </div>\n      <div class="right">\n        <Popover placement="rightTop">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n        <Popover placement="rightCenter">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n        <Popover placement="rightBottom">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n      </div>\n    </div>\n    <div class="bottom">\n      <Popover placement="bottomLeft">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="bottomCenter">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="bottomRight">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Popover, Button } from \'ant\'\n<\/script>\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  .top,\n  .bottom {\n    display: flex;\n    gap: 40px;\n    justify-content: center;\n  }\n  .left-right {\n    display: flex;\n    justify-content: center;\n    gap: 240px;\n    > .left,\n    .right {\n      display: flex;\n      flex-direction: column;\n      gap: 40px;\n    }\n  }\n}\n</style>',t.__sourceTitle=" hover触发 "};const N=t=>(B("data-v-73a17997"),t=t(),P(),t),O={class:"wrap"},E={class:"top"},F=N((()=>c("p",null,"Content",-1))),G=N((()=>c("p",null,"Content",-1))),H=N((()=>c("span",null,"Title",-1))),K=N((()=>c("p",null,"Content",-1))),Q=N((()=>c("p",null,"Content",-1))),S=N((()=>c("span",null,"Title",-1))),U=N((()=>c("p",null,"Content",-1))),V=N((()=>c("p",null,"Content",-1))),W=N((()=>c("span",null,"Title",-1))),X={class:"left-right"},Y={class:"left"},Z=N((()=>c("p",null,"Content",-1))),tt=N((()=>c("p",null,"Content",-1))),nt=N((()=>c("span",null,"Title",-1))),et=N((()=>c("p",null,"Content",-1))),lt=N((()=>c("p",null,"Content",-1))),pt=N((()=>c("span",null,"Title",-1))),ot=N((()=>c("p",null,"Content",-1))),at=N((()=>c("p",null,"Content",-1))),it=N((()=>c("span",null,"Title",-1))),ut={class:"right"},rt=N((()=>c("p",null,"Content",-1))),ct=N((()=>c("p",null,"Content",-1))),st=N((()=>c("span",null,"Title",-1))),mt=N((()=>c("p",null,"Content",-1))),dt=N((()=>c("p",null,"Content",-1))),vt=N((()=>c("span",null,"Title",-1))),ft=N((()=>c("p",null,"Content",-1))),Ct=N((()=>c("p",null,"Content",-1))),Tt=N((()=>c("span",null,"Title",-1))),gt={class:"bottom"},_t=N((()=>c("p",null,"Content",-1))),Bt=N((()=>c("p",null,"Content",-1))),Pt=N((()=>c("span",null,"Title",-1))),Lt=N((()=>c("p",null,"Content",-1))),ht=N((()=>c("p",null,"Content",-1))),kt=N((()=>c("span",null,"Title",-1))),xt=N((()=>c("p",null,"Content",-1))),bt=N((()=>c("p",null,"Content",-1))),yt=N((()=>c("span",null,"Title",-1))),jt=e({__name:"DemoOne",setup:t=>(t,n)=>(o(),a("div",O,[c("div",E,[i(C(D),{placement:"topLeft"},{content:u((()=>[F,G])),title:u((()=>[H])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1}),i(C(D),{placement:"topCenter"},{content:u((()=>[K,Q])),title:u((()=>[S])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1}),i(C(D),{placement:"topRight"},{content:u((()=>[U,V])),title:u((()=>[W])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1})]),c("div",X,[c("div",Y,[i(C(D),{placement:"leftTop"},{content:u((()=>[Z,tt])),title:u((()=>[nt])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1}),i(C(D),{placement:"leftCenter"},{content:u((()=>[et,lt])),title:u((()=>[pt])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1}),i(C(D),{placement:"leftBottom"},{content:u((()=>[ot,at])),title:u((()=>[it])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1})]),c("div",ut,[i(C(D),{placement:"rightTop"},{content:u((()=>[rt,ct])),title:u((()=>[st])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1}),i(C(D),{placement:"rightCenter"},{content:u((()=>[mt,dt])),title:u((()=>[vt])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1}),i(C(D),{placement:"rightBottom"},{content:u((()=>[ft,Ct])),title:u((()=>[Tt])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1})])]),c("div",gt,[i(C(D),{placement:"bottomLeft"},{content:u((()=>[_t,Bt])),title:u((()=>[Pt])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1}),i(C(D),{placement:"bottomCenter"},{content:u((()=>[Lt,ht])),title:u((()=>[kt])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1}),i(C(D),{placement:"bottomRight"},{content:u((()=>[xt,bt])),title:u((()=>[yt])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1})])]))});J(jt);var wt=_(jt,[["__scopeId","data-v-73a17997"]]),It=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <div class="top">\n      <Popover placement="topLeft" trigger="click">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="topCenter" trigger="click">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="topRight" trigger="click">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n    </div>\n    <div class="left-right">\n      <div class="left">\n        <Popover placement="leftTop" trigger="click">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n        <Popover placement="leftCenter" trigger="click">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n        <Popover placement="leftBottom" trigger="click">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n      </div>\n      <div class="right">\n        <Popover placement="rightTop" trigger="click">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n        <Popover placement="rightCenter" trigger="click">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n        <Popover placement="rightBottom" trigger="click">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n      </div>\n    </div>\n    <div class="bottom">\n      <Popover placement="bottomLeft" trigger="click">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="bottomCenter" trigger="click">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="bottomRight" trigger="click">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Popover, Button } from \'ant\'\n<\/script>\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  .top,\n  .bottom {\n    display: flex;\n    gap: 40px;\n    justify-content: center;\n  }\n  .left-right {\n    display: flex;\n    justify-content: center;\n    gap: 240px;\n    > .left,\n    .right {\n      display: flex;\n      flex-direction: column;\n      gap: 40px;\n    }\n  }\n}\n</style>',t.__sourceTitle=" click触发 "};const Rt=t=>(B("data-v-36b80db6"),t=t(),P(),t),Dt={class:"wrap"},$t={class:"top"},At=Rt((()=>c("p",null,"Content",-1))),Mt=Rt((()=>c("p",null,"Content",-1))),qt=Rt((()=>c("span",null,"Title",-1))),zt=Rt((()=>c("p",null,"Content",-1))),Jt=Rt((()=>c("p",null,"Content",-1))),Nt=Rt((()=>c("span",null,"Title",-1))),Ot=Rt((()=>c("p",null,"Content",-1))),Et=Rt((()=>c("p",null,"Content",-1))),Ft=Rt((()=>c("span",null,"Title",-1))),Gt={class:"left-right"},Ht={class:"left"},Kt=Rt((()=>c("p",null,"Content",-1))),Qt=Rt((()=>c("p",null,"Content",-1))),St=Rt((()=>c("span",null,"Title",-1))),Ut=Rt((()=>c("p",null,"Content",-1))),Vt=Rt((()=>c("p",null,"Content",-1))),Wt=Rt((()=>c("span",null,"Title",-1))),Xt=Rt((()=>c("p",null,"Content",-1))),Yt=Rt((()=>c("p",null,"Content",-1))),Zt=Rt((()=>c("span",null,"Title",-1))),tn={class:"right"},nn=Rt((()=>c("p",null,"Content",-1))),en=Rt((()=>c("p",null,"Content",-1))),ln=Rt((()=>c("span",null,"Title",-1))),pn=Rt((()=>c("p",null,"Content",-1))),on=Rt((()=>c("p",null,"Content",-1))),an=Rt((()=>c("span",null,"Title",-1))),un=Rt((()=>c("p",null,"Content",-1))),rn=Rt((()=>c("p",null,"Content",-1))),cn=Rt((()=>c("span",null,"Title",-1))),sn={class:"bottom"},mn=Rt((()=>c("p",null,"Content",-1))),dn=Rt((()=>c("p",null,"Content",-1))),vn=Rt((()=>c("span",null,"Title",-1))),fn=Rt((()=>c("p",null,"Content",-1))),Cn=Rt((()=>c("p",null,"Content",-1))),Tn=Rt((()=>c("span",null,"Title",-1))),gn=Rt((()=>c("p",null,"Content",-1))),_n=Rt((()=>c("p",null,"Content",-1))),Bn=Rt((()=>c("span",null,"Title",-1))),Pn=e({__name:"DemoTwo",setup:t=>(t,n)=>(o(),a("div",Dt,[c("div",$t,[i(C(D),{placement:"topLeft",trigger:"click"},{content:u((()=>[At,Mt])),title:u((()=>[qt])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1}),i(C(D),{placement:"topCenter",trigger:"click"},{content:u((()=>[zt,Jt])),title:u((()=>[Nt])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1}),i(C(D),{placement:"topRight",trigger:"click"},{content:u((()=>[Ot,Et])),title:u((()=>[Ft])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1})]),c("div",Gt,[c("div",Ht,[i(C(D),{placement:"leftTop",trigger:"click"},{content:u((()=>[Kt,Qt])),title:u((()=>[St])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1}),i(C(D),{placement:"leftCenter",trigger:"click"},{content:u((()=>[Ut,Vt])),title:u((()=>[Wt])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1}),i(C(D),{placement:"leftBottom",trigger:"click"},{content:u((()=>[Xt,Yt])),title:u((()=>[Zt])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1})]),c("div",tn,[i(C(D),{placement:"rightTop",trigger:"click"},{content:u((()=>[nn,en])),title:u((()=>[ln])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1}),i(C(D),{placement:"rightCenter",trigger:"click"},{content:u((()=>[pn,on])),title:u((()=>[an])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1}),i(C(D),{placement:"rightBottom",trigger:"click"},{content:u((()=>[un,rn])),title:u((()=>[cn])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1})])]),c("div",sn,[i(C(D),{placement:"bottomLeft",trigger:"click"},{content:u((()=>[mn,dn])),title:u((()=>[vn])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1}),i(C(D),{placement:"bottomCenter",trigger:"click"},{content:u((()=>[fn,Cn])),title:u((()=>[Tn])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1}),i(C(D),{placement:"bottomRight",trigger:"click"},{content:u((()=>[gn,_n])),title:u((()=>[Bn])),default:u((()=>[i(C(g),null,{default:u((()=>[T("TL")])),_:1})])),_:1})])]))});It(Pn);var Ln=_(Pn,[["__scopeId","data-v-36b80db6"]]);const hn=e({__name:"Demo",setup(n){const e=L((()=>[wt,Ln].map(((t,n)=>y(t,"popover",n)))));return(n,l)=>(o(),f(t,{"demo-arr":C(e)},null,8,["demo-arr"]))}}),kn=e({__name:"Index",setup(t){p(null);const e=["hover触发","click触发"],l=L((()=>j("popover",e)));return(t,e)=>(o(),f(n,{"nav-arr":C(l),title:"Popover 气泡卡片","component-name":"popover"},{intro:u((()=>[i(q)])),demo:u((()=>[i(hn)])),api:u((()=>[i(z)])),_:1},8,["nav-arr"]))}});export{kn as default};
