import{u as a}from"./useUpdate-82d7b47f.mjs";import{a as l,E as d,a4 as r,o as u,f}from"./entry-cf7f9e40.mjs";const h=l({__name:"ShowStatsButton",setup(m){let t=null;const{updateState:o}=a();function s(){!t||(t.dom.style.visibility="visible")}function n(){!t||(t.dom.style.visibility="hidden")}function i(){!t||(t.dom.style.visibility==="hidden"?s():n())}return d(()=>{t=new r,t.showPanel(0),o.value.before=t.begin,o.value.after=t.end,document.body.append(t.dom),t.dom.style.left="",t.dom.style.right="0",t.dom.style.pointerEvents="none",t.dom.childNodes.forEach(e=>{e instanceof HTMLElement&&(e.style.display="")}),n()}),(e,c)=>(u(),f("button",{onClick:i}," stats "))}});export{h as default};
