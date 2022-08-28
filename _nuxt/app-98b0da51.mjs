import{d as N,_ as w}from"./RecordingButton-c4f8de7b.mjs";import x from"./ShowStatsButton-7d28eb76.mjs";import A from"./ContainerUi-76ea8747.mjs";import I from"./OperationHistoryPanel-ff4fbee1.mjs";import{k as P,a as F,N as K,b as J,r as H,a6 as R,E as U,a5 as h,o as $,f as B,h as y,i as s,u as S,H as M}from"./entry-cf7f9e40.mjs";import{a as V,u as D}from"./useTimeline-6cb6bf32.mjs";import{u as L}from"./useOperation-c4039ac0.mjs";import{u as q}from"./useKeyboard-b743da98.mjs";import{u as z}from"./useUpdate-82d7b47f.mjs";import{u as Y,i as g,_ as W,a as X}from"./ProjectModal-b0c5164c.mjs";import G from"./ButtonMenu-5f438755.mjs";import Q from"./SettingsButton-189cb1be.mjs";import{c as u}from"./clone-0e5b969a.mjs";import{g as Z}from"./getIsElectron-dd460f76.mjs";import"./Recorder-b6a34f18.mjs";import"./RecordingModal-0b4d586d.mjs";import"./VButton-eac02064.mjs";import"./VModal-15c9a48b.mjs";import"./VIcons-4f606c3c.mjs";import"./mdi-00233b2d.mjs";import"./PanelUi-74f353eb.mjs";import"./useDragAndDrop-14978514.mjs";import"./ResizeTop-06f5bb06.mjs";import"./ResizeLeft-a21c2655.mjs";import"./onDragStart-b67a33ef.mjs";import"./RectUi-887832c0.mjs";import"./SettingsModal-98c86e63.mjs";import"./VNumberInput-8365ac21.mjs";import"./VInputBase-452ac88f.mjs";function ee(_){const t=document.createElement("input");t.type="file",t.accept=".json",t.click(),t.onchange=()=>{if(!t.files)return;const i=t.files[0];if(!i)return;const n=new FileReader;n.onload=()=>{typeof n.result=="string"&&_(n.result)},n.readAsText(i)}}function te(){return navigator.platform.toUpperCase().includes("MAC")}const oe={style:{height:"calc(100vh - 48px)"}},ne={class:"header-menu"},se=F({__name:"app",setup(_){const{container:t}=K(),{init:i,timeline:n}=V(),{assets:f}=D(),C=L(),{init:k}=q(),{update:j}=z(),{project:c}=Y(),O=J(()=>t.value),d=H(!0);R({script:[{src:"/scripts/require.js"}]}),U(()=>{k();let o=0;const l=e=>{j(e-o),requestAnimationFrame(l),o=e};l(0),window.addEventListener("keydown",e=>{const a=te()?e.metaKey:e.ctrlKey;e.keyCode===90&&e.shiftKey&&a?h.redo():e.keyCode===90&&a&&h.undo();const m=Z();e.keyCode===83&&a&&(m?c.value.path?g("SAVE_FILE",{path:c.value.path,data:p()}):g("SAVE_NEW_FILE",p()).then(r=>{if(r===!1)return;const E=JSON.parse(localStorage.getItem("RECENT_USED_PROJECT_PATHS_KEY")||"[]");E.push(r),localStorage.setItem("RECENT_USED_PROJECT_PATHS_KEY",JSON.stringify(E)),c.value={assets:u(f.value),container:u(t.value),timeline:u(n.value),path:r}}):v(),C.pushHistory("Save"),e.preventDefault())}),i()});function v(){const o=p();N(o,"project.json")}function p(){const o={container:t.value,timeline:n.value,assets:f.value};return JSON.stringify(o)}function T(){d.value=!1,i()}const b=()=>{ee(o=>{X(o)})};return(o,l)=>{const e=w,a=x,m=A,r=I;return $(),B("div",{class:"root text-white bg-background1",style:M({display:S(t).align==="horizontal"?"flex":"block"})},[y("div",oe,[y("div",ne,[s(e),s(G,{label:"File",items:[{name:"Open",onClick:b},{name:"Save",onClick:v}]},null,8,["items"]),s(Q),s(a)]),s(m,{container:S(O)},null,8,["container"]),s(r)]),s(W,{"is-open":d.value,onOpen:T},null,8,["is-open"])],4)}}});var Fe=P(se,[["__scopeId","data-v-d2bf7d78"]]);export{Fe as default};
