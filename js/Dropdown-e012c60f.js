import{d as e,v as o,r as t,c as a,e as n,l,z as u,f as s,g as r,A as i,B as v,T as d,s as c,m as p}from"./index-4bdb761c.js";import"./Upload.vue_vue_type_style_index_0_lang-dcc18adf.js";const w={style:{"pointer-events":"none"}},m=e({__name:"Dropdown",props:{trigger:{default:"hover"}},setup(e){const m=e,{trigger:f}=o(m),_=t(!1),x=t(!1),T=t(null),g=t(null),y=()=>{"click"===f.value&&(_.value=!_.value),"contextmenu"===f.value&&(_.value=!1)},k=()=>{if("click"===f.value){const e=setTimeout((()=>{_.value=!1,window.clearTimeout(e)}),100)}},h=()=>{"hover"===f.value&&(_.value=!0)},C=()=>{const e=setTimeout((()=>{if("hover"===f.value&&!x.value){const e=setTimeout((()=>{_.value=!1,window.clearTimeout(e)}),100)}window.clearTimeout(e)}),100)},M=()=>{"hover"===f.value&&(x.value=!0)},$=()=>{if("hover"===f.value){const e=setTimeout((()=>{_.value=!1,x.value=!1,window.clearTimeout(e)}),100)}},b=e=>{e.preventDefault(),_.value?(_.value=!1,setTimeout((()=>{_.value=!0}),50)):_.value=!0;const o=e.clientX-g.value.offsetLeft,t=e.clientY-g.value.getBoundingClientRect().top;T.value.style.top=`${t}px`,T.value.style.left=`${o}px`},B=()=>{const e=setTimeout((()=>{_.value=!1,window.clearTimeout(e)}),100)};return(e,o)=>(a(),n("div",{class:c(["ui-dropdown-wrap",{"dropdown-wrap-contextmenu":"contextmenu"===p(f)}]),ref_key:"dropdown_wrap_ref",ref:g},[l("div",{tabindex:"-1",class:"ui-dropdown-tip",onClick:y,onBlur:k,onMouseenter:h,onMouseleave:C,onContextmenu:b},[l("div",w,[u(e.$slots,"default")])],32),l("div",{class:c(["ui-dropdown-pop",{"dropdown-pop-contextmenu":"contextmenu"===p(f)}]),onMouseenter:M,onMouseleave:$,ref_key:"dropdown_pop_wrap",ref:T},[s(d,{name:"drawer"},{default:r((()=>[i(l("div",{class:"dropdown-pop-content ui-scroll-container",onClick:B},[u(e.$slots,"pop")],512),[[v,_.value]])])),_:3})],34)],2))}});export{m as _};
