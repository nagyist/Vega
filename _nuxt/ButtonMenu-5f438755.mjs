import{k as m,a as _,r as c,o,f as s,h as k,t as i,F as v,G as y,j as h}from"./entry-cf7f9e40.mjs";const b={key:0,class:"menu"},g=["onClick"],C=_({__name:"ButtonMenu",props:{label:{default:"",type:String},items:{default:()=>[],type:Array}},setup(r){const n=c(!1);function a(e,u=!1){var t;if(!u&&((t=l.value)==null?void 0:t.contains(e.target))){e.stopPropagation();return}n.value=!1,window.removeEventListener("click",a)}function d(e){if(n.value===!0){a(e,!0);return}n.value=!0,window.addEventListener("click",a)}const l=c(null);return(e,u)=>(o(),s("div",{ref_key:"el",ref:l,class:"header-button"},[k("button",{style:{padding:"0 16px"},onClick:d},i(r.label),1),n.value?(o(),s("div",b,[(o(!0),s(v,null,y(r.items,(t,f)=>(o(),s("button",{key:f,class:"header-item",onClick:p=>{t.onClick(),a(p,!0)}},i(t.name),9,g))),128))])):h("",!0)],512))}});var B=m(C,[["__scopeId","data-v-2188b187"]]);export{B as default};
