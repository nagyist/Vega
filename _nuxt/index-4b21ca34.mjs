import w from"./RecordingButton-96752a98.mjs";import A from"./ShowStatsButton-c2d0103f.mjs";import O from"./ContainerUi-a0f1d01c.mjs";import F from"./OperationHistoryPanel-d594f420.mjs";import{p as I,a as J,A as K,e as N,b as T,x as B,a2 as l,f as E,o as U,i as $,j as u,k as s,u as d,C as M}from"./entry-46ab768b.mjs";import{u as z}from"./useOperation-64756cd9.mjs";import{u as R}from"./useKeyboard-43ff37ba.mjs";import{u as V}from"./useUpdate-037bfd91.mjs";import q from"./ButtonMenu-76b716f9.mjs";import D from"./SettingsButton-04f3811d.mjs";import"./Recorder-9c72c880.mjs";import"./RecordingModal-ff38dd3f.mjs";import"./VModal-03166157.mjs";import"./VIcons-49ca4ef0.mjs";import"./mdi-4cca1244.mjs";import"./PanelUi-bdabae4b.mjs";import"./LayoutChangeArea-9ccbb90f.mjs";import"./useDragAndDrop-15ac1c4a.mjs";import"./RectUi-5a29f1f9.mjs";import"./onDragStart-b67a33ef.mjs";import"./ResizeTop-b3c1ee54.mjs";import"./ResizeLeft-f4ff0162.mjs";import"./SettingsModal-15abb8bf.mjs";import"./VInput-ed9ea9ef.mjs";const H={style:{height:"calc(100vh - 48px)"}},L={class:"header-menu"},X=J({__name:"index",setup(G){const{container:r,setContainer:a}=K(),{init:f,timeline:_,setTimeline:c}=N(),{assets:y,setAssets:m}=T(),v=z(),{init:h}=R(),{update:g}=V();B(()=>{h();const e=localStorage.getItem("save");if(typeof e=="string"){const t=JSON.parse(e);m(t.assets),c(t.timeline),a(t.container)}let o=0;const n=t=>{g(t-o),requestAnimationFrame(n),o=t};n(0),window.addEventListener("keydown",t=>{const i=k()?t.metaKey:t.ctrlKey;t.keyCode===90&&t.shiftKey&&i?l.redo():t.keyCode===90&&i&&l.undo(),t.keyCode===83&&i&&(localStorage.setItem("save",p()),v.pushHistory("Save"),t.preventDefault())}),f()});function k(){return navigator.platform.toUpperCase().includes("MAC")}function C(){const e=document.createElement("input");e.type="file",e.accept=".json",e.click(),e.onchange=()=>{if(!e.files)return;const o=e.files[0];if(!o)return;const n=new FileReader;n.onload=()=>{typeof n.result=="string"&&j(n.result)},n.readAsText(o)}}function x(){const e=p(),o=document.createElement("a");o.href="data:text/json;charset=utf-8,"+encodeURIComponent(e),o.download="project.json",o.click()}function p(){const e={container:r.value,timeline:_.value,assets:y.value};return JSON.stringify(e)}function j(e){const o=JSON.parse(e);return a(o.container),c(o.timeline),m(o.assets),o}const S=E(()=>r.value);return(e,o)=>{const n=w,t=A,i=O,b=F;return U(),$("div",{class:"root text-white bg-background1",style:M({display:d(r).align==="horizontal"?"flex":"block"})},[u("div",H,[u("div",L,[s(n),s(q,{label:"File",items:[{name:"Open",onClick:C},{name:"Save",onClick:x}]},null,8,["items"]),s(D),s(t)]),s(i,{container:d(S)},null,8,["container"]),s(b)])],4)}}});var ge=I(X,[["__scopeId","data-v-455d7872"]]);export{ge as default};
